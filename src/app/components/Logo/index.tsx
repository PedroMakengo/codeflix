import React from 'react';
import Image from 'next/image';

const Logo = () => (
  <Image src='/logo.svg' alt='Netflix' width={120} height={120} />
);

export { Logo };
