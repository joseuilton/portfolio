"use server";
import { Client } from "@notionhq/client";
import { cache } from "react";
import "server-only";
import { Education } from "../types/Education";

const client = new Client({ auth: process.env.NOTION_KEY });

export const listAllEducations = cache(async () => {
  const educationsDatabase = await client.databases.query({
    database_id: String(process.env.NOTION_EDUCATIONS_DATABASE_ID)
  });

  const educations = educationsDatabase.results.map((row: any) => {
    const id = row.id;
    const title = row.properties["Title"].title[0].plain_text;
    const instituicion = row.properties["Instituicion"].rich_text[0].plain_text;
    const description = row.properties["Description"].rich_text[0].plain_text;

    const file = row.properties["Certification"].files[0]
    const certification = file ? file.file.url : "";

    return {
      id,
      title,
      instituicion,
      description,
      certification
    } as Education;
  });

  return educations;
});
