
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
      < body className=" border-2 p-10 pb-40  ">
        <div>
          <Link Link href="/" className="flex group " >
            <h1 className="relative uppercase text-3xl animate-pinghover ">Animation</h1>
            <p className="absolute w-1 h-1 bg-sky-400 rounded-xl group-hover:animate-ping"></p>
            <p className="absolute w-1 h-1 bg-sky-500 rounded-xl " ></p>
          </Link >
          <span className="text-slate-50 px-2 py-2 underline text-1xl  ">Welcom to my anibox!</span>
        </div>
        <ol className="text-2xl rounded-lg bg-gray-800 drop-shadow-lg my-5 py-5 ">
          {topics.map(topic => {
            return <li className="pl-5 group "
              key={topic.id}><Link href={`/read/${topic.id}`}
                className="py-1 px-1 rounded-lg transition ease-in group-hover:text-black group-hover:font-black group-hover:bg-gray-300">{topic.title}</Link></li>

          })}

        </ol>
        {children}
        <Control />
      </body >
    </html >
  );
}
