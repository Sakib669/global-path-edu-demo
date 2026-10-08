import prisma from "@/lib/prisma";
import { saveUniversity } from "@/app/actions/university";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function EditUniversityPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const isNew = params.id === "new";
  
  const countries = await prisma.country.findMany({
    where: { published: true },
    orderBy: { name: 'asc' }
  });

  let university = null;
  if (!isNew) {
    university = await prisma.university.findUnique({
      where: { id: params.id }
    });
    if (!university) notFound();
  }

  const formAction = async (formData: FormData) => {
    "use server";
    return saveUniversity(formData, isNew ? "new" : params.id);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center">
        <Link href="/admin/universities" className="mr-4 text-gray-500 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isNew ? "Add New University" : "Edit University"}
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                required
                type="text"
                name="name"
                defaultValue={university?.name || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. Harvard University"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
              <input
                required
                type="text"
                name="slug"
                defaultValue={university?.slug || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. harvard-university"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                required
                name="countryId"
                defaultValue={university?.countryId || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              >
                <option value="">Select a country...</option>
                {countries.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location / City</label>
              <input
                type="text"
                name="location"
                defaultValue={university?.location || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. Cambridge, MA"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              rows={5}
              defaultValue={university?.description || ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none"
              placeholder="University overview, campus life, rankings..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="published"
              value="true"
              id="published"
              defaultChecked={university ? university.published : true}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="published" className="ml-2 text-sm text-gray-900">
              Publish this university
            </label>
          </div>

          <div className="pt-6 border-t border-gray-200 flex justify-end gap-3">
            <Link
              href="/admin/universities"
              className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              {isNew ? "Create University" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
