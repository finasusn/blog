import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../../api/blogs";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function CreateBlogForm() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    coverImage: "",
    category: "",
  });

  const mutation = useMutation({
    mutationFn: () =>
      createBlog({
        ...form,
        category: form.category.split(","),
        date: new Date().toISOString(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setForm({
        title: "",
        description: "",
        content: "",
        coverImage: "",
        category: "",
      });
    },
  });

  return (
    <div className="p-10 m-auto">
      <Input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <Input
        placeholder="Cover Image URL"
        value={form.coverImage}
        onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
      />
      <Input
        placeholder="Categories (comma separated)"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <Textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <Textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <Button className="text-sm text-gray-500"onClick={() => mutation.mutate()} >
        {mutation.isPending ? "Creating..." : "Create Blog"}
      </Button>
    </div>
  );
}
