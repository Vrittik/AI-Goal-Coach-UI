import { useEffect, useState } from "react";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import { getGoals } from "./api";

function App() {

  const [goals, setGoals] = useState([]);

  useEffect(() => {

    const loadGoals = async () => {
      const data = await getGoals();
      setGoals(data);
    };

    loadGoals();

  }, []);

  const refreshGoals = async () => {
    const data = await getGoals();
    setGoals(data);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <GoalInput refreshGoals={refreshGoals} />

      <GoalList goals={goals} />

    </div>
  );
}

export default App;