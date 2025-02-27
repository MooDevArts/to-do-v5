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
  let tasks;
  try {
    tasks = await Task.find();
  } catch (error) {
    return await error.json();
  }
  return tasks;
}

//get task by id
async function getTask(id) {
  let task;
  try {
    task = await Task.findById(id);
  } catch (error) {
    return error;
  }
  return task;
}

export { addTask, markTaskAsDone, deleteTask, getAllTasks, getTask };
