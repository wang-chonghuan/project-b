import { readFileSync } from 'node:fs';

const app = readFileSync(new URL('./App.jsx', import.meta.url), 'utf8');
if (!app.includes('project-b dashboard')) {
  throw new Error('expected dashboard heading');
}
console.log('project-b smoke test passed');
