import Link from "next/link";
import prisma from "../../../../lib/db";
import { findArticleByTag } from "@prisma/client/sql";

type Props = {
  params: Promise<{ tagName: string }>;
};
export default async function getArticleByTag(props: Props) {
  const articles = await prisma.$queryRawTyped(findArticleByTag((await props.params).tagName));

  const listItems = articles.map((a, index) => (
    <div key={index} style={{ border: "1px solid #0ff", padding: "10px", margin: "5px" }}>
      <Link href={`/article/${a.en_title}`}>
        {a.jp_title} - {a.en_title}
      </Link>
    </div>
  ));
  return listItems;
}
