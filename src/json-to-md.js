const fs = require('fs');
const path = require('path');
const args = require('yargs')
    .command('build', 'output location for markdown')
    .option('data', {type: 'array', desc: 'data files to convert'})
    .option('verbose', {type: 'boolean'})
    .demand(['data','build'])
    .argv;


function log(msg) {
    if (args.verbose) {
        console.log(msg)
    }
}

/**
 * Format authors for APA citation
 * @param {string[]} authors - Array of author names
 * @returns {string} Formatted author string
 */
function formatAuthors(authors) {
  if (!authors || authors.length === 0) {
    return '';
  }

  // Handle organization names
  if (authors.length === 1 && !authors[0].includes(',')) {
    return authors[0];
  }
  
  if (authors.length === 1) {
    return authors[0];
  } else if (authors.length === 2) {
    return `${authors[0]} & ${authors[1]}`;
  } else {
    const lastAuthor = authors[authors.length - 1];
    const otherAuthors = authors.slice(0, authors.length - 1);
    return `${otherAuthors.join(', ')}, & ${lastAuthor}`;
  }
}

/**
 * Format publication date for APA citation
 * @param {string} date - ISO date string
 * @returns {string} Formatted date
 */
function formatPublishDate(date) {
  if (!date) return '';
  
  try {
    const dateObj = new Date(date);
    return `(${dateObj.getFullYear()})`;
  } catch (e) {
    return `(${date.split('-')[0]})`;
  }
}

/**
 * Create an APA style citation
 * @param {Object} item - Reference item
 * @returns {string} APA formatted citation
 */
function createApaCitation(item) {
  const authors = formatAuthors(item.authors);
  const year = formatPublishDate(item['publish-date']);
  const title = item.title;
  const publication = item.publication ? `*${item.publication}*` : '';
  const url = item.url ? `[${item.url}](${item.url})` : '';
  
  let citation = '';
  
  if (authors) {
    citation += authors + ' ';
  }
  
  if (year) {
    citation += year + '. ';
  }
  
  if (title) {
    citation += title + '. ';
  }
  
  if (publication) {
    citation += publication + '. ';
  }
  
  if (url) {
    citation += url;
  }
  
  return citation;
}

/**
 * Process a single reference item into markdown
 * @param {Object} item - Reference item
 * @returns {string} Markdown representation
 */
function processItem(item) {
  let markdown = `## ${item.title}\n\n`;
  
  // Add APA citation
  markdown += createApaCitation(item) + '\n\n';
  
  // Add description if available
  if (item.description) {
    markdown += `> ${item.description}\n\n`;
  }
  
  // Add notes if available
  if (item.notes && item.notes.length > 0) {
    item.notes.forEach(note => {
      markdown += `> *${note.participant}*: ${note.note}\n\n`;
    });
  }
  
  return markdown;
}









function main() {

  let report = {
      valid: 0,
      invalid: 0,
      review: []
  }

    // Create output directory (if doesn't exist)
    if (!fs.existsSync(args.build)) {
        fs.mkdirSync(args.build, { recursive: true });
    }

    // Iterate over each data file to process
    args.data.forEach(item => {
        log(item); 

        const asset = JSON.parse(fs.readFileSync(item, 'utf8'));
        let bn = path.basename(item, path.extname(item));
        const md = path.join(args.build, bn + '.md')

        let markdown = `# ${bn.toUpperCase()}\n`;

        if (asset.description) {
            markdown += `${asset.description}\n\n`;
        }

        // Process each item
        if (asset.data && Array.isArray(asset.data)) {
            asset.data.forEach(item => {
                markdown += processItem(item);
                report.valid++;
            });
        }
        
        // Extract the basename (filename without path) and remove the extension
        fs.writeFileSync(md, markdown);
        log(md);
    });


  console.log(`Converted ${report.valid} resources from ${args.data.length} data files to markdown in the ${args.build} directory.`)
}

main();
