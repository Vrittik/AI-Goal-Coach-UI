import { useState } from "react";
import { refineGoal, saveGoal } from "./api";

function GoalInput({ refreshGoals }) {

  const [goal, setGoal] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRefine = async () => {
    if (!goal) return;

    try {
      setLoading(true);

      const data = await refineGoal(goal);

      console.log("AI RESPONSE:", data);

      setResult(data);
    }
    catch (err) {
      console.error(err);
      alert("AI call failed");
    }
    finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    await saveGoal(result);
    setGoal("");
    setResult(null);
    refreshGoals();
  };

  return (
    <div style={{ marginBottom: "40px" }}>

      <h2>AI Goal Coach</h2>

      <input
        type="text"
        placeholder="Enter your goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ width: "400px", padding: "10px" }}
      />

      <button onClick={handleRefine} style={{ marginLeft: "10px" }}>
        Refine
      </button>

      {loading && <p>AI thinking...</p>}

      {!loading && result && (
        <div style={{ marginTop: "20px" }}>

          <h3>Refined Goal</h3>
          <p>{result.refined_goal}</p>

          <h3>Key Results</h3>

          <ul>
            {result.key_results?.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>

          <p>
            Confidence Score: {result.confidence_score}
          </p>

          <button onClick={handleSave}>
            Save Goal
          </button>

        </div>
      )}

    </div>
  );
}

export default GoalInput;