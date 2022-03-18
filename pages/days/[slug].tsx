import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import { daysFilePaths, DAYS_PATH } from "utils/mdxUtils";

interface DayProps {
  source: MDXRemoteSerializeResult;
  frontMatter: any;
}

export default function DayPage({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-100">
        {frontMatter.title}
      </h2>
      <div className="mt-8 text-gray-300">
        <MDXRemote {...source} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<DayProps> = async ({ params }) => {
  const dayFilePath = path.join(DAYS_PATH, `${params!.slug}.mdx`);
  const source = fs.readFileSync(dayFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = daysFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
