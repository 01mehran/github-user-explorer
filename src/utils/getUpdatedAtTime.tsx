export function getUpdatedAtTime(updated_at: string) {
  const now = Date.now();
  const createdAt = new Date(updated_at).getTime();

  const diffTime = now - createdAt;

  const minutes = Math.floor(diffTime / (1000 * 60));
  const hours = Math.floor(diffTime / (1000 * 60 * 60));
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Check minutes;
  if (minutes < 1) return 'just now';

  if (minutes < 60) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  }

  // Check hours;
  if (hours < 24) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }

  // Check days;
  if (days === 1) return 'yesterday';

  if (days < 7) return `${days} days ago`;

  // Check weeks;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? 'last week' : `${weeks} weeks ago`;
  }

  // Check months
  if (days < 365) {
    const months = Math.floor(days / 30);
    return months === 1 ? 'last month' : `${months} months ago`;
  }

  // Check years;
  const years = Math.floor(days / 365);
  return years === 1 ? 'last year' : `${years} years ago`;
}
