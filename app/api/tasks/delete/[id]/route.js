import { deleteTask } from "@/actions/tasks";
import { revalidatePath } from "next/cache";

export async function DELETE(request, { params }) {
  const id = (await params).id;
  //   console.log(id);
  const task = await deleteTask(id);
  revalidatePath("/");
  return Response.json({ message: "done", task: task });
}
