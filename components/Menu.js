"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Menu({ taskId, name, description, addButtonRef }) {
  const pathname = usePathname();
  const router = useRouter();

  // FUNCTIONS
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

  async function hitDelTaskApi() {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`/api/tasks/delete/${taskId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    router.push("/");
  }

  async function hitDoneTaskApi() {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(`/api/tasks/mark-done/${taskId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    router.push("/");
  }

  // MENUS FOR DIFF PAGES
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
        <button className="done" onClick={hitAddTaskApi} ref={addButtonRef}>
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
        <button className="done" onClick={hitDoneTaskApi}>
          Mark Completed
        </button>
        <button className="red" onClick={hitDelTaskApi}>
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
