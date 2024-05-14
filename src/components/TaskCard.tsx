import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "@prisma/client";
import clsx from "clsx";
import TaskDeleteButton from "./TaskDeleteButton";
import Link from "next/link";

export default function TaskCard({ task }: { task: Task }): JSX.Element {
    return (
        <Card>
            <CardHeader className="flex justify-between flex-row">
                <CardTitle>{task.title}</CardTitle>
                <Badge className={clsx({
                    'bg-red-500': task.priority === 'high',
                    'bg-yellow-500': task.priority === 'medium',
                    'bg-green-500': task.priority === 'low',
                    'bg-indigo-400': task.priority === 'urgent',
                })}>{task.priority}</Badge>
            </CardHeader>
            <CardContent>
                <p>{task.description}</p>
                <span>{new Date(task.createdAt).toLocaleDateString()}</span>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Link href={`tasks/${task.id}/edit`} className={buttonVariants({variant: 'default'})}>Edit</Link>
                <TaskDeleteButton taskId={task.id} />
            </CardFooter>
        </Card>
    )
}
