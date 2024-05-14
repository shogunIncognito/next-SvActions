import { TaskForm } from "@/app/new/TaskForm"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function page({ params }: { params: { id: number } }) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    if (!task) redirect('/404')

    return (
        <div className="flex items-center justify-center pt-14">
            <TaskForm task={task} />
        </div>
    )
}
