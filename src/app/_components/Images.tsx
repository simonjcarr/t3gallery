import Image from "next/image";
import { getMyImages } from "~/server/queries";

export async function Images() {
    const images = await getMyImages();
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {images.map((image) => (
                <div key={image.id} className="w-48 flex flex-col">
                    <Image priority src={image.url} alt="image"  height={400} width={400} style={{objectFit:'contain'}} />
                    <div className="overflow-scroll">{image.name}</div>
                </div>
            ))}
        </div>
    );
}
