import { Metadata } from "next";
import Link from "next/link";
import prisma from "../../lib/db";
export const metadata: Metadata = {
  title: "yuyujan.dev",
  description: "Generated by create next app",
};
export default async function getArticles() {
  const articles = await prisma.article.findMany();

  const listItems = articles.map((a, index) => (
    <div key={index} style={{ border: "1px solid #0ff", padding: "10px", margin: "5px" }}>
      <Link href={`/article/${a.en_title}`}>
        {a.jp_title} - {a.en_title}
      </Link>
    </div>
  ));
  return listItems;
}
