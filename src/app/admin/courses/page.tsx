import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function AdminCourses() {
  const courses = await prisma.course.findMany({ include: { university: true } });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage available courses and programs.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          Add Course
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-8 text-center">
        <p className="text-gray-500">Course management UI goes here.</p>
      </div>
    </div>
  );
}
