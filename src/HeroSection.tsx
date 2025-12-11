// Services;
import FetchUserProfile from './services/FetchUserProfile';

// Icons;
import searchIcon from './assets/Search.svg';

// Components;
import Spinner from './Spinner';

interface THeroSectionProps {
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  isLoading: boolean;
}

export default function HeroSection({
  onHandleSubmit,
  input,
  onHandleChange,
}: THeroSectionProps) {
  const { isLoading } = FetchUserProfile(input);

  return (
    <header className="h-48 w-full bg-black bg-[url(./assets/mobile-hero-img.jpg)] bg-cover bg-center bg-no-repeat px-4 py-3 sm:h-54 sm:bg-[url(./assets/desktop-hero-img.jpg)]">
      {/* Search input */}
      <form
        onSubmit={onHandleSubmit}
        className="relative mx-auto h-12 w-full rounded-lg sm:max-w-lg"
      >
        <input
          type="text"
          placeholder="Enter a github username"
          className="bg-background mx-auto h-full w-full rounded-lg border-0 px-12 text-white outline-0"
          value={input}
          onChange={onHandleChange}
        />
        <img
          src={searchIcon}
          alt="search icon"
          className="absolute top-1/2 left-4 -translate-y-1/2 transform"
        />
        {isLoading && <Spinner />}
      </form>
    </header>
  );
}
