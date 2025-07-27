'use client';
import useAuth from '@/_hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SingInOut() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push('/login');
  };
  return (
    <div>
      {auth ? (
        <>
          <span className="font-bold">Hello, {auth?.name}</span>
          <span className="mx-1">|</span>
          <span className="cursor-pointer" onClick={logout}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
