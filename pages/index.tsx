import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { daysFilePaths, DAYS_PATH } from "utils/mdxUtils";
import { assert } from "console";
import Link from "next/link";

interface DaysProps {
  days: {
    title?: string;
    excerpt?: string;
    slug: string;
  }[];
}

export default function Home({
  days,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(days);
  return (
    <div>
      <Head>
        <title>Swiss Starter</title>
        <meta name="description" content="Swiss next.js starter repo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        {days.map(({ slug, title, excerpt }) => (
          <Link key={slug} href={slug}>
            <a>
              <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
              <div className="text-gray-200">{excerpt}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<DaysProps> = () => {
  const days = daysFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DAYS_PATH, filePath));
    const { data } = matter(source);
    const slug = filePath.replace(/\.mdx?$/, "");
    let { title, excerpt } = data;
    return {
      title,
      excerpt,
      slug,
    };
  });

  return { props: { days } };
};
