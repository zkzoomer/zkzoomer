import { Github, Send } from 'lucide-react';

import ZkzoomerAvatar from '@/components/common/avatar';
import { Button } from '@/components/ui';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-6 bg-gray-2 p-3 md:flex-row md:justify-between md:rounded-2xl md:p-6">
      <div className="flex w-full items-center">
        {/* Avatar (desktop) */}
        <ZkzoomerAvatar className="mr-4 hidden md:block" size={56} />
        {/* Avatar (mobile) */}
        <ZkzoomerAvatar className="mr-2 md:hidden" size={40} />
        <div>
          <div className="text-base font-semibold md:text-2xl">Sergio Martínez / zkzoomer</div>
          <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
            ZK / Blockchain Developer
          </span>
        </div>
      </div>
      {/* Links (desktop) */}
      <div className="hidden space-x-2 md:flex">
        <Button href="https://github.com/zkzoomer" leftIcon={<Github />} newTab>
          GitHub
        </Button>
        <Button
          intent="none"
          className="data-[variant=primary]:bg-blue-7"
          href="https://t.me/zkzoomer"
          leftIcon={<Send />}
          newTab
        >
          Telegram
        </Button>
        {/* TODO: add Telegram */}
      </div>
      {/* Links (mobile) */}
      <div className="mt-4 flex w-full space-x-2 md:hidden">
        <Button
          size="md"
          className="w-full"
          href="https://github.com/zkzoomer"
          leftIcon={<Github />}
        >
          GitHub
        </Button>
        <Button
          size="md"
          intent="info"
          className="w-full"
          href="https://t.me/zkzoomer"
          leftIcon={<Send />}
        >
          Telegram
        </Button>
      </div>
    </div>
  );
};

export default Header;
