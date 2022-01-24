import React from "react";

export const Note = () => {
  return (
    <div className="text-white font-body bg-nnotes-lilac p-3 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">title</h2>
      <p>activeNote</p>
    </div>
  );
};

// export const Note = ({ activeNote }) => {
//   return (
//     <div className="text-white font-body bg-nnotes-lilac p-3 rounded-lg">
//       <h2 className="text-2xl font-bold mb-2">{activeNote.title}</h2>
//       <p>{activeNote.text}</p>
//     </div>
//   );
// };
