"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveCountry(formData: FormData, id?: string) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const published = formData.get("published") === "true";

  if (!name || !slug) {
    return { error: "Name and Slug are required." };
  }

  try {
    if (id && id !== "new") {
      await prisma.country.update({
        where: { id },
        data: { name, slug, description, published },
      });
    } else {
      await prisma.country.create({
        data: { name, slug, description, published },
      });
    }
  } catch (error) {
    console.error("Failed to save country", error);
    return { error: "Failed to save country. Ensure the slug is unique." };
  }

  revalidatePath("/admin/countries");
  redirect("/admin/countries");
}
