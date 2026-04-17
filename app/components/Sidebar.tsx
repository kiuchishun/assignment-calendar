"use client";
import { Home, Plus, Calendar, List } from "lucide-react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className=" flex flex-col p-4 ">
      <Link
        href="/"
        className="p-6 hover:text-blue-800 cursor-pointer flex items-center gap-3 "
      >
        <Home size={25} />
        <span className="text-[24px] font-bold"> Home</span>
      </Link>
      <Link
        href="/add"
        className="p-6 hover:text-blue-800 cursor-pointer flex items-center gap-3"
      >
        <Plus size={25} />
        <span>単発の課題追加</span>
      </Link>
      <Link
        href="/weekly"
        className="p-6 hover:text-blue-800 cursor-pointer flex  items-center gap-3"
      >
        <Calendar size={25} />
        <span>毎週の課題追加</span>
      </Link>
      <Link
        href="/tasks"
        className="p-6 hover:text-blue-800 cursor-pointer  flex items-center gap-3"
      >
        <List size={25} />
        <span>課題一覧</span>
      </Link>
    </div>
  );
}
