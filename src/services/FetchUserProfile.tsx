import axios from 'axios';
import { useState } from 'react';

interface TData {
  avatar_url: string;
  followers: number;
  following: number;
  location: string | null;
}

export default function FetchUserProfile(input: string) {
  const [data, setData] = useState<TData | null>(null);

  const getUser = async (usename?: string) => {
    const user = usename ?? input;

    try {
      const res = await axios<TData>(`https://api.github.com/users/${user}`);
      setData(res.data);
      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(String(err));
      }
    }
  };

  return { data, getUser };
}
