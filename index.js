const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'mc.serverkamu.com', // Ganti ini ke IP server kamu
    port: 25565,
    username: 'BotSigraft',
    version: false
  });

  bot.on('spawn', () => {
    console.log('✅ Bot berhasil login ke server!');
    bot.chat('Halo semua! Bot online!');
  });

  bot.on('end', () => {
    console.log('🔁 Reconnecting...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => console.log('❌ Error:', err));
}

createBot();
