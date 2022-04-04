// ==UserScript==
// @name         r/Juaniquilador
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  script para canvas!
// @author       JesusYahpp
// @match        https://www.reddit.com/r/Juaniquilador/*
// @icon         https://pbs.twimg.com/media/FPhWeCEWYAEG_VK?format=png&name=small
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/JesusYahpp/JuaniquiladorPlace/main/Juan_mapa_02.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}