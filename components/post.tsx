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
    types: {
      image: ImageComponent,
    },
  };

  return (
    <main className="container mx-auto prose prose-lg p-4">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
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
      {body ? <PortableText value={body} components={components} /> : null}
    </main>
  );
}
