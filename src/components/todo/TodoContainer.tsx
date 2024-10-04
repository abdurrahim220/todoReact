
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <AddTodoModal/>
        <TodoFilter/>
      </div>
      <div
        className="w-full bg-primary-gradient
      h-auto rounded-xl p-2"
      >
        {/* <div className="bg-white text-2xl font-semibold flex p-5  justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-2 w-full hf rounded-lg space-y-1">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
