// ==UserScript==
// @name         YouTube Cosmetic US Mode (Hide Region Label)
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hides YouTube's country code to mimic the US version (no "PH", "IN", etc. shown).
// @author       Zappingsbrew & ChatGPT (GPT 5)
// @match        https://www.youtube.com/*
// @icon         https://github.com/twitter/twemoji/blob/master/assets/72x72/1f1fa-1f1f8.png?raw=true
// @updateURL    https://github.com/<YOUR_USERNAME>/youtube-usmode/raw/main/youtube-usmode.user.js
// @downloadURL  https://github.com/<YOUR_USERNAME>/youtube-usmode/raw/main/youtube-usmode.user.j
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  function hideCountryCode() {
    const el = document.querySelector('span#country-code');
    if (el && el.style.display !== 'none') {
      el.style.display = 'none';
    }
  }

  hideCountryCode();
  new MutationObserver(hideCountryCode).observe(document.body, { childList: true, subtree: true });
})();
