import { marked } from "marked";
import prisma from "../../../../lib/db";
import { Prisma } from "@prisma/client";
import { JSX } from "react";

type Props = {
  params: Promise<{ articleEnTitle: string }>;
};

export default async function getArticle(props: Props): Promise<JSX.Element> {
  try {
    const article = await prisma.article.findFirstOrThrow({
      where: {
        en_title: (await props.params).articleEnTitle,
      },
    });
    const html = marked.parse(article.article_text);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return <div>Article not found</div>;
    } else if (error instanceof Prisma.PrismaClientInitializationError) {
      return <div>Database connection error</div>;
    } else if (error instanceof Prisma.PrismaClientRustPanicError) {
      return <div>Unexpected error occurred</div>;
    }
    throw error;
  }
}
