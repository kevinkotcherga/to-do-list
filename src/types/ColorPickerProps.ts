export type ColorPickerProps = {
  color: string;
  isOpen: boolean;
  onColorChange: (color: any) => void;
  onTogglePicker: () => void;
}
