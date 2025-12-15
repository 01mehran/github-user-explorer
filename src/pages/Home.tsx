// icons;

// Hooks
import { useEffect, useState } from 'react';

// Services;
import FetchUserProfile from '../services/FetchUserProfile';

// Components;
import Repositories from '../components/Repositories';
import HeroSection from '../components/HeroSection';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
              {userInfo && <Header userInfo={userInfo} />}
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
