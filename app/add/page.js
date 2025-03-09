"use client";
import Menu from "@/components/Menu";
import React, { useState, useRef, useEffect } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const nameInputRef = useRef(null);
  const descriptionTextareaRef = useRef(null);
  const addButtonRef = useRef(null);

  // focus 1st input field on load
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  // handle enter in 1st field
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission
      if (descriptionTextareaRef.current) {
        descriptionTextareaRef.current.focus(); // Focus the textarea
      }
    }
  };

  // handle enter in 2nd field
  const handleDescriptionKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (addButtonRef.current) {
        addButtonRef.current.click(); // Trigger the click
      }
    }
  };

  return (
    <div className="content">
      <input
        ref={nameInputRef}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <textarea
        ref={descriptionTextareaRef}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleDescriptionKeyDown}
      ></textarea>
      <Menu
        name={name}
        description={description}
        addButtonRef={addButtonRef}
      ></Menu>
    </div>
  );
};

export default page;
