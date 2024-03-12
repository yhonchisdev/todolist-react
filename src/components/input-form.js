import { useState, useRef } from 'react';
import plus from '../icons/plus.svg';
import { useToDo } from '../providers/todo.provider';

function InputForm() {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const { onAdd } = useToDo();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!text) {
      inputRef.current.focus();
      return;
    }
    onAdd({
      id: Date.now(),
      text,
      complete: false
    });
    setText('');
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center space-x-2.5">
      <input
        ref={inputRef}
        className="flex-1 h-10 px-4 py-2.5 bg-richBlack text-base text-white font-normal rounded-md border border-persianIndigo outline-none placeholder:text-sonicSilver focus:border-darkPastelPurple"
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task"
      />
      <button
        data-testid="add-item"
        onClick={handleSubmit}
        className="flex items-center justify-center w-10 h-10 bg-darkPastelPurple rounded-md duration-150 group active:bg-persianIndigo disabled:opacity-50 disabled:active:bg-darkPastelPurple">
        <img
          src={plus}
          className="w-4 h-4 fill-white duration-150 group-disabled:fill-sonicSilver"
          alt="plus-icon"
        />
      </button>
    </div>
  );
}

export default InputForm;
