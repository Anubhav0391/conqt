import React, { useState } from "react";
import Nav from "../components/Nav";
import { IoMdCheckmark } from "react-icons/io";
import ItemFrom from "../components/ItemFrom";
import SupplierForm from "../components/SupplierForm";

const InventoryManagement = () => {
  const [selected, setSelected] = useState([]);

  function handleSelect(value) {
    console.log(value);
    setSelected((pre) => {
      console.log(pre);
      if (pre.includes(value)) return pre.filter((el) => el !== value);
      else return [...pre, value];
    });
  }

  return (
    <>
      <Nav />
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-center gap-6 py-10">
          <div className="flex items-center gap-3">
            <div
              onClick={() => handleSelect("item")}
              className={`w-[20px] cursor-pointer h-[20px] rounded-[6px] border ${
                selected.includes("item")
                  ? "border-[#007AFF] bg-[#F9F5FF]"
                  : "border-[#d0d5dd]"
              }`}
            >
              {selected.includes("item") && (
                <IoMdCheckmark className=" m-auto text-[#007AFF]" />
              )}
            </div>
            <p>Item</p>
          </div>
          <div className="flex items-center gap-3">
            <div
              onClick={() => handleSelect("supplier")}
              className={`w-[20px] cursor-pointer h-[20px] rounded-[6px] border ${
                selected.includes("supplier")
                  ? "border-[#007AFF] bg-[#F9F5FF]"
                  : "border-[#d0d5dd]"
              }`}
            >
              {selected.includes("supplier") && (
                <IoMdCheckmark className=" m-auto text-[#007AFF]" />
              )}
            </div>
            <p>Supplier</p>
          </div>
        </div>
        {selected.includes("item") && <ItemFrom />}
        {selected.includes("supplier") && <SupplierForm />}
        {!!selected.length && (
          <div className="text-center">
            <p className="font-[700] text-[40px] text-center">Save Changes</p>
            <p className="text-[16px] my-4">
              The data submitted by users will be displayed below
            </p>
            <button className="font-medium bg-[#007AFF] rounded-[8px] py-[12px] w-[240px] text-white">
              Save Changes
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default InventoryManagement;
