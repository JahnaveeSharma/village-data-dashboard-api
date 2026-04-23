# 🌍 Village Data Analytics Dashboard

## 📌 Project Overview
This project is an end-to-end data analytics solution that analyzes village-level data and presents it using an interactive Power BI dashboard. A Node.js API is used to provide structured data for visualization.

---

## 🎯 Objectives
- Analyze village-level data
- Build an interactive dashboard using Power BI
- Create a backend API using Node.js
- Understand complete data analysis workflow

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
3. Power BI dashboard for visualization  

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

## 📊 Dashboard
The dashboard is created in Power BI and connected to the API for dynamic data visualization.

---

## ▶️ How to Run the Project

1. Install dependencies:
```bash
npm install