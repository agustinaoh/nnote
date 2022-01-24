import React from "react";
import { BsTrashFill } from "react-icons/bs";

// export interface NoteCardProps {
//   title: string;
//   text?: string;
//   labels?: {};
//   lastModified: string;
//   onDeleteNote: any;
// }

export const NoteCard = ({
  text,
  title,
  id,
  lastModified,
  onDeleteNote,
  isActive,
  setActiveNote,
}) => {
  const active = isActive ? "bg-nnotes-red" : "bg-nnotes-pink";
  // const style = isActive ? { boxShadow: "0 0px 5px red" } : {};

  return (
    <div
      className={`${active} text-white font-body hover:bg-nnotes-red rounded-lg py-2 px-3 mb-3 flex`}
      style={{}}
      onClick={() => setActiveNote(id)}
    >
      <div className="flex-1">
        {/* Title */}
        <strong className="block text-lg font-bold">{title}</strong>

        {/* Preview */}
        {text && <p>{text.substr(0, 100) + "..."}</p>}

        {/* Modified */}
        <small className="italic">
          Last modified on{" "}
          {new Date(lastModified).toLocaleDateString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
      <button className="pr-1" onClick={() => onDeleteNote(id)}>
        <BsTrashFill />
      </button>
    </div>
  );
};
