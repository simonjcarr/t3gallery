
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Images } from "./_components/Images";

export const dynamic = 'force-dynamic';

export default async function HomePage() {


  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
