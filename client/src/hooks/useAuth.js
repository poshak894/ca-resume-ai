import { useState, useEffect } from 'react';
import { getMe, logoutUser } from '../utils/api.js';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then(res => {
        setUser(res);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return { user, setUser, loading, logout };
}
