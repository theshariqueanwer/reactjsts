import { createContext } from "react";

const SellNowContext = createContext({
    item,
    addItem: () => {},
    removeItem: () => {}
})

export default SellNowContext;