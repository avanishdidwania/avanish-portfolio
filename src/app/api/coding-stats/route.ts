import { NextResponse } from 'next/server';

// Cache this route's response for 5 minutes and share it across all visitors,
// so WakaTime is hit at most ~12 times/hour regardless of traffic.
// (No `force-dynamic` — that would disable caching and hit WakaTime per request.)
export const revalidate = 300;

interface GrandTotal {
  digital: string;
  hours: number;
  minutes: number;
  text: string;
  total_seconds: number;
}

interface WakatimeResponse {
  // `data` is an array of daily summaries (one per day in the range)
  data: { grand_total: GrandTotal }[];
  // `cumulative_total` sums the whole range — simplest source for "today"
  cumulative_total?: GrandTotal;
}

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        isOnline: false,
        yesterdayTime: '0h 0m',
        error: 'Wakatime API key not configured',
      },
      { status: 200 },
    );
  }

  try {
    // Fetch today's coding stats (real-time)
    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/summaries?range=today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      },
    );

    if (!response.ok) {
      throw new Error(`Wakatime API error: ${response.status}`);
    }

    const data: WakatimeResponse = await response.json();

    // `data.data` is an array of daily summaries. The daily grand_total has
    // `hours`/`minutes` fields; `cumulative_total` only has `total_seconds`.
    // Prefer the daily total, fall back to deriving from cumulative seconds.
    const dayTotal = data.data?.[0]?.grand_total;
    const totalSeconds =
      dayTotal?.total_seconds ?? data.cumulative_total?.total_seconds ?? 0;

    const hours = dayTotal?.hours ?? Math.floor(totalSeconds / 3600);
    const minutes =
      dayTotal?.minutes ?? Math.floor((totalSeconds % 3600) / 60);
    const todayTime = `${hours}h ${minutes}m`;

    // Check if user is currently online (has coded in last 15 minutes)
    const statusResponse = await fetch(
      'https://wakatime.com/api/v1/users/current/heartbeats?date=today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
        },
        next: { revalidate: 300 }, // Cache for 5 minutes for online status
      },
    );

    let isOnline = false;
    let currentEditor = 'Kiro';

    if (statusResponse.ok) {
      const statusData = await statusResponse.json();
      const heartbeats = statusData.data || [];

      if (heartbeats.length > 0) {
        const lastHeartbeat = heartbeats[heartbeats.length - 1];
        const lastTime = new Date(lastHeartbeat.time * 1000);
        const now = new Date();
        const diffMinutes = (now.getTime() - lastTime.getTime()) / (1000 * 60);

        isOnline = diffMinutes < 15;

        // WakaTime doesn't recognize Kiro yet — it reports it as
        // "Unknown Editor". Relabel that (and empty) as "Kiro" while
        // preserving any editor WakaTime does recognize (e.g. "VS Code").
        const reportedEditor = (lastHeartbeat.editor || '').trim();
        currentEditor =
          !reportedEditor || reportedEditor.toLowerCase() === 'unknown editor'
            ? 'Kiro'
            : reportedEditor;
      }
    }

    return NextResponse.json({
      isOnline,
      todayTime,
      currentEditor,
      hours,
      minutes,
    });
  } catch (error) {
    console.error('Wakatime API error:', error);
    return NextResponse.json(
      {
        isOnline: false,
        yesterdayTime: '0h 0m',
        error: 'Failed to fetch coding stats',
      },
      { status: 200 },
    );
  }
}
