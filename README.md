# GDSC-WOW-22-Portfolio

## Setting up the Project

Clone the repository on your machine & proceed further to create a Firebase Project.

- [Go To Firebase Console](https://console.firebase.google.com) & click Add project.
  - To add Firebase resources to an existing Google Cloud project, enter its project name or select it from the dropdown menu.
  - To create a new project, enter the desired project name. You can also optionally edit the project ID displayed below the project name.
  - If prompted, review and accept the Firebase terms.
  - Click Continue.
  - (Optional) Set up Google Analytics for your project.
  - Click Create project
  - Click Continue.
  - Click on Add Firebase to your web app
  - Enter App nickname
  - Click on Register app
  - You will get your firebaseConfig as Following
    ```javascript
    const firebaseConfig = {
      apiKey: "### FIREBASE API KEY ###",
      authDomain: "### FIREBASE AUTH DOMAIN ###",
      projectId: "### FIREBASE PROJECT ID ###",
      storageBucket: "### FIREBASE STORAGE BUCKET ###",
      messagingSenderId: "10728XXXXXXXXXX",
      appId: "1:10728XXXXXXXXXX:web:c22f0b8XXXXXXXXXXXXXX",
    };
    ```
  - Open public/js/firebase/firebase.js file and paste above config there.
- Install Firebase Tools
  ```
  npm install -g firebase-tools
  ```
- Once installed, run following command and authorize it with your identity to login to Firebase console in first step.
  ```
  firebase login
  ```
- Once authorized go to app code and run the following command to serve the application locally
  ```
  firebase serve
  ```
  - It will give the URL http://localhost:5000/ from where you can run the application.
- To deploy your application, use the following command
  ```
  firebase deploy --only hosting
  ```
