export default function PostTagsDetail({tags}: { tags: { id: number, name: string }[] }) {
    return (
        <div id="tags" className="flex flex-wrap gap-2 justify-start">
            {tags.map(tag => (
                <span key={tag.id} className="px-3 py-2 bg-gray-700 text-cyan-100 rounded-full text-sm">
                    {tag.name}
                </span>
            ))}
        </div>
    );
}