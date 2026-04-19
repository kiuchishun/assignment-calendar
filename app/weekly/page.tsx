"use client";
import { useTasks } from "../context/event-context";
import Link from "next/link";
import { Weekday } from "@/types/task";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddWeeklyPage() {
  const router = useRouter();
  const [weekday, setWeekday] = useState<Weekday>("日");
  const { addWeeklyTask } = useTasks();
  const createWeeklyTask = (formData: FormData) => {
    const title = formData.get("title");
    const memo = formData.get("memo");

    addWeeklyTask({
      title: String(title),
      memo: String(memo),
      weekday: weekday,
    });
    router.push("/")
  };
  return (
    <>
      <div className="w-full   ">
        <form action={createWeeklyTask}>
          <header className="relative flex items-center justify-between p-4 border-b border-gray-300 ">
            <Link href={"/"} className="text-blue-600 font-medium">
              キャンセル
            </Link>
            <span className="font-semibold text-lg">毎週課題の追加</span>
            <button className=" bg-blue-600 text-white border border-blue-600 px-4 py-1.5  rounded-md font-medium">
              保存
            </button>
          </header>

          <div className="mt-4 max-w-2xl mx-auto p-4">
            <div>
              <label className="block mb-2 font-medium">課題名</label>
              <input
                name="title"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="例：数学レポート"
              />
            </div>

            <div className="mt-8">
              <label className="block mb-2 font-medium">曜日</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className={
                    weekday === "月"
                      ? "bg-blue-600 text-white border border-blue-600 rounded-md px-3 py-2"
                      : "border-gray-300 border rounded-md px-3 py-2"
                  }
                  onClick={() => setWeekday("月")}
                >
                  月
                </button>
                <button
                  type="button"
                  className="border-gray-300 border rounded-md px-3 py-2"
                >
                  火
                </button>
                <button
                  type="button"
                  className="border-gray-300 border rounded-md px-3 py-2"
                >
                  水
                </button>
                <button
                  type="button"
                  className="border-gray-300 border rounded-md px-3 py-2"
                >
                  木
                </button>
                <button
                  type="button"
                  className="border-gray-300 border rounded-md px-3 py-2"
                >
                  金
                </button>
                <button
                  type="button"
                  className="border-gray-300 border rounded-md px-3 py-2"
                >
                  土
                </button>
                <button
                  type="button"
                  className="border-gray-300 border rounded-md px-3 py-2"
                >
                  日
                </button>
              </div>
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  詳細メモ（任意）
                </label>
                <textarea
                  name="memo"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-48"
                  placeholder="例：リアクションペーパー回答  19:00まで"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
