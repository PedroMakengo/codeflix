'use client';

import React from 'react';

import { UserProfile } from '../UserProfile';
import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import { useScroll } from '@/app/hooks/useScroll';

export default function Header() {
  const isScrolled = useScroll();

  console.log(isScrolled);

  return (
    <header
      className={`${
        isScrolled && 'bg-[#141414]'
      } fixed top-0 z-50 flex w-full items-center justify-between p-2 px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2  md:space-x-4'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
