import { AuthContext } from '@/_contexts';
import { useContext } from 'react';

export default function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);
  return { auth, setAuth };
}
