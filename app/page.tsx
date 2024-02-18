import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-20 min-h-screen">
      <h1 className="text-2xl">Proof of Concept for Next.js with Sanity CMS</h1>
      <div className="mt-10 space-x-2">
        <Link
          href={"/posts"}
          className="bg-indigo-500 text-white p-2 rounded-md"
        >
          View posts
        </Link>
        <Link
          href={"/studio"}
          className="bg-indigo-900 text-white p-2 rounded-md"
        >
          Go to CMS
        </Link>
      </div>
    </main>
  );
}
