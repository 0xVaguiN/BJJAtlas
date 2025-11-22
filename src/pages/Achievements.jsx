import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Achievements() {
  const { achievements, unlockedAchievements } = useContext(AppContext);

  return (
    <div className="achievements font-display p-5">
      <h2 className="text-2xl font-semibold mb-5">Conquistas</h2>

      {achievements.map(a => {
        const unlocked = unlockedAchievements.includes(a.id);

        return (
          <div
            key={a.id}
            className="achievement-card"
            style={{
              opacity: unlocked ? 1 : 0.4,
              filter: unlocked ? "none" : "grayscale(100%)",
              padding: "14px",
              border: "1px solid #333",
              borderRadius: "8px",
              marginBottom: "10px"
            }}
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
