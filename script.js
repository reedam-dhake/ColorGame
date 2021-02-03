let N=6,score=0,count=0,round=0,correct,correctColor;
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function update() {
  document.getElementById("rounddiv").innerHTML="Level: "+round;
  document.getElementById("scorediv").innerHTML="Score: "+score;
  document.getElementById("countdiv").innerHTML="Attempts: "+count;
}

function newLevel() {
  count=0;
  round++;
  update();
  for (let i=0; i<N; i++) {
    document.getElementById(i).style.background= getRandomColor();
  }
  correct=Math.floor(Math.random()*6);
  correctColor = document.getElementById(correct).style.background ;
  document.getElementById("rgb").innerHTML= "RGB" + String(correctColor).substr(3);
}

function check() {
  count++;
  if (this.style.background==correctColor) {
    score += 5
    update();
    newLevel();
  }
  else {
    score--; 
    update();
  }
}

for (let i=0; i<N; i++) {
  document.getElementById(i).addEventListener("click",check);
}

document.getElementById("newgame").addEventListener("click",function(){
  score=0,count=0,round=0;
  newLevel();
});