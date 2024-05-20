import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <h1>home page</h1>
      <Link href="/movies">go to movies page</Link>
    </div>
  );
}

