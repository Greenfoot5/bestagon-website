let divRoot;

function getBanner(div) {
    return;
    divRoot = div;
    divRoot.className += "bg-lancer";
    divRoot.innerHTML = "    <div class=\"mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8\">\n" +
        "        <div class=\"flex flex-wrap items-center justify-between\">\n" +
        "            <div class=\"flex w-0 flex-1 items-center\">\n" +
        "        <span class=\"flex rounded-lg bg-lancer-dark p-2\">\n" +
        "          <!-- Heroicon name: outline/arrow-down-tray -->\n" +
        "            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.75\" stroke=\"currentColor\" class=\"w-6 h-6 text-white\">\n" +
        "              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\" />\n" +
        "            </svg>\n" +
        "        </span>\n" +
        "                <p class=\"ml-3 truncate font-medium text-white\">\n" +
        "                    <span class=\"md:hidden\">v1.1-alpha.11 is out!</span>\n" +
        "                    <span class=\"hidden md:inline\">v1.1-alpha.11 is now full released!</span>\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"order-4 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto px-2\">\n" +
        "                <a href=\"https://greenfoot5.itch.io/Bestagon-Defence\" class=\"font-futured flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-lancer-dark shadow-sm hover:bg-lancer-dark hover:text-white\">Download</a>\n" +
        "            </div>\n" +
        "            <div class=\"order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto\">\n" +
        "                <a href=\"https://bestagon.alchemix.dev/updates/alpha/v1.1-alpha.11.html\" class=\"font-futured flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-lancer-dark shadow-sm hover:bg-lancer-dark hover:text-white\">Patch Notes</a>\n" +
        "            </div>\n" +
        "            <div class=\"order-2 flex-shrink-0 sm:order-3 sm:ml-3\">\n" +
        "                <button type=\"button\" onclick=\"hideDivRoot()\" class=\"-mr-1 flex rounded-md p-2 hover:bg-lancer-dark focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2\">\n" +
        "                    <span class=\"sr-only\">Dismiss</span>\n" +
        "                    <!-- Heroicon name: outline/x-mark -->\n" +
        "                    <svg class=\"h-6 w-6 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n" +
        "                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n" +
        "                    </svg>\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n";
}

function hideDivRoot() {
    divRoot.className += " hidden";
}
