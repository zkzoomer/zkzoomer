import { Github, Mail, Send } from 'lucide-react';

import ZkzoomerAvatar from '@/components/common/avatar';
import { Button } from '@/components/ui';

const Header: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-7 bg-gray-2/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-8 to-transparent" />
      <div className="relative flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex w-full min-w-0 items-center">
          {/* Avatar (desktop) */}
          <ZkzoomerAvatar className="mr-4 hidden ring-1 ring-gray-7 md:block" size={56} />
          {/* Avatar (mobile) */}
          <ZkzoomerAvatar className="mr-3 ring-1 ring-gray-7 md:hidden" size={40} />
          <div className="min-w-0">
            <div className="line-clamp-1 text-base font-semibold text-gray-12 md:text-2xl">
              Sergio Martínez / zkzoomer
            </div>
            <span className="mt-0.5 block text-sm text-gray-11 md:mt-1 md:text-base">
              ZK Protocol Engineer
            </span>
          </div>
        </div>
        {/* Links (desktop) */}
        <div className="hidden space-x-2 md:flex">
          <Button href="https://github.com/zkzoomer" leftIcon={<Github />} newTab variant="outline">
            GitHub
          </Button>
          <Button
            href="https://t.me/zkzoomer"
            intent="info"
            leftIcon={<Send />}
            newTab
            variant="outline"
          >
            Telegram
          </Button>
          <Button
            href="mailto:sergio@zkzoomer.io"
            intent="orange"
            leftIcon={<Mail />}
            variant="outline"
          >
            Email
          </Button>
        </div>
        {/* Links (mobile) */}
        <div className="mt-4 grid w-full grid-cols-3 gap-2 md:hidden">
          <Button
            size="md"
            className="w-full"
            href="https://github.com/zkzoomer"
            leftIcon={<Github />}
            newTab
            variant="outline"
          >
            GitHub
          </Button>
          <Button
            size="md"
            intent="info"
            className="w-full"
            href="https://t.me/zkzoomer"
            leftIcon={<Send />}
            newTab
            variant="outline"
          >
            Telegram
          </Button>
          <Button
            size="md"
            intent="orange"
            className="w-full"
            href="mailto:sergio@zkzoomer.io"
            leftIcon={<Mail />}
            variant="outline"
          >
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
