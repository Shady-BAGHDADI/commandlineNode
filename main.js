const DATA = require('./data');
let command = process.argv[2];
var animals = [];
var name = '';
var result = { name: '', animals: [] };
var all = [];
function doFilter() {
  DATA.data.forEach((e) => {
    e.people.forEach((e1, i) => {
      name = e1.name;
      animals = e1.animals;

      animals.forEach((e2, j) => {
        if (e2.name.includes('ry')) {
          animals = e2;
          result.name = name;
          result.animals = animals;

          all = [...all, result];
        }
      });
    });
    console.log('all', all);
  });
}
if (command === 'filter') doFilter(DATA.data);
