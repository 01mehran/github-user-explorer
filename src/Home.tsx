// icons;
import searchIcon from './assets/Search.svg';

export default function Home() {
  return (
    <div className="relative min-h-screen antialiased">
      {/* Hero section*/}
      <section className="h-30 w-full bg-black bg-[url(./assets/mobile-hero-img.jpg)] bg-center bg-no-repeat px-4 py-3 sm:h-54 sm:bg-[url(./assets/desktop-hero-img.jpg)]">
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
      </section>
    </div>
  );
}
