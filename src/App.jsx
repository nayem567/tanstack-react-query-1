import "./App.css";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchPost = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error fetching data from API url");
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>{error.message}</p>

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data.map((post) => {
          return (
            <div key={post.id} className="bg-black p-4 rounded text-left">
              <p>{post.id}</p>
              <h3 className="text-2xl">{post.title}</h3>
              <br />
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
