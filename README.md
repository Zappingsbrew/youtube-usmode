# YouTube US Mode (Hide Region Label)

A lightweight **Tampermonkey** userscript that hides YouTube's regional country code (like “PH”, “IN”, etc.) to make the site appear cosmetically identical to the **U.S. version**.
> ⚠️ Note: This script is primarily for personal use. It is considered stable and unlikely to need updates. If YouTube changes its top bar layout, updates may be released.

---

## 📷 Before vs After

![Before vs After](images/Before%20vs%20After.png)

---

## ✨ Features
- Removes the small country code label under the YouTube logo (e.g. “PH”, “IN”).
- Mimics the visual style of YouTube's **U.S. default mode**.
- Lightweight and auto-applies whenever YouTube loads.
- Keeps all other regional functionality intact — just cosmetic.

---

## 🧠 How It Works
The script continuously looks for the `#country-code` element on YouTube and hides it using a lightweight DOM observer.

```js
const el = document.querySelector('span#country-code');
if (el && el.style.display !== 'none') el.style.display = 'none';
````

---

## ⚙️ Installation

1. Install **Tampermonkey** for your browser:

   * [Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
   * [Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
   * [Edge](https://tampermonkey.net/?ext=dhdg&browser=edge)

2. Download or open the userscript:
   [youtube-us-mode.user.js](https://github.com/Zappingsbrew/youtube-usmode/raw/main/youtube-usmode.user.js)

3. Click **Install** in Tampermonkey.

4. Reload YouTube — the country code under the logo will now be hidden, giving the site a U.S. look.

---

## 🤖 Transparency & Credits

This README and accompanying documentation were written entirely by **ChatGPT (GPT-5)**.  

- The **userscript code** was authored by **Zappingsbrew**.  
- ChatGPT generated the **README structure, sections, formatting, and descriptive text**.  
- This userscript is purely cosmetic and does **not modify YouTube functionality** or collect any personal data.  

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

© 2025 **Zappingsbrew**
