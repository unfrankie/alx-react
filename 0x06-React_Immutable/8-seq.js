import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => student.score >= 70);

  const capFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const result = filtered.map((student) => ({
    score: student.score,
    firstName: capFirstLetter(student.firstName),
    lastName: capFirstLetter(student.lastName),
  })).toObject();

  console.log(result);
}
