import { createContext, useState } from "react"; // 使用createContext

const BookContext = createContext(); // 記得給()

function BookProvider({ children }) {
  // 記得用小寫
  const [count, setCount] = useState(0);
  // 投入object
  const valueToStore = {
    count,
    increment: () => {
      setCount(count + 1); // 不能用prev
    },
  };
  return (
    <BookContext.Provider value={valueToStore}>{children}</BookContext.Provider>
  );
}

export default BookContext; // 給組件使用
export { BookProvider }; // 給index.js使用
