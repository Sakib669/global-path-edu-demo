import prisma from "@/lib/prisma";
import { Users, FileText, MessageSquare, BookOpen, GraduationCap, Globe } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [
    inquiriesCount,
    applicationsCount,
    universitiesCount,
    coursesCount,
    countriesCount,
    postsCount
  ] = await Promise.all([
    prisma.inquiry.count(),
    prisma.application.count(),
    prisma.university.count(),
    prisma.course.count(),
    prisma.country.count(),
    prisma.post.count(),
  ]);

  const stats = [
    { name: 'Total Inquiries', value: inquiriesCount, icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Total Applications', value: applicationsCount, icon: FileText, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Universities', value: universitiesCount, icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-100' },
    { name: 'Courses', value: coursesCount, icon: BookOpen, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { name: 'Countries', value: countriesCount, icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { name: 'Blog Posts', value: postsCount, icon: FileText, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your educational consultancy platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bg} mr-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Mock */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Inquiries</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {inquiriesCount === 0 ? (
            <div className="p-6 text-center text-gray-500 text-sm">
              No recent inquiries found.
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500 text-sm">
              Recent inquiries will appear here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
