import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const KEY = 'portfolio:visitors';

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

/**
 * POST — increment the counter (called once per new visitor) and return the
 * new total. Falls back to a 0 count if Upstash isn't configured.
 */
export async function POST() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ count: 0, configured: false });
  }

  try {
    const count = await redis.incr(KEY);
    return NextResponse.json({ count, configured: true });
  } catch (error) {
    console.error('Visitor count (incr) failed:', error);
    return NextResponse.json({ count: 0, configured: false });
  }
}

/**
 * GET — read the current total without incrementing.
 */
export async function GET() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ count: 0, configured: false });
  }

  try {
    const count = (await redis.get<number>(KEY)) ?? 0;
    return NextResponse.json({ count, configured: true });
  } catch (error) {
    console.error('Visitor count (get) failed:', error);
    return NextResponse.json({ count: 0, configured: false });
  }
}
