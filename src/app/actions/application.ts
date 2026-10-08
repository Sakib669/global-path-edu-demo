"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitApplication(formData: FormData) {
  try {
    const studentName = formData.get("studentName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const academicInfo = formData.get("academicInfo") as string;
    const coursePreference = formData.get("coursePreference") as string;
    const universityPreference = formData.get("universityPreference") as string;
    const countryPreference = formData.get("countryPreference") as string;
    const englishTestInfo = formData.get("englishTestInfo") as string;

    if (!studentName || !email || !phone) {
      return { error: "Name, Email, and Phone are required." };
    }

    await prisma.application.create({
      data: {
        studentName,
        email,
        phone,
        academicInfo,
        coursePreference,
        universityPreference,
        countryPreference,
        englishTestInfo,
        status: "PENDING",
      }
    });

    revalidatePath("/admin/applications");
    return { success: true };
  } catch (error) {
    console.error("Application Submission Error:", error);
    return { error: "Failed to submit application. Please try again." };
  }
}
