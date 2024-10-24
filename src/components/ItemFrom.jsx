import React, { useState } from "react";
import { useSelector } from "react-redux";

const initialData = {
    itemName:'',
    quantity:'',
    unitPrice:'',
    currency:'$',
    submissionDate:''
};

const ItemFrom = () => {
  const [formData, setFormData] = useState(initialData);
  const {itemDetails}=useSelector(store=>store)
  console.log({itemDetails})

  function handleChange(e){
    setFormData(form=>({
        ...form,
        [e.target.name]:e.target.value
    }))
  }

  return (
    <div className=" mb-10">
      <p className="font-[700] text-[40px] text-center mb-10">Item Details</p>
      <form className="bg-[#EBEEFD] p-[32px] rounded-[16px] flex flex-col gap-[40px]">
        <div className="flex gap-[80px]">
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Item Name</p>
            <input
              onChange={handleChange}
              type="text"
              name="itemName"
              placeholder="Enter item name"
              className="w-full rounded-[6px] px-[12px] py-[8px] border border-[rgba(0,0,0,0.2)]"
              value={formData.itemName}
            />
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Max 225 characters
            </p>
          </div>
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Quantity </p>
            <input
              onChange={handleChange}
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="w-full rounded-[6px] px-[12px] py-[8px] border border-[rgba(0,0,0,0.2)]"
              value={formData.quantity}
            />
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">Numeric value</p>
          </div>
        </div>
        <div className="flex gap-[80px]">
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Unit Price</p>
            <input
              onChange={handleChange}
              type="number"
              name="unitPrice"
              placeholder="Enter unit price"
              className="w-full rounded-[6px] px-[12px] py-[8px] border border-[rgba(0,0,0,0.2)]"
              value={formData.unitPrice}
            />
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Numeric value (USD)
            </p>
          </div>
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Date of Submission </p>
            <input
              onChange={handleChange}
              type="date"
              name="submissionDate"
              placeholder="Select date"
              className="w-full rounded-[6px] px-[12px] py-[7px] border border-[rgba(0,0,0,0.2)]"
              value={formData.submissionDate}
            />
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Format: MM/DD/YYYY
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemFrom;
