// Mock Data for the application
const MOCK_HOLDINGS = [
  {
    id: 1,
    name: "Tata Motors",
    ticker: "TATAMOTORS",
    quantity: 50,
    avgPrice: 750.5,
    currentPrice: 800.25,
    pnl: 2487.5,
  },
  {
    id: 2,
    name: "Reliance Industries",
    ticker: "RELIANCE",
    quantity: 10,
    avgPrice: 2400.0,
    currentPrice: 2450.75,
    pnl: 507.5,
  },
  {
    id: 3,
    name: "HDFC Bank",
    ticker: "HDFCBANK",
    quantity: 20,
    avgPrice: 1500.0,
    currentPrice: 1480.0,
    pnl: -400.0,
  },
  {
    id: 4,
    name: "Infosys",
    ticker: "INFY",
    quantity: 30,
    avgPrice: 1450.0,
    currentPrice: 1465.5,
    pnl: 465.0,
  },
];

const MOCK_ORDERBOOK = [
  {
    id: 1,
    name: "Tata Motors",
    ticker: "TATAMOTORS",
    quantity: 50,
    price: 750.5,
    type: "BUY",
    status: "EXECUTED",
    date: "2024-05-20",
  },
  {
    id: 2,
    name: "Infosys",
    ticker: "INFY",
    quantity: 20,
    price: 1450.0,
    type: "BUY",
    status: "EXECUTED",
    date: "2024-05-18",
  },
  {
    id: 3,
    name: "Adani Green",
    ticker: "ADANIGREEN",
    quantity: 10,
    price: 1850.0,
    type: "BUY",
    status: "PENDING",
    date: "2024-05-21",
  },
  {
    id: 4,
    name: "HDFC Bank",
    ticker: "HDFCBANK",
    quantity: 20,
    price: 1500.0,
    type: "SELL",
    status: "EXECUTED",
    date: "2024-05-22",
  },
];

const MOCK_POSITIONS = [
  {
    id: 1,
    name: "Zomato",
    ticker: "ZOMATO",
    quantity: 100,
    avgPrice: 150.0,
    currentPrice: 155.0,
    type: "LONG",
    pnl: 500.0,
  },
  {
    id: 2,
    name: "Paytm",
    ticker: "PAYTM",
    quantity: 50,
    avgPrice: 500.0,
    currentPrice: 480.0,
    type: "SHORT",
    pnl: 1000.0,
  }, // PNL for short is inverse
  {
    id: 3,
    name: "Nykaa",
    ticker: "NYKAA",
    quantity: 25,
    avgPrice: 170.0,
    currentPrice: 165.0,
    type: "LONG",
    pnl: -125.0,
  },
];

export { MOCK_HOLDINGS, MOCK_ORDERBOOK, MOCK_POSITIONS };
