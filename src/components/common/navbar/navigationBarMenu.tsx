"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Nextjs",
    href: "/",
    description: "Nextjs is configured with its latest 13th version",
  },
  {
    title: "TailwindCSS",
    href: "/",
    description:
      "TailwindCSS set with tailwindcss-animate plugin, custom theme and extensions.",
  },
  {
    title: "Shadcn",
    href: "/",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  },
  {
    title: "SVGR",
    href: "/",
    description: "Transform SVGs into React components just by importing them.",
  },
];

export function NavigationBarMenu() {
  return (
    <NavigationMenu
      className="absolute transform -translate-x-1/2 z-20 left-1/2
    ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        alt="My LOGO"
                        src="https://ahmedbargady.me/favicon.ico"
                      />
                    </Avatar>

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Ahmed BARGADY
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Graduated Data Science Engineer, Tech Leader and Full
                      Stack Developer since 5 years.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                target="_blank"
                href="https://ahmedbargady.me"
                title="My Portfolio">
                Check more about me, my projects, skills and experiences.
              </ListItem>
              <ListItem
                target="_blank"
                href="https://blog.ahmedbargady.me"
                title="Jina Blog">
                Check my blog, where I share my knowledge and projects tutorials
              </ListItem>
              <ListItem
                target="_blank"
                href="https://solo.to/ahmedbargady"
                title="Solo.to">
                Contact me on social media from my Solo.to page.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Configured Techs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
