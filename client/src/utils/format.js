import { CITIES, STIPEND } from '../constants/stipend.js';

export const fINR = (n) => `₹${(n / 1000).toFixed(1)}k`;

export const getCityTier = (city) => CITIES[city] || "metro";

export const calcStipend = (firm, city, yr) => {
  const tier = CITIES[city] || (city === "Other" ? "tier3" : "metro");
  const data = STIPEND[firm];
  if (!data) return { single: [0, 0] };
  
  const mult = tier === "metro" ? (data.metro || 1) : 
              tier === "tier2" ? (data.tier2 || 0.8) : 
              (data.tier3 || 0.65);
  
  const roundArr = (arr) => {
    if (!arr) return [0, 0];
    return [
      Math.round((arr[0] * mult) / 500) * 500,
      Math.round((arr[1] * mult) / 500) * 500
    ];
  };

  if (yr.startsWith("Year")) {
    const yNum = yr.split(' ')[1];
    const key = `y${yNum}`;
    return { 
      single: roundArr(data[key]),
      tier: tier.toUpperCase()
    };
  }
  
  return {
    y1: roundArr(data.y1),
    y2: roundArr(data.y2),
    y3: roundArr(data.y3),
    tier: tier.toUpperCase()
  };
};
