// Type;
import type { IUser } from '../services/FetchUserProfile';

// Images;
import githubImg from '../assets/githubimg.png';

interface IHeaderProps {
  userInfo: IUser;
}

export default function Header({ userInfo }: IHeaderProps) {
  return (
    <>
      <article className="border-background h-22 w-22 -translate-y-8 transform rounded-xl border-6 md:h-24 md:w-24">
        <img
          src={userInfo?.avatar_url || githubImg}
          alt="github img"
          className="h-full w-full rounded-xl object-cover"
        />
      </article>

      {/* Followers  */}
      <article className="-translate-y-7 transform flex-wrap items-start space-y-3 sm:mt-2 sm:flex sm:translate-y-0 sm:space-x-4 md:mt-3 md:space-x-8">
        <div className="box">
          <span className="box-child">Followers</span>
          <span className="pl-3 text-center">{userInfo?.followers || 0}</span>
        </div>
        {/* Following */}
        <div className="box">
          <span className="box-child">Following</span>
          <span className="pl-3 text-center">{userInfo?.following || 0}</span>
        </div>
        {/* Location */}
        <div className="box">
          <span className="box-child">Location</span>
          <span className="pl-3 text-center">
            {userInfo?.location || 'no location'}
          </span>
        </div>
      </article>
    </>
  );
}
