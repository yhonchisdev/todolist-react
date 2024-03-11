import { useToDo } from "../providers/todo.provider";
import taskIcon from "../icons/task.svg";

function AllDone() {
  const { tasksComplete, onDelete } = useToDo();

  return (
    <div className="space-y-3">
      <h3 className="text-base text-white font-normal">
        Done - {tasksComplete.length}
      </h3>
      <div className="space-y-4">
        {tasksComplete.length === 0 && (
          <span className="block text-base text-mediumAquamarine text-center font-normal">
            Any tasks complete
          </span>
        )}
        {tasksComplete.map((task) => {
          return (
            <div
              key={task.id}
              className="flex items-center justify-between space-x-4 bg-chineseBlack px-5 py-6 rounded-xl animate-fadeIn"
            >
              <span className="text-base text-mediumAquamarine font-normal line-through">
                {task.text}
              </span>
              <button
                onClick={() => onDelete(task.id)}
                className="flex items-center justify-center w-8 h-8 bg-chineseBlack rounded-md duration-150 group active:bg-persianIndigo disabled:opacity-75 disabled:active:bg-chineseBlack"
              >
                <img
                  src={taskIcon}
                  className="w-4 h-4 duration-150 group-disabled:opacity-50"
                  alt="task-icon"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllDone;
