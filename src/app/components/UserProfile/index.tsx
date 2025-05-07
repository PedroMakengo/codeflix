import React from 'react';
import Image from 'next/image';

const UserProfile = () => (
  <div className='flex items-center space-x-4 md:space-x-8'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image
      src='/profile.png'
      alt=''
      className='cursor-pointer rounded'
      width={40}
      height={40}
    />
  </div>
);

export { UserProfile };
