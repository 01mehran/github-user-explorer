import axios from 'axios';
import { useState } from 'react';

interface TData {
  avatar_url: string;
  followers: number;
  following: number;
  location: string | null;
  bio?: string;
  login: string;
}

export interface TRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  license: {
    spdx_id: string | null;
  } | null;
  updated_at: string;
}

export default function FetchUserProfile(input: string) {
  const [data, setData] = useState<TData | null>(null);
  const [userRepos, setUserRepos] = useState<TRepo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async (usename?: string) => {
    const user = usename ?? input;

    setIsLoading(true);
    try {
      const res = await axios<TData>(`https://api.github.com/users/${user}`);
      setData(res.data);

      const resRepos = await axios<TRepo[]>(
        `https://api.github.com/users/${user}/repos`,
      );
      setUserRepos(resRepos.data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(String(err));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { data, getUser, isLoading, userRepos };
}
