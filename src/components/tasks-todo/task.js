import checkIcon from "../../icons/check.svg";
import taskIcon from "../../icons/task.svg";
import { useToDo } from "../../providers/todo.provider";

function Task({ task }) {
  const { onComplete, onDelete } = useToDo();

  const handleComplete = () => onComplete(task.id);

  const handleDelete = () => onDelete(task.id);

  return (
    <div className="flex items-center justify-between space-x-4 bg-chineseBlack px-5 py-6 rounded-xl animate-fadeIn">
      <span className="text-base text-darkPastelPurple font-normal">
        {task.text}
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleComplete}
          className="flex items-center justify-center w-8 h-8 bg-chineseBlack rounded-md duration-150 group active:bg-persianIndigo disabled:opacity-75 disabled:active:bg-chineseBlack"
        >
          <img
            src={checkIcon}
            className="w-4 h-4 duration-150 group-disabled:opacity-50"
            alt="check-icon"
          />
        </button>
        <button
          onClick={handleDelete}
          className="flex items-center justify-center w-8 h-8 bg-chineseBlack rounded-md duration-150 group active:bg-persianIndigo disabled:opacity-75 disabled:active:bg-chineseBlack"
        >
          <img
            src={taskIcon}
            className="w-4 h-4 duration-150 group-disabled:opacity-50"
            alt="task-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Task;
