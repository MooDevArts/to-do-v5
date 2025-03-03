"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Menu({ taskId, name, description }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") {
    return (
      <nav className="menu">
        <Link href="/add">
          <button className="done"> Add</button>
        </Link>
      </nav>
    );
  }

  if (pathname === "/add") {
    return (
      <nav className="menu">
        <button
          className="done"
          onClick={() => console.log("Add:", name, description)}
        >
          {" "}
          Add
        </button>
        <button className="pending" onClick={() => router.back()}>
          Back
        </button>
      </nav>
    );
  }

  if (taskId) {
    return (
      <nav className="menu">
        <button
          className="done"
          onClick={() => console.log("Mark Completed:", taskId)}
        >
          Mark Completed
        </button>
        <button className="red" onClick={() => console.log("Delete:", taskId)}>
          Delete
        </button>
        <button className="pending" onClick={() => router.back()}>
          Back
        </button>
      </nav>
    );
  }

  return null;
}
