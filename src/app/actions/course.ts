"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveCourse(formData: FormData, id?: string) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const universityId = formData.get("universityId") as string;
  const category = formData.get("category") as string;
  const degreeType = formData.get("degreeType") as string;
  const duration = formData.get("duration") as string;
  const tuitionFee = formData.get("tuitionFee") as string;
  const intake = formData.get("intake") as string;
  const requirements = formData.get("requirements") as string;
  const englishRequirement = formData.get("englishRequirement") as string;
  const description = formData.get("description") as string;
  const published = formData.get("published") === "true";

  if (!title || !slug || !universityId) {
    return { error: "Title, Slug, and University are required." };
  }

  try {
    if (id && id !== "new") {
      await prisma.course.update({
        where: { id },
        data: { title, slug, universityId, category, degreeType, duration, tuitionFee, intake, requirements, englishRequirement, description, published },
      });
    } else {
      await prisma.course.create({
        data: { title, slug, universityId, category, degreeType, duration, tuitionFee, intake, requirements, englishRequirement, description, published },
      });
    }
  } catch (error) {
    console.error("Failed to save course", error);
    return { error: "Failed to save course. Ensure the slug is unique." };
  }

  revalidatePath("/admin/courses");
  redirect("/admin/courses");
}
