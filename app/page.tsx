import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      Populate me with Sanity Content
      <Link href={"/posts"}>View posts</Link>
    </main>
  );
}
