'use client'

import Link from "next/link"
import { useParams, useRouter } from "next/navigation";

export default function Control() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    // console.log("id", id);
    return (
        <ol className="my-5 py-10 bg-stone-800 rounded-lg px-5 drop-shadow-lg">
            {id ? <>
                <li><input type="button" value="delete" className="!text-lg"
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
                <li><Link href={`/update/${id}`} className="  !text-lg">update</Link></li> {/*href={`/update/${id}`}*/}
            </> : <li><Link href="/create" className="!text-lg">create</Link></li>
            }
        </ ol >


    )
}