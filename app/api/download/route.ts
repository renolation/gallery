import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const imageUrl = searchParams.get('imageUrl');

    if (!imageUrl) {
        return NextResponse.json({error: 'Invalid image URL'}, {status: 400});
    }

    try {
        const response = await fetch(imageUrl);
        const buffer = await response.arrayBuffer();
        const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': response.headers.get('content-type') || 'application/octet-stream',
                'Content-Disposition': `attachment; filename=${filename}`,

            },
        });
    } catch (error) {
        return NextResponse.json({error: 'Failed to download image'}, {status: 500});
    }
}