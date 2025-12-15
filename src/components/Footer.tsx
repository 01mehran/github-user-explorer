interface IFotoerProps {
  showAll: boolean;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Footer({ showAll, setShowAll }: IFotoerProps) {
  return (
    <footer className="py-4 text-center">
      <button
        className="cursor-pointer font-medium"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? 'View less repositories' : 'View all repositories'}
      </button>
    </footer>
  );
}
