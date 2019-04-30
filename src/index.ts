import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import server from './server';
import { ConsoleColors } from './utils/console.colors';

const port = process.env.PORT || 3000;
const dash = '----------------------';

server.listen(port, () => {
  // @ts-ignore
  console.log(ConsoleColors.FgMagenta, `\n${ dash }\nServer running on`) + console.log(ConsoleColors.FgYellow, `http://localhost:${ port }`) + console.log(ConsoleColors.FgBlue, `enviroment: ${ process.env.ENVIRONMENT.toUpperCase() }`) + console.log(ConsoleColors.FgMagenta, `${ dash }\n`);
});

