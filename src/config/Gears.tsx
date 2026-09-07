import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';

export const devices = [
  {
    name: 'Apple MacBook Air M3 (base model)',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'Custom PC — RTX 3060 12GB (Zotac), Intel i5-12400F, 16GB RAM',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'MSI G241 Monitor (24" 144Hz IPS)',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Redragon K617 (60% mechanical keyboard)',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Razer Viper V3 X Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'Moondrop CHU II IEM',
    icon: <Headphones className="size-4" />,
  },
];

export const software = [
  { name: 'Kiro', href: 'https://kiro.dev/' },
  { name: 'OBS Studio', href: 'https://obsproject.com/' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'Discord', href: 'https://discord.com/' },
];
