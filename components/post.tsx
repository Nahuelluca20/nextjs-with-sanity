import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { dataset, projectId } from "@/sanity/env";
import { SanityImageAssetDocument } from "@sanity/client/stega";

const builder = imageUrlBuilder({ projectId, dataset });

const ImageComponent = ({ value }: { value: SanityImageAssetDocument }) => {
  return (
    <Image
      className="w-[500px] mx-auto rounded-lg"
      src={builder.image(value).width(500).height(300).quality(80).url()}
      width={500}
      height={300}
      alt={value.alt || " "}
    />
  );
};

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body } = post;

  const components = {
    block: {
      blockquote: ({ children }: { children: any }) => (
        <blockquote className="border-l-purple-500 w-full bg-purple-50 py-2">
          {children}
        </blockquote>
      ),
    },
    types: {
      image: ImageComponent,
    },
  };

  return (
    <main className="container mx-auto prose prose-lg px-4 py-20">
      <div className="flex flex-row-reverse mb-20">
        {title ? <h1>{title}</h1> : null}
        {mainImage ? (
          <Image
            className="m-0 w-1/3 mr-4 rounded-lg"
            src={builder
              .image(mainImage)
              .width(300)
              .height(300)
              .quality(80)
              .url()}
            width={300}
            height={300}
            alt={mainImage.alt || ""}
          />
        ) : null}
      </div>

      {body ? <PortableText value={body} components={components} /> : null}
    </main>
  );
}
