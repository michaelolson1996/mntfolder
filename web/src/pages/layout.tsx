
import { useState } from "react";
import Nav from "../components/global/nav/Nav"
import Search from "../components/global/search/Search";

export default function Layout({ children }) {
  const [isSearching, setSearching] = useState(false);

  return (
    <>
        <Nav />

        {
          isSearching ? <Search toggleSearch={setSearching} /> : <></>
        }
        
        {children}
    </>
  );
};