import { type ChangeEvent, useState } from "react";

import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/NewNoteCard";
import { NoteCard } from "./components/NoteCard";

interface Note {
  id: string;
  date: Date;
  content: string;
}

const LOCAL_STORAGE_KEY = "@expert-notes";

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem(`${LOCAL_STORAGE_KEY}:notes`);

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  function onNoteCreate(content: string) {
    const newNote: Note = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}-notes`,
      JSON.stringify(notesArray)
    );
  }

  function onNoteDelete(id: string) {
    const notesArray = notes.filter((note) => note.id !== id);

    setNotes(notesArray);

    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:notes`,
      JSON.stringify(notesArray)
    );
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6 px-5">
      <img src={logo} alt="Logo" />

      <form className="w-full">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard onNoteCreate={onNoteCreate} />

        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} onNoteDelete={onNoteDelete} />
        ))}
      </div>
    </div>
  );
}
