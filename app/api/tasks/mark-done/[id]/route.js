import { addTask, markTaskAsDone } from "@/actions/tasks";

export async function POST(request, { params }) {
  const id = (await params).id;
  console.log(id);
  const task = await markTaskAsDone(id);
  return Response.json({ message: "done", task: task });
}
