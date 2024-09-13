import EditTask from "@/pages/Kanban/components/EditTask";

import { Trash } from "lucide-react";
import { motion } from "framer-motion";
import { TrackDraggableTask } from "@/components/custom/data";
import { Badge } from "@/components/ui/badge";

interface TaskCardProps {
  payload: TrackDraggableTask;
  cbk: (task: TrackDraggableTask) => void;
  editCbk: (task: TrackDraggableTask) => void;
  deleteCbk: (id: TrackDraggableTask) => void;
}
export const TaskCard = ({
  payload,
  cbk,
  editCbk,
  deleteCbk,
}: TaskCardProps) => (
  <motion.div
    key={payload.task.id}
    className="text-card-foreground p-4 rounded-lg shadow-md hover:shadow-lg bg-black text-white transition-all duration-300"
    draggable={true}
    onDragStart={() => cbk(payload)}
  >
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-lg font-semibold text-white">{payload.task.title}</h4>
      <div className="flex items-center gap-2">
        {payload.task.priority === "high" && (
          <Badge variant="destructive">High</Badge>
        )}
        {payload.task.priority === "medium" && (
          <Badge variant="secondary" className="bg-yellow-300 text-yellow-900">
            Medium
          </Badge>
        )}
        {payload.task.priority === "low" && (
          <Badge variant="secondary" className="bg-green-500 text-green-900">
            Low
          </Badge>
        )}
      </div>
    </div>
    <p className="text-sm text-muted-foreground mb-4 text-white">
      {payload.task.description}
    </p>
    <div className="flex items-center justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {payload.task.labels.map((label, idx) => (
          <Badge key={idx} variant="outline" className="text-white">
            {label}
          </Badge>
        ))}
      </div>
      <div className="flex items-center gap-2 text-white">
        <EditTask cbk={editCbk} payload={payload} />

        <span className="bg-red-600 w-9 rounded-md  h-9 flex items-center justify-center">
          <Trash
            enableBackground={"red"}
            size={20}
            color="white"
            onClick={() => deleteCbk(payload)}
            aria-label="Delete task"
          />
        </span>
      </div>
    </div>
  </motion.div>
);
