import { getAllTasks } from "@/actions/tasks";

export async function GET(request) {
  const tasks = await getAllTasks();
  //   console.log(tasks);
  return Response.json({ message: "done", tasks: tasks });
}
