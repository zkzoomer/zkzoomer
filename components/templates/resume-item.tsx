import { IconButton } from '../ui';
import clsx from 'clsx';
import { Github, Globe } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

export type ResumeItemProps = {
  className?: string;
  symbol: React.ReactNode;
  name: string;
  description: string;
  summary?: string;
  location?: string;
  dates: string;
  websiteLink?: string;
  githubLink?: string;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const ResumeItem: React.FC<ResumeItemProps> = ({
  className,
  symbol,
  name,
  description,
  summary,
  location,
  dates,
  websiteLink,
  githubLink,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'grid min-h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-start gap-3 border-b border-gray-6/70 py-3 last:border-b-0 md:gap-4',
          className,
        ),
      )}
    >
      <div className="flex min-w-0 items-start">
        {/* Symbol */}
        <div className="mr-3 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-7/80 bg-gray-2/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex h-6 w-6 items-center justify-center">{symbol}</div>
        </div>
        {/* Name + description */}
        <div className="min-w-0">
          <div className="line-clamp-1 text-ellipsis font-medium text-gray-12">{name}</div>
          <div className="line-clamp-1 text-ellipsis text-sm text-gray-11">
            {description}
            {location ? `, ${location}` : ''}
          </div>
          {summary ? (
            <p className="mt-1 max-w-[34rem] text-sm leading-5 text-gray-11">{summary}</p>
          ) : null}
        </div>
      </div>

      {/* Dates and links */}
      <div className="flex shrink-0 items-start pt-0.5">
        <div>
          <div className="line-clamp-1 text-ellipsis text-right text-sm font-medium text-gray-12 md:text-base">
            {dates}
          </div>
          <div className="line-clamp-1 flex h-5 flex-row justify-end text-ellipsis text-right text-sm text-gray-11">
            {websiteLink ? (
              <IconButton
                href={websiteLink}
                aria-label={`Open ${name} website`}
                title={`Open ${name} website`}
                className="flex h-5 w-6 rounded text-gray-11 hover:text-gray-12"
                variant="ghost"
                newTab
              >
                <Globe />
              </IconButton>
            ) : (
              <div />
            )}
            {githubLink ? (
              <IconButton
                href={githubLink}
                aria-label={`Open ${name} GitHub link`}
                title={`Open ${name} GitHub link`}
                className="flex h-5 w-6 rounded text-gray-11 hover:text-gray-12"
                variant="ghost"
                newTab
              >
                <Github />
              </IconButton>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
