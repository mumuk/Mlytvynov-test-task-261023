import React from "react";

const DummyChart: React.FC = () => (
  <div className="p-4 bg-white border rounded">
    <h5 className="text-center">Dummy Chart</h5>
    <div className="progress mb-2">
      <div
        className="progress-bar"
        role="progressbar"
        style={{width: '25%'}}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}>25%
      </div>
    </div>
    <div className="progress mb-2">
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{width: '50%'}}
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
      >50%
      </div>
    </div>
    <div className="progress">
      <div
        className="progress-bar bg-info"
        role="progressbar"
        style={{width: '75%'}}
        aria-valuenow={75}
        aria-valuemin={0}
        aria-valuemax={100}
      >75%
      </div>
    </div>

  </div>
)

export default DummyChart
