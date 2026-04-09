const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size'); // I'll check if this is available or use another way

async function main() {
  const assetsDir = 'C:\\Users\\ADMIN\\OneDrive\\Desktop\\profPort\\portfoliov3\\public\\assets';
  const files = [
    'apihub-screenshot.png',
    'ai-game-bot.png',
    'homie-coffee.png',
    'rentease.png',
    'canva-clone.png'
  ];

  files.forEach(f => {
    try {
      const stats = fs.statSync(path.join(assetsDir, f));
      console.log(`${f}: ${stats.size} bytes`);
    } catch (e) {
      console.log(`${f}: Missing`);
    }
  });
}

main();
