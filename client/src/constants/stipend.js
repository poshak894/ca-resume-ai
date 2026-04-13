export const STIPEND = {
  "Deloitte":        {y1:[18000,22000],y2:[22000,27000],y3:[27000,32000],metro:1,tier2:.82,tier3:.68},
  "EY India":        {y1:[17000,21000],y2:[21000,26000],y3:[26000,31000],metro:1,tier2:.80,tier3:.65},
  "PwC":             {y1:[18000,22000],y2:[22000,27000],y3:[26000,31000],metro:1,tier2:.82,tier3:.67},
  "KPMG":            {y1:[17000,21000],y2:[21000,26000],y3:[25000,30000],metro:1,tier2:.80,tier3:.65},
  "Grant Thornton":  {y1:[14000,18000],y2:[17000,22000],y3:[20000,26000],metro:1,tier2:.78,tier3:.62},
  "BDO India":       {y1:[12000,16000],y2:[15000,20000],y3:[18000,24000],metro:1,tier2:.75,tier3:.60},
  "Walker Chandiok": {y1:[14000,18000],y2:[17000,21000],y3:[20000,25000],metro:1,tier2:.78,tier3:.63},
  "S.R. Batliboi":   {y1:[15000,19000],y2:[18000,23000],y3:[22000,27000],metro:1,tier2:.80,tier3:.65},
  "RSM India":       {y1:[10000,14000],y2:[13000,17000],y3:[16000,21000],metro:1,tier2:.75,tier3:.60},
  "MSKA":            {y1:[9000,13000], y2:[12000,16000],y3:[15000,19000],metro:1,tier2:.72,tier3:.58},
  "Mid-size Firm":   {y1:[6000,10000], y2:[8000,13000], y3:[10000,16000],metro:1,tier2:.72,tier3:.58},
  "Small Local Firm":{y1:[2000,6000],  y2:[3000,8000],  y3:[5000,10000], metro:1,tier2:.80,tier3:.70},
  "Any Big 10 Firm": {y1:[12000,16000],y2:[15000,20000],y3:[18000,24000],metro:1,tier2:.80,tier3:.65},
};

export const CITIES = {
  Mumbai:"metro", Delhi:"metro", Bengaluru:"metro", Chennai:"metro",
  Hyderabad:"metro", Pune:"metro", Kolkata:"metro", Ahmedabad:"metro",
  Jaipur:"tier2", Lucknow:"tier2", Chandigarh:"tier2", Surat:"tier2",
  Nagpur:"tier2", Indore:"tier2", Coimbatore:"tier2", Kochi:"tier2",
  Patna:"tier3", Bhopal:"tier3", Ludhiana:"tier3", Agra:"tier3",
  Varanasi:"tier3", Nashik:"tier3", Faridabad:"tier3", Meerut:"tier3",
  Rajkot:"tier3", Srinagar:"tier3", Aurangabad:"tier3", Dhanbad:"tier3",
  Amritsar:"tier3", "Navi Mumbai":"metro", Allahabad:"tier3", Howrah:"metro",
  Gwalior:"tier3", Jabalpur:"tier3", Guntur:"tier3", Vijayawada:"tier3",
  Mysore:"tier3", Salem:"tier3", Warangal:"tier3", Bareilly:"tier3",
  Aligarh:"tier3", Moradabad:"tier3", Gurgaon:"metro", Noida:"metro",
  Ghaziabad:"metro", Jamshedpur:"tier3", Jodhpur:"tier3", Madurai:"tier3",
  Thiruvananthapuram:"tier3", Tiruchirappalli:"tier3", Raipur:"tier3",
  Kota:"tier3", Guwahati:"tier3", Solapur:"tier3", Ranchi:"tier3",
  Vishakhapatnam:"tier2", Mangaluru:"tier3", Tiruppur:"tier3", Nellore:"tier3"
};

export const FIRMS = ["Deloitte","EY India","PwC","KPMG","Grant Thornton","BDO India", "Walker Chandiok", "RSM India", "MSKA", "Mid-size Firm", "Small Local Firm", "Any Big 10 Firm"];

export const TOPICS = ["Accounts","Taxation","Audit","Company Law","Cost Accounting", "Soft Skills","Tell Me About Yourself","Why CA / Why This Firm"];
