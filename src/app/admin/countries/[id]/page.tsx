import prisma from "@/lib/prisma";
import { saveCountry } from "@/app/actions/country";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function EditCountryPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const isNew = params.id === "new";
  
  let country = null;
  if (!isNew) {
    country = await prisma.country.findUnique({
      where: { id: params.id }
    });
    if (!country) notFound();
  }

  // Bind the id to the action so we don't have to pass it via a hidden input, though hidden input is fine.
  const formAction = async (formData: FormData) => {
    "use server";
    return saveCountry(formData, isNew ? "new" : params.id);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center">
        <Link href="/admin/countries" className="mr-4 text-gray-500 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isNew ? "Add New Country" : "Edit Country"}
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
                defaultValue={country?.name || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. United Kingdom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
              <input
                required
                type="text"
                name="slug"
                defaultValue={country?.slug || ""}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. uk"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              rows={5}
              defaultValue={country?.description || ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none"
              placeholder="Why study here? Overview of the country..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="published"
              value="true"
              id="published"
              defaultChecked={country ? country.published : true}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="published" className="ml-2 text-sm text-gray-900">
              Publish this country
            </label>
          </div>

          <div className="pt-6 border-t border-gray-200 flex justify-end gap-3">
            <Link
              href="/admin/countries"
              className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              {isNew ? "Create Country" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
