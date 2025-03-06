import { addTask } from "@/actions/tasks";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  const body = await request.json();
  //   console.log(body);
  const saved = await addTask(body.name, body.description);
  // console.log(saved);
  revalidatePath("/");
  return Response.json({ message: "done", saved: saved });
}
