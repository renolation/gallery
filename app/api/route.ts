import { getPosts } from '@/lib/prisma/prima-post';


export async function GET() {
  const posts = await getPosts();

  return Response.json({ posts })
}