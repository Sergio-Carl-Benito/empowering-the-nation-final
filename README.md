Step 1: Prerequisites

Before you begin, ensure the following are installed on your computer:

    Node.js
        Download and install it from https://nodejs.org/.
        Verify the installation by running the following commands in your terminal or command prompt:

    node -v
    npm -v

Expo CLI (Optional)

    While npx expo start works without it, installing Expo CLI globally can streamline the process:

        npm install -g expo-cli

Step 2: Download the Project as a Zipped File

    Visit the GitHub repository in your browser.
    Click the green Code button.
    Select Download ZIP.
    Once downloaded, locate the ZIP file (likely in your Downloads folder).
    Extract the ZIP file to a location of your choice (e.g., Documents/ReactNativeApp).

Step 3: Install Dependencies

    Open a terminal or command prompt.
    Navigate to the extracted project folder:

cd /path/to/extracted-folder

Install the required dependencies by running:

    npm install

Step 4: Run the App

To start the app, use Expo:

npx expo start

Step 5: Open the App

Once the Expo development server starts, you’ll see a QR code in your terminal or browser:

    On Your Mobile Device:
        Download the Expo Go app:
            Android
            iOS
        Open Expo Go, scan the QR code, and the app will load.

    On an Emulator or Simulator:
        For Android: Ensure Android Studio is installed and an emulator is running.
        For iOS: Use Xcode’s iOS Simulator (Mac only).

Expo will detect connected devices and let you run the app on them.
Additional Notes About the App

The development environment for this mobile application is Visual Studio, with React Native ensuring compatibility across both Android and iPhone platforms. The primary languages used are TypeScript, JavaScript, and React.
