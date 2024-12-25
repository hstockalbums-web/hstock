"use client"

import { useUseSideBar } from "@/hook/use-open-sidebar"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const AnnouncementBar=()=>{
    const { isOpen } = useUseSideBar()
    return(isOpen ||
        <div className="group mx-auto w-full relative top-0 bg-indigo-600 py-3 text-white transition-all duration-300 md:py-0">
            <div className="flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
                <Link
                    href="#pricing-plan"
                    className="inline-flex text-xs leading-normal md:text-sm"
                >
                ✨{" "}
                <span className="ml-1 font-[580] dark:font-[550]">
                    {" "}
                    Introducing our 10 days free trail
                </span>{" "}
                <ChevronRight className="ml-1 mr-2 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
                </Link>
            </div>
            <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
        </div>
    )
}
export default AnnouncementBar