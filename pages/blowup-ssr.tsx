const ServerSideBlowup = () => {
  throw new Error("server-side blowup");
};
// add getInitialProps to prevent prerendering and use server-side rendering instead
// https://github.com/zeit/next.js/tree/v9.1.4#automatic-static-optimization
ServerSideBlowup.getInitialProps = async () => ({});

export default ServerSideBlowup;
