export default function UpdatedAtTime(updated_at: string) {
  const now = Date.now();
  const createdAt = new Date(updated_at).getTime();

  const diffTime = now - createdAt;

  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let updatedAt = '';

  if (diffMinutes < 1) {
    updatedAt = 'just now';
  } else if (diffMinutes < 60) {
    updatedAt =
      diffMinutes === 1 ? '1 minute ago' : `${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    updatedAt = diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
  } else if (diffDays === 1) {
    updatedAt = 'yesterday';
  } else if (diffDays < 7) {
    updatedAt = `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    if (weeks === 1) {
      updatedAt = 'last week';
    } else {
      updatedAt = `${weeks} weeks ago`;
    }
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    updatedAt = months === 1 ? 'last month' : `${months} months ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    updatedAt = years === 1 ? 'last year' : `${years} years ago`;
  }

  return { updatedAt };
}
