//topic_01: CSS Introduction
/**
 * 01. CSS stands for Cascading Style Sheet. It describes how HTML elements are to be displayed on screen. It can control the layout of multiple html pages all at once. It is used to define styles for web pages/html. 
 */

//topic_02: CSS Syntax
/**
 * 01. A CSS rule consists of a selector and a declaration block. The selector points to the HTML element/elements that is to be designed. The declaration block contains one or more declarations separated by semi colon and is surrounded by curly braces. Each declaration includes a CSS property and its value. 
 * 
 */

//topic_03: CSS Selectors
/**
 * 01. Selectors are used to select element to style.
 *      i. element selector: selects elements based on the element name.
 *      ii. id selector: selects elements uses the id attribute of an element. to select an element with a specific id, write a hash or pound (#) character, followed by the id of the element.
 *      iii. class selector: selects all the elements uses the class attribute of elements. To select elements with a specific class, write a period(.) character followed by the class name.
 *      iv. universal selector: The universal selector(*) selects all the HTML elements of the page.
 *      v. attribute selector
 *      vi. Pseudo-class selector
 *      vii. Pseudo-element selector
 * 
 */

// topic_04: Adding CSS to HTML and Comments
/**
 * Three ways to insert CSS
 * 01. External CSS: HTML page must include a reference to the external CSS sheet file using the link element inside the head section. It must be saved with a .css extension.
 * 02. Internal CSS: Internal CSS is used if one single HTML page has a unique style. The internal style is defined inside the <style> element inside the head section. 
 * 03. Inline CSS: used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property. 
 * imp: the order: inline > internal(if the style is defined after the external link) > external > browser default
 * imp: the order: inline > external (if teh style is defined before the external link) > internal > browser default
 * so, inline style has the highest priority, and will override external and internal styles and browser defaults.
 * 
 * ***comment : 
 */

// topic_05: Colors
/**
 * 01. Colors are specified using predefined names, HEX, HSL, HSLA, RGB, RGBA.
 *      i. RGB: Red, Green, Blue light sources. rgb(red,blue,green). each parameter defines the intensity of the color between 0 to 255.
 *          - rgb(255,0,0) : red
 *          - rgb(0,255,0) : green
 *          - rgb(0,0,255) : blue
 *          - rgb(0,0,0) : black
 *          - rgb(255,255,255) : white
 *      ii. RGBA: Red, Green, Blue and alpha. Alpha parameter is a number between 0.0(fully transparent) to 1.0(not transparent).
 * 
 *      iii. HEX : hexadecimal color is specified with #RRGGBB where RR is red, GG is green and BB is blue. The values are between 00 and ff. The 3-digit hex code is a shorthand for 6-digit hex codes. If we have #ff00cc, we can write #f0c. 
 *      iv. HSL: stands for Hue, Saturation, Lightness. hsl(hue,saturation, lightness). Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue. Saturation is a percentage value. 0% means a shade of gray, and 100% means is the full color. Lightness is also a percentage. 0% is black, 50% is either light or dark, 100% is white.
 * 
 *      v. HSLA: an extension of HSL color values with an alpha channel which specifies the opacity for a color.
 * 
 */

//topic_06: Background
/**
 * background properties are used to add background effects for element.
 * 1. background-color: this property specifies the background color of a element.
 * 2. opacity: this property specifies the transparency/opacity of an element.
 * problem: when using the opacity property, all of its child elements inherit the same transparency. 
 * solution: use RGBA color values to avoid this problem.
 * 
 * 3. background-image: specifies an image to use as the background of an element. By default, it is repeated and covers the entire element. When using a background image, use an image that does not disturb the text.
 * 
 * 4. background-repeat:sets how a background image will be repeated. It controls the repetition of an image as a background of a element. The values
 *      i. repeat: repeat the image either horizontally or vertically.
 *      ii. no-repeat: do not repeat the image.
 *      iii. repeat-x: repeats the image horizontally.
 *      iv. repeat-y: repeats the image vertically.
 * 5. background-position: is used to specify the position of the background image. It sets the starting position of a background.
 * 
 * 6. background-attachment: specifies whether the background image should scroll or be fixed.
 * 7. background-clip: 
 * 8. background-origin:
 * 9. background-size
 * 
 * imp: shorthand property: background(sets all the background properties in one declaration) - background-color background-image background-repeat background-attachment background-position
 */

