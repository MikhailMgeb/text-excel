const fs = require('fs');
const AsciiTable = require('ascii-table');

let data = fs.readFileSync('sample1.csv', 'utf-8');
data = data.split('\n');

const table = new AsciiTable();
table.setTitle('Schedule');

for (let i = 0; i < data.length; i++) {
    table.addRow(data[i].split(','))
}

console.log(table.render());
