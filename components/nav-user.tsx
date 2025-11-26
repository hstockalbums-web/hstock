"use client"

import {
  LogOut,
  Mail,
  Users,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Session } from "next-auth"
import { logOut } from '@/app/action/signin-action';
import { useRouter } from "next/navigation"


export function NavUser({ session} : {session:Session | null}) {
  const router = useRouter()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 focus-visible:ring-0'>
            <Button variant="ghost" className='w-full'>{session?.user?.email}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users />
                <span>{session?.user?.name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail />
                <span>{session?.user?.email}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuItem onClick={()=>{
                logOut()
                router.refresh()
              }} className="cursor-pointer">
              <LogOut />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
