import AllDone from './components/all-done';
import Header from './components/header';
import InputForm from './components/input-form';
import TasksToDo from './components/tasks-todo/tasks-todo';
import { ToDoProvider } from './providers/todo.provider';

function App() {
  return (
    <ToDoProvider>
      <Header />
      <div className="flex justify-center h-full pb-20">
        <div className="w-108 max-w-full h-full space-y-15 max-md:px-6">
          <InputForm />
          <TasksToDo />
          <AllDone />
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
