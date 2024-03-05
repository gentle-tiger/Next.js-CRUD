
import { Inter } from "next/font/google";
import "./globals.css";
import Control from "./Control"
import Link from "next/link";

export const metadata = {
  title: "Next.js-CRUD",
  description: "Practice project implementing CRUD using Next.js.",
};



export default async function RootLayout({ children }) {

  const resp = await fetch('http://localhost:9999/topics/')
  const topics = await resp.json();
  return (
    <html className="bg-slate-700 text-slate-50 border-2 h-full p-10 	 	 " >
      <body >
        <Link href="/" className="bg-teal-800">
          <h1 className="uppercase text-3xl ">Animation</h1>
          <span className="text-slate-50 px-2 py-2 underline text-2xl">Welcom to my anibox!</span>
        </Link>
        <ol className="text-2xl">
          {topics.map(topic => {
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}

        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
