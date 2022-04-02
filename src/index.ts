import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config();

// This is comment
console.log('Hello world');
console.log(add(1, 4));
console.log(process.env.MY_NAME);
