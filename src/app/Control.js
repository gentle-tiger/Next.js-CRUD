'use client'

import Link from "next/link"
import { useParams, useRouter } from "next/navigation";

export default function Control() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    // console.log("id", id);
    const right = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg>
    const rightTag = <p>{right}</p>;
    return (
        <ol className="my-5 py-5 px-5  rounded-lg drop-shadow-lg flex flex-col border-separate border-spacing-2 border border-slate-500 gap-5">
            {id ? <>
                <li
                ><input type="button" value="delete"
                    className="!text-sm  bg-black px-4 py-2 rounded-lg transition ease-in hover:ring-2 cursor-pointer uppercase"
                    onClick={() => {
                        console.log('hi')

                        const options = { method: "DELETE" }
                        fetch(process.env.NEXT_PUBLIC_API_URL + '/topics/' + id, options) // 해당 파람스를 가진 데이터를 삭제한다. 
                            .then(res => res.json())
                            .then(result => {
                                console.log("result", result);
                                router.push(`/`);
                                router.refresh();
                            }
                            )

                    }}></input></li>
                <li >
                    <Link href={`/update/${id}`} className="!text-sm    bg-black   px-4 py-2 rounded-lg transition ease-in hover:ring-2 uppercase"
                    >update</Link></li> {/*href={`/update/${id}`}*/}
            </> :
                <li >
                    <Link href="/create" className="!text-sm   bg-black px-4 py-2 rounded-lg transition ease-in hover:ring-2 uppercase"
                    >create</Link></li>
            }
        </ ol >


    )
}