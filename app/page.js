import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/tasks/get`);
  const { tasks } = await res.json();
  return (
    <div className="content">
      {tasks.map((task) => (
        <Link className={`to-do ${task.status}`} href={`/${task._id}`}>
          {task.name}
        </Link>
      ))}
    </div>
  );
}
