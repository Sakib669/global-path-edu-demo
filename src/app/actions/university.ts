"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveUniversity(formData: FormData, id?: string) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const countryId = formData.get("countryId") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;
  const published = formData.get("published") === "true";

  if (!name || !slug || !countryId) {
    return { error: "Name, Slug, and Country are required." };
  }

  try {
    if (id && id !== "new") {
      await prisma.university.update({
        where: { id },
        data: { name, slug, countryId, location, description, published },
      });
    } else {
      await prisma.university.create({
        data: { name, slug, countryId, location, description, published },
      });
    }
  } catch (error) {
    console.error("Failed to save university", error);
    return { error: "Failed to save university. Ensure the slug is unique." };
  }

  revalidatePath("/admin/universities");
  redirect("/admin/universities");
}
