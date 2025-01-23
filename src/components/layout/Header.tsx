import React from "react";
import { IconMenu3,  } from "@tabler/icons-react";

function Header() {
  return (
    <div className="p-4 grid grid-cols-2 bg-zinc-100 lg:bg-white">
      <div className="flex justify-start items-center gap-x-2">
        <IconMenu3 className="flex lg:hidden" />
        <p className="text-xl font-bold">کاوشگران کاردان آتی نگرد</p>
      </div>

      <ul className="hidden  lg:flex gap-x-4 ">
        <li className="cursor-pointer hover:text-blue_default hover:font-bold">
          <span>خانه</span>
        </li>
        <li className="cursor-pointer hover:text-blue_default hover:font-bold">
          <span>درباره ما</span>
        </li>
        <li className="cursor-pointer hover:text-blue_default hover:font-bold">
          <span>ارتباط با ما</span>
        </li>
      </ul>

      
    
    </div>
  );
}

export default Header;
