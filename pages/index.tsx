import React from "react";

const Blowup = () => {
  const emptyArr: any[] = [];
  const nonExistentItem = emptyArr[0].something;
  return <div>This page should throw an exception {nonExistentItem}</div>;
};

// add getInitialProps to prevent prerendering and use server-side rendering instead
// https://github.com/zeit/next.js/tree/v9.1.4#automatic-static-optimization
Blowup.getInitialProps = async () => ({});

export default Blowup;
