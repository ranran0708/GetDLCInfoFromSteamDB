// ==UserScript==
// @name           Get Data from Steam / SteamDB
// @namespace      sak32009-gaxvyvrguokgtog
// @version        19.01.25.0
// @author         Sak32009
// @description    Get Data from Steam / SteamDB (ex Get DLC Info from SteamDB)
// @license        MIT
// @copyright      Sak32009
// @icon           https://steamdb.info/static/logos/192px.png
// @homepage       https://github.com/Sak32009/GetDataFromSteam-SteamDB
// @homepageURL    https://github.com/Sak32009/GetDataFromSteam-SteamDB
// @source         github:Sak32009/GetDataFromSteam-SteamDB
// @supportURL     https://github.com/Sak32009/GetDataFromSteam-SteamDB/issues
// @downloadURL    https://raw.githack.com/Sak32009/GetDataFromSteam-SteamDB/main/dist/sak32009-get-data-from-steam-steamdb.user.js
// @updateURL      https://raw.githack.com/Sak32009/GetDataFromSteam-SteamDB/main/dist/sak32009-get-data-from-steam-steamdb.meta.js
// @match          *://steamdb.info/app/*
// @match          *://steamdb.info/depot/*
// @match          *://store.steampowered.com/app/*
// @require        https://unpkg.com/jquery@3.7.1/dist/jquery.min.js
// @require        https://unpkg.com/@popperjs/core@2.11.8/dist/umd/popper.min.js
// @require        https://unpkg.com/fflate@0.8.2/umd/index.js
// @require        https://unpkg.com/lodash@4.17.21/lodash.min.js
// @require        https://unpkg.com/long@5.2.4/umd/index.js
// @require        https://unpkg.com/protobufjs@7.4.0/dist/minimal/protobuf.min.js
// @require        https://unpkg.com/path-browserify-esm@1.0.6/index.js
// @connect        cdn.cloudflare.steamstatic.com
// @connect        github.com
// @connect        raw.githubusercontent.com
// @grant          GM_addStyle
// @grant          GM_addValueChangeListener
// @grant          GM_download
// @grant          GM_getValue
// @grant          GM_openInTab
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          unsafeWindow
// @grant          window.close
// @run-at         document-end
// @noframes
// @updatedAt      Sun, 19 Jan 2025 15:12:45 GMT
// ==/UserScript==