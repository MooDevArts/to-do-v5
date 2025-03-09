import { addTask } from "@/actions/tasks";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  const body = await request.json();
  const saved = await addTask(body.name, body.description);
  return Response.json({ message: "done", saved: saved });
}
