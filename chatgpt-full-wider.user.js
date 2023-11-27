// ==UserScript==
// @name         ChatGPT Full Wider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  increase chat gpt box width
// @author       orknist
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
    console.log('ChatGPT Full Wider Loaded');
    'use strict';
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .gizmo .gizmo\\:xl\\:max-w-\\[48rem\\] {
            max-width: 148rem !important;
        }
    `;
    document.head.appendChild(style);
})();
