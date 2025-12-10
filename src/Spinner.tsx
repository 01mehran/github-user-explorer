import { Riple } from 'react-loading-indicators';

export default function Spinner() {
  return (
    <div className="absolute top-1/2 right-0 -translate-y-1/2 transform">
      <Riple color="#32cd32" size="small" text="" textColor="" />
    </div>
  );
}
