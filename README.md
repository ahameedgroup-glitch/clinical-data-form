# 🏥 KFMC Metformin Study - Data Collection Tool

An offline-capable, mobile-first web application for clinical data collection. This tool is designed to work in hospital environments with limited connectivity, inspired by ODK Collect.

## 🚀 Quick Start
1. **Access the App:** Open [Your-GitHub-URL-Here] on your mobile device.
2. **Install:** - **Android:** Tap the "Install" prompt or "Add to Home Screen" in Chrome.
   - **iOS:** Tap the "Share" icon and select "Add to Home Screen."
3. **Use Offline:** Once installed, you can enable Airplane Mode and the app will continue to function.

## 🛠 Features
- **PWA Ready:** Works 100% offline via Service Workers.
- **Auto-Save:** Saves form progress every 5 seconds to local storage to prevent data loss.
- **Branching Logic:** Dynamic form fields (e.g., Smoking details appear only if "Smoker" is selected).
- **Clinical Focus:** Specifically built for the "Metformin's Role in Colon Cancer" retrospective analysis.

## 💾 Data Handling & Privacy
> **Important:** This application stores data **locally on your device**. 

- **No Cloud Sync:** Data is NOT automatically sent to a server. This ensures patient privacy and HIPAA/GDPR compliance during collection.
- **Storage:** Uses `localStorage`. If you clear your browser cache/data, the drafts will be deleted.
- **Exporting:** (Optional: Add instructions here if you add an Export button).

## 📂 File Structure
- `index.html`: The main data collection form.
- `sw.js`: The Service Worker handling offline caching.
- `manifest.json`: Configuration for mobile installation.

## 🔧 Installation/Development
To modify the form:
1. Clone the repository.
2. Edit `index.html` to add/remove clinical parameters.
3. Update `manifest.json` if you wish to change the app icon or name.
4. Push changes to GitHub; the PWA will update automatically on next launch.

---
*Developed for KFMC Retrospective Analysis.*
