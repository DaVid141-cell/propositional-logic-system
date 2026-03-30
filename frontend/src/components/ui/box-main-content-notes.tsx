import { useState } from "react"

export function BoxMainContetntNotes () {
    const [notes, setNotes] = useState("")

    return (
        <div className="flex h-full items-center justify-center">
            <textarea
                className="w-full h-full bg-transparent outline-none resize-none p-4 text-base"
                placeholder="Type your notes here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
        </div> 
    )
}