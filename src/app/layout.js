
import "./globals.css";
import Control from "./Control"
import Link from "next/link";

export const metadata = {
  title: "Next.js-CRUD",
  description: "Practice project implementing CRUD using Next.js.",
};



export default async function RootLayout({ children }) {

  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + '/topics/', { cache: 'no-store' })
  const topics = await resp.json();
  return (
    <html className="bg-slate-700 hv-100% text-slate-50  p-10 " >
      < body className=" border-2 p-10 pb-40 ">
        <Link Link href="/" className="bg-teal-800" >
          <h1 className="uppercase text-3xl ">Animation</h1>
          <span className="text-slate-50 px-2 py-2 underline text-2xl">Welcom to my anibox!</span>
        </Link >
        <ol className="text-2xl rounded-lg bg-gray-800 my-5 drop-shadow-lg">
          {topics.map(topic => {
            return <li className="pl-5 pb-2 " key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}

        </ol>
        {children}
        <Control />
      </body >
    </html >
  );
}
