import React from "react";
import MultiColumnList from "./MultiLinks";
import Icons_numbers from "./Icons_numbers";
import LogoPart from "./LogoPart";
import ListFooter from "./ListFooter";
import ResponsevMultiColumnList from "./ResponsevMultilinks";

export default function Footer() {
  return (
    <footer
      style={{ direction: "rtl" }}
      className="bg-[#555555] text-white pt-8 pb-36"
    >
      <MultiColumnList />
      <ResponsevMultiColumnList />
      <LogoPart />
      <Icons_numbers />
      <ListFooter />
    </footer>
  );
}
