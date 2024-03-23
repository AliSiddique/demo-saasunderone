"use client";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { useTheme } from "next-themes";

export function DashboardHead() {
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme } = useTheme()

  return (
    <div className="flex flex-col w-full  z-50">
      <div className="w-full top-0 h-16  grid items-center z-[100] bg-surface border-b border-border">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full relative px-4">
          <div className="flex items-center gap-4 ">
            <Link href={"/"} className="flex items-center gap-1 text-primary">
              <img src="/next.svg" className="h-10" />
            </Link>
          </div>
          <div className="sm:flex hidden items-center gap-4">
            <Link href={"/dashboard"}>
              <Button variant="ghost" className={""}>
                Dashboard
              </Button>
            </Link>
            <Link href={"/dashboard/settings"}>
              <Button variant="ghost" className={""}>
                Settings
              </Button>
            </Link>
            <Link href={"/blog"}>
              <Button variant="ghost" className={""}>
                Blog
              </Button>
            </Link>
            {session.status == "authenticated" ? (
                      <DropdownMenu>
                                <DropdownMenuTrigger asChild>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" bg-container rounded-full flex items-center gap-2"
              >
                <div
                  className="w-8 h-8 grid bg-cover place-items-center  bg-accent text-white rounded-full border-border border"
                  style={{
                    backgroundImage: `url(${session?.data?.user?.image})`,
                  }}
                ></div>
              </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 z-50 mx-10">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Settings className="mr-2 h-4 w-4" />
              <span >Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

            ) : (
              <Link href={"/auth/sign-in"}>
                <Button
                  className={cn( "text-white" )}
                  variant="outline"
                >
                  Get started
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="h-16 w-full" />
    </div>
  );
}

  
//   export function DropdownMenuDemo() {
//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline">Open</Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56">
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <User className="mr-2 h-4 w-4" />
//               <span>Profile</span>
//               <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <CreditCard className="mr-2 h-4 w-4" />
//               <span>Billing</span>
//               <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Settings className="mr-2 h-4 w-4" />
//               <span>Settings</span>
//               <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Keyboard className="mr-2 h-4 w-4" />
//               <span>Keyboard shortcuts</span>
//               <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <Users className="mr-2 h-4 w-4" />
//               <span>Team</span>
//             </DropdownMenuItem>
//             <DropdownMenuSub>
//               <DropdownMenuSubTrigger>
//                 <UserPlus className="mr-2 h-4 w-4" />
//                 <span>Invite users</span>
//               </DropdownMenuSubTrigger>
//               <DropdownMenuPortal>
//                 <DropdownMenuSubContent>
//                   <DropdownMenuItem>
//                     <Mail className="mr-2 h-4 w-4" />
//                     <span>Email</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <MessageSquare className="mr-2 h-4 w-4" />
//                     <span>Message</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>
//                     <PlusCircle className="mr-2 h-4 w-4" />
//                     <span>More...</span>
//                   </DropdownMenuItem>
//                 </DropdownMenuSubContent>
//               </DropdownMenuPortal>
//             </DropdownMenuSub>
//             <DropdownMenuItem>
//               <Plus className="mr-2 h-4 w-4" />
//               <span>New Team</span>
//               <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <Github className="mr-2 h-4 w-4" />
//             <span>GitHub</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <LifeBuoy className="mr-2 h-4 w-4" />
//             <span>Support</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem disabled>
//             <Cloud className="mr-2 h-4 w-4" />
//             <span>API</span>
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <LogOut className="mr-2 h-4 w-4" />
//             <span>Log out</span>
//             <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     )
//   }
  