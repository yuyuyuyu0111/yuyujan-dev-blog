import Link from "next/link";
import prisma from "../../lib/db";

export default async function Home() {
  const articles = await prisma.article.findMany();
  const listItems = articles.map((a, index) => (
    <div key={index} style={{ border: "1px solid #fff", padding: "10px", margin: "5px" }}>
      <Link href={`/article/${a.en_title}`}>
        {a.jp_title} - {a.en_title}
      </Link>
    </div>
  ));
  return listItems;
}
