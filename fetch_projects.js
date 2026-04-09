import https from 'https';

const username = 'RonitkumarSoni';
const token = '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';

const projects = [
  'Ai-Game-bot-hackathone',
  'Homie-coffee',
  'rentease',
  'Canva_Clone'
];

async function getRepo(repoName) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${username}/${repoName}`,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js',
        'Authorization': `token ${token}`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          resolve(null);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });
    req.end();
  });
}

async function main() {
  const results = [];
  for (const p of projects) {
    const repo = await getRepo(p);
    if (repo) {
      results.push({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics,
        language: repo.language
      });
    } else {
      results.push({ name: p, error: 'Not found' });
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

main();
