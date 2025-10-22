# YouTube US Mode (Hide Region Label)

A lightweight **Tampermonkey** userscript that hides YouTube's regional country code (like “PH”, “IN”, etc.) to make the site appear cosmetically identical to the **U.S. version**.

---

## 📷 Before vs After

![Before vs After](images
/Before%20vs%20After.png)

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
