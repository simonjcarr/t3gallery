'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { UploadButton } from "~/utils/uploadthing"
import { SimpleUploadButton } from "./simple-upload-button"
import { DarkModelToggleButton } from "~/components/dark-mode-toggle"


const TopNav = () => {
    const router = useRouter()
    return (
        <nav className="flex items-center justify-between border-b w-full p-4 text-xl font-semibol">
            <div>Gallery</div>
            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <div className="flex space-x-5">
                        <SimpleUploadButton />
                        <DarkModelToggleButton />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav