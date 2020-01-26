'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    source: fs.readFileSync('tablexls.xls') // fs.readFileSync return a Buffer
});

console.log(result)