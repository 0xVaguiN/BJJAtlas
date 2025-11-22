import achievements from "./data/achievements.json";

export default function checkAchievements() {
  const learned = JSON.parse(localStorage.getItem("learnedList"))?.length || 0;
  const favorited = JSON.parse(localStorage.getItem("favoriteList"))?.length || 0;

  const unlocked = JSON.parse(localStorage.getItem("achievements")) || [];

  achievements.forEach((ach) => {
    const condition = eval(ach.condition);

    if (condition && !unlocked.includes(ach.id)) {
      unlocked.push(ach.id);
      alert(`🏅 Conquista desbloqueada: ${ach.title}!`);
    }
  });

  localStorage.setItem("achievements", JSON.stringify(unlocked));
}
