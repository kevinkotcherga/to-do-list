export type TaskFormProps = {
  newTask: string;
  color: string;
  onNewTaskChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
  onEyesFollow: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
