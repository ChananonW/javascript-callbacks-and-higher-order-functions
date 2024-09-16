// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    array[i] = operation(array[i]);
  }
 }

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [...employeeSalaries];

function upSalary(salary) {
  return salary + 5000;
}

forEach(newEmployeeSalaries, upSalary)

console.log(newEmployeeSalaries);
