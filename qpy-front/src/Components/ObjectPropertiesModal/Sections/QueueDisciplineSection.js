import { useState, useEffect } from "react";
import "../ObjectProperties.css";

function QueueDisciplineSection({ setQueueProperties }) {
  const [queueDiscipline, setQueueDiscipline] = useState("fcfs");

  const [withPreemption, setWithPreemption] = useState(false);
  const [preemptionTime, setPreemptionTime] = useState("");

  useEffect(() => {
    let params = {};

    switch (queueDiscipline) {
      case "srt":
        params = { withPreemption };
        break;
      case "rr":
        params = { preemptionTime };
        break;
      case "priority":
        params = { withPreemption };
        break;
      default:
        break;
    }

    setQueueProperties({
      queueDiscipline,
      params,
    });
  }, [queueDiscipline, withPreemption, preemptionTime, setQueueProperties]);

  return (
    <div className="queue-discipline-section-container">
      <div className="object-properties-element">
        <span className="object-properties-element-text">Queue Discipline:</span>
        <select
          className="object-properties-element-select"
          value={queueDiscipline}
          onChange={(e) => setQueueDiscipline(e.target.value)}
        >
          <option value="fcfs">First Come First Served</option>
          <option value="lcfs">Last Come First Served</option>
          <option value="rr">Round Robin</option>
          <option value="srt">Shortest Remaining Time</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {(queueDiscipline === "srt" || queueDiscipline == "priority") && (
        <div className="object-properties-element">
          <span className="object-properties-element-text">With Preemption:</span>
          <input
            type="checkbox"
            className="object-properties-element-input"
            value={withPreemption}
            onChange={(e) => setWithPreemption(e.target.value)}
          />
        </div>
      )}

      {queueDiscipline === "rr" && (
        <div className="object-properties-element">
          <span className="object-properties-element-text">Preemption Time:</span>
          <input
            type="number"
            className="object-properties-element-input"
            value={preemptionTime}
            onChange={(e) => setPreemptionTime(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default QueueDisciplineSection;