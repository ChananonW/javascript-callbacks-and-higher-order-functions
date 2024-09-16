//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  const count = array.filter(operation).length;
  return count >= 5;
}

const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function isGreaterThan70(score) {
  return score > 70;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isGreaterThan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isGreaterThan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isGreaterThan70)

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result ? 'ผ่านเกณฑ์ ' : 'ไม่ผ่านเกณฑ์ '}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result ? 'ผ่านเกณฑ์ ' : 'ไม่ผ่านเกณฑ์ '}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result ? 'ผ่านเกณฑ์ ' : 'ไม่ผ่านเกณฑ์ '}`);
