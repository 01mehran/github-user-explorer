// icons;
import searchIcon from './assets/Search.svg';
import githubImg from './assets/githubimg.png';

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

      <main>
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
          <div className="-translate-y-7 transform flex-wrap items-start space-y-3 sm:mt-2 sm:flex sm:translate-y-0 sm:space-x-4 md:mt-4 md:space-x-8">
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
      </main>
    </div>
  );
}
