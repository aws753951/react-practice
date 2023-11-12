import { useContext } from "react";
import BookContext from "../context/books";

function useBookCoutext() {
  return useContext(BookContext);
}

export default useBookCoutext;
