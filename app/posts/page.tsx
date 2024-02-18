import { SanityDocument } from "next-sanity";

import Posts from "@/components/posts";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return (
    <section className="max-w-[1024px] w-full space-y-2 mx-auto mt-20 px-5">
      <h1 className="text-2xl font-semibold">All post</h1>
      <Posts posts={initial.data} />
    </section>
  );
}
