import { Task } from "@/schemas/task";
import { connectToDb } from "@/actions/general";

async function addTask(name, description) {
  await connectToDb();
  const newTask = new Task({
    name: name,
    description: description,
    status: "pending",
  });

  let saved = await newTask.save();
  // console.log(saved);
  return saved;
}

//mark task as done

//delete task

//get all tasks

//get task by id

export { addTask };
