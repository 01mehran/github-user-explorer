// icons;
import githubImg from './assets/githubimg.png';

// Hooks
import { useEffect, useState } from 'react';

// Services;
import FetchUserProfile from './services/FetchUserProfile';
import Repositories from './Repositories';
import HeroSection from './HeroSection';
import Spinner from './Spinner';
import Footer from './Footer';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const { userInfo, getUser, isLoading, userRepos, error } =
    FetchUserProfile(input);
  const [showAll, setShowAll] = useState(false);
  const visibleRepos = showAll ? userRepos : (userRepos?.slice(0, 4) ?? []);

  useEffect(() => {
    getUser('01mehran');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await getUser();

    setInput('');
  };

  return (
    <div className="relative min-h-screen antialiased">
      {/* Hero section*/}
      <HeroSection
        onHandleChange={handleChange}
        input={input}
        onHandleSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className="m-4 text-red-600 md:m-12 md:text-xl xl:mx-32">{error}</p>
      ) : (
        <>
          {/* Main content */}
          <main>
            {/* Followers & location section  */}
            <section className="items-start space-y-4 px-4 sm:flex sm:max-w-5xl sm:gap-6 md:mx-auto md:gap-12">
              {/* Github icon */}
              <article className="border-background h-22 w-22 -translate-y-8 transform rounded-xl border-6 md:h-24 md:w-24">
                <img
                  src={userInfo?.avatar_url || githubImg}
                  alt="github img"
                  className="h-full w-full rounded-xl object-cover"
                />
              </article>

              {/* Followers  */}
              <div className="-translate-y-7 transform flex-wrap items-start space-y-3 sm:mt-2 sm:flex sm:translate-y-0 sm:space-x-4 md:mt-3 md:space-x-8">
                <div className="box">
                  <span className="box-child">Followers</span>
                  <span className="pl-3 text-center">
                    {userInfo?.followers || 0}
                  </span>
                </div>
                {/* Following */}
                <div className="box">
                  <span className="box-child">Following</span>
                  <span className="pl-3 text-center">
                    {userInfo?.following || 0}
                  </span>
                </div>
                {/* Location */}
                <div className="box">
                  <span className="box-child">Location</span>
                  <span className="pl-3 text-center">
                    {userInfo?.location || 'no location'}
                  </span>
                </div>
              </div>
            </section>

            <section className="mx-auto px-4 sm:max-w-5xl">
              <h3 className="text-4xl font-medium">{userInfo?.login}</h3>
              <p className="italic">{userInfo?.bio || 'no bio set'}</p>

              <div className="mt-6 grid items-start space-y-6 sm:gap-4 sm:space-y-2 md:grid-cols-2">
                {/* Repositories */}
                {visibleRepos?.map((repo) => (
                  <Repositories key={repo.id} repo={repo} />
                ))}
              </div>
            </section>
          </main>

          {/* Footer */}
          {userRepos && userRepos?.length > 4 && (
            <Footer showAll={showAll} setShowAll={setShowAll} />
          )}
        </>
      )}
    </div>
  );
}
