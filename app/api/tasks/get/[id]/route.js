import { getTask } from "@/actions/tasks";

export async function GET(request, { params }) {
  const id = (await params).id;
  const task = await getTask(id);
  return Response.json({ message: "done", task: task });
}
