"use server";

import Calender from "./components/calender/Calendar";

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-slate-100">
        <Slidebar />
        <main className="flex-1 p-6">
          <Calender />
        </main>
      </div>
    </>
  );
}
