import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export async function Images() {
    const images = await getMyImages();
    return (
        <div className="flex flex-wrap gap-4 justify-center p-4">
            {[...images, ...images, ...images, ...images, ...images, ...images].map((image) => (
                <div key={image.id} className="w-48 flex flex-col">
                    <Link href={`/img/${image.id}`}>
                        <Image priority src={image.url} alt="image"  height={400} width={400} style={{objectFit:'contain'}} />
                    </Link>
                    <div className="overflow-scroll">{image.name}</div>
                </div>
            ))}
        </div>
    );
}
