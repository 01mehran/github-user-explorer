// icons;
import searchIcon from './assets/Search.svg';
import githubImg from './assets/githubimg.png';
import nesting from './assets/Nesting.svg';
import star from './assets/Star.svg';
import chield from './assets/Chield_alt.svg';

export default function Home() {
  return (
    <div className="relative min-h-screen antialiased">
      {/* Hero section*/}
      <header className="h-48 w-full bg-black bg-[url(./assets/mobile-hero-img.jpg)] bg-cover bg-center bg-no-repeat px-4 py-3 sm:h-54 sm:bg-[url(./assets/desktop-hero-img.jpg)]">
        {/* Search input */}
        <article className="relative mx-auto h-12 w-full rounded-lg sm:max-w-lg">
          <input
            type="text"
            placeholder="Enter a github username"
            className="bg-background mx-auto h-full w-full rounded-lg border-0 px-12 text-white outline-0"
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 transform"
          />
        </article>
      </header>

      {/* Main content */}
      <main className="pb-4">
        {/* Followers & location section  */}
        <section className="items-start space-y-4 px-4 sm:flex sm:max-w-5xl sm:gap-6 md:mx-auto md:gap-12">
          {/* Github icon */}
          <article className="border-background h-22 w-22 -translate-y-8 transform rounded-xl border-6 md:h-24 md:w-24">
            <img
              src={githubImg}
              alt="github img"
              className="h-full w-full rounded-xl object-cover"
            />
          </article>

          {/* Followers  */}
          <div className="-translate-y-7 transform flex-wrap items-start space-y-3 sm:mt-2 sm:flex sm:translate-y-0 sm:space-x-4 md:mt-3 md:space-x-8">
            <div className="box">
              <span className="box-child">Followers</span>
              <span className="pl-3 text-center">123456</span>
            </div>
            {/* Following */}
            <div className="box">
              <span className="box-child">Following</span>
              <span className="pl-3 text-center">0</span>
            </div>
            {/* Location */}
            <div className="box">
              <span className="box-child">Location</span>
              <span className="pl-3 text-center">Iran</span>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:max-w-5xl">
          <h3 className="text-4xl font-medium">Github</h3>
          <p>How people build sofware.</p>

          {/* Repositories */}
          <div className="mt-6 grid items-start space-y-6 sm:gap-4 sm:space-y-2 md:grid-cols-2">
            <div className="flex h-36 flex-col justify-between rounded-lg bg-linear-to-br from-[#13182e] via-[#17183a] to-[#1b1a44] p-4">
              <div className="flex flex-col gap-px">
                <p>repo name .github</p>
                <p>description</p>
              </div>

              <div>
                <div className="flex items-center gap-2 md:gap-6">
                  <article className="flex gap-1 text-sm">
                    <img src={nesting} alt="nesting icon" className="w-5" />
                    <span>2,300</span>
                  </article>
                  <article className="flex gap-1 text-sm">
                    <img src={star} alt="nesting icon" className="w-5" />
                    <span>72</span>
                  </article>
                  <article className="flex gap-1 text-sm">
                    <img src={chield} alt="nesting icon" className="w-5" />
                    <span>MIT</span>
                  </article>
                  <article>
                    <p className="text-[14px] text-nowrap">
                      updated X days ago{' '}
                    </p>
                  </article>
                </div>
              </div>
            </div>
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
