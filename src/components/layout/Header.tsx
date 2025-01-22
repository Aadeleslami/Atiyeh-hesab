import React from "react";
import { IconMenu3, IconUser } from "@tabler/icons-react";

function Header() {
  return (
    <div className="p-4 flex justify-between items-center bg-zinc-100 lg:bg-white">
      <div className="flex justify-start items-center gap-x-2">
        <IconMenu3 className="flex lg:hidden" />
        <p>موسسه</p>
      </div>

      <ul className="flex gap-x-4">
        <li>
          <span>خانه</span>
        </li>
        <li>
          <span>درباره ما</span>
        </li>
        <li>
          <span>ارتباط با ما</span>
        </li>
        <li>
          <span>مقالات</span>
        </li>
      </ul>

      <IconUser className="flex lg:hidden" />
      <button className="btn bg-blue_default text-white">
        <IconUser color="white" />
        ورود
      </button>
    </div>
  );
}

export default Header;
