// icons;
import searchIcon from './assets/Search.svg';
import githubImg from './assets/githubimg.png';

// Hooks
import { useEffect, useState } from 'react';

// Services;
import FetchUserProfile from './services/FetchUserProfile';
import Spinner from './Spinner';
import Repositories from './Repositories';

export default function Home() {
  const [input, setInput] = useState('');
  const { data, getUser, isLoading, userRepos } = FetchUserProfile(input);

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
      <header className="h-48 w-full bg-black bg-[url(./assets/mobile-hero-img.jpg)] bg-cover bg-center bg-no-repeat px-4 py-3 sm:h-54 sm:bg-[url(./assets/desktop-hero-img.jpg)]">
        {/* Search input */}
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto h-12 w-full rounded-lg sm:max-w-lg"
        >
          <input
            type="text"
            placeholder="Enter a github username"
            className="bg-background mx-auto h-full w-full rounded-lg border-0 px-12 text-white outline-0"
            value={input}
            onChange={handleChange}
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 transform"
          />
          {isLoading && <Spinner />}
        </form>
      </header>

      {/* Main content */}
      <main className="pb-4">
        {/* Followers & location section  */}
        <section className="items-start space-y-4 px-4 sm:flex sm:max-w-5xl sm:gap-6 md:mx-auto md:gap-12">
          {/* Github icon */}
          <article className="border-background h-22 w-22 -translate-y-8 transform rounded-xl border-6 md:h-24 md:w-24">
            <img
              src={data?.avatar_url || githubImg}
              alt="github img"
              className="h-full w-full rounded-xl object-cover"
            />
          </article>

          {/* Followers  */}
          <div className="-translate-y-7 transform flex-wrap items-start space-y-3 sm:mt-2 sm:flex sm:translate-y-0 sm:space-x-4 md:mt-3 md:space-x-8">
            <div className="box">
              <span className="box-child">Followers</span>
              <span className="pl-3 text-center">{data?.followers || 0}</span>
            </div>
            {/* Following */}
            <div className="box">
              <span className="box-child">Following</span>
              <span className="pl-3 text-center">{data?.following || 0}</span>
            </div>
            {/* Location */}
            <div className="box">
              <span className="box-child">Location</span>
              <span className="pl-3 text-center">
                {data?.location || 'Iran'}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:max-w-5xl">
          <h3 className="text-4xl font-medium">{data?.login}</h3>
          <p>{data?.bio || 'No bio set'}</p>

          <div className="mt-6 grid items-start space-y-6 sm:gap-4 sm:space-y-2 md:grid-cols-2">
            {/* Repositories */}
            {userRepos?.map((repo) => (
              <Repositories key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-6 text-center md:mt-8">
        <button className="cursor-pointer font-medium">
          View all repositories
        </button>
      </footer>
    </div>
  );
}
