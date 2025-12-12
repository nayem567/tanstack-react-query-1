import { useQuery } from "@tanstack/react-query";

export default function PostsById({id}) {
  const fetchPost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("Error fetching data from API url");
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
    staleTime: 5000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <p>{data.title}</p>
    </>
  );
}
