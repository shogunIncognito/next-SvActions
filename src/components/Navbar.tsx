import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";

export default function Navbar(): JSX.Element {
    return (
        <nav className="flex items-center justify-around mt-2">
            <h1>ServerActions CRUD</h1>

            <div className="flex items-center gap-2">
                <Link href="/new" className={buttonVariants({ variant: 'secondary' })}>
                    Create new task
                </Link>
                <ModeToggle />
            </div>

        </nav>
    )
}
