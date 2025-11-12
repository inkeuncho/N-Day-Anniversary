"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            N-Day
          </Link>

          <div className="flex gap-6">
            <Link
              href="/anniversaries"
              className={`px-3 py-2 rounded-lg font-medium transition ${
                isActive("/anniversaries")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              기념일
            </Link>
            <Link
              href="/gifts"
              className={`px-3 py-2 rounded-lg font-medium transition ${
                isActive("/gifts")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              선물
            </Link>
            <Link
              href="/orders"
              className={`px-3 py-2 rounded-lg font-medium transition ${
                isActive("/orders")
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              주문내역
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
