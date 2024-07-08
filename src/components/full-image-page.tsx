
import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";


export default async function FullPageImageView(props: { id: number }) {

    const image = await getImage(props.id)
    const uploaderInfo = await clerkClient.users.getUser(image.userId)
    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center w-full">
                <img src={image.url} className="flex-shrink object-contain" />
            </div>
            <div className="flex w-96 flex-col border-l">
                <div className="text-lg border-b text-center p-2">{image.name}</div>
                <div className="flex flex-col space-y-4 p-2">

                    <div className="text-sm font-normal">
                        <span>Uploaded by: </span>
                        <span>{uploaderInfo.fullName}</span>
                    </div>

                    <div className="text-sm font-normal">
                        <span>Image URL: </span>
                        <span>{image.url}</span>
                    </div>

                    <div className="text-sm font-normal">
                        <span>Create on: </span>
                        <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}