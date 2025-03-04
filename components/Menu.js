"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Menu({ taskId, name, description }) {
  const pathname = usePathname();
  const router = useRouter();

  async function hitAddTaskApi() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name,
      description: description,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/tasks/add", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    router.push("/");
  }

  // Home
  if (pathname === "/") {
    return (
      <nav className="menu">
        <Link href="/add">
          <button className="done"> Add</button>
        </Link>
      </nav>
    );
  }

  // Add page
  if (pathname === "/add") {
    return (
      <nav className="menu">
        <button className="done" onClick={hitAddTaskApi}>
          Add
        </button>
        <button className="pending" onClick={() => router.back()}>
          Back
        </button>
      </nav>
    );
  }

  // Task detail page
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
