import { Question } from '../../types';

export const cssQuestions: Question[] = [
  {

    id: 'css-1',

    category: 'CSS Basics',

    title: 'What is CSS and what are its advantages?',

    answer: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of an HTML document. Advantages include: 1. Separation of content and design. 2. Improved accessibility. 3. Faster page loading due to smaller HTML files. 4. Easier maintenance and updates. 5. Consistency across pages.',

  },

  {

    id: 'css-2',

    category: 'CSS3',

    title: 'What is the latest version of CSS, and what features does it include?',

    answer: 'The latest version is CSS3. It includes features like media queries, animations, transitions, custom properties (CSS variables), grid layout, and flexbox for responsive and advanced layouts.',

  },

  {

    id: 'css-3',

    category: 'CSS Basics',

    title: 'What is the difference between CSS and Sass?',

    answer: 'Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that extends CSS with features like variables, nesting, mixins, and inheritance. While CSS is a standard language, Sass compiles into CSS.',

    codeExample: `// Sass example

$primary-color: #3498db;

.button {

  background-color: $primary-color;

  &:hover {

    background-color: darken($primary-color, 10%);

  }

}`

  },

  {

    id: 'css-4',

    category: 'CSS Basics',

    title: 'What is the difference between SCSS and CSS?',

    answer: 'SCSS is a syntax of Sass that is fully compatible with CSS. It extends CSS by adding variables, nesting, and more, making stylesheets easier to manage and maintain.',

  },

  {

    id: 'css-5',

    category: 'CSS3',

    title: 'How can you center-align a child <div> within a parent <div>?',

    answer: 'Centering can be done using flexbox, grid, or traditional methods. For flexbox, set display: flex, justify-content: center, and align-items: center on the parent.',

    codeExample: `.parent {

  display: flex;

  justify-content: center;

  align-items: center;

  height: 100vh;

}

.child {

  width: 100px;

  height: 100px;

  background-color: lightblue;

}`

  },

  {

    id: 'css-6',

    category: 'CSS3',

    title: 'What is the difference between position properties in CSS?',

    answer: 'CSS provides several position properties: 1. static (default positioning). 2. relative (positioned relative to its normal position). 3. absolute (positioned relative to the nearest positioned ancestor). 4. fixed (positioned relative to the viewport). 5. sticky (toggles between relative and fixed based on the scroll position).',

    codeExample: `.box {

  position: absolute;

  top: 50px;

  left: 100px;

}`

  },

  {

    id: 'css-7',

    category: 'CSS3',

    title: 'What is Flexbox, and what are its main properties?',

    answer: 'Flexbox is a layout model designed for one-dimensional layouts. Key properties include display: flex, flex-direction, justify-content, align-items, align-content, and flex-wrap.',

    codeExample: `.container {

  display: flex;

  justify-content: center;

  align-items: center;

  height: 100vh;

}

.item {

  flex: 1;

}`

  },

  {

    id: 'css-8',

    category: 'CSS3',

    title: 'What is the difference between Flexbox and Grid?',

    answer: 'Flexbox is one-dimensional, controlling layout in a row or column. Grid is two-dimensional, controlling layout in rows and columns simultaneously. Use flexbox for linear layouts and grid for more complex designs.',

    codeExample: `.grid {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-gap: 20px;

}

.flex-container {

  display: flex;

  justify-content: space-between;

}`

  },

  {

    id: 'css-9',

    category: 'CSS3',

    title: 'What are media queries, and how do they help with responsive design?',

    answer: 'Media queries enable styles to be applied based on device characteristics like width, height, or orientation. They are essential for responsive design, ensuring layouts adapt to various screen sizes.',

    codeExample: `@media (max-width: 768px) {

  body {

    background-color: lightgray;

  }

}`

  },

  {

    id: 'css-10',

    category: 'CSS Frameworks',

    title: 'What is Bootstrap, and how does it differ from CSS?',

    answer: 'Bootstrap is a CSS framework with pre-built components and utilities for responsive design. Unlike vanilla CSS, Bootstrap speeds up development with pre-styled elements, a grid system, and JavaScript plugins.',

    codeExample: `<div class="container">

  <div class="row">

    <div class="col-md-6">Column 1</div>

    <div class="col-md-6">Column 2</div>

  </div>

</div>`

  },

  {

    id: 'css-11',

    category: 'CSS Basics',

    title: 'What are pseudo-classes in CSS?',

    answer: 'Pseudo-classes define the special state of an element, such as when it is hovered, focused, or targeted. Examples include :hover, :focus, and :nth-child.',

    codeExample: `a:hover {

  color: red;

}

input:focus {

  border-color: blue;

}`

  },

  {

    id: 'css-12',

    category: 'CSS3',

    title: 'What are CSS animations, and how are they used?',

    answer: 'CSS animations allow elements to transition between styles over time. Use the @keyframes rule to define the animation and the animation property to apply it to an element.',

    codeExample: `@keyframes slideIn {

  from {

    transform: translateX(-100%);

  }

  to {

    transform: translateX(0);

  }

}

.box {

  animation: slideIn 1s ease-in-out;

}`

  },

  {

    id: 'css-13',

    category: 'CSS Basics',

    title: 'What is the CSS box model?',

    answer: 'The CSS box model describes the rectangular boxes generated for elements in the document tree, consisting of margins, borders, padding, and the actual content area.',

  },

  {

    id: 'css-14',

    category: 'CSS Basics',

    title: 'What are CSS selectors?',

    answer: 'CSS selectors are patterns used to select the elements you want to style. Common selectors include element selectors, class selectors, ID selectors, and attribute selectors.',

  },

  {

    id: 'css-15',

    category: 'CSS Basics',

    title: 'What is the difference between class and ID selectors?',

    answer: 'Class selectors (.) can be used on multiple elements, while ID selectors (#) are unique and can only be used on one element per page.',

  },

  {

    id: 'css-16',

    category: 'CSS Basics',

    title: 'What is the purpose of the z-index property?',

    answer: 'The z-index property controls the vertical stacking order of elements that overlap. Higher values are placed in front of lower values.',

  },

  {

    id: 'css-17',

    category: 'CSS Basics',

    title: 'What is the difference between margin and padding?',

    answer: 'Margin is the space outside an element, while padding is the space inside an element, between the content and the border.',

  },

  {

    id: 'css-18',

    category: 'CSS Basics',

    title: 'What are CSS variables?',

    answer: 'CSS variables (custom properties) allow you to store values in a variable that can be reused throughout the stylesheet. They are defined with a -- prefix.',

    codeExample: `:root {

  --main-color: #3498db;

}

.button {

  background-color: var(--main-color);

}`

  },

  {

    id: 'css-19',

    category: 'CSS3',

    title: 'What is the purpose of the display property?',

    answer: 'The display property specifies how an element is displayed on the page. Common values include block, inline, inline-block, flex, grid, and none.',

  },

  {

    id: 'css-20',

    category: 'CSS3',

    title: 'What is the difference between inline, block, and inline-block elements?',

    answer: 'Inline elements do not start on a new line and only take up as much width as necessary. Block elements start on a new line and take up the full width. Inline-block elements are similar to inline elements but can have width and height set.',

  },

  // {

  //   id: 'css-21',

  //   category: 'CSS Basics',

  //   title: 'What is a CSS preprocessor answer: 'A CSS preprocessor is a scripting language that extends CSS with variables, nested rules, mixins, and functions, allowing for more dynamic and maintainable stylesheets. Examples include Sass, LESS, and Stylus.',

  // },

  {

    id: 'css-22',

    category: 'CSS Basics',

    title: 'What is the purpose of the float property?',

    answer: 'The float property is used to position an element to the left or right of its container, allowing text and inline elements to wrap around it.',

  },

  {

    id: 'css-23',

    category: 'CSS Basics',

    title: 'What are CSS transitions?',

    answer: 'CSS transitions allow property changes in CSS values to occur smoothly over a specified duration, enhancing the user experience with animations.',

    codeExample: `button {

  transition: background-color 0.3s ease;

}

button:hover {

  background-color: blue;

}`

  },

  {

    id: 'css-24',

    category: 'CSS3',

    title: 'What is the purpose of the overflow property?',

    answer: 'The overflow property controls what happens when content overflows an element’s box. Values include visible, hidden, scroll, and auto.',

  },

  {

    id: 'css-25',

    category: 'CSS3',

    title: 'What is a CSS sprite?',

    answer: 'A CSS sprite is a single image that contains multiple images, allowing for fewer HTTP requests and faster loading times by using background positioning to display specific images.',

  },

  {

    id: 'css-26',

    category: 'CSS3',

    title: 'What is the purpose of the clear property?',

    answer: 'The clear property is used to control the behavior of floating elements. It specifies whether an element can be next to floating elements or must be below them.',

  },

  {

    id: 'css-27',

    category: 'CSS3',

    title: 'What are CSS frameworks?',

    answer: 'CSS frameworks are pre-prepared libraries that are meant to be used as a base for starting a project. They provide a set of styles, components, and utilities to speed up development.',

  },

  {

    id: 'css-28',

    category: 'CSS3',

    title: 'What is the purpose of the position property?',

    answer: 'The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky) and affects how it is placed in the document flow.',

  },

  {

    id: 'css-29',

    category: 'CSS3',

    title: 'What is the difference between absolute and relative positioning?',

    answer: 'Relative positioning moves an element relative to its normal position, while absolute positioning removes the element from the document flow and positions it relative to its nearest positioned ancestor.',

  },

  {

    id: 'css-30',

    category: 'CSS3',

    title: 'What is the purpose of the background property?',

    answer: 'The background property is a shorthand for setting multiple background properties in one declaration, including background-color, background-image, background-repeat, background-position, and background-size.',

  },

  {

    id: 'css-31',

    category: 'CSS3',

    title: 'What is the difference between rem and em units?',

    answer: 'rem units are relative to the root element’s font size, while em units are relative to the font size of the element they are used on, making rem more predictable for layout purposes.',

  },

  {

    id: 'css-32',

    category: 'CSS3',

    title: 'What is the purpose of the text-align property?',

    answer: 'The text-align property specifies the horizontal alignment of text within an element. Common values include left, right, center, and justify.',

  },

  {

    id: 'css-33',

    category: 'CSS3',

    title: 'What is the purpose of the line-height property?',

    answer: 'The line-height property sets the amount of space above and below inline elements, affecting the vertical spacing of text lines.',

  },

  {

    id: 'css-34',

    category: 'CSS3',

    title: 'What is the purpose of the font-family property?',

    answer: 'The font-family property specifies the typeface that should be used for text within an element. It can accept multiple font names as fallbacks.',

  },

  {

    id: 'css-35',

    category: 'CSS3',

    title: 'What is the purpose of the font-size property?',

    answer: 'The font-size property sets the size of the font for an element, which can be specified in various units such as px, em, rem, or percentages.',

  },

  {

    id: 'css-36',

    category: 'CSS3',

    title: 'What is the purpose of the color property?',

    answer: 'The color property sets the color of the text for an element. It can accept color names, hex values, RGB, RGBA, HSL, or HSLA values.',

  },

  {

    id: 'css-37',

    category: 'CSS3',

    title: 'What is the purpose of the border property?',

    answer: 'The border property is a shorthand for setting the width, style, and color of an element’s border in one declaration.',

  },

  {

    id: 'css-38',

    category: 'CSS3',

    title: 'What is the purpose of the box-shadow property?',

    answer: 'The box-shadow property adds shadow effects around an element’s frame, allowing for depth and emphasis in design.',

    codeExample: `.box {

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

}`

  },

  {

    id: 'css-39',

    category: 'CSS3',

    title: 'What is the purpose of the text-shadow property?',

    answer: 'The text-shadow property adds shadow effects to text, enhancing readability and visual appeal.',

    codeExample: `h1 {

  text-shadow: 1px 1px 2px black;

}`

  },

  {

    id: 'css-40',

    category: 'CSS3',

    title: 'What is the purpose of the opacity property?',

    answer: 'The opacity property sets the transparency level of an element, with values ranging from 0 (completely transparent) to 1 (completely opaque).',

  },

  {

    id: 'css-41',

    category: 'CSS3',

    title: 'What is the purpose of the visibility property?',

    answer: 'The visibility property controls the visibility of an element. Values include visible, hidden, and collapse (for table rows and columns).',

  },

  {

    id: 'css-42',

    category: 'CSS3',

    title: 'What is the purpose of the cursor property?',

    answer: 'The cursor property specifies the type of cursor to be displayed when pointing over an element, enhancing user interaction.',

  },

  {

    id: 'css-43',

    category: 'CSS3',

    title: 'What is the purpose of the transition property?',

    answer: 'The transition property allows you to change property values smoothly (over a given duration) when an element changes state.',

    codeExample: `div {

  transition: all 0.5s ease;

}`

  },

  {

    id: 'css-44',

    category: 'CSS3',

    title: 'What is the purpose of the transform property?',

    answer: 'The transform property allows you to apply 2D or 3D transformations to an element, such as rotate, scale, skew, or translate.',

    codeExample: `.box {

  transform: rotate(45deg);

}`

  },

  {

    id: 'css-45',

    category: 'CSS3',

    title: 'What is the purpose of the flex property?',

    answer: 'The flex property is a shorthand for flex-grow, flex-shrink, and flex-basis, allowing for flexible layouts in a flex container.',

  },

  {

    id: 'css-46',

    category: 'CSS3',

    title: 'What is the purpose of the grid-template-columns property?',

    answer: 'The grid-template-columns property defines the number and size of columns in a grid layout, allowing for responsive designs.',

  },

  {

    id: 'css-47',

    category: 'CSS3',

    title: 'What is the purpose of the grid-template-rows property?',

    answer: 'The grid-template-rows property defines the number and size of rows in a grid layout, facilitating structured layouts.',

  },

  {

    id: 'css-48',

    category: 'CSS3',

    title: 'What is the purpose of the align-items property?',

    answer: 'The align-items property aligns flex items along the cross axis in a flex container, with values like flex-start, flex-end, center, baseline, and stretch.',

  },

  {

    id: 'css-49',

    category: 'CSS3',

    title: 'What is the purpose of the justify-content property?',

    answer: 'The justify-content property aligns flex items along the main axis in a flex container, with values like flex-start, flex-end, center, space-between, and space-around.',

  },

  {

    id: 'css-50',

    category: 'CSS3',

    title: 'What is the purpose of the align-self property?',

    answer: 'The align-self property allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.',

  },

  {

    id: 'css-51',

    category: 'CSS3',

 title: 'What is the purpose of the flex-direction property?',

    answer: 'The flex-direction property defines the direction in which flex items are placed in the flex container, with values like row, row-reverse, column, and column-reverse.',

  },

  {

    id: 'css-52',

    category: 'CSS3',

    title: 'What is the purpose of the flex-wrap property?',

    answer: 'The flex-wrap property specifies whether flex items should wrap onto multiple lines or stay on a single line, with values like nowrap, wrap, and wrap-reverse.',

  },

  {

    id: 'css-53',

    category: 'CSS3',

    title: 'What is the purpose of the gap property in CSS Grid?',

    answer: 'The gap property defines the space between rows and columns in a grid layout, allowing for consistent spacing without additional margins.',

  },

  {

    id: 'css-54',

    category: 'CSS3',

    title: 'What is the purpose of the min-width and min-height properties?',

    answer: 'The min-width and min-height properties set the minimum width and height of an element, preventing it from being smaller than specified values.',

  },

  {

    id: 'css-55',

    category: 'CSS3',

    title: 'What is the purpose of the max-width and max-height properties?',

    answer: 'The max-width and max-height properties set the maximum width and height of an element, preventing it from exceeding specified values.',

  },

  {

    id: 'css-56',

    category: 'CSS3',

    title: 'What is the purpose of the object-fit property?',

    answer: 'The object-fit property specifies how an image or video should be resized to fit its container, with values like fill, contain, cover, none, and scale-down.',

  },

  {

    id: 'css-57',

    category: 'CSS3',

    title: 'What is the purpose of the clip-path property?',

    answer: 'The clip-path property allows you to create complex shapes by defining a clipping region for an element, effectively hiding parts of it.',

  },

  {

    id: 'css-58',

    category: 'CSS3',

    title: 'What is the purpose of the filter property?',

    answer: 'The filter property applies graphical effects like blurring or color shifting to an element, enhancing visual presentation.',

  },

  {

    id: 'css-59',

    category: 'CSS3',

    title: 'What is the purpose of the will-change property?',

    answer: 'The will-change property hints to the browser about what properties are likely to change, allowing for optimizations in rendering performance.',

  },

  {

    id: 'css-60',

    category: 'CSS3',

    title: 'What is the purpose of the writing-mode property?',

    answer: 'The writing-mode property specifies the direction in which text is written, with values like horizontal-tb, vertical-rl, and vertical-lr.',

  },

  {

    id: 'css-61',

    category: 'CSS3',

    title: 'What is the purpose of the text-overflow property?',

    answer: 'The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user, typically with ellipsis or clipping.',

  },

  {

    id: 'css-62',

    category: 'CSS3',

    title: 'What is the purpose of the white-space property?',

    answer: 'The white-space property controls how whitespace inside an element is handled, with values like normal, nowrap, pre, and pre-wrap.',

  },

  {

    id: 'css-63',

    category: 'CSS3',

    title: 'What is the purpose of the word-break property?',

    answer: 'The word-break property specifies how words should break when reaching the end of a line, with values like normal, break-all, and keep-all.',

  },

  {

    id: 'css-64',

    category: 'CSS3',

    title: 'What is the purpose of the text-indent property?',

    answer: 'The text-indent property specifies the indentation of the first line of text within an element, allowing for stylistic adjustments.',

  },

  {

    id: 'css-65',

    category: 'CSS3',

    title: 'What is the purpose of the list-style property?',

    answer: 'The list-style property is a shorthand for setting the list-style-type, list-style-position, and list-style-image properties for list items.',

  },

  {

    id: 'css-66',

    category: 'CSS3',

    title: 'What is the purpose of the counter-reset and counter-increment properties?',

    answer: 'The counter-reset property initializes a counter to a specified value, while counter-increment increases the value of a counter, useful for custom list styles.',

  },

  {

    id : 'css-67',

    category: 'CSS3',

    title: 'What is the purpose of the display: none property?',

    answer: 'The display: none property removes an element from the document flow, making it invisible and not taking up any space in the layout.',

  },

  {

    id: 'css-68',

    category: 'CSS3',

    title: 'What is the purpose of the display: block property?',

    answer: 'The display: block property makes an element a block-level element, causing it to start on a new line and take up the full width available.',

  },

  {

    id: 'css-69',

    category: 'CSS3',

    title: 'What is the purpose of the display: inline property?',

    answer: 'The display: inline property makes an element an inline element, allowing it to sit within a line of text without starting a new line.',

  },

  {

    id: 'css-70',

    category: 'CSS3',

    title: 'What is the purpose of the display: inline-block property?',

    answer: 'The display: inline-block property allows an element to be inline while still allowing width and height to be set, combining features of both inline and block elements.',

  },

  {

    id: 'css-71',

    category: 'CSS3',

    title: 'What is the purpose of the display: flex property?',

    answer: 'The display: flex property enables a flex container, allowing for flexible layouts and alignment of child elements along a single axis.',

  },

  {

    id: 'css-72',

    category: 'CSS3',

    title: 'What is the purpose of the display: grid property?',

    answer: 'The display: grid property enables a grid container, allowing for two-dimensional layouts with rows and columns.',

  },

  {

    id: 'css-73',

    category: 'CSS3',

    title: 'What is the purpose of the position: sticky property?',

    answer: 'The position: sticky property allows an element to toggle between relative and fixed positioning based on the user’s scroll position.',

  },

  {

    id: 'css-74',

    category: 'CSS3',

    title: 'What is the purpose of the position: fixed property?',

    answer: 'The position: fixed property positions an element relative to the viewport, meaning it stays in the same place even when the page is scrolled.',

  },

  {

    id: 'css-75',

    category: 'CSS3',

    title: 'What is the purpose of the position: static property?',

    answer: 'The position: static property is the default positioning for elements, meaning they are positioned according to the normal document flow.',

  },

  {

    id: 'css-76',

    category: 'CSS3',

    title: 'What is the purpose of the position: relative property?',

    answer: 'The position: relative property positions an element relative to its normal position, allowing for adjustments without affecting the layout of surrounding elements.',

  },

  {

    id: 'css-77',

    category: 'CSS3',

    title: 'What is the purpose of the background-color property?',

    answer: 'The background-color property sets the background color of an element, which can be specified using color names, hex values, or RGB/RGBA values.',

  },

  {

    id: 'css-78',

    category: 'CSS3',

    title: 'What is the purpose of the background-image property?',

    answer: 'The background-image property sets an image as the background of an element, which can be specified using a URL.',

  },

  {

    id: 'css-79',

    category: 'CSS3',

    title: 'What is the purpose of the background-repeat property?',

    answer: 'The background-repeat property specifies whether a background image should be repeated (tiled) or not, with values like repeat, no-repeat, repeat-x, and repeat-y.',

  },

  {

    id: 'css-80',

    category: 'CSS3',

    title: 'What is the purpose of the background-position property?',

    answer: 'The background-position property sets the starting position of a background image within an element, allowing for precise placement.',

  },

  {

    id: 'css-81',

    category: 'CSS3',

    title: 'What is the purpose of the background-size property?',

    answer: 'The background-size property specifies the size of the background image, with values like cover, contain, or specific dimensions.',

  },

  {

    id: 'css-82',

    category: 'CSS3',

    title: 'What is the purpose of the box-sizing property?',

    answer: 'The box-sizing property controls how the total width and height of an element are calculated, with values like content-box (default) and border-box.',

  },

  {

    id: 'css-83',

 category: 'CSS3',

    title: 'What is the purpose of the outline property?',

    answer: 'The outline property is a shorthand for setting the outline style, width, and color of an element, which is used to create a line around an element without affecting its layout.',

  },

  {

    id: 'css-84',

    category: 'CSS3',

    title: 'What is the purpose of the resize property?',

    answer: 'The resize property allows an element to be resizable by the user, with values like none, both, horizontal, and vertical.',

  },

  {

    id: 'css-85',

    category: 'CSS3',

    title: 'What is the purpose of the appearance property?',

    answer: 'The appearance property allows you to control the styling of an element to match the platform’s native UI, with values like none, button, and textfield.',

  },

  {

    id: 'css-86',

    category: 'CSS3',

    title: 'What is the purpose of the list-style-type property?',

    answer: 'The list-style-type property specifies the type of marker to use for list items, such as disc, circle, square, or none.',

  },

  {

    id: 'css-87',

    category: 'CSS3',

    title: 'What is the purpose of the list-style-position property?',

    answer: 'The list-style-position property specifies the position of the list item marker, with values like inside and outside.',

  },

  {

    id: 'css-88',

    category: 'CSS3',

    title: 'What is the purpose of the list-style-image property?',

    answer: 'The list-style-image property allows you to specify an image as the marker for list items, replacing the default bullet or number.',

  },

  {

    id: 'css-89',

    category: 'CSS3',

    title: 'What is the purpose of the text-transform property?',

    answer: 'The text-transform property controls the capitalization of text, with values like uppercase, lowercase, capitalize, and none.',

  },

  {

    id: 'css-90',

    category: 'CSS3',

    title: 'What is the purpose of the letter-spacing property?',

    answer: 'The letter-spacing property sets the space between characters in text, allowing for adjustments in readability and design.',

  },

  {

    id: 'css-91',

    category: 'CSS3',

    title: 'What is the purpose of the word-spacing property?',

    answer: 'The word-spacing property sets the space between words in text, allowing for adjustments in readability and design.',

  },

  {

    id: 'css-92',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration property?',

    answer: 'The text-decoration property is used to set decorations on text, such as underline, overline, line-through, or none.',

  },

  {

    id: 'css-93',

    category: 'CSS3',

    title: 'What is the purpose of the text-underline-position property?',

    answer: 'The text-underline-position property specifies the position of the underline relative to the text, with values like auto, under, and left.',

  },

  {

    id: 'css-94',

    category: 'CSS3',

    title: 'What is the purpose of the text-justify property?',

    answer: 'The text-justify property specifies the justification method for text, with values like auto, inter-word, and inter-character.',

  },

  {

    id: 'css-95',

    category: 'CSS3',

    title: 'What is the purpose of the text-orientation property?',

    answer: 'The text-orientation property specifies the orientation of the text in a line, with values like mixed, upright, and sideways.',

  },

  {

    id: 'css-96',

    category: 'CSS3',

    title: 'What is the purpose of the text-combine-upright property?',

    answer: 'The text-combine-upright property allows for combining multiple characters into a single glyph, useful for certain languages.',

  },

  {

    id: 'css-97',

    category: 'CSS3',

    title: 'What is the purpose of the hyphens property?',

    answer: 'The hyphens property controls the hyphenation of text, with values like none, manual, and auto.',

  },

  {

    id: 'css-98',

    category: 'CSS3',

    title: 'What is the purpose of the direction property?',

    answer: 'The direction property specifies the text direction, with values like ltr (left-to-right) and rtl (right-to-left).',

  },

  {

    id: 'css-99',

    category: 'CSS3',

    title: 'What is the purpose of the unicode-bidi property?',

    answer : 'The unicode-bidi property controls the handling of bidirectional text, allowing for proper display of mixed-direction text, with values like normal, embed, and isolate.',

  },

  {

    id: 'css-100',

    category: 'CSS3',

    title: 'What is the purpose of the writing-mode property?',

    answer: 'The writing-mode property specifies the direction in which text is written, with values like horizontal-tb, vertical-rl, and vertical-lr.',

  },

  {

    id: 'css-101',

    category: 'CSS3',

    title: 'What is the purpose of the text-align-last property?',

    answer: 'The text-align-last property specifies the alignment of the last line of a block of text, with values like auto, left, right, center, and justify.',

  },

  {

    id: 'css-102',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis property?',

    answer: 'The text-emphasis property adds emphasis marks to text, useful for certain languages, with values like none, dot, and circle.',

  },

  {

    id: 'css-103',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis-color property?',

    answer: 'The text-emphasis-color property specifies the color of the emphasis marks added by the text-emphasis property.',

  },

  {

    id: 'css-104',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis-style property?',

    answer: 'The text-emphasis-style property specifies the style of the emphasis marks, with values like filled, open, and dot.',

  },

  {

    id: 'css-105',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-color property?',

    answer: 'The text-decoration-color property specifies the color of the text decoration (like underline) applied to text.',

  },

  {

    id: 'css-106',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-thickness property?',

    answer: 'The text-decoration-thickness property specifies the thickness of the text decoration line, allowing for stylistic adjustments.',

  },

  {

    id: 'css-107',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-style property?',

    answer: 'The text-decoration-style property specifies the style of the text decoration line, with values like solid, double, dotted, dashed, and wavy.',

  },

  {

    id: 'css-108',

    category: 'CSS3',

    title: 'What is the purpose of the text-underline-offset property?',

    answer: 'The text-underline-offset property specifies the distance between the text and the underline, allowing for precise positioning.',

  },

  {

    id: 'css-109',

    category: 'CSS3',

    title: 'What is the purpose of the text-underline-position property?',

    answer: 'The text-underline-position property specifies the position of the underline relative to the text, with values like auto, under, and left.',

  },

  {

    id: 'css-110',

    category: 'CSS3',

    title: 'What is the purpose of the text-justify property?',

    answer: 'The text-justify property specifies the justification method for text, with values like auto, inter-word, and inter-character.',

  },

  {

    id: 'css-111',

    category: 'CSS3',

    title: 'What is the purpose of the text-orientation property?',

    answer: 'The text-orientation property specifies the orientation of the text in a line, with values like mixed, upright, and sideways.',

  },

  {

    id: 'css-112',

    category: 'CSS3',

    title: 'What is the purpose of the text-combine-upright property?',

    answer: 'The text-combine-upright property allows for combining multiple characters into a single glyph, useful for certain languages.',

  },

  {

    id: 'css-113',

    category: 'CSS3',

    title: 'What is the purpose of the hyphens property?',

    answer: 'The hyphens property controls the hyphenation of text, with values like none, manual, and auto.',

  },

  {

    id: 'css-114',

    category: 'CSS3',

    title: 'What is the purpose of the direction property?',

    answer: 'The direction property specifies the text direction, with values like ltr (left-to-right) and rtl (right-to-left).',

  },

  {

    id: 'css-115',

    category: 'CSS3',

    title: 'What is the purpose of the unicode-bidi property?',

    answer: 'The unicode-bidi property controls the handling of bidirectional text, allowing for proper display of mixed-direction text, with values like normal, embed, and isolate.',

  },

  {

    id: 'css-116',

    category: 'CSS3',

    title: 'What is the purpose of the writing-mode property?',

    answer: 'The writing-mode property specifies the direction in which text is written, with values like horizontal-tb, vertical-rl, and vertical-lr.',

  },

  {

    id: 'css-117',

    category: 'CSS3',

    title: 'What is the purpose of the text-align-last property?',

    answer: 'The text-align-last property specifies the alignment of the last line of a block of text, with values like auto, left, right, center, and justify.',

  },

  {

    id: 'css-118',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis property?',

    answer: 'The text-emphasis property adds emphasis marks to text, useful for certain languages, with values like none, dot, and circle.',

  },

  {

    id: 'css-119',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis-color property?',

    answer: 'The text-emphasis-color property specifies the color of the emphasis marks added by the text-emphasis property.',

  },

  {

    id: 'css-120',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis-style property?',

    answer: 'The text-emphasis-style property specifies the style of the emphasis marks, with values like filled, open, and dot.',

  },

  {

    id: 'css-121',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-color property?',

    answer: 'The text-decoration-color property specifies the color of the text decoration (like underline) applied to text.',

  },

  {

    id: 'css-122',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-thickness property?',

    answer: 'The text-decoration-thickness property specifies the thickness of the text decoration line, allowing for stylistic adjustments.',

  },

  {

    id: 'css-123',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-style property?',

    answer: 'The text-decoration-style property specifies the style of the text decoration line, with values like solid, double, dotted, dashed, and wavy.',

  },

  {

    id: 'css-124',

    category: 'CSS3',

    title: 'What is the purpose of the text-underline-offset property?',

    answer: 'The text-underline-offset property specifies the distance between the text and the underline, allowing for precise positioning.',

  },

  {

    id: 'css-125',

    category: 'CSS3',

    title: 'What is the purpose of the text-underline-position property?',

    answer: 'The text-underline-position property specifies the position of the underline relative to the text, with values like auto, under, and left.',

  },

  {

    id: 'css-126',

    category: 'CSS3',

    title: 'What is the purpose of the text-justify property?',

    answer: 'The text-justify property specifies the justification method for text, with values like auto, inter-word, and inter-character.',

  },

  {

    id: 'css-127',

    category: 'CSS3',

    title: 'What is the purpose of the text-orientation property?',

    answer: 'The text-orientation property specifies the orientation of the text in a line, with values like mixed, upright, and sideways.',

  },

  {

    id: 'css-128',

    category: 'CSS3',

    title: 'What is the purpose of the text-combine-upright property?',

    answer: 'The text-combine-upright property allows for combining multiple characters into a single glyph, useful for certain languages.',

  },

  {

    id: 'css-129',

    category: 'CSS3',

    title: 'What is the purpose of the hyphens property?',

    answer: 'The hyphens property controls the hyphenation of text, with values like none, manual, and auto.',

  },

  {

    id: 'css-130',

    category: 'CSS3',

    title: 'What is the purpose of the direction property?',

    answer: 'The direction property specifies the text direction, with values like ltr (left-to-right) and rtl (right-to-left).',

  },

  {

    id: 'css-131',

    category: 'CSS3',

    title: 'What is the purpose of the unicode-bidi property?',

    answer: 'The unicode-bidi property controls the handling of bidirectional text, allowing for proper display of mixed-direction text, with values like normal, embed, and isolate.',

  },

  {

    id: 'css-132',

    category: 'CSS3',

    title: 'What is the purpose of the writing-mode property?',

    answer: 'The writing-mode property specifies the direction in which text is written, with values like horizontal-tb, vertical-rl, and vertical-lr.',

  },

  {

    id: 'css-133',

    category: 'CSS3',

    title: 'What is the purpose of the text-align-last property?',

    answer: 'The text-align-last property specifies the alignment of the last line of a block of text, with values like auto, left, right, center, and justify.',

  },

  {

    id: 'css-134',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis property?',

    answer: 'The text-emphasis property adds emphasis marks to text, useful for certain languages, with values like none, dot, and circle.',

  },

  {

    id: 'css-135',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis-color property?',

    answer: 'The text-emphasis-color property specifies the color of the emphasis marks added by the text-emphasis property.',

  },

  {

    id: 'css-136',

    category: 'CSS3',

    title: 'What is the purpose of the text-emphasis-style property?',

    answer: 'The text-emphasis-style property specifies the style of the emphasis marks, with values like filled, open, and dot.',

  },

  {

    id: 'css-137',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-color property?',

    answer: 'The text-decoration-color property specifies the color of the text decoration (like underline) applied to text.',

  },

  {

    id: 'css-138',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-thickness property?',

    answer: 'The text-decoration-thickness property specifies the thickness of the text decoration line, allowing for stylistic adjustments.',

  },

  {

    id: 'css-139',

    category: 'CSS3',

    title: 'What is the purpose of the text-decoration-style property?',

    answer: 'The text-decoration-style property specifies the style of the text decoration line, with values like solid, double, dotted, dashed, and wavy.',

  },

  {

    id: 'css-140',

    category: 'CSS3',

    title: 'What is the purpose of the text-underline-offset property?',

    answer: 'The text-underline-offset property specifies the distance between the text and the underline, allowing for precise positioning.',

  },

  {

    id: 'css-141',

    category: 'CSS3',

    title: 'What is the purpose of the text-underline-position property?',

    answer: 'The text-underline-position property specifies the position of the underline relative to the text, with values like auto, under, and left.',

  },

  {

    id: 'css-142',

    category: 'CSS3',

    title: 'What is the purpose of the text-justify property?',

    answer: 'The text-justify property specifies the justification method for text, with values like auto, inter-word, and inter-character.',

  },

  {

    id: 'css-143',

    category: 'CSS3',

    title: 'What is the purpose of the text-orientation property?',

    answer: 'The text-orientation property specifies the orientation of the text in a line, with values like mixed, upright, and sideways.',

  },

  {

    id: 'css-144',

    category: 'CSS3',

    title: 'What is the purpose of the text-combine-upright property?',

    answer: 'The text-combine-upright property allows for combining multiple characters into a single glyph, useful for certain languages.',

  },

  {

    id: 'css-145',

    category: 'CSS3',

    title: 'What is the purpose of the hyphens property?',

    answer: 'The hyphens property controls the hyphenation of text, with values like none, manual, and auto.',

  },

  {

    id: 'css-146',

    category: 'CSS3',

    title: 'What is the purpose of the direction property?',

    answer: 'The direction property specifies the text direction, with values like ltr (left-to-right) and rtl (right-to-left).',

  },
];