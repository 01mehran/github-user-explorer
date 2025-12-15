import nesting from '../assets/Nesting.svg';
import star from '../assets/Star.svg';
import chield from '../assets/Chield_alt.svg';
import type { IRepos } from '../services/FetchUserProfile';

interface TRepoProps {
  repo: IRepos;
}

export default function Repositories({ repo }: TRepoProps) {
  const now = Date.now();
  const createdAt = new Date(repo.updated_at).getTime();

  const diffTime = now - createdAt;

  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let updatedAt = '';

  if (diffMinutes < 1) {
    updatedAt = 'just now';
  } else if (diffMinutes < 60) {
    updatedAt =
      diffMinutes === 1 ? '1 minute ago' : `${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    updatedAt = diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
  } else if (diffDays === 1) {
    updatedAt = 'yesterday';
  } else if (diffDays < 7) {
    updatedAt = `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    if (weeks === 1) {
      updatedAt = 'last week';
    } else {
      updatedAt = `${weeks} weeks ago`;
    }
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    updatedAt = months === 1 ? 'last month' : `${months} months ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    updatedAt = years === 1 ? 'last year' : `${years} years ago`;
  }

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-slate-700 transition-all hover:scale-95"
    >
      <div className="flex h-40 transform cursor-pointer flex-col justify-between rounded-lg bg-linear-to-br from-[#13182e] via-[#17183a] to-[#1b1a44] p-4">
        <div className="flex h-22 flex-col gap-1 overflow-auto">
          <p className="text-text tracking-wide">
            Repository name:{' '}
            <span className="text-text/85 italic">{repo.name}</span>
          </p>
          <p className="text-text tracking-wide">
            Repository description:{' '}
            <span className="text-text/85 italic">
              {repo.description || 'no description'}
            </span>{' '}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 sm:gap-5">
            <article className="flex gap-1 text-sm">
              <img src={nesting} alt="nesting icon" className="w-5" />
              <span>{repo.forks_count}</span>
            </article>
            <article className="flex gap-1 text-sm">
              <img src={star} alt="nesting icon" className="w-5" />
              <span>{repo.stargazers_count}</span>
            </article>
            <article className="flex gap-1 text-sm">
              <img src={chield} alt="nesting icon" className="w-5" />
              <span className="text-nowrap">
                {repo.license?.spdx_id || 'MIT'}
              </span>
            </article>
            <article>
              <p className="text-[14px] text-nowrap">updated {updatedAt}</p>
            </article>
          </div>
        </div>
      </div>
    </a>
  );
}
