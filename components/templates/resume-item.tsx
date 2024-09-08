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
  location,
  dates,
  websiteLink,
  githubLink,
}) => {
  return (
    <div
      className={twMerge(
        clsx('flex h-[4.5rem] items-center justify-between rounded-xl', className),
      )}
    >
      <div className="flex items-center">
        {/* Symbol */}
        <div className="flex h-10 w-10 items-center justify-center">
          <div className="flex h-6 w-6 items-center justify-center">{symbol}</div>
        </div>
        {/* Name + description */}
        <div className="ml-1.5 mr-1">
          <div className="line-clamp-1 text-ellipsis font-medium text-gray-12">{name}</div>
          <div className="line-clamp-1 text-ellipsis text-sm text-gray-11">
            {description}
            {location ? `, ${location}` : ''}
          </div>
        </div>
      </div>

      {/* Dates and links */}
      <div className="flex items-center">
        <div className="ml-1.5 mr-1">
          <div className="mr-1 line-clamp-1 text-ellipsis text-right font-medium text-gray-12">
            {dates}
          </div>
          <div className="mr-1 line-clamp-1 flex h-5 flex-row justify-end text-ellipsis text-right text-sm text-gray-11">
            {websiteLink ? (
              <IconButton href={websiteLink} className="flex h-5 w-6" variant="ghost" newTab>
                <Globe />
              </IconButton>
            ) : (
              <div />
            )}
            {githubLink ? (
              <IconButton href={githubLink} className="flex h-5 w-6" variant="ghost" newTab>
                <Github />
              </IconButton>
            ) : (
              <div />
            )}
          </div>
        </div>
        {/* <div className="ml-1.5 mr-1">
          <div className="line-clamp-1 mr-1 text-ellipsis font-medium text-gray-12 text-right">{dates}</div>
          <div className="flex flex-row justify-end  h-6">
            {
              websiteLink ? 
                <IconButton href={websiteLink} className="flex w-6" variant='ghost' newTab>
                  <Globe />
                </IconButton>
              :
                <div className="" />
            }
            {
              githubLink ? 
                <IconButton href={githubLink} className="flex w-6" variant='ghost' newTab>
                  <Github />
                </IconButton>
              :
                <div className="f" />
            }
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ResumeItem;
