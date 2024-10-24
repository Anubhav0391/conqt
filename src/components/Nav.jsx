import React from "react";

const Nav = () => {
  return (
    <>
      <div
        className="flex bg-[#007AFF] p-[20px] justify-between items-center text-white"
      >
        <div className="flex gap-2 ">
          <div className="w-[40px] h-[40px] rounded-[50%] bg-white"></div>
          <p className="text-[28px] font-medium">Inventory Management System</p>
        </div>
        <p>
            Home
        </p>
      </div>
    </>
  );
};

export default Nav;
