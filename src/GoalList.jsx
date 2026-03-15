function GoalList({ goals }) {

  return (
    <div>

      <h2>Saved Goals</h2>

      {goals.length === 0 && <p>No saved goals yet</p>}

      {goals.map((goal, index) => (

        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}
        >

          <h4>{goal.refined_goal}</h4>

          <ul>
            {goal.key_results.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>

          <p>Confidence: {goal.confidence_score}</p>

        </div>

      ))}

    </div>
  );
}

export default GoalList;