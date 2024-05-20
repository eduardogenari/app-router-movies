import SideBar from "@/components/SideBar";
import { getMoviesGenres } from "@/lib/movies";

export type LayoutProps = {
  children: React.ReactNode;
};
export default async function Layout({ children }: LayoutProps) {
  const genres = await getMoviesGenres();
  return (
    <div className="flex flex-row items-stretch">
      <SideBar genres={genres} />
      <div>{children}</div>
    </div>
  );
}
