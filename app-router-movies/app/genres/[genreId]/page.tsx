import { getMoviesWithGenres } from "@/lib/movies";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    genreId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { genreId } = params;
  const genreNum = Number(genreId)
  if(Number.isNaN(genreNum)) {
    notFound()
  }
  const movies = await getMoviesWithGenres([genreNum]);
  return (
    <main>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </main>
  )
}
