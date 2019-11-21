# next-server-side-rollbar-example

Example that reports Next.js server-side exceptions to Rollbar

## Usage

- edit `server.js` and add the real rollbar `post_server_item` token

- ```
  $ npm install
  $ NODE_ENV=production npm run build
  $ npm start
  ```

- go to http://localhost:3000 in the browser
- see the error in the rollbar UI at https://rollbar.com

## Links
- [Rollbar Node.js documentation](https://docs.rollbar.com/docs/nodejs) 
- [Next.js issue - How to catch and handle errors to report logs on server side](https://github.com/zeit/next.js/issues/1852#issuecomment-353671222)
- [Next.js `renderErrorToHTML` source code](https://github.com/zeit/next.js/blob/v9.1.4/packages/next/next-server/server/next-server.ts#L961-L988)
- [Next.js custom error handling documentation](https://github.com/zeit/next.js/tree/v9.1.4#custom-error-handling)
