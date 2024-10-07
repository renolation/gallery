import {getImages} from "@/lib/prisma/prisma-image";

export async function GET() {
  const images = await getImages();

  return Response.json({ images })
}