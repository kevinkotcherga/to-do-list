import { Task } from "../../types/Task";

const TodoItem = ({ name, color, completed, onDelete, onToggle }: Task) => {

  function isLightBackground(hexColor: string) {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5;
  }

  const textColor = isLightBackground(color) ? "#000" : "#fff";

  return (
    <div className="todo-item" style={{ backgroundColor: completed ? '#ccc' : color, opacity: completed ? 0.5 : 1, color: textColor }} >
      <div className="todo-item__content" onClick={onToggle}>
        <button className="todo-item__toggle" >{completed ? '✔️' : ''}</button>
        <p className="todo-item__task-name">{name}</p>
      </div>
      <button className="todo-item__delete" onClick={onDelete}>❌</button>
    </div>
  );
};

export default TodoItem;
