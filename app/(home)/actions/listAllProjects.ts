"use server";
import "server-only";

import { Client } from "@notionhq/client";
import { cache } from "react";
import { Project } from "../types/Project";

const client = new Client({ auth: process.env.NOTION_KEY });

export const listAllProjects = cache(async () => {
  const databaseProjects = await client.databases.query({
    database_id: String(process.env.NOTION_PROJECTS_DATABASE_ID)
  })

  const projects = databaseProjects.results.map((row: any) => {
    const id = row.id;
    const images = row.properties["Images"]["files"].map((file: any) => file.file.url);
    const title = row.properties["Title"].title[0].plain_text;
    const technologies = row.properties["Technologies"].multi_select.map(
      (technology: any) => technology.name
    );
    const description = row.properties["Description"].rich_text[0].plain_text
    const demonstration = row.properties["Demonstration"].url
    const repository = row.properties["Repository"].url

    return {
      id,
      images,
      title,
      technologies,
      description,
      demonstration,
      repository
    } as Project;
  });

  return projects;
})