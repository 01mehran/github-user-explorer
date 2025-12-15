import { Riple } from 'react-loading-indicators';

export default function Spinner() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 transform">
      <Riple color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
}
