import prisma from "@/lib/prisma";
import { saveCourse } from "@/app/actions/course";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function EditCoursePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const isNew = params.id === "new";
  
  const universities = await prisma.university.findMany({
    where: { published: true },
    orderBy: { name: 'asc' }
  });

  let course = null;
  if (!isNew) {
    course = await prisma.course.findUnique({
      where: { id: params.id }
    });
    if (!course) notFound();
  }

  const formAction = async (formData: FormData) => {
    "use server";
    return saveCourse(formData, isNew ? "new" : params.id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center">
        <Link href="/admin/courses" className="mr-4 text-gray-500 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isNew ? "Add New Course" : "Edit Course"}
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <form action={formAction} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
              <input
                required
                type="text"
                name="title"
                defaultValue={course?.title || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. BSc Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
              <input
                required
                type="text"
                name="slug"
                defaultValue={course?.slug || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. bsc-computer-science-harvard"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
              <select
                required
                name="universityId"
                defaultValue={course?.universityId || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              >
                <option value="">Select a university...</option>
                {universities.map(u => (
                  <option key={u.id} value={u.id}>{u.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={course?.category || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. Engineering & Technology"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree Type</label>
              <input
                type="text"
                name="degreeType"
                defaultValue={course?.degreeType || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. Bachelor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <input
                type="text"
                name="duration"
                defaultValue={course?.duration || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. 4 Years"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Intake</label>
              <input
                type="text"
                name="intake"
                defaultValue={course?.intake || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. Fall / Spring"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tuition Fee</label>
              <input
                type="text"
                name="tuitionFee"
                defaultValue={course?.tuitionFee || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. $45,000 / year"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">English Requirement</label>
              <input
                type="text"
                name="englishRequirement"
                defaultValue={course?.englishRequirement || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. IELTS 6.5 (No band < 6.0)"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Academic Requirements</label>
            <textarea
              name="requirements"
              rows={3}
              defaultValue={course?.requirements || ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none"
              placeholder="Minimum GPA, prerequisites..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Description</label>
            <textarea
              name="description"
              rows={4}
              defaultValue={course?.description || ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none"
              placeholder="What students will learn, career outcomes..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="published"
              value="true"
              id="published"
              defaultChecked={course ? course.published : true}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="published" className="ml-2 text-sm text-gray-900">
              Publish this course
            </label>
          </div>

          <div className="pt-6 border-t border-gray-200 flex justify-end gap-3">
            <Link
              href="/admin/courses"
              className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              {isNew ? "Create Course" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
