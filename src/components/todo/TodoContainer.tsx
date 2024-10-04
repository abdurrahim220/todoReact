import { useGetTodosQuery } from "@/redux/api/api";
import TodoCard from "./TodoCard";
import { AddTodoModal } from "./AddTodoModal";
import { TodoFilter } from "./TodoFilter";

const TodoContainer = () => {
  // Fetch the todos using the RTK Query hook
  const { data, isLoading, error } = useGetTodosQuery(undefined);
  const todos = Array.isArray(data) ? data : []; // Ensure todos is always an array
  console.log(todos)

  if (isLoading) {
    return <div>Loading tasks...</div>; // Display loading state
  }

  if (error) {
    return <div>Error loading tasks.</div>; // Display error state
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="w-full bg-primary-gradient h-auto rounded-xl p-2">
        {todos.length === 0 ? (
          <div className="bg-white text-2xl font-semibold flex p-5 justify-center items-center rounded-md">
            <p>There is no task pending</p>
          </div>
        ) : (
          <div className="bg-white p-2 w-full hf rounded-lg space-y-1">
            {todos.map((todo) => (
              <TodoCard key={todo.id} data={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
