import Image from "next/image";
import Link from "next/link";
import { mock } from "node:test";


const mockUrls = [
  'https://utfs.io/f/85120736-7db7-4e65-83eb-811c22013344-ajgixu.png',
  'https://utfs.io/f/1bbf679c-6d82-4c4c-ba4b-d6803e6eb5bf-jz1fqu.png',
  'https://utfs.io/f/1ae1fec1-7b8c-48ff-b93b-3c6cb6a970c5-ez4igx.png'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="image" className="w-full" width={900} height={900} />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
