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
async function markTaskAsDone(id) {
  await connectToDb();
  let task;
  try {
    task = await Task.findById(id);
  } catch (error) {
    return error;
  }

  task.status = "done";
  await task.save();
  return task;
}

//delete task
async function deleteTask(id) {
  await connectToDb();
  let task;
  try {
    task = await Task.findByIdAndDelete(id);
  } catch (error) {
    return error;
  }
  return task;
}

//get all tasks
async function getAllTasks() {
  await connectToDb();
  let tasks;
  try {
    tasks = await Task.find();
  } catch (error) {
    return error;
  }
  return tasks;
}

//get task by id
async function getTask(id) {
  await connectToDb();
  let task;
  try {
    task = await Task.findById(id);
  } catch (error) {
    return error;
  }
  return task;
}

export { addTask, markTaskAsDone, deleteTask, getAllTasks, getTask };
