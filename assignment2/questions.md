# Questions
1. Inline CSS overrides the rules defined in style elements and external stylesheets because it is most specific. This can be overridden with the !important flag
2. ID can be used to define a single element, and classes can define multiple.

```CSS
#timepiece {
    background-color: grey;
}

.bingbong {
    color: red;
    font-weight: bold;
}
```
```HTML
<div id='timepiece'>
    <p class='bingbong'>The big clock says BING BONG</p>
    <p class='bingbong'>The tiny watch says tick tock</p>
</div>
```
NB: This example will not show up when viewed as markdown, as i cant load an external code-block as a stylesheet for the HTML-block.
The example should still make sense though.

3. RGBA is an acronym for Red, Green, Blue, Alpha - each colour is defined with values between 0 and 255, and the alpha channel between 0 (transparent) and 1 (opaque). This can express colours in the sRGB colourspace (CRT gamut)
4. We include CSS files in the head element so the styles for a page are loaded before the page itself - this makes it so that you see styling instantly when elements are loaded. Old W3 specs did not allow for CSS files in the body element, but this has since changed. It is still not reccomended, as the page would have to be "re-painted" every time new styles further down the page are parsed.
5. The CSS selector most relevant would be " article p{} "