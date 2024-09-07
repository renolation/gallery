import Counter from "@/components/post/counter";
import Result from "@/components/post/result";
import ResetButton from "@/components/post/reset-button";

export default function PostsPage() {
  return (
    <div className="w-screen flex flex-col gap-10 mt-10 items-center">
      <h1 className="text-center font-bold text-2xl text-gray-600">
        Redux Counter
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <h1>Component 1</h1>
        <Counter />
        <Result />
      </div>
      <ResetButton />
    </div>
  );
}