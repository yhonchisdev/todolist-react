import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  test('should work', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Add a new task')).toBeDefined();
  });

  test('should add items and remove them', async () => {
    render(<App />);

    // buscar el input
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    // buscar el boton de agregar elemento
    const buttonAdd = screen.getByTestId('add-item');
    expect(buttonAdd).toBeDefined();

    // creamos 2 datos
    await userEvent.type(input, 'Limpiar la casa el sabado.');
    await userEvent.click(buttonAdd);

    await userEvent.type(input, 'Salir de compras el domingo.');
    await userEvent.click(buttonAdd);

    // asegurar que el elemento se ha agregado
    const list = screen.getByTestId('tasks-todo');
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(2);

    // asegurarnos que lo podemos borrar
    const item1 = screen.getByText('Limpiar la casa el sabado.');
    const removeButton = item1.parentNode.querySelector('button[data-testid="delete-task"]');
    expect(removeButton).toBeDefined();
    await userEvent.click(removeButton);

    // asegurarnos que lo podemos cambiar a completado
    const item2 = screen.getByText('Salir de compras el domingo.');
    const completeButton = item2.parentNode.querySelector('button[data-testid="complete-task"]');
    expect(completeButton).toBeDefined();
    await userEvent.click(completeButton);

    // verificar que las tareas por hacer esta vacio
    const noResults = screen.getByText('Any tasks created');
    expect(noResults).toBeDefined();

    // asegurar que el elemento se ha agregado a task done
    const listDone = screen.getByTestId('tasks-done');
    expect(listDone).toBeDefined();
    expect(listDone.childNodes.length).toBe(1);

    // screen.debug();
  });
});
