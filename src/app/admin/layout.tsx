import Link from "next/link";
import { 
  LayoutDashboard, 
  Globe, 
  GraduationCap, 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Users, 
  Settings,
  LogOut
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-50">
        <div className="p-6 border-b border-gray-100 flex items-center justify-center">
          <Link href="/admin" className="text-xl font-bold tracking-tight text-blue-600">
            GlobalPath Admin
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <NavItem href="/admin" icon={LayoutDashboard} label="Dashboard" />
          <NavItem href="/admin/countries" icon={Globe} label="Countries" />
          <NavItem href="/admin/universities" icon={GraduationCap} label="Universities" />
          <NavItem href="/admin/courses" icon={BookOpen} label="Courses" />
          <NavItem href="/admin/inquiries" icon={MessageSquare} label="Inquiries" />
          <NavItem href="/admin/applications" icon={FileText} label="Applications" />
          <NavItem href="/admin/blog" icon={FileText} label="Blog / News" />
          <NavItem href="/admin/users" icon={Users} label="Users" />
          <NavItem href="/admin/settings" icon={Settings} label="Settings" />
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 min-w-0">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
    >
      <Icon className="w-5 h-5 mr-3 text-gray-500" />
      {label}
    </Link>
  );
}
