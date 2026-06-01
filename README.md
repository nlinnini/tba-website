# The Banana Applications — Ultra Premium Static Website

This is a flat-file website for GitHub + Vercel. No folders are required.

## Files
- `index.html` — homepage
- `results.html` — dedicated results library page
- `styles.css` — all styling
- `script.js` — language switch, results filters, modal, roadmap builder, animations
- `data.js` — edit booking link, services, process, results, FAQs
- `tba-logo.png` — logo
- `result-uwc-full-scholarship.png` and `result-rice-ed.png` — sample result images

## Upload to GitHub
1. Unzip this file.
2. Open your GitHub repo.
3. Click **Add file → Upload files**.
4. Drag ALL files into GitHub root.
5. Click **Commit changes**.
6. Wait 1–2 minutes for Vercel to redeploy.

## Add a new result
1. Rename the image with no spaces, e.g. `result-ubc-2027.png`.
2. Upload it to GitHub root.
3. Open `data.js`.
4. Copy one object inside `RESULTS` and update the text + image file name.
5. Commit changes.

## Change booking link
In `data.js`, edit:
```js
const BOOKING_LINK = "https://calendly.com/thebananaapplications/free-consultation";
```

## Important privacy note
Blur student names, emails, student IDs, application IDs, addresses, and personal details before uploading screenshots.
