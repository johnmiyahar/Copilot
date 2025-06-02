# ShoreSquad

Beach cleanup squad web app for Singapore! 🌊

## Features
- Live 4-day weather forecast (NEA API, metric units °C)
- Google Maps with next cleanup spot (Pasir Ris)
- Gen-Z beachy UI (blues, yellows, emojis)
- Tawk.to squad chat (add your widget code)
- Mobile-friendly, fast loading

## Local Setup
1. Clone this repo:  
   `git clone <your-repo-url>`
2. Open in VS Code.
3. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
4. Right-click `index.html` → "Open with Live Server".
5. Edit `js/app.js` or `css/styles.css` and save to auto-reload.

## NEA Weather API
- Uses [NEA 4-day forecast](https://data.gov.sg/dataset/4-day-weather-forecast)
- All temperatures in °C (metric)

## Tawk.to Chat
- Sign up at [tawk.to](https://www.tawk.to/)
- Paste your widget snippet before `</body>` in `index.html`

## Deployment (GitHub Pages)
1. Commit & push:  
   `git add . && git commit -m "ShoreSquad MVP" && git push origin main`
2. Go to GitHub repo → Settings → Pages
3. Source: `main` branch, `/ (root)` folder
4. Visit your site at `https://<your-username>.github.io/<repo-name>/`

## Customization
- Add more cleanup spots in `index.html` or via Google Maps API
- Tweak colors in `css/styles.css`
- Add impact tracker, more Gen-Z flair (emojis, slang)

---
Built with ❤️ for Singapore’s shores!
