import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Notes } from "./Notes";
import { NewNote } from "./NewNote";
// import { Note } from "./Note";

export const Main = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid().slice(0, 8),
      title: "New Note",
      text: "",
      lastModified: Date.now(),
    };

    setNotes([...notes, newNote]);

    console.log(notes);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotes);
  };

  return (
    <div className="p-8 flex justify-between min-h-full">
      <Notes
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />

      {activeNote && (
        <div className="min-h-full flex">
          <NewNote activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
          {/* <Note activeNote={getActiveNote()} /> */}
        </div>
      )}
    </div>
  );
};
