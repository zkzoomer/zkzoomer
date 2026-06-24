'use client';

import { useState } from 'react';

import { IconButton } from '../ui';
import clsx from 'clsx';
import { ChevronRight, ExternalLink, Github, Globe } from 'lucide-react';
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
  websiteLinkLabel?: string;
  githubLink?: string;
  githubLinkLabel?: string;
  proofOfWork?: {
    title: string;
    items: {
      label: string;
      description: string;
      href?: string;
      meta?: string;
      links?: {
        href: string;
        meta: string;
      }[];
    }[];
  };
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
  websiteLinkLabel,
  githubLink,
  githubLinkLabel,
  proofOfWork,
}) => {
  const [isProofOpen, setIsProofOpen] = useState(false);
  const defaultWebsiteLinkLabel = `Open website for ${description}: ${name}`;
  const defaultGithubLinkLabel = `Open GitHub for ${description}: ${name}`;

  return (
    <div
      className={twMerge(
        clsx(
          'grid min-h-[4.5rem] grid-cols-1 items-start gap-3 border-b border-gray-6/70 py-3 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_auto] md:gap-4',
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
        <div className="min-w-0 flex-1">
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
      <div className="flex items-start pl-[3.25rem] pt-0.5 sm:shrink-0 sm:pl-0">
        <div>
          <div className="line-clamp-1 text-ellipsis text-left text-sm font-medium text-gray-12 sm:text-right md:text-base">
            {dates}
          </div>
          <div className="line-clamp-1 flex h-5 flex-row justify-start text-ellipsis text-left text-sm text-gray-11 sm:justify-end sm:text-right">
            {websiteLink ? (
              <IconButton
                href={websiteLink}
                aria-label={websiteLinkLabel ?? defaultWebsiteLinkLabel}
                title={websiteLinkLabel ?? defaultWebsiteLinkLabel}
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
                aria-label={githubLinkLabel ?? defaultGithubLinkLabel}
                title={githubLinkLabel ?? defaultGithubLinkLabel}
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

      {proofOfWork ? (
        <div className="col-span-1 ml-0 min-w-0 max-w-full overflow-hidden rounded-md border border-gray-7/70 bg-gray-2/45 p-3 sm:col-span-2 sm:ml-[3.25rem]">
          <button
            type="button"
            aria-expanded={isProofOpen}
            onClick={() => setIsProofOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-3 rounded text-left transition-colors hover:text-gray-12"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-gray-10">
                {proofOfWork.title}
              </span>
            </span>
            <ChevronRight
              className={twMerge(
                clsx(
                  'h-4 w-4 shrink-0 text-gray-11 transition-transform',
                  isProofOpen && 'rotate-90 text-blue-11',
                ),
              )}
            />
          </button>
          <div
            className={twMerge(
              clsx(
                'grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none',
                isProofOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ),
            )}
          >
            <div className="overflow-hidden">
              <div className="mt-3 grid gap-2 border-t border-gray-7/60 pt-3">
                {proofOfWork.items.map((item) => {
                  const links =
                    item.links ??
                    (item.href && item.meta
                      ? [
                          {
                            href: item.href,
                            meta: item.meta,
                          },
                        ]
                      : []);

                  return (
                    <div
                      key={item.label}
                      className="grid min-w-0 max-w-full grid-cols-1 items-start gap-x-3 gap-y-2 overflow-hidden rounded-md border border-gray-7/60 bg-gray-3/35 px-3 py-2 transition-colors hover:border-blue-8/70 hover:bg-blue-3/20 sm:grid-cols-[minmax(0,1fr)_auto]"
                    >
                      <span className="min-w-0">
                        <span className="line-clamp-1 text-sm font-medium leading-5 text-gray-12">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-4 text-gray-11">
                          {item.description}
                        </span>
                      </span>
                      <span className="flex flex-col items-start gap-1 pt-0.5 text-xs font-medium text-blue-11 sm:items-end">
                        {links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/proof-link flex items-center gap-1 rounded text-blue-11 hover:text-blue-10"
                          >
                            {link.meta}
                            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/proof-link:-translate-y-0.5 group-hover/proof-link:translate-x-0.5" />
                          </a>
                        ))}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ResumeItem;
