// ==UserScript==
// @name         ChatGPT Full Wider
// @namespace    http://tampermonkey.net/
// @version      0.2
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
            max-width: 480rem !important;
        }
        .xl\\:max-w-\\[48rem\\] {
        	max-width: 480rem;
    	}
    `;
    document.head.appendChild(style);
})();
