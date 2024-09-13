interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
  assignee: string | null;
  labels: string[];
  priority: "low" | "medium" | "high";
}

export interface TrackDraggableTask {
  boardId: string;
  columnId: string;
  task: Task;
}

interface Column {
  id: string;
  name: string;
  tasks: Task[];
  wip: number;
}

export interface Board {
  id: string;
  name: string;
  wipLimits: Column[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface FilterOptions {
  assignee: string | null;
  label: string | null;
  dueDate: string | null;
}
