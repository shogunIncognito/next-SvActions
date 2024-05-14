import { Button } from "./ui/button";
import { deleteTask } from "@/actions/TaskActions";

export default function TaskDeleteButton({taskId}: {taskId: number}): JSX.Element {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button variant="destructive">Delete</Button>
        </form>
    )
}
