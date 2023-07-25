// ==UserScript==
// @name         Close X Icon
// @namespace    https://github.com/manju-summoner/Close-X-Icon
// @version      0.1
// @description  Now you can close X by clicking on the X icon!
// @author       manju_summoner
// @match        https://twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        window.close
// ==/UserScript==
(async function() {
    'use strict';

    // Your code here...
    var element = null;
    while(element == null)
    {
        element = document.querySelector('[aria-label="Twitter"]');
        await new Promise(r => setTimeout(r, 1000));
    }
    element.onmousedown = function()
    {
        window.close();
        return false;
    };
})();
