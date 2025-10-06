import { useState, useEffect } from "react";
import "../ObjectProperties.css";

function DistributionSection({ sectionTitle, setDistributionProperties }) {
  const [distribution, setDistribution] = useState("exponential");

  const [lambda, setLambda] = useState("");
  const [constantValue, setConstantValue] = useState("");
  const [lowerBound, setLowerBound] = useState("");
  const [upperBound, setUpperBound] = useState("");
  const [mu, setMu] = useState("");
  const [sigma, setSigma] = useState("");

  useEffect(() => {
    let params = {};

    switch (distribution) {
      case "exponential":
        params = { lambda };
        break;
      case "constant":
        params = { value: constantValue };
        break;
      case "uniform":
        params = { lower: lowerBound, upper: upperBound };
        break;
      case "normal":
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
    <div className="distribution-section-container">
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

      {distribution === "exponential" && (
        <div className="object-properties-element">
          <span className="object-properties-element-text">Lambda (Jobs per second):</span>
          <input
            type="number"
            className="object-properties-element-input"
            value={lambda}
            onChange={(e) => setLambda(e.target.value)}
          />
        </div>
      )}

      {distribution === "constant" && (
        <div className="object-properties-element">
          <span className="object-properties-element-text">Value (Jobs per second):</span>
          <input
            type="number"
            className="object-properties-element-input"
            value={constantValue}
            onChange={(e) => setConstantValue(e.target.value)}
          />
        </div>
      )}

      {distribution === "uniform" && (
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

      {distribution === "normal" && (
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