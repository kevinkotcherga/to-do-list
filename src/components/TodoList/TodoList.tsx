import { useState, FormEvent, ChangeEvent } from "react";

import { Task } from "../../types/Task";
import { ColorObject } from "../../types/ColorObject";

import TodoItem from "../TodoItem/TodoItem";
import TaskForm from "../TaskForm/TaskForm";
import ColorPicker from "../ColorPicker/ColorPicker";
import FaceContainer from "../FaceContainer/FaceContainer";
import TodoInformation from "../TodoInformation/TodoInformation";

const TodoList = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [color, setColor] = useState<string>('#695EFF');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTask.trim() !== '') {
      const date = new Date();
      setTasks([...tasks, { name: newTask, completed: false, date, color }]);
      setNewTask('');
    }
  }

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const colorChange = (color: ColorObject) => {
    setColor(color.hex)
    setIsOpen(isOpen => !isOpen);
    console.log(typeof(color))
  }

  const openPicker = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  const eyesFollow = (e: ChangeEvent<HTMLInputElement>) => {
    let value = 50;

    if (e.target.value.trim() !== '') {
      value = e.target.value.length * 2.15;
      if (value >= 100) {
        value = 100;
      }
    }

    const face = document.getElementById("face-container")!.style;
    face.setProperty('--eyesX', `${value}%`);
    face.setProperty('--eyesY', '50%');
  }

  return (
    <section className="todo-list">
      <div className="todo-list__content">
        <FaceContainer />
        <div className="todo-list__form">
          <div className="todo-list__color-picker">
            <ColorPicker
              color={color}
              isOpen={isOpen}
              onColorChange={colorChange}
              onTogglePicker={openPicker}
            />
          </div>
          <TaskForm
            color={color}
            newTask={newTask}
            onNewTaskChange={(e) => setNewTask(e.target.value)}
            onAddTask={addTask}
            onEyesFollow={eyesFollow}
          />
        </div>
      </div>
      {tasks.length >= 1 ? tasks.sort((a, b) => {
        if (!a.date) return 0;
        if (!b.date) return 0;

        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return b.date > a.date ? 1 : -1;
      }).map((task, index) => (
        <TodoItem
          color={task.color}
          key={index}
          name={task.name}
          completed={task.completed}
          onToggle={() => toggleTask(index)}
          onDelete={() => deleteTask(index)}
        />
      )) : <TodoInformation />}
    </section>
  );
};

export default TodoList;
