'use client'

import Link from "next/link"

export default function Control() {
    return (
        <ol>
            <li><Link href="/create">create</Link></li>
            <li><Link href="/update/id">update</Link></li>
            <li><input type="button" value="delete"></input></li>
        </ol>
    )
}