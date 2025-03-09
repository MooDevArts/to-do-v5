import { deleteTask } from "@/actions/tasks";

export async function DELETE(request, { params }) {
  const id = (await params).id;
  const task = await deleteTask(id);
  return Response.json({ message: "done", task: task });
}
