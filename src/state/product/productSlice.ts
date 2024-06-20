import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../constants/data";

interface CartCounterState {
  value: number;
  items: ItemType[] | null;
}
interface ItemType {
  product: ProductType;
  quantity: number;
}
const initialState: CartCounterState = {
  value: 0,
  items: null,
};

function putItem(state: CartCounterState, payload: ProductType):ItemType[] {
  const newItem: ItemType = {
    product: payload,
    quantity: 1,
  };
  let isInArr = false;

  if (state.items) {
    let newArr: ItemType[] = state.items?.map((item) => {
      if (item.product.name === payload.name) {
        item.quantity++;
        isInArr = true;
      }
      return item;
    });

    if (!isInArr) {
      newArr?.push(newItem);
    }
    return newArr;
  }
  return [newItem];
}

const cartCounterSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addItem: (state, action: PayloadAction<ProductType>) => {
      state.items = putItem(state, action.payload);
    },
  },
});
export const { increment, addItem } = cartCounterSlice.actions;
export default cartCounterSlice.reducer;
