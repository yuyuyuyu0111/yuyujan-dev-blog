import Image from "next/image";
import prisma from "../../lib/db";

export default async function Home() {
  const articles = await prisma.article.findMany();
  const listItems = articles.map((a) => <li>{a.jp_title}</li>);
  return listItems;
}
