import { HANDLE_ITEM_CHANGE, HANDLE_SUPPLIER_CHANGE } from "../actionTypes";

const initialState = {
  itemDetails: {
    itemName: "",
    quantity: "",
    unitPrice: "",
    currency: "$",
    submissionDate: "",
  },
  supplier: {
    supplierName: "",
    companyName: "",
    email: "",
    currency: "$",
    phoneCode: "+91",
    phoneNumber: "",
    countryId: "",
    stateId: "",
    cityId: "",
  },
};

export const inventryManagment = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_ITEM_CHANGE:
      return { ...state.itemDetails, [payload.key]: payload.value };
    case HANDLE_SUPPLIER_CHANGE:
      return { ...state.supplier, [payload.key]: payload.value };
    default:
      return state;
  }
};
