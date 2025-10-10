import { useState, useEffect } from "react";
import "../ObjectProperties.css";

function QueueDisciplineSection({ setQueueProperties, resetFlag }) {
  const firstComeFirstServed = "fcfs";
  const shortestRemainingTime = "srt";
  const roundRobin = "rr";
  const priorityQueue = "priority";
  
  const [queueDiscipline, setQueueDiscipline] = useState("fcfs");

  const [withPreemption, setWithPreemption] = useState(false);
  const [preemptionTime, setPreemptionTime] = useState("");

  useEffect(() => {
    setWithPreemption(false);
    setPreemptionTime("");
    setQueueDiscipline(firstComeFirstServed);
  }, [resetFlag]);

  useEffect(() => {
    let params = {};

    switch (queueDiscipline) {
      case shortestRemainingTime:
        params = { withPreemption };
        break;
      case roundRobin:
        params = { preemptionTime };
        break;
      case priorityQueue:
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
    <div className="object-properties-section-container">
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

      {(queueDiscipline === shortestRemainingTime || queueDiscipline === priorityQueue) && (
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

      {queueDiscipline === roundRobin && (
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