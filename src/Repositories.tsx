import nesting from './assets/Nesting.svg';
import star from './assets/Star.svg';
import chield from './assets/Chield_alt.svg';
import type { TRepo } from './services/FetchUserProfile';

interface TRepoProps {
  repo: TRepo;
}

export default function Repositories({ repo }: TRepoProps) {
  return (
    // <div className="mt-6 grid items-start space-y-6 sm:gap-4 sm:space-y-2 md:grid-cols-2">
    <div className="flex h-40 flex-col justify-between rounded-lg bg-linear-to-br from-[#13182e] via-[#17183a] to-[#1b1a44] p-4">
      <div className="flex h-22 flex-col gap-px overflow-auto">
        <p>Repository name: {repo.name}</p>
        <p>Description: {repo.description || 'No description'}</p>
      </div>

      <div>
        <div className="flex items-center gap-2 md:gap-6">
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
            <span>MIT</span>
          </article>
          <article>
            <p className="text-[14px] text-nowrap">updated X days ago</p>
          </article>
        </div>
      </div>
    </div>
    // </div>
  );
}
