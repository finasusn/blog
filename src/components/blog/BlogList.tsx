import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../api/blogs";
import type { Blog } from "../../types/blog";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardTitle } from "../ui/card";

export function BlogList({

  selectedId,
  onSelect,
}: {
  selectedId: number | null;
  onSelect: (id: number) => void;
}
) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p><Skeleton className="h-10 w-full" /></p>;
  if (error) return <p className="text-red-500 text-center">
    Failed to load blogs. Please try again.
  </p>


  return (
    <div className="m-3">
      {data!.map((blog: Blog) => (
        <Card
          key={blog.id}
          className={` cursor-pointer transition ${selectedId === blog.id
              ? "border-black bg-gray-300"
              : "hover:bg-gray-300"}`}
          onClick={() => onSelect(blog.id)}
        >
          <CardTitle className="font-bold text-lg ">{blog.title}</CardTitle>
          <CardContent className="text-sm">{blog.description}</CardContent>
        </Card>
      ))}
    </div>
  );
}
