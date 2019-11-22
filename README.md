# next-server-side-rollbar-example

Example that reports Next.js server-side and client-side exceptions to Rollbar

- [server-side rollbar setup](/server.js#L5-L23)
- [client-side rollbar setup](/pages/index.tsx#L8-L47)

## Usage

- edit `server.js` and add the real rollbar `post_server_item` token
- edit `pages/index.tsx` and add the real rollbar `post_client_item` token
- ```
  $ npm install
  $ NODE_ENV=production npm run build
  $ npm start
  ```
- go to http://localhost:3000 in the browser to see 3 test cases for reporting errors to Rollbar

## Links
- [Rollbar Node.js documentation](https://docs.rollbar.com/docs/nodejs) 
- [Rollbar React documentation](https://docs.rollbar.com/docs/react) 
- [Next.js issue - How to catch and handle errors to report logs on server side](https://github.com/zeit/next.js/issues/1852#issuecomment-353671222)
- [Next.js `renderErrorToHTML` source code](https://github.com/zeit/next.js/blob/v9.1.4/packages/next/next-server/server/next-server.ts#L961-L988)
- [Next.js `pages/_error.tsx` source code](https://github.com/zeit/next.js/blob/v9.1.4/packages/next/pages/_error.tsx)
- [Next.js custom error handling documentation](https://github.com/zeit/next.js/tree/v9.1.4#custom-error-handling)
- [React Error Boundaries documentation](https://reactjs.org/docs/error-boundaries.html)
