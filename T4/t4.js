'use strict';
const gradescore = +prompt('Give your grade score (0-100):');

const grading = document.getElementById('target');
if (gradescore >= 0 && gradescore <= 39) {
  grading.innerHTML = `<p>with ${gradescore} your grade is 0 </p>`;
} else if (gradescore >= 40 && gradescore <= 51) {
  grading.innerHTML = `<p> with ${gradescore} your grade is 1 </p>`;
} else if (gradescore >= 52 && gradescore <= 63) {
  grading.innerHTML = `<p> with ${gradescore} your grade is 2 </p>`;
} else if (gradescore >= 64 && gradescore <= 75) {
  grading.innerHTML = `<p> with ${gradescore} your grade is 3 </p>`;
} else if (gradescore >= 76 && gradescore <= 87) {
  grading.innerHTML = `<p> with ${gradescore} your grade is 4 </p>`;
} else if (gradescore >= 88 && gradescore <= 100) {
  grading.innerHTML = `<p> with ${gradescore} your grade is 5 </p>`;
} else {
  grading.innerHTML = '<p>Invalid score </p>';
}
