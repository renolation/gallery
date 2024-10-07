import { getPosts } from '@/lib/prisma/prima-post';
import {getImages} from "@/lib/prisma/prisma-image";


export async function GET() {
  const posts = await getPosts();

  return Response.json({ posts })
}

