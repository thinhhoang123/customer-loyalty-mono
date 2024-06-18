import { SignedOut, SignInButton } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      Dashboard page
    </>
  );
}
