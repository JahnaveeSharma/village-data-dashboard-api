# 🌍 Village Data Analytics Dashboard

## 📌 Project Overview
This project is an end-to-end data analytics solution that analyzes village-level data and presents insights using an interactive Power BI dashboard. A Node.js API is used to process and serve the data in JSON format.

---

## 🎯 Objectives
- Analyze village-level data
- Build an interactive dashboard using Power BI
- Create a backend API using Node.js
- Understand end-to-end data workflow

---

## 🛠️ Technologies Used
- Power BI (Data Visualization)
- Node.js (Backend API)
- Microsoft Excel (Data Source)
- JavaScript

---

## ⚙️ Project Architecture
1. Excel file as raw data source  
2. Node.js API to process and serve data  
3. Power BI dashboard connected to API  

---

## 🚀 Features
- KPI showing total villages  
- District-wise comparison (Bar Chart)  
- Map visualization  
- Filters for state and district  
- Detailed data table  
- Search API functionality  

---

## 🔗 API Endpoints

### Get All Villages
http://localhost:3000/villages

### Search by District
http://localhost:3000/search?district=ranchi

---

## ▶️ How to Run the Project

Step 1: Clone the repository
git clone https://github.com/JahnaveeSharma/village-data-dashboard-api.git

Step 2: Open project folder
cd village-data-dashboard-api

Step 3: Install dependencies
npm install

Step 4: Add dataset
Download the Excel dataset
Place it inside the project folder
Make sure the file name is exactly:
Rdir_2011_20_JHARKHAND.xls

Step 5: Run the server
node index.js

👉 You should see:

Server running on port 3000

Step 6: Test API in browser

Open these links in your browser:

http://localhost:3000/
http://localhost:3000/villages
http://localhost:3000/search?district=ranchi

Step 7: Connect to Power BI
Open Power BI Desktop
Click Get Data → Web
Enter the API URL:
http://localhost:3000/villages
Click OK → Load
Create visuals like:
KPI (Total villages)
Bar chart (district-wise)
Filters (state & district)
Table

Step 8: Refresh Data
Click Refresh in Power BI
Data will update from API

⚠️ Important Notes
node_modules is not included → run npm install
Dataset is not included → add it manually
Make sure server is running before opening API

📊 Output

An interactive Power BI dashboard that shows village-level insights with filters and charts.

📈 Future Scope
Add real-time database
Deploy API on cloud
Improve dashboard with advanced analytics

👩‍💻 Author

Jahnavee Sharma