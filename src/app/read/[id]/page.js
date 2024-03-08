

export default async function Read(props) {
    const id = props.params.id;
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/topics/${id}`)
    const topic = await res.json();
    return (
        <main className="bg-teal-900 w-auto h-auto p-2 rounded-lg drop-shadow-lg">
            <h2>{topic.title}</h2>
            {topic.body}
        </main>
    )
}