import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Task, TrackDraggableTask } from "@/components/custom/data";
import { ReactEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DialogClose } from "@radix-ui/react-dialog";

export default function EditTask({
  cbk,
  payload,
}: {
  cbk: (task: TrackDraggableTask) => void;
  payload: TrackDraggableTask;
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [newTaskInput, setNewTaskInput] = useState({
    id: payload.task.id || "",
    title: payload.task.title || "",
    description: payload.task.description || "",
    dueDate: payload.task.dueDate || "",
    status: payload.task.status || "backlog",
    assignee: payload.task.assignee || "",
    labels: (payload.task.labels as unknown as string) || "",
    priority: payload.task.priority || "low",
  });

  const handleInputChange = (field: keyof Task, value: any) => {
    setNewTaskInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      ...newTaskInput,
    };

    cbk({
      ...(payload as TrackDraggableTask),
      task: newTask as unknown as Task,
    }); // callback to update task
  };

  return (
    <Dialog modal open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger
        className="bg-black hover:scale-105 scale-90 transition-all duration-500 hover:bg-neutral-950 hover:text-white"
        asChild
      >
        <Button variant="outline">Edit Task</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <form onClick={handleSubmit}>
          <div className="space-y-4 text-black">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newTaskInput.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="due-date">Due Date</Label>
                <Input
                  id="due-date"
                  type="date"
                  value={newTaskInput.dueDate}
                  onChange={(e) => handleInputChange("dueDate", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newTaskInput.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={newTaskInput.status}
                  onValueChange={(value) => handleInputChange("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="backlog">Backlog</SelectItem>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="assignee">Assignee</Label>
                <Input
                  id="assignee"
                  value={newTaskInput.assignee || ""}
                  onChange={(e) =>
                    handleInputChange("assignee", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="labels">Labels</Label>
                <Input
                  id="labels"
                  value={newTaskInput.labels}
                  onChange={(e) => handleInputChange("labels", e.target.value)}
                  placeholder="Enter labels separated by commas"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={newTaskInput.priority}
                  onValueChange={(value) =>
                    handleInputChange("priority", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogTrigger asChild>
            <Button type="submit">Modify Task</Button>
          </DialogTrigger>
        </form>
      </DialogContent>
    </Dialog>
  );
}
