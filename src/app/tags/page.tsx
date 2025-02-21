import React from "react";
import prisma from "../../../lib/db";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "タグ一覧 - yuyujan.dev",
  description: "Generated by create next app",
};
export const dynamic = "force-dynamic";
export default async function getTags() {
  const tags = await prisma.tag.findMany();

  const listItems = tags.map((tag, index) => (
    <div key={index} style={{ border: "1px solid #fff", padding: "10px", margin: "5px" }}>
      <Link href={`/tag/${tag.tag_name}`}>{tag.tag_name}</Link>
    </div>
  ));
  return listItems;
}
