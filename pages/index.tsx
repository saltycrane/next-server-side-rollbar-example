import React from "react";

const Blowup = () => {
  const emptyArr: any[] = [];
  const nonExistentItem = emptyArr[0].something;
  return <div>This page should throw an exception {nonExistentItem}</div>;
};

export default Blowup;
