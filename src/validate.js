// Given a schema validate any given data files against the schema
// Validate a single file:
//   node validate.js --data ../data/developer-advocate.json
// Validate an entire collection:
//   node validate.js --data ../data/*.json
// You can still specify a schema to override the one in the data file:
//   node validate.js --schema ../src/persona.schema.json --data ../data/*.json

const fs = require('fs');
const path = require('path');
const args = require('yargs')
    .command('schema', 'schema to use for validation (optional if defined in data file)')
    .option('data', {type: 'array', desc: 'data files to validate'})
    .option('verbose', {type: 'boolean'})
    .demand(['data'])
    .argv;

const Ajv = require("ajv/dist/2020"); // https://ajv.js.org/guide/schema-language.html#draft-2019-09-and-draft-2020-12
const addFormats = require("ajv-formats");
const ajv = new Ajv({ strict: false })
addFormats(ajv);

// Pre-load schema if provided via command line
let defaultSchema = null;
if (args.schema) {
    defaultSchema = JSON.parse(fs.readFileSync(args.schema, 'utf8'));
    log(`Using command line schema: ${args.schema}`);
}

let report = {
    valid: 0,
    invalid: 0,
    review: []
}

// Iterate over each data file to validate it
args.data.forEach(item => {
    log(item); 
    const asset = JSON.parse(fs.readFileSync(item, 'utf8'));
    
    // Determine which schema to use
    let schemaToUse = defaultSchema;
    let schemaSource = "command line";
    
    // If no default schema or we want to use the one in the data file
    if (!schemaToUse && asset.$schema) {
        const dataDir = path.dirname(item);
        const schemaPath = path.resolve(dataDir, asset.$schema);
        
        try {
            schemaToUse = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
            schemaSource = `file (${asset.$schema})`;
            log(`Using schema from data file: ${schemaPath}`);
        } catch (error) {
            console.error(`Error loading schema from ${schemaPath}: ${error.message}`);
            report.invalid++;
            report.review.push(`${item} (schema not found: ${schemaPath})`);
            return;
        }
    }
    
    if (!schemaToUse) {
        console.error(`No schema provided for ${item}`);
        report.invalid++;
        report.review.push(`${item} (no schema)`);
        return;
    }
    
    // Validate against the selected schema
    const validate = ajv.compile(schemaToUse);
    
    if (validate(asset)) {
        log(`Valid (using ${schemaSource} schema)`);
        report.valid++;
    } else {
        log(`Invalid (using ${schemaSource} schema)`);
        report.invalid++;
        report.review.push(item);
        log(validate.errors);
        console.warn(`${item} => ${JSON.stringify(validate.errors)}`);
    }
});

if (report.invalid > 0) {
    console.error(`Failed to validate:\n${report.review.join('\n')}`)
}
console.log(`Validated ${report.valid} out of ${args.data.length} resources checked.`)


function log(msg) {
    if (args.verbose) {
        console.log(msg)
    }
}