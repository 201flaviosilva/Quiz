import { useQuery } from "@tanstack/react-query";

export function LoadingQuery() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      return {
        message: "TanStack Query is working!",
      };
    },
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return <p>{data.message}</p>;
}
