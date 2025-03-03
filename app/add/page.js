"use client";
import Menu from "@/components/Menu";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="content">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <Menu name={name} description={description}></Menu>
    </div>
  );
};

export default page;
