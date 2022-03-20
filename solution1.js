const DATA = require('./data');
const crypto = require('crypto');
var people = [];
var animals = [];

//process : global variable

let command = process.argv[2];
console.log(command);

var mm;
var ww;
function doFilter() {
  DATA.data.forEach((element) => {
    element.people.forEach((element, index) => {
      ww = index;
      console.log('index 1 : ', index);
      animals = element.animals;
      animals.forEach((element, j) => {
        if (element.name.includes('ry')) {
          console.log('index 2 : ', j);
          mm = j - 1;
          animals = element;
        }
      });
    });
    var _elements = [];
    if (mm == ww) {
      element.people[mm].animals = animals;
      _elements.push(element.people[mm]);
      console.log(_elements);
    } else return console.log('Nothing');
  });
}

if (command === 'filter') doFilter(DATA.data);
// function logArrayElements(element, index, array) {
//   console.log('+++++++++++++++');
//   console.log(array);
//   console.log('*********');
//   console.log('a[' + index + '] = ' + element[index]);
// }
//
// crypto.pbkdf2('a', 'b', 100, 512, 'sha512', () => {
//   DATA.data.forEach(logArrayElements);
//
//   //   DATA.data.forEach((element) => {
//   //     element.people.forEach((element) => {
//   //       console.log(element.animals);
//   //       animals = element.animals;
//   //     });
//   //   });
// });
