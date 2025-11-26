"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";


import { cn } from "@/lib/utils";
import { LogOut, LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import AnimationContainer, { FullWidthWrapper } from "./animation-container";
 import MobileNavbar from "./MobileNavbar";
import Image from "next/image";
import { MainNav } from "./main.nav";
import { siteConfig } from "@/config/site-config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logOut } from '@/app/action/signin-action';
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useRouter } from "next/navigation";

function getInitials(fullName:string) {
  if (typeof fullName !== 'string' || fullName.trim() === '') {
    return ''
  }

  const nameParts = fullName.trim().split(' ');
  let initials = '';

  for (let i = 0; i < nameParts.length; i++) {
    const part = nameParts[i];
    if (part.length > 0) {
      initials += part[0].toUpperCase();
    }
  }
  return initials;
}

const Navbar = ({session}:any) => {
    const router = useRouter()
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 8) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <header className={cn(
        "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
        scroll && "dark:text-white text-black bg-background/40 backdrop-blur-md"
      )}>
        <AnimationContainer reverse delay={0.1} className="size-full">
          <FullWidthWrapper className="flex items-center justify-start md:justify-between">
            <MobileNavbar session={session}/>
            <div className="flex items-center space-x-12">
              <Link href="/" className="font-bold text-lg flex items-center">
                <Image
                width={50} 
                height={50} 
                src={"/logo.png"}
                alt="logo" 
                className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                {siteConfig.siteName}
              </Link>
   
            </div>
            <MainNav scroll={scroll}/>

            {session ? 
             <>
            {session?.user?.role=="admin" ? 
             <div className="hidden md:flex items-center gap-x-4">
               <Link href={'/control-panel'} className={cn(buttonVariants({ size: "sm"}),"bg-primary")} >Admin Dashboard</Link>
               {/* <div className="hidden md:flex"><ToggleTheme /></div> */}
             </div>
            : 
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className='focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 focus-visible:ring-0'>
                    <Avatar>
                      <AvatarFallback className="font-bold">{getInitials(session?.user?.name)}</AvatarFallback>
                    </Avatar>
                    {/* <Button variant="ghost" className='w-full'>{session?.user?.name}</Button> */}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60" align="end">
                    <DropdownMenuItem>
                      <Link href="/purchases" className={" w-full"} >My purchases</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={()=>{
                        logOut()
                        router.refresh()
                      }}>
                      <LogOut />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/#pricing-plan" className={cn(buttonVariants({ size: "sm"}),"w-full")} >Buy Now</Link>
                {/* <div className={buttonVariants({ size: "sm", variant: "ghost" })}></div> */}
                
                {/* <div className="hidden lg:flex"><ToggleTheme /></div> */}
              </div>
            </div>
            }
             </> 
            :
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-x-4">
                <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>Sign In</Link>
                <Link href="/sign-up" className={cn(buttonVariants({ size: "sm"}),"bg-primary")} >Sign-Up</Link>
                {/* <div className="hidden lg:flex"><ToggleTheme /></div> */}
              </div>
            </div>}
          </FullWidthWrapper>
        </AnimationContainer>
      </header>
    )
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href!}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2 text-neutral-300">
                      <h6 className="text-sm font-medium !leading-none">{title}</h6>
                    </div>
                    <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                      {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar
