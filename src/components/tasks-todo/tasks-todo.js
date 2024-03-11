import Task from "./task";
import { useToDo } from "../../providers/todo.provider";

function TasksToDo() {
  const { tasksToDo } = useToDo();

  return (
    <div className="space-y-3">
      <h3 className="text-base text-white font-normal">
        Tasks to do - {tasksToDo.length}
      </h3>
      <div className="space-y-4">
        {tasksToDo.length === 0 && (
          <span className="block text-base text-darkPastelPurple text-center font-normal">
            Any tasks created
          </span>
        )}
        {tasksToDo.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}

export default TasksToDo;
