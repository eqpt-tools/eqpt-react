import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { read, write } from '@local/data/schemas/settings';
import { createWindow } from './helpers';
import server from '@local/server';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  // Listen for TRPC requests
  server.listen();

  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1100,
    height: 700,
    minWidth: 1100,
    minHeight: 700,
    center: true,
    resizable: !isProd,
    frame: false,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./login.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/login`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

ipcMain.on('close-app', () => {
  app.quit();
});

ipcMain.handle('get-env', () => isProd);

ipcMain.handle('get-port', async () => {
  const settings = await read();

  return settings.port;
});
