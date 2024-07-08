import Image from "next/image";
import { getMyImages } from "~/server/queries";

export async function Images() {
    const images = await getMyImages();
    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image) => (
                <div key={image.id} className="w-48 flex flex-col">
                    <Image priority src={image.url} alt="image" className="w-full" width={200} height={200} />
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    );
}
