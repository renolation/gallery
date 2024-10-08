import {getImages} from "@/lib/prisma/prisma-image";

export async function GET() {
  const images = await getImages(1, 30);

  return Response.json({ images })
}