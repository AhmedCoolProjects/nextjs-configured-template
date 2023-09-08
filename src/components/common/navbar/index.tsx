"use client";

import { Icons } from "@/components/icons";
import { NavigationBarMenu } from "./navigationBarMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
  return (
    <div className="flex sticky top-0 z-10 flex-row bg-white items-center justify-between shadow-lg py-2 px-8">
      {/* logo */}
      <div className="flex flex-row items-center space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://ahmedbargady.me/favicon.ico" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <h1>Nextjs Configured Template</h1>
      </div>
      <NavigationBarMenu />
      {/* avatars */}
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/favicon.ico" />
        <AvatarFallback>G.H</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Navbar;
