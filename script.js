let habitList = document.getElementById("habit-list");
let habitDays = [];
let habitDaysIndex = 0;
let habitLevels = [];

function addHabit() {
  let li = document.createElement("li");
  let title = document.createElement("div");
  title.classList.add("title");
  let title_h2 = document.createElement("input");
  title_h2.type = "text";
  title_h2.placeholder = "Habit";
  title.appendChild(title_h2);
  let title_lvl = document.createElement("h2");
  title_lvl.classList.add("lvl");
  habitLevels.push(1);
  title_lvl.innerHTML = "LVL. 1";
  title.appendChild(title_lvl);
  li.appendChild(title);

  let progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  let progressBar_percent = document.createElement("span");
  progressBar_percent.classList.add("progress-bar-percent");
  progressBar.appendChild(progressBar_percent);
  li.appendChild(progressBar);

  let days = document.createElement("h3");
  days.classList.add("total-days");
  days.innerHTML = "0/30 days";
  li.appendChild(days);

  let completedBtn = document.createElement("button");
  completedBtn.innerHTML = "Completed";
  completedBtn.id = habitDaysIndex;
  habitDaysIndex++;
  habitDays.push(0);
  completedBtn.addEventListener("click", function (event) {
    let days = this.parentElement.children.item(2);
    let percent = this.parentElement.children.item(1);
    percent = percent.children.item(0);

    habitDays[this.id]++;
    if (habitDays[this.id] >= 30) {
      levelUp(this);
      habitDays[this.id] = 0;
    }
    let temp = (habitDays[this.id] / 30) * 100;
    percent.style.width = `${temp}%`;
    days.innerHTML = `${habitDays[this.id]}/30 days`;
  });
  li.appendChild(completedBtn);
  habitList.appendChild(li);
}

function levelUp(context) {
  let level = context.parentElement.children.item(0).children.item(1);
  habitLevels[context.id]++;
  level.innerHTML = `LVL. ${habitLevels[context.id]}`;
}
