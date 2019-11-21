import React from "react";

const Blowup = () => {
  const emptyArr: any[] = [];
  const nonExistentItem = emptyArr[0].something;
  return <div>This page should throw an exception {nonExistentItem}</div>;
};

// add getInitialProps to prevent prerendering and use server-side rendering instead
Blowup.getInitialProps = async () => ({});

export default Blowup;
