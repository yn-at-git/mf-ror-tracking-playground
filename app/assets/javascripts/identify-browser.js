
browser = "";

<!--
// The order of detection matters in some cases.

// Identify BlackBerry

if (navigator.userAgent.toLowerCase().indexOf("blackberry") != -1)
{
browser= "BlackBerry Browser";
}
else if (navigator.userAgent.toLowerCase().indexOf("blackberry") != -1)
{
browser= "BlackBerry Browser";
}

// Identify Camino

else if (navigator.userAgent.toLowerCase().indexOf("camino/1") != -1)
{
browser= "Camino version 1";
}
else if (navigator.userAgent.toLowerCase().indexOf("camino/2") != -1)
{
browser= "Camino version 2";
}
else if (navigator.userAgent.toLowerCase().indexOf("camino") != -1)
{
browser= "Camino";
}

// Identify Firefox

else if (navigator.userAgent.toLowerCase().indexOf("firefox/1.0") != -1 && navigator.userAgent.toLowerCase().indexOf("netscape") == -1)
{
browser= "Firefox version 1.0";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/1.5") != -1 && navigator.userAgent.toLowerCase().indexOf("netscape") == -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1 && navigator.vendor.toLowerCase().indexOf("apple") == -1)
{
browser="Firefox version 1.5";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/2") != -1 && navigator.userAgent.toLowerCase().indexOf("navigator") == -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1 && navigator.vendor.toLowerCase().indexOf("apple") == -1)
{
browser="Firefox version 2";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/3.0") != -1)
{
browser="Firefox version 3.0";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/3.5") != -1)
{
browser="Firefox version 3.5";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/3.6") != -1)
{
browser="Firefox version 3.6";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/4") != -1)
{
browser="Firefox version 4";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/5") != -1)
{
browser="Firefox version 5";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/6") != -1)
{
browser="Firefox version 6";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/7") != -1)
{
browser="Firefox version 7";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/8") != -1)
{
browser="Firefox version 8";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/9") != -1)
{
browser="Firefox version 9";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox/10") != -1)
{
browser="Firefox version 10";
}
else if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1)
{
browser="Firefox.";
}

// Identify Google Chrome

else if (navigator.userAgent.toLowerCase().indexOf("chrome/1.") != -1)
{
browser="Google Chrome version 1";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/2") != -1)
{
browser="Google Chrome version 2";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/3") != -1)
{
browser="Google Chrome version 3";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/4") != -1)
{
browser="Google Chrome version 4";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/5") != -1)
{
browser="Google Chrome version 5";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/6") != -1)
{
browser="Google Chrome version 6";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/7") != -1)
{
browser="Google Chrome version 7";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/8") != -1)
{
browser="Google Chrome version 8";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/9") != -1)
{
browser="Google Chrome version 9";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/10") != -1)
{
browser="Google Chrome version 10";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/11") != -1)
{
browser="Google Chrome version 11";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/12") != -1)
{
browser="Google Chrome version 12";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/13") != -1)
{
browser="Google Chrome version 13";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/14") != -1)
{
browser="Google Chrome version 14";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/15") != -1)
{
browser="Google Chrome version 15";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/16") != -1)
{
browser="Google Chrome version 16";
}
else if (navigator.userAgent.toLowerCase().indexOf("chrome/") != -1)
{
browser="Google Chrome";
}

// Identify iCab

else if (navigator.userAgent.toLowerCase().indexOf("icab 2.9") != -1)
{
browser="iCab version 2.9";
}
else if (navigator.userAgent.toLowerCase().indexOf("icab/2.9") != -1)
{
browser="iCab version 2.9";
}
else if (navigator.userAgent.toLowerCase().indexOf("icab 3") != -1)
{
browser="iCab version 3";
}
else if (navigator.userAgent.toLowerCase().indexOf("icab/4") != -1)
{
browser="iCab version 4";
}
else if (navigator.userAgent.toLowerCase().indexOf("icab") != -1)
{
browser="iCab";
}

// Identify skins for Internet Explorer

else if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 && navigator.userAgent.toLowerCase().indexOf("am browser") != -1)
{
browser="Internet Explorer version 6 with the AM Browser ";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 && navigator.userAgent.toLowerCase().indexOf("am browser") != -1)
{
browser="Internet Explorer version 7 with the AM Browser ";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 && navigator.userAgent.toLowerCase().indexOf("am browser") != -1)
{
browser="Internet Explorer version 8 with the AM Browser";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 && navigator.userAgent.toLowerCase().indexOf("avant") != -1)
{
browser="Internet Explorer version 6 with the Avant Browser";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 && navigator.userAgent.toLowerCase().indexOf("avant") != -1)
{
browser="Internet Explorer version 7 with the Avant Browser";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 && navigator.userAgent.toLowerCase().indexOf("avant") != -1)
{
browser="Internet Explorer version 8 with the Avant Browser";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 && navigator.userAgent.toLowerCase().indexOf("deepnet") != -1)
{
browser="Internet Explorer version 6 with the Deepnet Explorer";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 && navigator.userAgent.toLowerCase().indexOf("deepnet") != -1)
{
browser="Internet Explorer version 7 with the Deepnet Explorer";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 && navigator.userAgent.toLowerCase().indexOf("maxthon") != -1)
{
browser="Internet Explorer version 6 with the Maxthon";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 && navigator.userAgent.toLowerCase().indexOf("maxthon") != -1)
{
browser="Internet Explorer version 7 with the Maxthon";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 && navigator.userAgent.toLowerCase().indexOf("maxthon") != -1)
{
browser="Internet Explorer version 8 with the Maxthon";
}

// Identify Internet Explorer with Chrome Frame

else if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 && navigator.userAgent.toLowerCase().indexOf("chromeframe") != -1)
{
browser="Internet Explorer version 6 with the Google Chrome Frame extension";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 && navigator.userAgent.toLowerCase().indexOf("chromeframe") != -1)
{
browser="Internet Explorer version 7 with the Google Chrome Frame extension";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 && navigator.userAgent.toLowerCase().indexOf("chromeframe") != -1)
{
browser="Internet Explorer version 8 with the Google Chrome Frame extension";
}

// Identify Internet Explorer

else if (navigator.userAgent.toLowerCase().indexOf("msie 4.0") != -1)
{
browser="Internet Explorer version 4";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 4.5") != -1)
{
browser="Internet Explorer version 4.5";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 5.0") != -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Internet Explorer version 5.0";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 5.1") != -1)
{
browser="Internet Explorer version 5.1";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 5.2") != -1)
{
browser="Internet Explorer version 5.2";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 5.5") != -1)
{
browser="Internet Explorer version 5.5";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 && navigator.userAgent.toLowerCase().indexOf(".net clr") != -1 && navigator.userAgent.toLowerCase().indexOf("netscape") == -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Internet Explorer version 6";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 && navigator.userAgent.toLowerCase().indexOf("netscape") == -1 && navigator.userAgent.toLowerCase().indexOf(".net clr") != -1)
{
browser="Internet Explorer version 7";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 && navigator.userAgent.toLowerCase().indexOf(".net clr") != -1)
{
browser="Internet Explorer version 8";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 9") != -1 && navigator.userAgent.toLowerCase().indexOf(".net clr") != -1)
{
browser="Internet Explorer version 9";
}

// Identify Konqueror

else if (navigator.userAgent.toLowerCase().indexOf("konqueror/3") != -1)
{
browser="Konqueror version 3";
}
else if (navigator.userAgent.toLowerCase().indexOf("konqueror") != -1)
{
browser="Konqueror";
}

// Identify Mobile Safari

else if (navigator.userAgent.toLowerCase().indexOf("mobile safari") != -1)
{
browser="Mobile Safari";
}

// Identify Mozilla

else if (navigator.userAgent.toLowerCase().indexOf("mozilla/5") != -1 && navigator.userAgent.toLowerCase().indexOf("rv:1.9") != -1 && navigator.userAgent.toLowerCase().indexOf("camino") == -1 && navigator.userAgent.toLowerCase().indexOf("firefox") == -1 && navigator.userAgent.toLowerCase().indexOf("msie") == -1 && navigator.userAgent.toLowerCase().indexOf("navigator") == -1 && navigator.userAgent.toLowerCase().indexOf("netscape") == -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1 && navigator.userAgent.toLowerCase().indexOf("seamonkey") == -1)
{
browser="Mozilla version 1.9";
}
else if (navigator.userAgent.toLowerCase().indexOf("mozilla/5") != -1 && navigator.userAgent.toLowerCase().indexOf("rv:1.8") != -1 && navigator.userAgent.toLowerCase().indexOf("camino") == -1 && navigator.userAgent.toLowerCase().indexOf("firefox") == -1 && navigator.userAgent.toLowerCase().indexOf("msie") == -1 && navigator.userAgent.toLowerCase().indexOf("navigator") == -1 && navigator.userAgent.toLowerCase().indexOf("netscape") == -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1 && navigator.userAgent.toLowerCase().indexOf("seamonkey") == -1)
{
browser="Mozilla version 1.8";
}

// Identify Netscape 4.x

else if (navigator.userAgent.toLowerCase().indexOf("mozilla/4.8") != -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Netscape version 4.8";
}
else if (navigator.userAgent.toLowerCase().indexOf("mozilla/4.7") != -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Netscape version 4.7";
}
else if (navigator.userAgent.toLowerCase().indexOf("mozilla/4.6") != -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Netscape version 4.6";
}
else if (navigator.userAgent.toLowerCase().indexOf("mozilla/4.5") != -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Netscape version 4.5";
}
else if (navigator.userAgent.toLowerCase().indexOf("mozilla/4.0") != -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Netscape version 4.0";
}

// Identify Netscape skins for Firefox and Mozilla

else if (navigator.userAgent.toLowerCase().indexOf("netscape6") != -1)
{
browser="Netscape version 6";
}
else if (navigator.userAgent.toLowerCase().indexOf("netscape/7") != -1)
{
browser="Netscape version 7";
}
else if (navigator.userAgent.toLowerCase().indexOf("netscape/8") != -1 && navigator.userAgent.toLowerCase().indexOf("firefox") != -1)
{
browser="Netscape version 8";
}
else if (navigator.userAgent.toLowerCase().indexOf("navigator/9") != -1)
{
browser="Netscape Navigator version 9";
}

// Identify OmniWeb

else if (navigator.userAgent.toLowerCase().indexOf("omniweb") != -1)
{
browser="OmniWeb";
}

// Identify Opera - Opera is identified in a separate file called browser-identification-opera.html, because it misbehaves when files contain many browser= operations.  Absence of Opera is still detected in this file because Opera can turn off redirects, and because old Opera versions spoofed as Internet Explorer by default.

// Identify Origyn

else if (navigator.userAgent.toLowerCase().indexOf("origyn") != -1)
{
browser="Origyn (OWB)";
}

// Identify Safari - Safari is identified in a separate file called browser-identification-safari.html, because detection via navigator.vendor upsets some old versions of Intenet Explorer.

// Identify SeaMonkey

else if (navigator.userAgent.toLowerCase().indexOf("seamonkey/1") != -1)
{
browser="SeaMonkey version 1";
}
else if (navigator.userAgent.toLowerCase().indexOf("seamonkey/2") != -1)
{
browser="SeaMonkey version 2";
}
else if (navigator.userAgent.toLowerCase().indexOf("seamonkey") != -1)
{
browser="SeaMonkey";
}

// Identify SEMC

else if (navigator.userAgent.toLowerCase().indexOf("semc") != -1)
{
browser="SonyEricsson SEMC browser";
}

// Identify spoofing as Internet Explorer by unidentified browser

else if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 && navigator.userAgent.toLowerCase().indexOf(".net clr") == -1 && navigator.userAgent.toLowerCase().indexOf("opera") == -1)
{
browser="Internet Explorer version 6";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 && navigator.userAgent.toLowerCase().indexOf(".net clr") == -1)
{
browser="Internet Explorer version 7";
}
else if (navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 && navigator.userAgent.toLowerCase().indexOf(".net clr") == -1)
{
browser="Internet Explorer version 8";
}

// Identification failed

else
{
browser="Unknown Browser";
}
// -->


