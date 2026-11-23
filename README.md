# V.N. Ashwanth & N. Boomika – Wedding Reception Invitation Website

A luxury, interactive digital wedding reception invitation website featuring traditional Indian royal aesthetics (cream & ivory background, dark forest green typography, antique gold borders & filigree, Lord Ganesha emblem, hanging brass lamps/kuthu vilakku, and an interactive scratch-to-reveal invitation card experience).

Inspired by: https://kavin-megha-wedding.netlify.app/

---

## 💍 Event & Couple Details
- **Groom:** V.N. Ashwanth
- **Bride:** N. Boomika
- **Event:** Wedding Reception *(Exclusively Reception; no Muhurtham details)*
- **Date:** Saturday, 12 December 2026
- **Time:** 5:30 PM – 9:00 PM IST
- **Venue:** PSK Mahal, Pattlur Nall Road
- **Google Maps Navigation:** [Direct Route to PSK Mahal](https://maps.app.goo.gl/xRLy7N8UZZJyos1u6)
- **Countdown Target:** 12 December 2026, 17:30 IST

---

## ✨ Features Included
1. **Royal Opening Screen:** 
   - Traditional Indian welcome with auspicious Lord Ganesha invocation.
   - Interactive royal wax & gold seal button: "TAP TO OPEN".
   - Confetti burst & gentle rose petal showers on entrance.

2. **Interactive Scratch-to-Reveal Card:**
   - Smooth canvas scratch interaction working seamlessly on Android, iPhone/iPad, and Desktop (mouse & touch support).
   - "A Special Invitation Awaits You" & "Scratch Here to Reveal Our Invitation".
   - Automatically reveals full card with confetti once 35%+ is cleared.
   - Includes prominent alternative **"Reveal Invitation Directly"** button for instant one-click access.

3. **Digital Reception Invitation Section:**
   - Traditional Lord Ganesha emblem, antique gold borders, hanging brass lamps (Kuthu Vilakku), and floral toran.
   - V.N. Ashwanth & N. Boomika reception announcement with exact timings and cordial invitation message.

4. **Live Reception Countdown:**
   - Real-time Days, Hours, Minutes, Seconds counting down to December 12, 2026, 5:30 PM IST.
   - 1-click **"Add to Calendar"** integration (Google Calendar & iCal).

5. **Venue & "SHOW DIRECTIONS" Navigation:**
   - Dedicated reception hall card for PSK Mahal, Pattlur Nall Road.
   - Prominent **"SHOW DIRECTIONS"** button linking directly to Google Maps navigation (`https://maps.app.goo.gl/xRLy7N8UZZJyos1u6`).
   - Clean, elegant presentation without any QR codes (as requested).

6. **Reception Evening Schedule:**
   - 5:30 PM: Mangala Isai & Guest Arrival
   - 6:30 PM: Grand Couple Arrival (Ashwanth & Boomika)
   - 7:00 PM: Stage Greetings & Felicitations
   - 7:30 PM Onwards: Royal Reception Feast

7. **Photo Gallery (Ready for Bride & Groom Photos):**
   - High-definition responsive layout with full-screen Lightbox zoom viewing.
   - Configured in `src/config/invitation.js` so you can drop your uploaded bride & groom photographs directly into `public/images/` or configure image URLs.

8. **Traditional Indian Instrumental Background Music:**
   - Auspicious flute, shehnai, and tanpura classical melodies.
   - Audio autoplay policy compliant (starts immediately after guest taps/scratches the card).
   - Floating gold/emerald Music ON/OFF toggle with animated sound waves.

9. **WhatsApp Link Preview & Social Metadata:**
   - Full Open Graph & Twitter Card tags:
     - `og:title`: "V.N. Ashwanth & N. Boomika | Wedding Reception"
     - `og:description`: "With great joy, we invite you to celebrate our wedding reception on 12 December 2026 at PSK Mahal."
     - `og:image`: High-res 1200x630 preview image (`public/og-image.png`) with ivory background, gold borders, Lord Ganesha, and event details.
     - `og:url`: `https://ashwanth-bhoomika-wedding.vercel.app`

---

## 🚀 How to Deploy on Vercel

### Method 1: Using the Vercel CLI (Fastest)
1. In your terminal, run:
   ```bash
   npm install -g vercel
   vercel
   ```
2. Follow the quick prompts:
   - Set project name: `ashwanth-bhoomika-wedding`
   - Target URL will be: `https://ashwanth-bhoomika-wedding.vercel.app`
3. For production deployment:
   ```bash
   vercel --prod
   ```

### Method 2: Deploying via GitHub & Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Ashwanth & Boomika Wedding Reception Invitation"
   git remote add origin https://github.com/YOUR_USERNAME/ashwanth-bhoomika-wedding.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set the project name as `ashwanth-bhoomika-wedding`.
5. Framework preset: **Vite** (Root Directory: `./`).
6. Click **Deploy**!

---

## 📸 Updating Bride & Groom Photos
To replace the gallery photos with your actual photographs:
1. Copy your photos into `public/images/` (e.g. `public/images/photo1.jpg`).
2. Open `src/config/invitation.js`.
3. Update the `gallery` array with your filenames:
   ```javascript
   gallery: [
     {
       id: 1,
       url: "/images/photo1.jpg",
       caption: "Ashwanth & Boomika",
       alt: "Ashwanth & Boomika"
     },
     ...
   ]
   ```
