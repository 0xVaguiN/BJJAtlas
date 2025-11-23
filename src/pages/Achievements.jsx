import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Achievements() {
  const { achievements, unlockedAchievements } = useContext(AppContext);

  return (
    <div className="achievements font-display p-5">
      <h2 className="text-2xl font-semibold mb-5">Conquistas</h2>

      {achievements.map(a => {
        const unlocked = unlockedAchievements.some(unlockedA => unlockedA.id === a.id);

        return (
          <div
            key={a.id}
            className={`achievement-card p-3.5 rounded-lg mb-2.5 border border-[#333] ${unlocked ? "opacity-100" : "opacity-40 grayscale-100"}`}
          >
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            {!unlocked && <small>Bloqueado</small>}
          </div>
        );
      })}
    </div>
  );
}
