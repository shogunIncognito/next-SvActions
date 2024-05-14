import TaskCard from "@/components/TaskCard";
import prisma from "@/lib/prisma";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  return (
    <section className="grid grid-cols-3 gap-2 mt-5">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
}
