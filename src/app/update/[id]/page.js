'use client'
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Update() {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    console.log("id", id);
    console.log("title", title);
    console.log("body", body);
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/topics/' + id)
            .then(res => res.json())
            .then(result => {
                setTitle(result.title);
                setBody(result.body);
            })
    }, [])

    return (
        <form className="flex flex-col gap-3 w-5/12 text-black "
            onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;                           // 여기서 topics 다음에는 update에 보내는걸까, read에 보내는걸까
                fetch(process.env.NEXT_PUBLIC_API_URL + '/topics/' + id, { // id를 붙힌 링크를 수정하는 것이기 때문에 id를 붙히나??
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, body })
                })
                    .then(res => res.json())
                    .then(result => {
                        router.push(`/read/${result.id}`);
                        router.refresh();
                    })
            }}
        >

            <input
                type="text"
                name="title"
                placeholder="title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><textarea
                name="body"
                placeholder="body..."
                value={body}
                onChange={(e) => setBody(e.target.value)}

            /><button
                type="submit"

                className="bg-sky-500 hover:bg-sky-700 uppercase" >update</button>
        </form >
    )
}


