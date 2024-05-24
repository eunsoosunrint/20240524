const SUBJECT = ["국어", "영어", "수학", "웹프"];

class ScoreTable {
  studentList = [];

  addStudent(student) {
    this.studentList.push(student);
    this.updateRank(student);
  }
  findById(studentId) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (studentId == this.studentList[i].id) return this.studentList[i];
    }
  }
  updateRank(student) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].getAvg() < student.getAvg())
        this.studentList[i].rank++;
      else student.rank++;
    }
  }
  drawTable() {
    document.write("<h2> 학생 성적 조회 </h2>");
    document.write("학번  이름  국어 영어 수학 웹프 석차<br>");
    let i, j;
    for (i = 0; i < this.studentList.length; i++) {
      document.write(
        `${this.studentList[i].id}&nbsp ${this.studentList[i].name} &nbsp `
      );
      for (j = 0; j < SUBJECT.length; j++) {
        document.write(`${this.studentList[i].score[j]} &nbsp `);
      }
      document.write(`...${this.studentList[i].rank}<br>`);
    }
  }
}

class Student {
  name;
  id;
  score;
  rank = 0;

  constructor(name, id, score) {
    this.name = name;
    this.id = id;
    this.score = score;
  }
  getAvg() {
    let sum = 0;
    for (let i = 0; i < SUBJECT.length; i++) {
      sum += this.score[i];
    }
    return sum / SUBJECT.length;
  }
  toGrade(score) {
    switch (parseInt(score / 10)) {
      case 10:
      case 9:
        return "A";
      case 8:
        return "B";
      case 7:
        return "C";
      case 6:
        return "D";
      default:
        return "F";
    }
  }
  drawScore() {
    document.write(`<h3>학번: ${this.id} &nbsp 이름:${this.name}</h3>`);
    for (let i = 0; i < SUBJECT.length; i++) {
      document.write(
        `${SUBJECT[i]} | ${this.score[i]} | ${this.toGrade(this.score[i])}<br>`
      );
    }
  }
}

function drawTitle() {
  let star = true;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 51; j++) {
      if (i == 2) {
        document.write("<h1>SEIS 대선린서비스</h1>");
        star = !star;
        break;
      } else if (star) {
        document.write("*");
      } else {
        document.write("&nbsp");
      }
      star = !star;
    }
    document.write("<br>");
  }
}
// 타이틀 그리기
drawTitle();

// 데이터 정의
const table = new ScoreTable();

let s1 = new Student("강가연", 10301, [86, 46, 76, 57]);
let s2 = new Student("남나연", 10302, [77, 65, 86, 99]);
let s3 = new Student("도다연", 10303, [92, 98, 98, 97]);
let s4 = new Student("류라연", 10304, [86, 75, 72, 64]);
let s5 = new Student("문미연", 10305, [98, 100, 92, 88]);

table.addStudent(s1);
table.addStudent(s2);
table.addStudent(s3);
table.addStudent(s4);
table.addStudent(s5);

// 입력
let isTeacher = confirm("선생님이십니까?");
if (isTeacher) {
  table.drawTable();
} else {
  while (true) {
    let studentId = prompt("학번을 입력하세요");
    let student = table.findById(studentId);
   
    if (!student) continue;

    student.drawScore();
    break;
  }
}