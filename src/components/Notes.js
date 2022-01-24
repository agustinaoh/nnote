import React from "react";
import { NoteCard } from "./../NoteCard";

export const Notes = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="text-white font-body">
      <div className="w-full flex justify-between mb-8">
        <h3 className="text-3xl">Your NNotes</h3>
        <button
          className="bg-nnotes-yellow px-4 py-2 rounded-full text-white font-bold shadow-yellow-500/50 shadow-xl"
          onClick={onAddNote}
        >
          Add a new note
        </button>
      </div>
      <div id="all-notes" className="">
        {notes.map((note) => {
          return (
            <div>
              <NoteCard
                id={note.id}
                title={note.title}
                text={note.text}
                lastModified={note.lastModified}
                onDeleteNote={onDeleteNote}
                isActive={activeNote === note.id}
                key={note.id}
                setActiveNote={setActiveNote}
              />
              {console.log(note)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
