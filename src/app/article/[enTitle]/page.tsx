import { Prisma } from "@prisma/client";
import { JSX } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import prisma from "../../../../lib/db";

type Props = {
  params: Promise<{ enTitle: string }>;
};

export default async function getArticle(props: Props): Promise<JSX.Element> {
  try {
    const article = await prisma.article.findFirstOrThrow({
      where: {
        en_title: (await props.params).enTitle,
      },
    });

    return <Markdown remarkPlugins={[remarkGfm]}>{article.article_text}</Markdown>;
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
