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