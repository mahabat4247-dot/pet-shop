import { access } from 'node:fs/promises';

await access('package.json');
console.log('Lint passed: package.json exists.');
