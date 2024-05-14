import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTask, updateTask } from "@/actions/TaskActions"
import { Task } from "@prisma/client"
import Link from "next/link"

export function TaskForm({ task }: { task?: Task }) {
    const taskFormAction = task ? updateTask : createTask

    return (
        <form action={taskFormAction}>
            <input type="hidden" name="id" value={task?.id} />
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{task?.id ? 'Update task' : 'Create task'}</CardTitle>
                    <CardDescription>Write down your task details</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title" defaultValue={task?.title}>Title</Label>
                            <Input id="title" name="title" placeholder="Title of your task" defaultValue={task?.title} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" defaultValue={task?.description || ''} name="description" placeholder="Description of your task" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="priority">Priority</Label>
                            <Select name="priority" defaultValue={task?.priority}>
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="urgent">Urgent</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href='/' className={buttonVariants({ variant: 'secondary' })}>Cancel</Link>
                    <Button type="submit">{task?.id ? 'Update' : 'Create'}</Button>
                </CardFooter>
            </Card>
        </form>
    )
}