
export function getDownloadUrl(imageUrl: string): string {
    return `/api/download?imageUrl=${encodeURIComponent(imageUrl)}`;
}