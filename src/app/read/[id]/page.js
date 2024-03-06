

export default async function Read(props) {
    const id = props.params.id;
    const res = await fetch(`http://localhost:9999/topics/${id}`)
    const topic = await res.json();
    return (
        <main className="bg-teal-900 w-auto h-auto p-2 rounded-lg drop-shadow-lg">
            <h2>{topic.title}</h2>
            {topic.body}
        </main>
    )
}