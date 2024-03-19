# How to reproduce the issue

1. Build storybook and serve it.
  ```shell
  npm install
  npm run build-storybook
  npx http-server storybook-static -p 9000
  ```
2. Visit http://localhost:9000/?path=/story/example-button--primary in your browser.
3. Nothing is displayed in the browser.
