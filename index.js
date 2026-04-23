const express = require("express");
const XLSX = require("xlsx");

const app = express();

// Read Excel file
const workbook = XLSX.readFile("Rdir_2011_20_JHARKHAND.xls");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

// CLEAN DATA (VERY IMPORTANT)
const cleanData = data.map(item => ({
  state: item["STATE NAME"]?.trim(),
  district: item["DISTRICT NAME"]?.trim(),
  subDistrict: item["SUB-DISTRICT NAME"]?.trim(),
  village: item["Area Name"]?.trim()
}));

// Home route
app.get("/", (req, res) => {
  res.send("Village API is running");
});

// Villages route (ONLY ONE)
app.get("/villages", (req, res) => {
  res.json(cleanData);
});

// Search route (FIXED)
app.get("/search", (req, res) => {
  const district = req.query.district;

  const result = cleanData.filter(item =>
    item.district.toLowerCase().includes(district.toLowerCase())
  );

  res.json(result);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});