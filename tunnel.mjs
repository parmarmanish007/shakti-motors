import localtunnel from 'localtunnel';

async function start() {
  try {
    const tunnel = await localtunnel({ port: 5173 });
    console.log('=== PUBLIC TUNNEL READY ===');
    console.log('PUBLIC_URL:', tunnel.url);
    console.log('===========================');

    tunnel.on('close', () => {
      console.log('Tunnel closed');
    });
    tunnel.on('error', (err) => {
      console.error('Tunnel error:', err);
    });
  } catch (err) {
    console.error('Failed to create tunnel:', err);
  }
}

start();
