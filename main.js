import skills from "./skills.json" assert { type: "json" };
console.log(skills);

var skill1 = Object.values(skills[0]);
var skill2 = Object.values(skills[1]);
var skill3 = Object.values(skills[2]);

document.getElementById("skill-1").innerHTML = skill1;
document.getElementById("skill-2").innerHTML = skill2;
document.getElementById("skill-3").innerHTML = skill3;
