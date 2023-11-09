import plus from '../../assets/plus.svg';

import { TaskFormProps } from '../../types/TaskFormProps';

const TaskForm = ({ newTask, onNewTaskChange, onAddTask, onEyesFollow, color }: TaskFormProps) => {
  const eyeContact = () => {
    const face = document.getElementById("face-container")!.style;
    face.setProperty('--eyesX', '50%');
    face.setProperty('--eyesY', '0%');
  }

  return (
    <form className="task-form" onSubmit={e => onAddTask(e)}>
      <input
        className="task-form__input-text"
        type="text"
        value={newTask}
        onChange={(e) => {
          onNewTaskChange(e);
          onEyesFollow(e);
        }}
        onBlur={eyeContact}
      />
      <button type="submit" className="task-form__submit" style={{ backgroundColor: color }}>
        <img className="task-form__image" src={plus} />
      </button>
    </form>
  );
};

export default TaskForm;
