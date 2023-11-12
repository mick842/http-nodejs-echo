import { createServer } from 'http';

createServer((req, res) => {
  console.log('Request');
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);
