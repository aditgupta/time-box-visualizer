# Time Box Visualizer

### Overview

Time Box Visualizer is a personal app designed to visualize daily activities in a time-box model. This app is primarily intended for personal use and learning purposes. The code has not been optimized for any production-grade deployment and lacks any form of robust error handling or security features. The app uses only local storage for data persistence, meaning data will be saved only on the specific device and browser used. No server or cloud database is involved.

### Functionality

- Daily Time Tracking: The main feature of the app is to provide a visual representation of your day, divided into 24 boxes (each representing one hour of the day).

- Activity Labeling: You can select any box (or multiple boxes) and label it with a predefined activity. Each activity has a corresponding color, making it easy to visualize how time is spent throughout the day.

- Activity List and Customization: The app includes a default list of activities like Sleep, Office, Reading, Exercise, etc., along with an option to add custom activities.

- Archiving: At the end of each day, you can archive the current day's time-box. Archived days are stored locally and can be accessed and reviewed later.

- Printing: The app has a feature to print the time-box for a day, designed to provide a clean output that includes only the activity grid.

- Export & Import Local Storage: The app allows exporting and importing local storage data to save or transfer data across devices.

### Limitations

- Local Storage Only: This app does not use any external database. All data is stored in your browser's local storage, which means the data is specific to that browser and device.

- No User Authentication: There is no login system or user identification, so anyone with access to the device can view and modify the data.

- Not Optimized for Production: The app lacks production-level optimizations and may not perform efficiently with a large amount of data or multiple users.

### Usage

- Select an Hour: Click on a box representing a specific hour of the day.

- Assign an Activity: Use the activity dropdown to select or add an activity to label the selected hour(s).

- Archive the Day: At the end of the day, click the "Archive Day" button to save the day's activities.

- Print the Time Box: Click the "Print Time Box" button to print a copy of the day's time-box for offline use.

- Export/Import Data: Backup your local storage or import previously saved data using the export/import options.

### Technologies Used

- Vue.js: The app is built using Vue.js, providing a reactive and dynamic user experience.

- Bootstrap: Bootstrap 4.5 is used for the basic styling and layout.

- JavaScript (ES6): The core functionality is implemented using vanilla JavaScript.

### Installation

This app is a simple HTML/JavaScript application that can be run locally. Just clone or download the repository and open the index.html file in your browser.

### Disclaimer

This app is for personal use and learning purposes only. It has not been tested for use in any critical or production environment. Use it at your own risk, and be mindful that data may be lost if local storage is cleared or if accessed from another device or browser.

### License

This project is open-source and available under the MIT License.
