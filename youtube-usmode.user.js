/*!
 * MIT License
 * 
 * Copyright (c) 2025 zappingsbrew
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// ==UserScript==
// @name         YouTube Cosmetic US Mode (Hide Region Label)
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Hides YouTube's country code to mimic the US version (no "PH", "IN", etc. shown).
// @author       Zappingsbrew & ChatGPT (GPT-5)
// @match        https://www.youtube.com/*
// @icon         https://github.com/twitter/twemoji/blob/master/assets/72x72/1f1fa-1f1f8.png?raw=true
// @updateURL    https://github.com/Zappingsbrew/youtube-usmode/releases/latest/download/youtube-usmode.user.js
// @downloadURL  https://github.com/Zappingsbrew/youtube-usmode/releases/latest/download/youtube-usmode.user.js
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
