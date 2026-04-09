const fs = require('fs');
const pdf = require('pdf-parse');

const files = [
  'c:/Users/ADMIN/OneDrive/Desktop/profPort/orignal_My_resume.pdf',
  'c:/Users/ADMIN/OneDrive/Desktop/profPort/genrative ai studio.pdf',
  'c:/Users/ADMIN/OneDrive/Desktop/profPort/github Copilot certificate.pdf',
  'c:/Users/ADMIN/OneDrive/Desktop/profPort/openPools_certificate.pdf',
  'c:/Users/ADMIN/OneDrive/Desktop/profPort/Data Analyasis.pdf'
];

async function parseAll() {
  let output = '';
  for (let file of files) {
    if (fs.existsSync(file)) {
      let dataBuffer = fs.readFileSync(file);
      try {
        let data = await pdf(dataBuffer);
        output += `\n\n=== START: ${file} ===\n`;
        output += data.text; 
        output += `\n=== END: ${file} ===\n`;
      } catch (e) {
        output += `Error reading ${file}: ${e.message}\n`;
      }
    } else {
        output += `File not found: ${file}\n`;
    }
  }
  fs.writeFileSync('pdf_output_utf8.txt', output, 'utf8');
}
parseAll();
