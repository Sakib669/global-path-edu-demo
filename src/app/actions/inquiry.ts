"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitInquiry(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const preferredCountry = formData.get("country") as string;
    const preferredCourse = formData.get("course") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone) {
      return { error: "Name, Email, and Phone are required." };
    }

    await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        preferredCountry,
        preferredCourse,
        message,
        status: "NEW",
      }
    });

    revalidatePath("/admin/inquiries");
    return { success: true };
  } catch (error) {
    console.error("Inquiry Submission Error:", error);
    return { error: "Failed to submit inquiry. Please try again." };
  }
}
