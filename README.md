# NewsWeb Project

## Overview
The **NewsWeb** project is a web application that integrates news and blog data, with features like user authentication, data filtering, responsive design, payout calculation, export functionality, and a dashboard for analytics. It aims to provide a smooth experience for both admin and user interactions with articles/blogs and calculated payouts.

### Deployed Link: ( https://sd-news-web.vercel.app/login )
  

## Features
### 1. **User Authentication**
- Secure login functionality using email-password authentication.
- Third-party authentication via Google or GitHub OAuth for easy access.

### 2. **News and Blog Data Integration**
- Fetch data from free third-party news APIs such as News API, Guardian API.
- Display article/blog counts with essential details like author, date, and type.

### 3. **Filtering and Search**
- Filter news/blogs based on:
  - Author
  - Date range
  - Type (e.g., news, blogs)
- Global search bar for quick keyword-based searches.

### 4. **Responsive Design**
- Fully responsive UI that works seamlessly on both mobile and desktop devices.

### 5. **Payout Calculator**
- Admin functionality to set payout per article/blog.
- Store payout data in local storage for persistence.
- Automatically calculate total payouts based on article/blog counts and rates.

### 6. **Export Functionality**
- Enable users to export payout reports in the following formats:
  - PDF
  - CSV
  - Google Sheets integration for easy export.

### 7. **Dashboard**
- Overview of total articles/blogs fetched from the API.
- Visual representation of payouts and article/blog filters.

### 8. **News Analytics**
- Graphical charts (bar, pie, or line charts) showing article trends by author or type.

### 9. **Payout Details**
- Table listing authors, articles, and calculated payouts.
- Inline editing for payout rates.



## Installation
(open two terminal... first for frontend and second for backend)
Clone the repository
```bash
  git clone https://github.com/RaviSaini045/NewsWeb.git
  cd NewsWeb
  npm install
  npm start
### 2nd terminal
cd server
npm i
npm start  
