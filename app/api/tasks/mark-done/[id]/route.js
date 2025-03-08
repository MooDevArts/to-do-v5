import { markTaskAsDone } from "@/actions/tasks";
import { revalidatePath } from "next/cache";

export async function POST(request, { params }) {
  const id = (await params).id;
  console.log(id);
  const task = await markTaskAsDone(id);
  revalidatePath("/");
  return Response.json({ message: "done", task: task });
}
