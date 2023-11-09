export type Task = {
  name: string,
  date?: Date,
  completed: boolean,
  color: string,
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onToggle?: () => void
}
