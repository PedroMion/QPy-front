import "../ObjectProperties.css";
import { useState, useEffect } from "react";
import { EXPONENTIAL, CONSTANT, UNIFORM, NORMAL } from "../../../Utils/DistributionUtils";

function DistributionSection({ sectionTitle, setDistributionProperties, resetFlag }) {
  const [distribution, setDistribution] = useState(EXPONENTIAL);

  const [lambda, setLambda] = useState("");
  const [constantValue, setConstantValue] = useState("");
  const [lowerBound, setLowerBound] = useState("");
  const [upperBound, setUpperBound] = useState("");
  const [mu, setMu] = useState("");
  const [sigma, setSigma] = useState("");

  useEffect(() => {
    setLambda("");
    setConstantValue("");
    setLowerBound("");
    setUpperBound("");
    setMu("");
    setSigma("");
    setDistribution(EXPONENTIAL);
  }, [resetFlag]);

  useEffect(() => {
    let params = {};

    switch (distribution) {
      case EXPONENTIAL:
        params = { lambda };
        break;
      case CONSTANT:
        params = { constantValue };
        break;
      case UNIFORM:
        params = { lowerBound, upperBound };
        break;
      case NORMAL:
        params = { mu, sigma };
        break;
      default:
        break;
    }

    setDistributionProperties({
      distribution,
      params,
    });
  }, [distribution, lambda, constantValue, lowerBound, upperBound, mu, sigma, setDistributionProperties]);

  return (
    <div className="object-properties-section-container">
      <div className="object-properties-element">
        <span className="object-properties-element-text">{sectionTitle}</span>
        <select
          className="object-properties-element-select"
          value={distribution}
          onChange={(e) => setDistribution(e.target.value)}
        >
          <option value="exponential">Exponential</option>
          <option value="constant">Constant</option>
          <option value="uniform">Uniform</option>
          <option value="normal">Normal</option>
        </select>
      </div>

      {distribution === EXPONENTIAL && (
        <div className="object-properties-element">
          <span className="object-properties-element-text">Lambda (Seconds per job):</span>
          <input
            type="number"
            className="object-properties-element-input"
            value={lambda}
            onChange={(e) => setLambda(e.target.value)}
          />
        </div>
      )}

      {distribution === CONSTANT && (
        <div className="object-properties-element">
          <span className="object-properties-element-text">Value (Seconds per job):</span>
          <input
            type="number"
            className="object-properties-element-input"
            value={constantValue}
            onChange={(e) => setConstantValue(e.target.value)}
          />
        </div>
      )}

      {distribution === UNIFORM && (
        <div className="object-properties-multiple-element-container">
          <div className="object-properties-element">
            <span className="object-properties-element-text">Lower Bound:</span>
            <input
              type="number"
              className="object-properties-element-input"
              value={lowerBound}
              onChange={(e) => setLowerBound(e.target.value)}
            />
          </div>
          <div className="object-properties-element">
            <span className="object-properties-element-text">Upper Bound:</span>
            <input
              type="number"
              className="object-properties-element-input"
              value={upperBound}
              onChange={(e) => setUpperBound(e.target.value)}
            />
          </div>
        </div>
      )}

      {distribution === NORMAL && (
        <div className="object-properties-multiple-element-container">
          <div className="object-properties-element">
            <span className="object-properties-element-text">Mu:</span>
            <input
              type="number"
              className="object-properties-element-input"
              value={mu}
              onChange={(e) => setMu(e.target.value)}
            />
          </div>
          <div className="object-properties-element">
            <span className="object-properties-element-text">Sigma:</span>
            <input
              type="number"
              className="object-properties-element-input"
              value={sigma}
              onChange={(e) => setSigma(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DistributionSection;