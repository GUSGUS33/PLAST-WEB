import { spawn } from 'child_process';
const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(npxCommand, ['next', 'dev', '-H', '0.0.0.0', '-p', '3000'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
child.on('exit', code => process.exit(code));
