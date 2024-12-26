# Time Box Visualizer

Time Box Visualizer is a personal productivity app designed to track and analyze daily activities in a time-box model. The app provides visual insights into how you spend your time and helps maintain daily to-dos. This app is primarily intended for personal use and learning purposes.

## Overview

The app uses local storage for data persistence, meaning data will be saved on the specific device and browser used. No server or cloud database is involved. The code has not been optimized for production-grade deployment and lacks robust error handling or security features.

## Core Features

### Time Tracking
* Visual representation of your day divided into 24 boxes (each representing one hour)
* Select and label multiple time blocks simultaneously
* Color-coded activities for easy visualization
* Predefined activities with customizable colors

### Todo Management
* Integrated todo list panel
* Add, complete, and delete todos
* Todo data persists with time tracking data

### Auto-Archiving
* Automatic archiving of daily activities at 11:59 PM
* Prevents data loss from forgotten manual archives
* Maintains activity and todo history

### Analytics
* Separate analytics page (`analyze.html`) for data visualization
* Monthly and all-time activity analysis
* Detailed statistics excluding routine activities (Sleep & Office)
* Visual charts showing activity distribution and hours per activity

### Data Management
* Export and import functionality for data backup
* Monthly data aggregation in analytics
* Print feature for time-box visualization
* Local storage for offline usage

## Usage

### Time Tracking
1. Select hour blocks by clicking
2. Choose an activity from the dropdown or add new ones
3. Activities are automatically saved and color-coded
4. Day is automatically archived at midnight

### Todo Management
1. Use the side panel to manage todos
2. Click chevron to show/hide todo panel
3. Mark todos as complete with checkbox
4. Delete todos using the X button

### Analytics
1. Open `analyze.html` for detailed analysis
2. Upload exported data for new months
3. Use dropdown to select specific months or view all-time data
4. View activity distribution and usage patterns

### Data Backup
* Use Export button to backup your data
* Import previously exported data
* Data persists across browser refreshes

## Technologies Used
* Vue.js for reactive UI components
* Chart.js for analytics visualizations
* Bootstrap 5 for styling
* JavaScript (ES6+)

## Installation
1. Clone or download the repository
2. Open `index.html` for the main app
3. Use `analyze.html` for data analysis

## Files
* `index.html`: Main time tracking and todo application
* `analyze.html`: Analytics and data visualization dashboard

## Limitations
* Uses browser local storage only
* No user authentication
* Not optimized for production use
* Data is browser/device specific

## Disclaimer
This app is for personal use and learning purposes only. It has not been tested for critical or production environments. Use at your own risk, and be mindful that data may be lost if local storage is cleared.

## License
This project is open-source and available under the MIT License.