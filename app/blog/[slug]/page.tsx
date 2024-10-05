import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `
    *[_type == "blog" && slug.current == "${slug}"]{
        "currentSlug": slug.current,
            title,
            content,
            titleImage
    }[0]
  `;
  const data = await client.fetch(query);
  return data;
};

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div>
      <h1>
        <span className="mt-8 block text-base text-center text-primary tracking-wide font-semibold uppercase">
          Adeola Badero — Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt={`${data.title} — image`}
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
