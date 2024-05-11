"use client"
import Link from "next/link"
import {
  Bell,
  CircleUser,
  CreditCard,
  Home,
  LineChart,
  Loader,
  Menu,
  Package,
  Package2,
  PlusCircle,
  Search,
  ShoppingCart,
  UserCircle,
  Users,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTheme } from "next-themes"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import * as React from "react"
import { CaretSortIcon, CheckIcon, ReloadIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CommandList } from "cmdk"
import { Separator } from "./separator"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import Stripe from "stripe"

interface DashboardProps {
  subscription:string
  
  children: React.ReactNode

}

let dashboardLink = [
  {
    name: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    link: "#",
  },
  {
    name: "Orders",
    icon: <ShoppingCart className="h-4 w-4" />,
    link: "#",
  },
  {
    name: "Products",
    icon: <Package className="h-4 w-4" />,
    link: "#",
  },
  {
    name: "Customers",
    icon: <Users className="h-4 w-4" />,
    link: "#",
  },
  {
    name: "Settings",
    icon: <LineChart className="h-4 w-4" />,
    link: "/dashboard/settings",
  },
]

export default function Dashboard({subscription,children}: DashboardProps) {
  const [open, setOpen] = React.useState(false)
  const [teamName, setTeamName] = React.useState("")
  const {data: session}  = useSession()
  const [loading, setLoading] = React.useState(false)
  const [name, setName] = React.useState("")
  const [dialog, setDialog] = React.useState(false)
  // const query = useQuery({ queryKey: ['teams'], queryFn:  async () => {
  //   const response = await fetch('/api/teams/get-teams')
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   console.log(response.json())
  //   return response.json()
  // },
  // })
  console.log(subscription)

  const createTeam = async () => {  
    setLoading(true)
    const res = await fetch("/api/teams/create-team", {
      method: "POST",
      body: JSON.stringify({ name: teamName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
   setLoading(false)
  }
  const router = useRouter()
  const { setTheme } = useTheme()
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]
  return (
    <div className="grid h-screen w-full  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden rounded-r-xl md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 ">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 ">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Label className="px-3 py-2 text-muted-foreground font-bold opacity-70 text-xs font-mono">MAIN</Label>

              {dashboardLink.map((link) => (
                <Link href={link.link} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            <Separator className="mt-3" />
            <Label className="px-3 py-2 text-muted-foreground font-bold opacity-70 text-xs font-mono">Settings</Label>
            <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <CircleUser className="h-4 w-4" />
              Profile
            </Link>
            <Link href={`/dashboard/settings/billing`} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <CreditCard className="h-4 w-4" />
              Billing
            </Link>

            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to  {subscription}</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4   px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to {subscription}</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1 z-50">
          
          </div>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          {session?.user?.image ? (
            <img src={session.user.image} width={24} height={24} className="rounded-full" alt="j"/>
          ) : (
            <UserCircle className="h-6 w-6" />

          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
     
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>      
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </header>

        {/* <main className="flex flex-1 flex-col rounded-l-3xl bg-muted/90  p-4 md:gap-8 md:p-1">
         <div className="grid grid-cols-5 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8  md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          <div className="col-span-2 bg-red-400 items-start">
            ij
          </div>
          <div className="col-span-3 bg-white">
            dsaasd
          </div>
          </div>
        </main> */}
        <main className="flex flex-1 flex-col rounded-tl-3xl bg-muted/90  p-4 md:gap-8 md:p-1 lex  gap-4  lg:gap-6 lg:p-6 ">
        {/* <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden   md:block">
        <div className="flex h-full  flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
               
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          
        </div>
      </div> */}
      {/* <div className="flex flex-col"> */}
        
         {children}
      {/* </div> */}
    {/* </div> */}
        </main>
      </div>
    </div>
  )
}




