import axios from 'axios';
import { useState } from 'react';

export interface IUser {
  avatar_url: string;
  followers: number;
  following: number;
  location: string | null;
  bio?: string;
  login: string;
}

export interface IRepos {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  license: {
    spdx_id: string | null;
  } | null;
  updated_at: string;
  html_url: string;
}

export default function FetchUserProfile(initialUser?: string) {
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [userRepos, setUserRepos] = useState<IRepos[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (usename?: string) => {
    const user = usename ?? initialUser;

    setIsLoading(true);
    setError(null);

    try {
      // Fetch user;
      const resUser = await axios<IUser>(
        `https://api.github.com/users/${user}`,
      );

      if (resUser.status !== 200) {
        throw new Error('User not found');
      }

      setUserInfo(resUser.data);

      // Fetch repos;
      const resRepos = await axios<IRepos[]>(
        `https://api.github.com/users/${user}/repos`,
      );

      console.log(resRepos);
      if (resRepos.status !== 200) {
        throw new Error('Repositories not found');
      }

      setUserRepos(resRepos.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          setError('User not found');
        } else {
          setError(err.message || 'Something went wrong!');
        }
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unknown error occured');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { userInfo, getUser, isLoading, userRepos, error };
}
