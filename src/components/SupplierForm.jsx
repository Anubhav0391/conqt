import React, { useState } from "react";

const initialData = {
  supplierName: "",
  companyName: "",
  email: "",
  currency: "$",
  phoneCode: "+91",
  phoneNumber: "",
  countryId: "",
  stateId: "",
  cityId: "",
};

const SupplierForm = () => {
  const [formData, setFormData] = useState(initialData);

  function handleChange(e) {
    setFormData((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="mb-10">
      <p className="font-[700] text-[40px] text-center mb-10">
        Supplier Details
      </p>
      <form className="bg-[#EBEEFD] p-[32px] rounded-[16px] flex flex-col gap-[40px]">
        <div className="flex gap-[80px]">
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Supplier Name</p>
            <input
              value={formData.supplierName}
              type="text"
              name="supplierName"
              placeholder="Enter supplier name"
              className="w-full rounded-[6px] px-[12px] py-[8px] border border-[rgba(0,0,0,0.2)]"
            />
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Max 225 characters
            </p>
          </div>
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Company Name </p>
            <input
              value={formData.companyName}
              type="text"
              name="companyName"
              placeholder="Enter Company name"
              className="w-full rounded-[6px] px-[12px] py-[8px] border border-[rgba(0,0,0,0.2)]"
            />
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Max 225 characters
            </p>
          </div>
        </div>
        <div className="flex gap-[80px]">
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Country</p>
            <select className="w-full rounded-[6px] px-[12px] py-[9px] border border-[rgba(0,0,0,0.2)]">
              <option value="">USA</option>
            </select>
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Select country from the list
            </p>
          </div>
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">State</p>
            <select className="w-full rounded-[6px] px-[12px] py-[9px] border border-[rgba(0,0,0,0.2)]">
              <option value="">USA</option>
            </select>
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Select state from the list
            </p>
          </div>
        </div>
        <div className="flex gap-[80px]">
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">City</p>
            <select className="w-full rounded-[6px] px-[12px] py-[9px] border border-[rgba(0,0,0,0.2)]">
              <option value="">USA</option>
            </select>
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Select city from the list
            </p>
          </div>
          <div className="w-[50%] space-y-[1px]">
            <p className="text-[14px] font-medium ">Email Address </p>
            <input
              value={formData.email}
              type="email"
              name="email"
              placeholder="Enter email address"
              className="w-full rounded-[6px] px-[12px] py-[8px] border border-[rgba(0,0,0,0.2)]"
            />
            <p className="text-[12px] text-[rgba(0,0,0,0.5)]">
              Valid email format
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupplierForm;
