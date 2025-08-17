import { useEffect, useState } from "react";
import { MOCK_POSITIONS } from "../../../../common/data/MockedData";
import { mockApiCall } from "../../../../common/utils";
import PNLCard from "../PNLCard";

const Positions = ({ openOrderPad }) => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mockApiCall(MOCK_POSITIONS, 200)
      .then((res) => setPositions(res.data))
      .catch(() => setPositions([])) // Handle error case
      .finally(() => setLoading(false));
  }, []);

  const unrealizedPNL = positions.reduce((sum, pos) => sum + pos.pnl, 0);
  const realizedPNL = 1500; // Mock PNL value

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading positions...</div>
    );
  }

  return (
    <div className="p-4">
      <PNLCard
        title="Positions PNL"
        unrealizedPNL={unrealizedPNL}
        realizedPNL={realizedPNL}
      />
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide">Stock</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right hidden sm:table-cell">
                Qty
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Avg. Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                PNL
              </th>
            </tr>
          </thead>
          <tbody>
            {positions.length > 0 ? (
              positions.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } cursor-pointer hover:bg-gray-100`}
                  onClick={() => openOrderPad(item)}
                >
                  <td className="p-3 text-sm text-gray-700 font-medium">
                    <span className="block">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.ticker}</span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-right hidden sm:table-cell">
                    {item.quantity}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-right">
                    ₹{item.avgPrice.toFixed(2)}
                  </td>
                  <td
                    className={`p-3 text-sm font-bold text-right ${
                      item.pnl >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ₹{item.pnl.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No active positions.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
