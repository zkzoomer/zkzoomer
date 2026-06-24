import { FileText, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

import ZkzoomerAvatar from '@/components/common/avatar';
import { Button, IconButton } from '@/components/ui';

const Header: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-7 bg-gray-2/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-8 to-transparent" />
      <div className="relative flex flex-col items-center md:flex-row md:justify-between md:gap-4">
        <div className="flex w-full min-w-0 items-center md:w-auto md:flex-1">
          {/* Avatar (desktop) */}
          <ZkzoomerAvatar className="mr-4 hidden ring-1 ring-gray-7 md:block" size={56} />
          {/* Avatar (mobile) */}
          <ZkzoomerAvatar className="mr-3 ring-1 ring-gray-7 md:hidden" size={40} />
          <div className="min-w-0">
            <div className="line-clamp-1 text-base font-semibold text-gray-12 md:text-2xl">
              Sergio Martínez / zkzoomer
            </div>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
              <span>Senior ZK Protocol Engineer</span>
              <span className="flex items-center gap-1.5 text-xs text-gray-10 md:text-sm">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Spain (CET)
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto md:mt-0 md:w-auto md:shrink-0 md:justify-end md:overflow-visible">
          <IconButton
            href="https://github.com/zkzoomer"
            aria-label="Open GitHub profile"
            title="Open GitHub profile"
            variant="outline"
            newTab
          >
            <Github />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/sergiomartc"
            aria-label="Open LinkedIn profile"
            title="Open LinkedIn profile"
            intent="info"
            variant="outline"
            newTab
          >
            <Linkedin />
          </IconButton>
          <IconButton
            href="https://t.me/zkzoomer"
            aria-label="Open Telegram profile"
            title="Open Telegram profile"
            intent="info"
            variant="outline"
            newTab
          >
            <Send />
          </IconButton>
          <IconButton
            href="mailto:sergio@zkzoomer.io"
            aria-label="Email Sergio"
            title="Email Sergio"
            intent="orange"
            variant="outline"
          >
            <Mail />
          </IconButton>
          <Button
            href="/Sergio_Martinez_CV.pdf"
            intent="fail"
            leftIcon={<FileText />}
            newTab
            variant="outline"
          >
            CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