// topic_07: Border
/**
 * 01. border-style: specifies what kind of border to display. It can take up to four values: top, right, bottom, left
 *          i.dotted         ii. dashed
 *          iii. solid       iv. double
 *          v. groove        vi. ridge
 *          vii. inset       viii. outset
 *          ix. none         x. hidden
 * 
 * 02. border-width: specifies the width of the four borders. It can take specific size(px,pt,cm,em) or have pre-defined values: thin(1px),medium(3px), thick(5px). It can have one to four values.
 * 
 * 3. border-color: is used to set the color of the four borders. Color names can be set by name,HEX,HSL,HSLA,RGB,RGBA,transparent. If border color is not set, it inherits the color of the element. It can have from one to four values.
 * 
 * 4. border-top-style, border-right-style, border-bottom-style, border-left-style. border-left, border-right, border-bottom, border-top. 
 * 
 * 5. border-radius: is used to add rounded borders to an element.
 * 
 * imp: shorthand border property - border-width border-style(required) border-color.
 */
//topic_08: width, max-width, height max-height
/**
 * width and height properties are used to set the width and height of an element.
 *      i. auto - this is default. The browser calculates the height and width.
 *      ii. length - defines in px,cm etc.
 *      iii. % - defines in percent of the containing block.
 *      iv. initial - 
 *      v. inherit - inherited from its parent value.
 * max-width property is used to set the maximum width of an element that an element can have.
 * 
 * imp: If the width of an element is set to 300px or any specific value, the element will always be that width regardless of the size of its container or viewport.
 * 
 * imp: If the max-width of an element is set to any specific range, that means the element's width can be anything up to the specified value but it will not exceed it. If the container or viewport is smaller that the specified max-width, the element will shrink to fit.
 * 
 * 
 * 
 * 
 * 
 * 
 */

//topic_09: Box Model
/**
 * Box model is essentially a box that wraps around every HTML element. It consists of content, padding, border, margin.
 * 01. content: the content of teh box, text or images.
 * 02. padding: Padding property is used to create space about an element's content inside of any defined borders. CSS has properties for specifying the padding for each side of an element: padding-top, padding-right, padding-bottom, padding-left. Negative values are not allowed.
 * 3. border: a border that goes around the padding and content
 * 4. margin: Margins are used to create space around elements outside of any defined borders. margin-top, margin-right, margin-bottom, margin-left. Sometimes two margins collapse into a single margin.
 * imp: margin:auto; //horizontally center the element within its container
 * 
 * imp: when we set the width and height of an element , we just set the width and height of the content area. To calculate total width and height of an element, we must include the border, padding and margin.
 * 
 * suppose, the width of an element is 320 px and height is 50 px. The padding is 10 px, border is 5px and margin is 10px.
 * so, the width is - 320 + 10(left padding) + 5(left border)+ 10(left margin) 
 *                      + 10(right padding) + 5(right border) + 10(right margin)
 *                  - 370 px.
 * and the height is - 50 + 20(top and bottom padding) + 10(top and bottom 
 *                      border) + 20(top and bottom margin)
 *                   - 100px.
 */

//topic_10: CSS Text and Fonts
/**
 * ALIGNMENT
 * 1. color: is used to set the color of the text.
 * 2. text-align: is used to set horizontal alignment of a text. left, right, center,justify(each line is stretched so that every line has equal width, and the left and right margins are straight.)
 * 3. text-align-last: specifies how to align the last line of the text.
 * 4. vertical-align: sets the vertical alignment of an element. baseline, text-top, text-bottom, sub, super.
 * 5. direction: sets the text direction. rtl(right to left), ltr(left to right), initial, inherit.
 * 
 * 
 */