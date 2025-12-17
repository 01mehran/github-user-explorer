interface IUserProf {
  onToggleModalAvatar: () => void;
  isAvatarModalOpen: boolean;
  avatar: string;
}

export default function AvatarModal({
  onToggleModalAvatar,
  isAvatarModalOpen,
  avatar,
}: IUserProf) {
  return (
    <>
      <div
        className={`fixed inset-0 z-10 h-full w-full bg-black/30 backdrop-blur-sm ${isAvatarModalOpen ? 'block' : 'hidden'}`}
        onClick={onToggleModalAvatar}
      ></div>
      {isAvatarModalOpen && (
        <div className="fixed top-1/2 left-1/2 z-20 w-[80vw] -translate-1/2 rounded-xl sm:h-100 sm:w-150">
          <img
            src={avatar}
            alt="user github profile"
            className="h-full w-full rounded-full object-contain"
          />
        </div>
      )}
    </>
  );
}
