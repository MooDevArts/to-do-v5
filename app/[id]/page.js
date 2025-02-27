import Menu from "@/components/Menu";

export default async function Task({ params }) {
  const { id } = await Promise.resolve(params);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/tasks/get/${id}`
  );
  const { task } = await res.json();
  return (
    <div className="content">
      <div className={`to-do ${task.status}`}>{task.name}</div>
      <div className={`to-do ${task.status}`}>{task.description}</div>
      <Menu taskId={id} />
    </div>
  );
}
