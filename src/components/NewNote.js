import React from "react";
import CoolLady from "./../../img/cool-lady.svg";

export const NewNote = ({ activeNote, onUpdateNote }) => {
  const style = "text-nnotes-black p-2 focus:outline-none bg-nnotes";

  const onEditField = (key, value) => {
    onUpdateNote({
      id: activeNote.id,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) {
    // return <p className="text-nnotes-pink">Sad face</p>;
    return (
      <div className="h-full w-full flex items-center justify-center">
        <img src={CoolLady} alt={""} />
      </div>
    );
  }

  return (
    <div className="font-body text-white">
      <div className="flex flex-col">
        {/* <label className="mr-3">Title</label> */}
        <input
          className={`${style} font-bold text-xl border-b-2 rounded-t-lg`}
          type="text"
          id="title"
          value={activeNote && activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
      </div>

      <div className="flex flex-col">
        {/* <label className="mr-3">Text</label> */}
        <textarea
          className={`${style} rounded-b-lg`}
          id="text"
          placeholder="Write your ideas here..."
          value={activeNote && activeNote.text}
          onChange={(e) => onEditField("text", e.target.value)}
        />
      </div>
    </div>
  );
};
