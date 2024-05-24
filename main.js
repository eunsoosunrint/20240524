const SUbJECTS = ["국어", "영어", "수학", "웹프"];

class ScoreTable {
    studentList = [];

    drawTable() {
        document.write(this.studentList[0].id + " " + this.studentList[0].name + " ");
        for(let i =0; i<this.studentList[0].score.length; i++) {
            document.write(this.studentList[0].score[i] + " ");
        }
    }
}


class Student {
    id;
    name;
    score;
    rank;

    /**
     * 
     * @param {Number} id 학번
     * @param {string} name 이름
     * @param {Array<Number>} score 점수(국,영,수,웹프)
     */
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }

    /**
     * 
     * @param {Number} score 점수
     */
    getGrade(score) {
        switch(parseInt(score/10)) {
            case 10:
            case 9:
                return "A";
            case 8:
                return "B";
            case 7:
                return "C";
            default:
                return "F";
        }
    }

    printScore() {
        document.write(`<h3>학번: ${this.id} 이름: ${this.name}</h3>`);
        for(let i =0; i<SUbJECTS.length; i++) {
            document.write(`${SUbJECTS[i]} | ${this.score[i]} | ${this.getGrade(this.score[i])} <br/>`);
        }
    }
}




function drawTitle(title) {
    for(let i=0; i<5; i++) {
        for(let j=0;j<51;j++) {
            if(i==2) {
                document.write(title);
                break;
            }else {
                document.write(j%2==0?"*":"&nbsp;");
            }
        }
        document.write("<br/>");
    }    
}

let table = new ScoreTable();
let student1 = new Student(17, "정은수", [100, 100, 100, 100]);

table.studentList.push(student1);
console.log(table);



drawTitle("<h1> SEIS 대선린서비스</h1>");

let isTeacher = confirm("선생님이십니까?");


if(isTeacher) {
    table.drawTable();
}else {
    let studentID = prompt("학번을 입력하세요");
    if(parseInt(studentID) === student1.id) {
        student1.printScore();
    }
}