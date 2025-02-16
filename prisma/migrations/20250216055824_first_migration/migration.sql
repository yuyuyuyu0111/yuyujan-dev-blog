-- CreateTable
CREATE TABLE "Article" (
    "article_id" SERIAL NOT NULL,
    "en_title" TEXT NOT NULL,
    "jp_title" TEXT NOT NULL,
    "inserted_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_time" TIMESTAMP(3) NOT NULL,
    "article_text" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("article_id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "tag_id" SERIAL NOT NULL,
    "tag_name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "Article_tag_relation" (
    "relation_id" SERIAL NOT NULL,
    "articleArticle_id" INTEGER NOT NULL,
    "tagTag_id" INTEGER NOT NULL,

    CONSTRAINT "Article_tag_relation_pkey" PRIMARY KEY ("relation_id")
);

-- AddForeignKey
ALTER TABLE "Article_tag_relation" ADD CONSTRAINT "Article_tag_relation_articleArticle_id_fkey" FOREIGN KEY ("articleArticle_id") REFERENCES "Article"("article_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article_tag_relation" ADD CONSTRAINT "Article_tag_relation_tagTag_id_fkey" FOREIGN KEY ("tagTag_id") REFERENCES "Tag"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;
