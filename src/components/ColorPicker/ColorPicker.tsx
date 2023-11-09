import { TwitterPicker } from 'react-color';

import { ColorPickerProps } from '../../types/ColorPickerProps';

const ColorPicker = ({ color, isOpen, onColorChange, onTogglePicker }: ColorPickerProps) => {
  return (
    <div className="color-picker">
      <button
        className="color-picker__button"
        style={{ backgroundColor: color }}
        onClick={onTogglePicker}
      >
        <p className="color-picker__emoji">🎨</p>
      </button>
      {isOpen && <TwitterPicker
        className="color-picker__colors"
        onChange={onColorChange}
        color={color}
      />}
    </div>
  );
};

export default ColorPicker;
