import https from 'https';

const username = 'RonitkumarSoni';
const token = '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';

const options = {
  hostname: 'api.github.com',
  path: `/users/${username}`,
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
    console.log("PROFILE:");
    console.log(JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();

const reposOptions = {
    hostname: 'api.github.com',
    path: `/users/${username}/repos?sort=updated&per_page=5`,
    method: 'GET',
    headers: {
      'User-Agent': 'Node.js',
      'Authorization': `token ${token}`
    }
  };
  
const reqRepos = https.request(reposOptions, (res) => {
let data = '';
res.on('data', (chunk) => {
    data += chunk;
});
res.on('end', () => {
    const repos = JSON.parse(data);
    console.log("\nREPOS:");
    console.log(repos.map(r => ({name: r.name, description: r.description, topics: r.topics, language: r.language, html_url: r.html_url})));
});
});
reqRepos.end();
