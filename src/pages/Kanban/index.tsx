import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AddTask from "./components/AddTask";
import { FilterIcon } from "./components/FilterSvg";
import { data } from "@/components/custom/dummyData";
import {
  Board,
  Column,
  FilterOptions,
  Task,
  TrackDraggableTask,
  User,
} from "@/components/custom/data";
import { TaskCard } from "./components/TaskCard";

export default function Component() {
  const [boards, setBoards] = useState<Board[]>(data as Board[]);

  useEffect(() => {
    console.log("Boards state updated:", boards);
  }, [boards]);

  const [users, setUsers] = useState<User[]>([
    {
      id: uuidv4(),
      email: "Rahul@eduvance.com",
      name: "Rahul Doe",
      avatar: "path",
    },
    {
      id: uuidv4(),
      email: "Om@eduvance.com",
      name: "Om Smith",
      avatar: "path",
    },
    {
      id: uuidv4(),
      email: "Ganesh@eduvance.com",
      name: "Ganesh Johnson",
      avatar: "path",
    },
  ]);

  const [draggedTask, setDraggedTask] = useState<TrackDraggableTask | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    assignee: null,
    label: null,
    dueDate: null,
  });

  const handleDragStart = (task: TrackDraggableTask) => {
    console.log("Triggered Handle Drag Start");

    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Triggered Handle Drag Over");
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    boardId: string,
    columnId: string,
    status: string
  ) => {
    e.preventDefault();

    if (draggedTask) {
      setBoards((prevBoards) => {
        // deepClone of previous updatedBoards
        const updatedBoards = [...prevBoards];

        const targetBoard = updatedBoards.find((board) => board.id === boardId);
        if (!targetBoard) return prevBoards;

        const targetColumn = targetBoard.wipLimits.find(
          (column) => column.id === columnId
        );
        if (!targetColumn) return prevBoards;

        draggedTask.task.status = status;

        targetColumn.tasks = [...targetColumn.tasks, draggedTask.task];

        const sourceBoard = updatedBoards.find(
          (board) => board.id === draggedTask.boardId
        );
        if (!sourceBoard) return prevBoards;

        const sourceColumn = sourceBoard.wipLimits.find(
          (column) => column.id === draggedTask.columnId
        );
        if (!sourceColumn) return prevBoards;

        sourceColumn.tasks = sourceColumn.tasks.filter(
          (task) => task.id !== draggedTask.task.id
        );

        return updatedBoards;
      });

      setDraggedTask(null);
    }
  };

  const handleAddTask = (newTask: TrackDraggableTask) => {
    console.log("trigger add", newTask);
    newTask.columnId = boards
      .find((board) => board.id == newTask.boardId)
      ?.wipLimits.find(
        (column) =>
          column.name.toLowerCase() == newTask.task.status.toLowerCase()
      )?.id as string;
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === newTask.boardId
          ? {
              ...board,
              wipLimits: board.wipLimits.map((column) =>
                column.id === newTask.columnId
                  ? {
                      ...column,
                      tasks: [...column.tasks, newTask.task],
                    }
                  : column
              ),
            }
          : board
      )
    );
  };

  const handleEditTask = (payload: TrackDraggableTask) => {
    console.log(payload);

    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        //board check
        board.id === payload.boardId
          ? {
              ...board,
              wipLimits: board.wipLimits.map((column) =>
                // column check
                column.id === payload.columnId
                  ? {
                      ...column,
                      // new task set
                      tasks: column.tasks.map((task) =>
                        task.id === payload.task.id
                          ? { ...task, ...payload.task }
                          : task
                      ),
                    }
                  : column
              ),
            }
          : board
      )
    );
  };

  const handleDeleteTask = (payload: TrackDraggableTask) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === payload.boardId
          ? {
              ...board,
              wipLimits: board.wipLimits.map((column) =>
                column.id === payload.columnId
                  ? {
                      ...column,
                      tasks: column.tasks.filter(
                        (task) => task.id !== payload.task.id
                      ),
                    }
                  : column
              ),
            }
          : board
      )
    );
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (options: FilterOptions) => {
    setFilterOptions(options);
  };

  return (
    <div className="flex bg-zinc-900 flex-col h-fit">
      <header className=" bg-black text-primary-foreground py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kanban Dashboard</h1>

        <div className="flex items-center gap-4">
          <Input
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-primary-foreground text-primary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-opacity-50"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2  text-black hover:text-xl transition-all duration-500"
              >
                <FilterIcon className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filterOptions.assignee === null}
                onCheckedChange={() =>
                  handleFilter({ ...filterOptions, assignee: null })
                }
              >
                All Assignees
              </DropdownMenuCheckboxItem>
              {users.map((user, idx) => (
                <DropdownMenuCheckboxItem
                  key={idx}
                  checked={filterOptions.assignee === user.email}
                  onCheckedChange={() =>
                    handleFilter({ ...filterOptions, assignee: user.email })
                  }
                >
                  <Avatar className="w-5 h-5 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  {user.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-6 transition-all duration-1000">
        {boards.map((board, idx) => (
          <div key={idx} className=" bg-black rounded-lg p-4">
            <div className="flex flex-row justify-between items-center py-3">
              <h2 className="text-lg font-bold mb-4">{board.name}</h2>
              <AddTask
                cbk={handleAddTask}
                payload={{
                  boardId: board.id,
                }}
              />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
              {board.wipLimits.map((column: Column, idx) => (
                <div
                  key={idx}
                  className="rounded-lg p-4  bg-zinc-900"
                  onDragOver={handleDragOver}
                  onDrop={(e) =>
                    handleDrop(
                      e,
                      board.id,
                      column.id,
                      column.tasks[column.tasks.length - 1]?.status || "backlog"
                    )
                  }
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-bold">{column.name}</h3>
                    <div className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                      {column.tasks.length}/{column.wip}
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {column.tasks.map((task, idx) => (
                      <TaskCard
                        cbk={handleDragStart}
                        editCbk={handleEditTask}
                        deleteCbk={handleDeleteTask}
                        payload={{
                          boardId: board.id,
                          columnId: column.id,
                          task: task,
                        }}
                        key={idx}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
