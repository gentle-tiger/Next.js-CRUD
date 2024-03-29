'use client'

import { useRouter } from "next/navigation";



export default function Create() {

    // const [] = useState(); // react에서는 input에 value 값이 있으면 값이 입력되지 않기에 state로 관리하여 수정해야함. 
    const router = useRouter();


    return (
        <form className="flex flex-col gap-3 w-5/12 text-black 
        " onSubmit={(e) => {
                e.preventDefault();
                console.log('create page!')


                const title = e.target.title.value;
                const body = e.target.body.value;
                if (title !== "" && body !== "") {


                    fetch(process.env.NEXT_PUBLIC_API_URL + '/topics', {
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
            <input type="text" name="title" placeholder="title... " className=" "></input>
            <textarea name="body" placeholder="body..."></textarea>
            <button type="submit" className="bg-sky-500 hover:bg-sky-700 uppercase">create</button>

        </form >
    )
}