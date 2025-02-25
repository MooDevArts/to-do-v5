import { addTask } from "@/actions/tasks";

export async function POST(request) {
  const body = await request.json();
  //   console.log(body);
  await addTask(body.name, body.description);
  return Response.json({ message: "done" });
}
