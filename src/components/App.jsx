import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import note from "../notes.js";

export default function App() {
  const [notes, setNotes] = useState(note);

  function addItem(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer name="Mehmet Ali Mergen"/>
    </div>
  );
}

