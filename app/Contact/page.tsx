'use client';
import React, { FC } from 'react';
import { isAuthenticated } from '@/auth';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { Notfound } from '@/components';

const Contact: FC = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const redirectDelay = 5000; // 30 seconds in milliseconds
    const isAuth = isAuthenticated;

    const timeoutId = setTimeout(() => {
      if (!isAuth) {
        router.push('/');
      }
    }, redirectDelay);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className="flex min-h-screen " style={{ background: 'gray',justifyContent:"center" }}>
      <Notfound/>
    </div>
  );
};

export default Contact;
