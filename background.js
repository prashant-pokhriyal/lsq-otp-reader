// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color: '#3aa757' }, () => {
        console.log("The color is green.");
    });
});

// chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//     chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [
//             new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: { urlMatches: '(login|login-in21).leadsquared.com' },
//             }),
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // chrome.tabs.executeScript(null, { file: "js/firebase-app.js" },
    //     () => chrome.tabs.executeScript(null, { file: "firebase-auth.js" },
    //         () => chrome.tabs.executeScript(null, { file: "firebase.js" },
    //             () => chrome.tabs.executeScript(null, { file: "popup.js" }))));

    // chrome.tabs.executeScript(null, { file: "js/pusher.min.js" }, () =>
    //     chrome.tabs.executeScript(null, { file: "listen-otp.js" }));
});
