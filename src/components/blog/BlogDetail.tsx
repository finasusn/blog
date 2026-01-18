import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../../api/blogs";
import { Skeleton } from "../ui/skeleton";

export function BlogDetail({ blogId }: { blogId: number | null }) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId)
    return (
      <div className="text-gray-500 text-center mt-20 p-10">
        Select a blog from the list
      </div>
    );
  if (isLoading) return <p><Skeleton className="h-20 w-full" />
  </p>;

  return (
    <div className="p-3 m-4 place-content-center">
            <div className="text-7xl font-bold">{data!.title}</div>

      <img
        src={data!.coverImage}
        className="w-2/6 h-1/2 object-cover rounded"
      />


      <div className="flex gap-2 ">
        {data!.category.map((cat) => (
          <span
            key={cat}
            className="text-sm bg-gray-200 p-4 rounded"
          >
            {cat}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        {new Date(data!.date).toDateString()}
      </p>

      <p className="leading-relaxed">{data!.content}</p>
    </div>

  );
}
