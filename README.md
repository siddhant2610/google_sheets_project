# Google Sheets Mimic

## Project Explanation

**Google Sheets Mimic** is a web-based application designed to replicate the core functionalities of Google Sheets. This application allows users to create, edit, and manage spreadsheets in a simplified and intuitive manner. Key features include:

- **Cell Selection and Operations**: Users can select multiple cells and perform operations like SUM, AVERAGE, MAX, MIN, and COUNT.
- **Data Quality Enhancements**: Options like TRIM, UPPER, LOWER, and REMOVE_DUPLICATES are available to ensure clean and standardized data.
- **Dynamic Formula Bar**: A formula bar dynamically updates to display the operations performed and their results.
- **Download and Share Options**: Users can download the spreadsheet to their PC, share it via email, WhatsApp, or save it to Google Drive.
- **Manual Row Addition**: Users can start by manually adding the number of rows they need using the **Add Rows** button at the bottom of the interface.
- **User-Friendly Interface**: The app's interface is simple and responsive, making it easy to navigate and use.

This project is ideal for professionals and students looking for an accessible and lightweight spreadsheet solution.

---

## Tech Stack Used

### Backend
- **Django**: A high-level Python web framework that simplifies the creation of robust and scalable web applications.

### Frontend
- **HTML/CSS**: For structuring and styling the web interface.
- **JavaScript**: Enables dynamic interactivity and operations on the spreadsheet-like interface.

### Deployment
- **PythonAnywhere**: The project is hosted on PythonAnywhere, allowing users to access the application online.

### Additional Tools
- **Bootstrap**: Ensures a responsive and visually appealing user interface.

---

## Web App Link

The Google Sheets Mimic application is live and can be accessed at the following link:

[Google Sheets Mimic - https://siddhant2610.pythonanywhere.com/#)

---

## Steps to Configure and Run the Project Locally

1. open your Vs Code and navigate to the place where you want to clone the github repo using terminal in Vs Code
   cd [folder name]

3.  **Clone the Repository**:
   ```bash
   git clone https://github.com/siddhant2610/google_sheets_project.git
   cd google_sheets_project
   ```

4. you need to install  django library using
     pip install django 
    


6. **Run the Development Server**:
   ```bash
   python manage.py runserver
   ```

7. **Access the Application**:
   Open a web browser and go to `http://127.0.0.1:8000` to view and interact with the application.


