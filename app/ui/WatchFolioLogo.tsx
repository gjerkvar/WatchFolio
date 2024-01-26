import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function WatchFolioLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Image src="/WatchFolioLogo2.png" alt="WatchFolioLogo" width={150}
        height={150} style={{zIndex:1000}}/>
      {/* <p className="text-[44px]">Journaling watch collections</p> */}
    </div>
  );
}
