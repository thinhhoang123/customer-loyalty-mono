import Image from 'next/image';
import LocaleSwitcher from './LocaleSwitcher';
import { SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <div className="h-full flex justify-between">
      <Image src="/brandText.svg" height={180} width={180} alt="Brand" />
      <div className="flex items-center">
        <LocaleSwitcher />
        <SignOutButton />
      </div>
    </div>
  );
}
