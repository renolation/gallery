import { getPosts } from '@/lib/prisma/prima-post';


export async function GET() {
  const posts = await getPosts(1, 30);

  return Response.json({ posts })
}

