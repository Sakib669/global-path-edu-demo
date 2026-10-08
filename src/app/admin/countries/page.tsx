import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function AdminCountries() {
  const countries = await prisma.country.findMany();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Countries</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage study destinations.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          Add Country
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-8 text-center">
        <p className="text-gray-500">Country management UI goes here.</p>
      </div>
    </div>
  );
}
