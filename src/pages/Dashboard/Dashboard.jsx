import { useState } from "react";
import { createPortal } from "react-dom";
import Header from "../../common/components/Header";
import { Book, Briefcase, TrendingUp } from "lucide-react";
import {
  MOCK_HOLDINGS,
  MOCK_ORDERBOOK,
  MOCK_POSITIONS,
} from "../../common/data/MockedData";
import Holdings from "./components/Holdings";
import OrderPad from "./components/OrderPad";
import Orderbook from "./components/OrderBook/OrderBook";
import Positions from "./components/Positions";
import FloatingActionButton from "./components/FloatingActionButton";

// Main application dashboard component
const Dashboard = ({ onLogout }) => {
  const [currentScreen, setCurrentScreen] = useState("holdings");
  const [isOrderPadOpen, setIsOrderPadOpen] = useState(false);
  const [orderPadType, setOrderPadType] = useState("buy");
  const [selectedStock, setSelectedStock] = useState(null);

  const openOrderPad = (stock, type = "buy") => {
    setSelectedStock(stock);
    setOrderPadType(type);
    setIsOrderPadOpen(true);
  };

  const handleFabAction = (type) => {
    // Logic to get the top listed stock
    let stockToSelect = null;
    switch (currentScreen) {
      case "holdings":
        stockToSelect = MOCK_HOLDINGS[0];
        break;
      case "orderbook":
        stockToSelect = MOCK_ORDERBOOK[0];
        break;
      case "positions":
        stockToSelect = MOCK_POSITIONS[0];
        break;
      default:
        stockToSelect = {
          name: "Tata Motors",
          ticker: "TATAMOTORS",
          currentPrice: 800.25,
        }; // Default to a stock if no data
    }
    openOrderPad(stockToSelect, type);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "holdings":
        return (
          <Holdings openOrderPad={(stock) => openOrderPad(stock, "buy")} />
        );
      case "orderbook":
        return (
          <Orderbook openOrderPad={(stock) => openOrderPad(stock, "buy")} />
        );
      case "positions":
        return (
          <Positions openOrderPad={(stock) => openOrderPad(stock, "buy")} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-inter">
      <Header>
        <button
          onClick={onLogout}
          className="bg-gray-200 text-gray-700 p-2 rounded-full"
        >
          Logout
        </button>
      </Header>
      <main className="flex-grow size-full max-w-6xl overflow-y-auto pb-20 mx-auto">
        {renderScreen()}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-xl rounded-t-xl z-50">
        <div className="flex justify-around items-center h-16">
          <button
            className={`flex flex-col items-center justify-center p-2 text-sm transition-colors duration-200 ${
              currentScreen === "holdings" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setCurrentScreen("holdings")}
          >
            <Briefcase size={24} />
            <span className="mt-1">Holdings</span>
          </button>
          <button
            className={`flex flex-col items-center justify-center p-2 text-sm transition-colors duration-200 ${
              currentScreen === "orderbook" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setCurrentScreen("orderbook")}
          >
            <Book size={24} />
            <span className="mt-1">Orderbook</span>
          </button>
          <button
            className={`flex flex-col items-center justify-center p-2 text-sm transition-colors duration-200 ${
              currentScreen === "positions" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setCurrentScreen("positions")}
          >
            <TrendingUp size={24} />
            <span className="mt-1">Positions</span>
          </button>
        </div>
      </nav>

      {/* Floating Action Button */}
      <FloatingActionButton onAction={handleFabAction} />

      {/* Order Pad Modal */}
      {isOrderPadOpen &&
        createPortal(
          <OrderPad
            stock={selectedStock}
            type={orderPadType}
            onClose={() => setIsOrderPadOpen(false)}
          />,
          document.body
        )}
    </div>
  );
};

export default Dashboard;
