'use client'
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Update() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    console.log(id);

    useEffect(() => {
        fetch('http://localhost:9999/topics/' + id)
            .then(res => res.json())
            .then(result => {
                setTitle(result.title);
                setBody(result.body);
            })
    }, [])

    return (
        <form className="flex flex-col gap-3 w-5/12 text-black 
        " onSubmit={(e) => {
                e.preventDefault();
                console.log('create page!')


                const title = e.target.title.value;
                const body = e.target.body.value;
                if (title !== "" && body !== "") {


                    fetch('http://localhost:9999/topics', {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ title, body })
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            router.push(`/read/${result.id}`) // result.id로 이동 
                            router.refresh();
                        })
                }
            }}>

            <input type="text" name="title" placeholder="title..." value={title}></input>
            <textarea name="body" placeholder="body..." value={body}></textarea>
            <input type="submit" value="update" className="bg-sky-500 hover:bg-sky-700 uppercase"></input>
        </form >
    )
}


