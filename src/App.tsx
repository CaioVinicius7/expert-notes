import { useState } from "react";

import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/NewNoteCard";
import { NoteCard } from "./components/NoteCard";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function onNoteCreate(content: string) {
    const newNote: Note = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);
  }

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6">
      <img src={logo} alt="Logo" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <NewNoteCard onNoteCreate={onNoteCreate} />

        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
