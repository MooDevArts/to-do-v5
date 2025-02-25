import { Task } from "@/models/task";
import { connectToDb } from "@/actions/general";

async function addTask(name, description) {
  await connectToDb();
  const newTask = new Task({
    name: name,
    description: description,
    status: "pending",
  });

  let saved = await newTask.save();
  console.log(saved);
}

export { addTask };
