'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

export async function createTask(formData: FormData) {
    const title = formData.get('title')?.toString()
    const description = formData.get('description')?.toString()
    const priority = formData.get('priority')?.toString()

    if (!title || !description || !priority) return console.error('Missing fields')

    await prisma.task.create({
        data: {
            title,
            description,
            priority,
        }
    })

    redirect('/')
}

export async function deleteTask(formData: FormData) {
    const id = formData.get('taskId')?.toString()
    
    await prisma.task.delete({
        where: {
            id: Number(id)
        }
    })
    
    revalidatePath('/')
}

export async function updateTask(formData: FormData) {
    const id = formData.get('id')?.toString()
    const title = formData.get('title')?.toString()
    const description = formData.get('description')?.toString()
    const priority = formData.get('priority')?.toString()

    await prisma.task.update({
        where: {
            id: Number(id)
        },
        data: {
            title,
            description,
            priority,
        }
    })

    redirect('/')
}