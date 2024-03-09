

export default async function Read(props) {
    const id = props.params.id;
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/topics/${id}`, { cache: 'no-store' })
    const topic = await res.json();
    return (
        <main className=" w-auto h-auto p-2 rounded-lg drop-shadow-lg ">
            <h2 className="text-sm font-black">제목 : {topic.title}</h2>
            <p className="text-sm font-black">내용 : {topic.body}</p>
        </main>
    )
}