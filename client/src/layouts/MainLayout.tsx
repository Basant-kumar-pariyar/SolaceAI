import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  Smile,
  BookOpen,
  LogOut,
} from "lucide-react";

const MainLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-purple-500 mb-10">
          SolaceAI
        </h1>

        <nav className="space-y-3">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/chat"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <MessageSquare size={20} />
            Chat
          </Link>

          <Link
            to="/mood"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <Smile size={20} />
            Mood
          </Link>

          <Link
            to="/journal"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <BookOpen size={20} />
            Journal
          </Link>

        </nav>

        <button
          onClick={logout}
          className="mt-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg w-full"
        >
          <LogOut size={18} />
          Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;