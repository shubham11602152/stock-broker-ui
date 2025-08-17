const PNLCard = ({ title, unrealizedPNL, realizedPNL }) => (
  <div className="bg-white p-4 rounded-xl shadow-md mb-4 flex justify-around items-center">
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
    </div>
    <div className="text-center mx-4">
      <p className="text-sm text-gray-500">Unrealized PNL</p>
      <span
        className={`text-xl font-bold ${
          unrealizedPNL >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ₹{unrealizedPNL.toFixed(2)}
      </span>
    </div>
    <div className="text-center">
      <p className="text-sm text-gray-500">Realized PNL</p>
      <span
        className={`text-xl font-bold ${
          realizedPNL >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ₹{realizedPNL.toFixed(2)}
      </span>
    </div>
  </div>
);

export default PNLCard;
