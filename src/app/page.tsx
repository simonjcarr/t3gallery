
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic';

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });
  console.log(images)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={index} className="w-48 flex flex-col">
            <Image priority src={image.url} alt="image" className="w-full" width={200} height={200} />
            <div>{ image.name}</div>
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
