import { render, renderHook } from '@testing-library/react';
import { ToDoProvider, useToDo } from './todo.provider';

describe('<TodoProvider />', () => {
  test('should work', () => {
    render(<ToDoProvider />);
  });

  test('should render, add items and remove with hook', () => {
    const { result, rerender } = renderHook(() => useToDo(), { wrapper: ToDoProvider });
    expect(result.current).toBeDefined();
    rerender();
    expect(result.current.tasksToDo).toEqual([]);
    rerender();
    expect(result.current.tasksComplete).toEqual([]);
  });
});
