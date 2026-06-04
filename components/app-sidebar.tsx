"use client"

import * as React from "react"
import {
  CircleDollarSign,
  GalleryHorizontal,
  IndianRupee,
  LayoutDashboard,
  Mail,
  Send,
  Video,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Session } from "next-auth"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: 'Hero Section',
      icon: GalleryHorizontal,
      url: '/control-panel/hero-section',
      isnew: false
    },
    {
      title: 'User Info',
      icon: LayoutDashboard,
      url: '/control-panel',
      isnew: false
    },
    {
      title: 'Payment',
      icon: CircleDollarSign,
      url: '/control-panel/payment-info',
      isnew: false
    },
    {
      title: 'Referral',
      icon: Send,
      url: '/control-panel/referral',
      isnew: false
    },
    {
      title: 'Plan',
      icon: IndianRupee,
      url: '/control-panel/plan',
      isnew: false
    },
    {
      title: 'Youtube Video',
      icon: Video,
      url: '/control-panel/video',
      isnew: false
    },
    {
      title: 'Email Content',
      icon: Mail,
      url: '/control-panel/email-section',
      isnew: false
    },
    {
      title: 'Final Purchase',
      icon: IndianRupee,
      url: '/control-panel/final-purchase',
      isnew: true
    }
  ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  session: Session | null;
}

export function AppSidebar({ session, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-16"
            >
              <Link href={'/'}>
                <img className='size-10' src='/logo.png' />
                HStock
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser session={session} />
      </SidebarFooter>
    </Sidebar>
  )
}
