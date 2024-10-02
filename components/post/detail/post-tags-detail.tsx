export default function PostTagsDetail({tags}: { tags: { id: string, name: string }[] }) {
    return (
        <div className="flex flex-wrap gap-2 justify-start">
            {tags.map(tag => (
                <span key={tag.id} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
                    {tag.name}
                </span>
            ))}
        </div>
    );
}