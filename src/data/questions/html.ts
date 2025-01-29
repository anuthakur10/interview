import { Question } from '../../types';

export const htmlQuestions: Question[] = [
  {

    id: 'html-1', 

    category: 'HTML Basics',

    title: 'What is HTML and its advantages?',

    answer: 'HTML (HyperText Markup Language) is the standard language used to create and structure web pages. Advantages include: 1. Easy to learn and use. 2. Platform-independent. 3. Supports multimedia like images, videos, and audio. 4. Works seamlessly with other web technologies like CSS and JavaScript. 5. Enables semantic and accessible web development with modern standards.',

  },

  {

    id: 'html-2',

    category: 'HTML Basics',

    title: 'What is a markup language?',

    answer: 'A markup language uses tags to define elements within a document. These tags annotate text to identify structure and formatting. Examples include HTML, XML, and Markdown.',

  },

  {

    id: 'html-3',

    category: 'HTML5',

    title: 'What are the new features in the latest version of HTML (HTML5)?',

    answer: 'HTML5 introduced several new features including: semantic elements (<header>, <footer>, <nav>, <section>), new input types (email, date, range), multimedia elements (<audio>, <video>), graphics via <canvas>, local storage for offline data, and APIs like Geolocation and WebSockets.',

  },

  {

    id: 'html-4',

    category: 'HTML5',

    title: 'What is the difference between block-level and inline elements?',

    answer: 'Block-level elements (e.g., <div>, <p>, <section>) occupy the entire width of their parent container and start on a new line. Inline elements (e.g., <span>, <a>, <strong>) occupy only as much width as necessary and do not start on a new line.',

  },

  {

    id: 'html-5',

    category: 'HTML5',

    title: 'What is the purpose of the <meta> tag in HTML?',

    answer: '<meta> tags provide metadata about the HTML document, such as character encoding, viewport settings, and keywords. These tags are essential for SEO and responsive design.',

    codeExample: `<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="Learn HTML5 interview questions">`,

  },

  {

    id: 'html-6',

    category: 'HTML Basics',

    title: 'Explain the importance of the DOCTYPE declaration.',

    answer: 'DOCTYPE declaration informs the browser about the version of HTML used in the document. For HTML5, it is written as <!DOCTYPE html>. It ensures the document is rendered in standards mode for consistent behavior across browsers.',

  },

  {

    id: 'html-7',

    category: 'HTML5',

    title: 'What is the difference between HTML5 <audio> and <video> tags?',

    answer: 'The <audio> tag is used to embed sound files, while the <video> tag is used to embed video files in a web page. Both support multiple formats like MP3, Ogg, and MP4, and include attributes like controls, autoplay, and loop.',

    codeExample: `<audio controls>

  <source src="audio.mp3" type="audio/mpeg">

  Your browser does not support the audio element.

</audio>


<video controls>

  <source src="video.mp4" type="video/mp4">

  Your browser does not support the video element.

</video>`,

  },

  {

    id: 'html-8',

    category: 'HTML5',

    title: 'What are semantic elements in HTML5?',

    answer: 'Semantic elements clearly describe their purpose and content, improving readability and accessibility. Examples include <article>, <section>, <header>, <footer>, and <aside>.',

    codeExample: `<article>

  <h2>Article Title</h2>

  <p>This is an example of a semantic <article> element.</p>

</article>`

  },

  {

    id: 'html-9',

    category: 'HTML Basics',

    title: 'What is the difference between HTML and XHTML?',

    answer: 'HTML is more flexible and forgiving in syntax, while XHTML is stricter and follows XML standards. XHTML documents must be well-formed and properly nested, and all tags must be closed.',

  },

  {

    id: 'html-10',

    category: 'HTML5',

    title: 'What is the use of the <canvas> element in HTML5?',

    answer: 'The <canvas> element is used for drawing graphics on the web page using JavaScript. It supports drawing paths, rectangles, circles, text, and more.',

    codeExample: `<canvas id="myCanvas" width="200" height="100"></canvas>

<script>

  const canvas = document.getElementById('myCanvas');

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'blue';

  ctx.fillRect(0, 0, 150, 75);

</script>`

  },

  {

    id: 'html-11',

    category: 'HTML Basics',

    title: 'What is the purpose of the <title> tag in HTML?',

    answer: 'The <title> tag defines the title of the document, which appears in the browser tab and is used by search engines to display page titles in search results.'

  },

  {

    id: 'html-12',

    category: 'HTML Forms',

    title: 'What is the purpose of the <form> element in HTML?',

    answer: 'The <form> element is used to collect user input and submit it to a server for processing. It can contain form controls like text fields, checkboxes, radio buttons, and submit buttons.'

  },

  {

    id: 'html-13',

    category: 'HTML5',

    title: 'What is the difference between the <b> and <strong> tags in HTML?',

    answer: 'The <b> tag is used for stylistic purposes to make text bold, while the <strong> tag indicates that the text is important or emphasized semantically.'

  },

  {

    id: 'html-14',

    category: 'HTML Basics',

    title: 'What is the role of the <head> section in an HTML document?',

    answer: 'The <head> section contains metadata, links to stylesheets, and scripts. It does not render content directly on the web page.'

  },

  {

    id: 'html-15',

    category: 'HTML Attributes',

    title: 'What are global attributes in HTML?',

    answer: 'Global attributes are attributes that can be used on any HTML element. Examples include id, class, style, data-*, and tabindex.'

  },

  {

    id: 'html-16',

    category: 'HTML Forms',

    title: 'What are the different types of input elements in HTML forms?',

    answer: 'Common input types include text, password, checkbox, radio, file, hidden, email, number, date, and submit.',

  },

  {

    id: 'html-17',

    category: 'HTML Basics',

    title: 'What is the purpose of the <link> tag in HTML?',

    answer: 'The <link> tag is used to link external resources like stylesheets to the HTML document. It is typically placed in the <head> section.',

    codeExample: `<link rel="stylesheet" href="styles.css">`,

  },

  {

    id: 'html-18',

    category: 'HTML5',

    title: 'What is the <section> element used for in HTML5?',

    answer: 'The <section> element represents a thematic grouping of content, typically with a heading. It is used to structure the document semantically.',

  },

  {

    id: 'html-19',

    category: 'HTML Basics',

    title: 'What is the purpose of the <div> tag in HTML?',

    answer: 'The <div> tag is a block-level container used to group elements for styling or layout purposes. It has no semantic meaning on its own.',

  },

  {

    id: 'html-20',

    category: 'HTML Attributes',

    title: 'What is the purpose of the "alt" attribute in images?',

    answer: 'The "alt" attribute provides alternative text for an image if it cannot be displayed. It is important for accessibility and SEO.',

  },

  {

    id: 'html-21',

    category: 'HTML Basics',

    title: 'What is the difference between the <img> and <picture> tags?',

    answer: 'The <img> tag is used to embed images, while the <picture> tag allows for responsive images by providing multiple sources for different screen sizes and resolutions.',

  },

  {

    id: 'html-22',

    category: 'HTML5',

    title: 'What is the <progress> element in HTML5?',

    answer: 'The <progress> element represents the completion progress of a task, such as a file upload or download. It can be styled and updated using JavaScript.',

  },

  {

    id : 'html-23',

    category: 'HTML5',

    title: 'What is the purpose of the <footer> element in HTML5?',

    answer: 'The <footer> element is used to define the footer for a section or page, typically containing information about the author, copyright, or links to related documents.',

  },

  {

    id: 'html-24',

    category: 'HTML Basics',

    title: 'What is the difference between the <script> and <noscript> tags?',

    answer: 'The <script> tag is used to include JavaScript code, while the <noscript> tag provides alternative content for users whose browsers do not support JavaScript.',

  },

  {

    id: 'html-25',

    category: 'HTML Attributes',

    title: 'What is the "href" attribute in anchor tags?',

    answer: 'The "href" attribute specifies the URL of the page the link goes to. It is essential for creating hyperlinks in HTML.',

  },

  {

    id: 'html-26',

    category: 'HTML Forms',

    title: 'What is the purpose of the <label> tag in HTML forms?',

    answer: 'The <label> tag is used to define a label for an input element, improving accessibility and usability by associating the label with the corresponding input field.',

  },

  {

    id: 'html-27',

    category: 'HTML5',

    title: 'What is the <main> element in HTML5?',

    answer: 'The <main> element represents the main content of the document, excluding headers, footers, and sidebars. It helps improve accessibility and SEO.',

  },

  {

    id: 'html-28',

    category: 'HTML Basics',

    title: 'What is the purpose of the <blockquote> tag?',

    answer: 'The <blockquote> tag is used to define a section that is quoted from another source. It typically displays the quoted text in an indented format.',

  },

  {

    id: 'html-29',

    category: 'HTML5',

    title: 'What is the <time> element used for in HTML5?',

    answer: 'The <time> element represents a specific period in time, such as a date or time, and can be used for machine-readable date formats.',

  },

  {

    id: 'html-30',

    category: 'HTML Attributes',

    title: 'What is the "data-" attribute in HTML?',

    answer: 'The "data-" attribute is used to store custom data private to the page or application. It allows developers to embed custom data attributes on HTML elements.',

  },

  {

    id: 'html-31',

    category: 'HTML Basics',

    title: 'What is the purpose of the <canvas> element?',

    answer: 'The <canvas> element is used for drawing graphics via scripting (usually JavaScript). It can be used for rendering graphs, game graphics, or other visual images.',

  },

  {

    id: 'html-32',

    category: 'HTML5',

    title: 'What is the <dialog> element in HTML5?',

    answer: 'The <dialog> element represents a dialog box or other interactive component, such as a window or modal, that can be opened and closed programmatically.',

  },

  {

    id: 'html-33',

    category: 'HTML Basics',

    title: 'What is the purpose of the <span> tag?',

    answer: 'The <span> tag is an inline container used to mark up a part of a text or a document. It has no semantic meaning and is often used for styling purposes.',

  },

  {

    id: 'html-34',

    category: 'HTML5',

    title: 'What is the <details> element in HTML5?',

    answer: 'The <details> element is used to create a disclosure widget from which the user can obtain additional information or controls. It can be toggled open or closed.',

  },

  {

    id: 'html-35',

    category: 'HTML Forms',

    title: 'What is the purpose of the <fieldset> tag?',

    answer: 'The <fieldset> tag is used to group related elements within a form, often with a <legend> tag to provide a caption for the group.',

  },

  {

    id: 'html-36',

    category: 'HTML Basics',

    title: 'What is the <abbr> tag used for?',

    answer: 'The <abbr> tag is used to define an abbreviation or acronym, providing a way to include the full form of the abbreviation using the "title" attribute.',

  },

  {

    id: 'html-37',

    category: 'HTML5',

    title: 'What is the <mark> element in HTML5?',

    answer: 'The <mark> element is used to highlight parts of text that are relevant to the current context, typically for search results or important information.',

  },

  {

    id: 'html-38',

    category: 'HTML Basics',

    title: 'What is the purpose of the <cite> tag?',

    answer: 'The <cite> tag is used to reference the title of a creative work, such as a book, article, or song, and is typically displayed in italics.',

  },

  {

    id: 'html-39',

    category: 'HTML5',

    title: 'What is the <source> element used for in HTML5?',

    answer: 'The <source> element is used to specify multiple media resources for elements like <audio> and <video>, allowing the browser to choose the best format to play.',

  },

  {

    id: 'html-40',

    category: 'HTML Attributes',

    title: 'What is the "target" attribute in anchor tags?',

    answer: 'The "target" attribute specifies where to open the linked document. Common values include "_blank" for a new tab and "_self" for the same frame.',

  },

  {

    id: 'html-41',

    category: 'HTML Basics',

    title: 'What is the <address> tag used for?',

    answer: 'The <address> tag is used to provide contact information for the author or owner of a document or article, typically displayed in italics.',

  },

  {

    id: 'html-42',

    category: 'HTML5',

    title: 'What is the <embed> element in HTML5?',

    answer: 'The <embed> element is used to embed external content, such as multimedia, within an HTML document. It can include audio, video, or interactive content.',

  },

  {

    id: 'html-43',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="submit">?',

    answer: 'The <input type="submit"> element is used to create a button that submits the form data to a server for processing.',

  },

  {

    id: 'html-44',

    category: 'HTML Basics',

    title: 'What is the <time> element used for?',

    answer: 'The <time> element is used to represent a specific time or date, allowing for machine-readable formats and better accessibility.',

  },

  {

    id: 'html-45',

    category: 'HTML5',

    title: 'What is the <picture> element in HTML5?',

    answer: 'The <picture> element is used to provide multiple sources for an image, allowing for responsive images that adapt to different screen sizes and resolutions.',

  },

  {

    id: 'html-46',

    category: 'HTML Attributes',

    title: 'What is the "placeholder" attribute in input fields?',

    answer: 'The "placeholder" attribute provides a short hint that describes the expected value of an input field, displayed inside the field before the user enters a value.',

  },

  {

    id: 'html-47',

    category: 'HTML Basics',

    title: 'What is the <strong> tag used for?',

    answer: 'The <strong> tag is used to indicate that the text is of strong importance, typically displayed in bold by default.',

  },

  {

    id: 'html-48',

    category: 'HTML5',

    title: 'What is the <track> element in HTML5?',

    answer: 'The <track> element is used to specify text tracks for <video> and <audio> elements, such as subtitles or captions, enhancing accessibility.',

  },

  {

    id: 'html-49',

    category: 'HTML Forms',

    title: 'What is the purpose of the <select> element?',

    answer: 'The <select> element creates a dropdown list from which users can select one or more options. It is often used in forms for user input.',

  },

  {

    id: 'html-50',

    category: 'HTML Basics',

    title: 'What is the <noscript> tag used for?',

    answer: 'The <noscript> tag provides alternative content for users whose browsers do not support JavaScript or have it disabled.',

  },

  {

    id: 'html-51',

    category: 'HTML5',

    title: 'What is the <svg> element in HTML5?',

    answer: 'The <svg> element is used to define vector-based graphics in XML format, allowing for scalable images that can be manipulated with CSS and JavaScript.',

  },

  {

    id: 'html-52',

    category: 'HTML Attributes',

    title: 'What is the "readonly" attribute in input fields?',

    answer: 'The "readonly" attribute specifies that an input field is read-only, preventing users from modifying its value.',

  },

  {

    id: 'html-53',

    category: 'HTML Basics',

 title: 'What is the <iframe> tag used for?',

    answer: 'The <iframe> tag is used to embed another HTML document within the current document, allowing for the inclusion of external content like videos or maps.',

  },

  {

    id: 'html-54',

    category: 'HTML5',

    title: 'What is the <wbr> element in HTML5?',

    answer: 'The <wbr> element suggests a line break opportunity within text, allowing for better control over text wrapping in responsive designs.',

  },

  {

    id: 'html-55',

    category: 'HTML Forms',

    title: 'What is the purpose of the <textarea> element?',

    answer: 'The <textarea> element is used to create a multi-line text input field, allowing users to enter larger amounts of text.',

  },

  {

    id: 'html-56',

    category: 'HTML Basics',

    title: 'What is the <code> tag used for?',

    answer: 'The <code> tag is used to define a piece of computer code, typically displayed in a monospace font to distinguish it from regular text.',

  },

  {

    id: 'html-57',

    category: 'HTML5',

    title: 'What is the <bdi> element in HTML5?',

    answer: 'The <bdi> element stands for Bi-directional Isolation and is used to isolate a part of text that may be formatted in a different direction from its surrounding text.',

  },

  {

    id: 'html-58',

    category: 'HTML Attributes',

    title: 'What is the "accept" attribute in file input fields?',

    answer: 'The "accept" attribute specifies the types of files that the server accepts when a user uploads a file, helping to filter file selection.',

  },

  {

    id: 'html-59',

    category: 'HTML Basics',

    title: 'What is the <kbd> tag used for?',

    answer: 'The <kbd> tag is used to represent user input, typically displayed in a monospace font, indicating text that the user should type.',

  },

  {

    id: 'html-60',

    category: 'HTML5',

    title: 'What is the <output> element in HTML5?',

    answer: 'The <output> element is used to represent the result of a calculation or user action, often updated dynamically via JavaScript.',

  },

  {

    id: 'html-61',

    category: 'HTML Forms',

    title: 'What is the purpose of the <button> element?',

    answer: 'The <button> element is used to create a clickable button that can trigger actions, such as submitting a form or executing JavaScript.',

  },

  {

    id: 'html-62',

    category: 'HTML Basics',

    title: 'What is the <small> tag used for?',

    answer: 'The <small> tag is used to render text in a smaller font size, often used for side comments or disclaimers.',

  },

  {

    id: 'html-63',

    category: 'HTML5',

    title: 'What is the <progress> element in HTML5?',

    answer: 'The <progress> element represents the completion progress of a task, such as a file upload or download, and can be styled with CSS.',

  },

  {

    id: 'html-64',

    category: 'HTML Attributes',

    title: 'What is the "autofocus" attribute in input fields?',

    answer: 'The "autofocus" attribute automatically focuses on an input field when the page loads, improving user experience by allowing immediate input.',

  },

  {

    id: 'html-65',

    category: 'HTML Basics',

    title: 'What is the <var> tag used for?',

    answer: 'The <var> tag is used to represent a variable in a mathematical expression or programming context, typically displayed in italics.',

  },

  {

    id: 'html-66',

    category: 'HTML5',

    title: 'What is the <time> element used for in HTML5?',

    answer: 'The <time> element is used to represent a specific time or date, allowing for machine-readable formats and better accessibility.',

  },

  {

    id: 'html-67',

    category: 'HTML Forms',

    title: 'What is the purpose of the <datalist> element?',

    answer: 'The <datalist> element provides a list of predefined options for an <input> element, allowing users to select from a list while still being able to enter custom values.',

  },

  {

    id: 'html-68',

    category: 'HTML Basics',

    title: 'What is the <samp> tag used for?',

    answer: 'The <samp> tag is used to represent sample output from a computer program, typically displayed in a monospace font to distinguish it from regular text.',

  },

  {

    id: 'html-69',

    category: 'HTML5',

    title: 'What is the <dialog> element used for in HTML5?',

    answer: 'The <dialog> element is used to create a dialog box or modal that can be opened and closed programmatically, enhancing user interaction.',

  },

  {

    id: 'html-70',

    category: 'HTML Attributes',

    title: 'What is the "disabled" attribute in HTML?',

    answer: 'The "disabled" attribute is used to disable an input element, preventing user interaction and submission of its value.',

  },

  {

    id: 'html-71',

    category: 'HTML Basics',

    title: 'What is the <hr> tag used for?',

    answer: 'The <hr> tag is used to create a thematic break or horizontal line in the content, often used to separate sections.',

  },

  {

    id: 'html-72',

    category: 'HTML5',

    title: 'What is the <picture> element used for in HTML5?',

    answer: 'The <picture> element allows for responsive images by providing multiple sources for different screen sizes and resolutions, enhancing performance and user experience.',

  },

  {

    id: 'html-73',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="checkbox">?',

    answer: 'The <input type="checkbox"> element allows users to select one or more options from a set, with each checkbox representing a separate option.',

  },

  {

    id: 'html-74',

    category: 'HTML Basics',

    title: 'What is the <b> tag used for?',

    answer: 'The <b> tag is used to make text bold without implying any added importance, often used for stylistic purposes.',

  },

  {

    id: 'html-75',

    category: 'HTML5',

    title: 'What is the <source> element used for in HTML5?',

    answer: 'The <source> element specifies multiple media resources for <audio> and <video> elements, allowing the browser to choose the best format to play.',

  },

  {

    id: 'html-76',

    category: 'HTML Attributes',

    title: 'What is the "maxlength" attribute in input fields?',

    answer: 'The "maxlength" attribute specifies the maximum number of characters allowed in an input field, helping to enforce data validation.',

  },

  {

    id: 'html-77',

    category: 'HTML Basics',

    title: 'What is the <em> tag used for?',

    answer: 'The <em> tag is used to emphasize text, typically displayed in italics, indicating that the text has a stronger importance.',

  },

  {

    id: 'html-78',

    category: 'HTML5',

    title: 'What is the <canvas> element used for in HTML5?',

    answer: 'The <canvas> element is used for drawing graphics on the fly via scripting (usually JavaScript), allowing for dynamic visual content.',

  },

  {

    id: 'html-79',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="radio">?',

    answer: 'The <input type="radio"> element allows users to select one option from a set of mutually exclusive options, with only one radio button being selectable at a time.',

  },

  {

    id: 'html-80',

    category: 'HTML Basics',

    title: 'What is the <sub> tag used for?',

    answer: 'The <sub> tag is used to display text as subscript, typically used in mathematical expressions or chemical formulas.',

  },

  {

    id: 'html-81',

    category: 'HTML5',

    title: 'What is the <header> element used for in HTML5?',

    answer: 'The <header> element represents introductory content or a set of navigational links, typically containing headings, logos, or other introductory elements.',

  },

  {

    id: 'html-82',

    category: 'HTML Attributes',

    title: 'What is the "value" attribute in input fields?',

    answer: 'The "value" attribute specifies the initial value of an input field, which can be submitted with the form data.',

  },

  {

    id: 'html-83',

    category: 'HTML Basics',

    title: 'What is the <sup> tag used for?',

    answer: 'The <sup> tag is used to display text as superscript, often used in mathematical expressions or footnotes.',

  },

  {

    id: 'html-84',

    category: 'HTML5',

    title: 'What is the <footer> element used for in HTML5?',

    answer: 'The <footer> element represents the footer of a section or page, typically containing information about the author, copyright, or links to related documents.',

  },

  {

    id: 'html-85',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="hidden">?',

    answer: 'The <input type="hidden"> element is used to store data that users cannot see or modify, but that needs to be submitted with the form.',

  },

  {

    id: 'html-86',

    category: 'HTML Basics',

    title: 'What is the <cite> tag used for?',

    answer: 'The <cite> tag is used to reference the title of a creative work, such as a book, article, or song, and is typically displayed in italics.',

  },

  {

    id: 'html-87',

    category: 'HTML5',

    title: 'What is the <aside> element in HTML5?',

    answer: 'The <aside> element represents content that is tangentially related to the content around it, often used for sidebars or additional information.',

  },

  {

    id: 'html-88',

    category: 'HTML Attributes',

    title: 'What is the "formaction" attribute in input elements?',

    answer: 'The "formaction" attribute specifies the URL where the form data should be sent when the form is submitted, overriding the form’s action attribute.',

  },

  {

    id: 'html-89',

    category: 'HTML Basics',

    title: 'What is the <time> tag used for?',

    answer: 'The <time> tag is used to represent a specific time or date, allowing for machine-readable formats and better accessibility.',

  },

  {

    id: 'html-90',

    category: 'HTML5',

    title: 'What is the <video> element used for in HTML5?',

    answer: 'The <video> element is used to embed video content in a web page, supporting multiple formats and providing controls for playback.',

  },

  {

    id: 'html-91',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="color">?',

    answer: 'The <input type="color"> element allows users to select a color from a color picker, providing a visual interface for color selection.',

  },

  {

    id: 'html-92',

    category: 'HTML Basics',

    title: 'What is the <abbr> tag used for?',

    answer: 'The <abbr> tag is used to define an abbreviation or acronym, providing a way to include the full form of the abbreviation using the "title" attribute.',

  },

  {

    id: 'html-93',

    category: 'HTML5',

    title: 'What is the <meter> element in HTML5?',

    answer: 'The <meter> element represents a scalar measurement within a known range, such as a disk usage or a temperature, and can be styled with CSS.',

  },

  {

    id: 'html-94',

    category: 'HTML Attributes',

    title: 'What is the "autocomplete" attribute in input fields?',

    answer: 'The "autocomplete" attribute specifies whether the browser should automatically complete the input field based on previously entered values.',

  },

  {

    id: 'html-95',

    category: 'HTML Basics',

    title: 'What is the <del> tag used for?',

    answer: 'The <del> tag is used to represent text that has been deleted from a document, typically displayed with a strikethrough.',

  },

  {

    id: 'html-96',

    category: 'HTML5',

    title: 'What is the <source> element used for in HTML5?',

    answer: 'The <source> element specifies multiple media resources for <audio> and <video> elements, allowing the browser to choose the best format to play.',

  },

  {

    id: 'html-97',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="date">?',

    answer: 'The <input type="date"> element allows users to select a date from a date picker, providing a user-friendly interface for date selection.',

  },

  {

    id: 'html-98',

    category: 'HTML Basics',

    title: 'What is the <ins> tag used for?',

    answer: 'The <ins> tag is used to represent text that has been inserted into a document, typically displayed with an underline.',

  },

  {

    id: 'html-99',

    category: 'HTML5',

    title: 'What is the <track> element used for in HTML5?',

    answer: 'The <track> element is used to specify text tracks for <video> and <audio> elements, such as subtitles or captions, enhancing accessibility.',

  },

  {

    id: 'html-100',

    category: 'HTML Attributes',

    title: 'What is the "required" attribute in input fields?',

    answer: 'The "required" attribute specifies that an input field must be filled out before submitting the form, ensuring that necessary data is collected.',

  },

  {

    id: 'html-101',

    category: 'HTML Basics',

    title: 'What is the <figcaption> tag used for?',

    answer: 'The <figcaption> tag is used to provide a caption for a <figure> element, describing the content of the figure.',

  },

  {

    id: 'html-102',

    category: 'HTML5',

    title: 'What is the <figure> element in HTML5?',

    answer: 'The <figure> element is used to encapsulate media content, such as images or illustrations, along with an optional caption provided by <figcaption>.',

  },

  {

    id: 'html-103',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="tel">?',

    answer: 'The <input type="tel"> element allows users to enter a telephone number, providing a numeric keypad on mobile devices for easier input.',

  },

  {

    id: 'html-104',

    category: 'HTML Basics',

    title: 'What is the <address> tag used for?',

    answer: 'The <address> tag is used to provide contact information for the author or owner of a document or article, typically displayed in italics.',

  },

  {

    id: 'html-105',

    category: 'HTML5',

    title: 'What is the <data> element in HTML5?',

    answer: 'The <data> element is used to link a content value with a machine-readable translation, allowing for better data processing and accessibility.',

  },

  {

    id: 'html-106',

    category: 'HTML Attributes',

    title: 'What is the "size" attribute in input fields?',

    answer: 'The "size" attribute specifies the width of an input field in terms of the number of characters, affecting its visual appearance.',

  },

  {

    id: 'html-107',

    category: 'HTML Basics',

    title: 'What is the <time> tag used for?',

    answer: 'The <time> tag is used to represent a specific time or date, allowing for machine-readable formats and better accessibility.',

  },

  {

    id: 'html-108',

    category: 'HTML5',

    title: 'What is the <summary> element in HTML5?',

    answer: 'The <summary> element is used as a summary for a <details> element, providing a visible heading that can be clicked to toggle the visibility of the details.',

  },

  {

    id: 'html-109',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="month">?',

    answer: 'The <input type="month"> element allows users to select a month and year from a dropdown, providing a user-friendly interface for date selection.',

  },

  {

    id: 'html-110',

    category: 'HTML Basics',

    title: 'What is the <s> tag used for?',

    answer: 'The <s> tag is used to represent text that is no longer accurate or relevant, typically displayed with a strikethrough.',

  },

  {

    id: 'html-111',

    category: 'HTML5',

    title: 'What is the <progress> element used for in HTML5?',

    answer: 'The <progress> element represents the completion progress of a task, such as a file upload or download, and can be styled with CSS.',

  },

  {

    id: 'html-112',

    category: 'HTML Attributes',

    title: 'What is the "step" attribute in input fields?',

    answer: 'The "step" attribute specifies the legal number intervals for an input field, particularly useful for numeric inputs.',

  },

  {

    id: 'html-113',

    category: 'HTML Basics',

    title: 'What is the <bdi> tag used for?',

    answer: 'The <bdi> tag stands for Bi-directional Isolation and is used to isolate a part of text that may be formatted in a different direction from its surrounding text.',

  },

  {

    id: 'html-114',

    category: 'HTML5',

    title: 'What is the <meter> element used for in HTML5?',

    answer: 'The <meter> element represents a scalar measurement within a known range, such as a disk usage or a temperature, and can be styled with CSS.',

  },

  {

    id: 'html-115',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="week">?',

    answer: 'The <input type="week"> element allows users to select a specific week and year, providing a user-friendly interface for selecting a week in forms.',

  },

  {

    id: 'html-116',

    category: 'HTML Basics',

    title: 'What is the <wbr> tag used for?',

    answer: 'The <wbr> tag suggests an optional line break opportunity within text, allowing for better control over text wrapping in responsive designs.',

  },

  {

    id: 'html-117',

    category: 'HTML5',

    title: 'What is the <dialog> element used for in HTML5?',

    answer: 'The <dialog> element is used to create a dialog box or modal that can be opened and closed programmatically, enhancing user interaction.',

  },

  {

    id: 'html-118',

    category: 'HTML Attributes',

    title: 'What is the "form" attribute in input elements?',

    answer: 'The "form" attribute associates an input element with a specific <form> element, allowing it to be submitted with that form even if it is outside the <form> tag.',

  },

  {

    id: 'html-119',

    category: 'HTML Basics',

    title: 'What is the <cite> tag used for?',

    answer: 'The <cite> tag is used to reference the title of a creative work, such as a book, article, or song, and is typically displayed in italics.',

  },

  {

    id: 'html-120',

    category: 'HTML5',

    title: 'What is the <source> element used for in HTML5?',

    answer: 'The <source> element specifies multiple media resources for <audio> and <video> elements, allowing the browser to choose the best format to play.',

  },

  {

    id: 'html-121',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="search">?',

    answer: 'The <input type="search"> element allows users to enter search queries, often providing a specialized interface for search input.',

  },

  {

    id: 'html-122',

    category: 'HTML Basics',

    title: 'What is the <kbd> tag used for?',

    answer: 'The <kbd> tag is used to represent user input, typically displayed in a monospace font, indicating text that the user should type.',

  },

  {

    id: 'html-123',

    category: 'HTML5',

    title: 'What is the <track> element used for in HTML5?',

    answer: 'The <track> element is used to specify text tracks for <video> and <audio> elements, such as subtitles or captions, enhancing accessibility.',

  },

  {

    id: 'html-124',

    category: 'HTML Attributes',

    title: 'What is the "pattern" attribute in input fields?',

    answer: 'The "pattern" attribute specifies a regular expression that the input value must match, allowing for custom validation of input formats.',

  },

  {

    id: 'html-125',

    category: 'HTML Basics',

    title: 'What is the <del> tag used for?',

    answer: 'The <del> tag is used to represent text that has been deleted from a document, typically displayed with a strikethrough.',

  },

  {

    id: 'html-126',

    category: 'HTML5',

    title: 'What is the <embed> element used for in HTML5?',

    answer: 'The <embed> element is used to embed external content, such as multimedia, within an HTML document. It can include audio, video, or interactive content.',

  },

  {

    id: 'html-127',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="url">?',

    answer: 'The <input type="url"> element allows users to enter a valid URL, providing validation for web addresses in forms.',

  },

  {

    id: 'html-128',

    category: 'HTML Basics',

    title: 'What is the <ins> tag used for?',

    answer: 'The <ins> tag is used to represent text that has been inserted into a document, typically displayed with an underline.',

  },

  {

    id: 'html-129',

    category: 'HTML5',

    title: 'What is the <picture> element used for in HTML5?',

    answer: 'The <picture> element allows for responsive images by providing multiple sources for different screen sizes and resolutions, enhancing performance and user experience.',

  },

  {

    id: 'html-130',

    category: 'HTML Attributes',

    title: 'What is the "multiple" attribute in input fields?',

    answer: 'The "multiple" attribute allows users to select multiple files in a file input field, enabling batch uploads.',

  },
   {

    id: 'html-131',

    category: 'HTML Basics',

    title: 'What is the <b> tag used for?',

    answer: 'The <b> tag is used to make text bold without implying any added importance, often used for stylistic purposes.',

  },

  {

    id: 'html-132',

    category: 'HTML5',

    title: 'What is the <header> element used for in HTML5?',

    answer: 'The <header> element represents introductory content or a set of navigational links, typically containing headings, logos, or other introductory elements.',

  },

  {

    id: 'html-133',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="file">?',

    answer: 'The <input type="file"> element allows users to upload files from their device, providing a file selection dialog.',

  },

  {

    id: 'html-134',

    category: 'HTML Basics',

    title: 'What is the <samp> tag used for?',

    answer: 'The <samp> tag is used to represent sample output from a computer program, typically displayed in a monospace font to distinguish it from regular text.',

  },

  {

    id: 'html-135',

    category: 'HTML5',

    title: 'What is the <dialog> element used for in HTML5?',

    answer: 'The <dialog> element is used to create a dialog box or modal that can be opened and closed programmatically, enhancing user interaction.',

  },

  {

    id: 'html-136',

    category: 'HTML Attributes',

    title: 'What is the "accept" attribute in file input fields?',

    answer: 'The "accept" attribute specifies the types of files that the server accepts when a user uploads a file, helping to filter file selection.',

  },

  {

    id: 'html-137',

    category: 'HTML Basics',

    title: 'What is the <var> tag used for?',

    answer: 'The <var> tag is used to represent a variable in a mathematical expression or programming context, typically displayed in italics.',

  },

  {

    id: 'html-138',

    category: 'HTML5',

    title: 'What is the <meter> element used for in HTML5?',

    answer: 'The <meter> element represents a scalar measurement within a known range, such as a disk usage or a temperature, and can be styled with CSS.',

  },

  {

    id: 'html-139',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="range">?',

    answer: 'The <input type="range"> element allows users to select a value from a specified range using a slider interface.',

  },

  {

    id: 'html-140',

    category: 'HTML Basics',

    title: 'What is the <wbr> tag used for?',

    answer: 'The <wbr> tag suggests an optional line break opportunity within text, allowing for better control over text wrapping in responsive designs.',

  },

  {

    id: 'html-141',

    category: 'HTML5',

    title: 'What is the <picture> element used for in HTML5?',

    answer: 'The <picture> element allows for responsive images by providing multiple sources for different screen sizes and resolutions, enhancing performance and user experience.',

  },

  {

    id: 'html-142',

    category: 'HTML Attributes',

    title: 'What is the "formnovalidate" attribute in input elements?',

    answer: 'The "formnovalidate" attribute specifies that the form should not be validated when submitted, allowing for submission of invalid data.',

  },

  {

    id: 'html-143',

    category: 'HTML Basics',

    title: 'What is the <cite> tag used for?',

    answer: 'The <cite> tag is used to reference the title of a creative work, such as a book, article, or song, and is typically displayed in italics.',

  },

  {

    id: 'html-144',

    category: 'HTML5',

    title: 'What is the <track> element used for in HTML5?',

    answer: 'The <track> element is used to specify text tracks for <video> and <audio> elements, such as subtitles or captions, enhancing accessibility.',

  },

  {

    id: 'html-145',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="datetime-local">?',

    answer: 'The <input type="datetime-local"> element allows users to select a date and time from a single input field, providing a user-friendly interface for date and time selection.',

  },

  {

    id: 'html-146',

    category: 'HTML Basics',

    title: 'What is the <abbr> tag used for?',

    answer: 'The <abbr> tag is used to define an abbreviation or acronym, providing a way to include the full form of the abbreviation using the "title" attribute.',

  },

  {

    id: 'html-147',

    category: 'HTML5',

    title: 'What is the <data> element in HTML5?',

    answer: 'The <data> element is used to link a content value with a machine-readable translation, allowing for better data processing and accessibility.',

  },

  {

    id: 'html-148',

    category: 'HTML Attributes',

    title: 'What is the "min" attribute in input fields?',

    answer: 'The "min" attribute specifies the minimum value for an input field, particularly useful for numeric and date inputs.',

  },

  {

    id: 'html-149',

    category: 'HTML Basics',

    title: 'What is the <s> tag used for?',

    answer: 'The <s> tag is used to represent text that is no longer accurate or relevant, typically displayed with a strikethrough.',

  },

  {

    id: 'html-150',

    category: 'HTML5',

    title: 'What is the <video> element used for in HTML5?',

    answer: 'The <video> element is used to embed video content in a web page, supporting multiple formats and providing controls for playback.',

  },

  {

    id: 'html-151',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="datetime">?',

    answer: 'The <input type="datetime"> element allows users to select a date and time from a single input field, providing a user-friendly interface for date and time selection.',

  },

  {

    id: 'html-152',

    category: 'HTML Basics',

    title: 'What is the <figcaption> tag used for?',

    answer: 'The <figcaption> tag is used to provide a caption for a <figure> element, describing the content of the figure.',

  },

  {

    id: 'html-153',

    category: 'HTML5',

    title: 'What is the <embed> element used for in HTML5?',

    answer: 'The <embed> element is used to embed external content, such as multimedia, within an HTML document. It can include audio, video, or interactive content.',

  },

  {

    id: 'html-154',

    category: 'HTML Attributes',

    title: 'What is the "pattern" attribute in input fields?',

    answer: 'The "pattern" attribute specifies a regular expression that the input value must match, allowing for custom validation of input formats.',

  },

  {

    id: 'html-155',

    category: 'HTML Basics',

    title: 'What is the <mark> tag used for?',

    answer: 'The <mark> tag is used to highlight parts of text that are relevant to the current context, typically for search results or important information.',

  },

  {

    id: 'html-156',

    category: 'HTML5',

    title: 'What is the <meter> element used for in HTML5?',

    answer: 'The <meter> element represents a scalar measurement within a known range, such as a disk usage or a temperature, and can be styled with CSS.',

  },

  {

    id: 'html-157',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="week">?',

    answer: 'The <input type="week"> element allows users to select a specific week and year, providing a user-friendly interface for selecting a week in forms.',

  },

  {

    id: 'html-158',

    category: 'HTML Basics',

    title: 'What is the <wbr> tag used for?',

    answer: 'The <wbr> tag suggests an optional line break opportunity within text, allowing for better control over text wrapping in responsive designs.',

  },

  {

    id: 'html-159',

    category: 'HTML5',

    title: 'What is the <dialog> element used for in HTML5?',

    answer: 'The <dialog> element is used to create a dialog box or modal that can be opened and closed programmatically, enhancing user interaction.',

  },

  {

    id: 'html-160',

    category: 'HTML Attributes',

    title: 'What is the "formnovalidate" attribute in input elements?',

    answer: 'The "formnovalidate" attribute specifies that the form should not be validated when submitted, allowing for submission of invalid data.',

  },

  {

    id: 'html-161',

    category: 'HTML Basics',

    title: 'What is the <cite> tag used for?',

    answer: 'The <cite> tag is used to reference the title of a creative work, such as a book, article, or song, and is typically displayed in italics.',

  },

  {

    id: 'html-162',

    category: 'HTML5',

    title: 'What is the <track> element used for in HTML5?',

    answer: 'The <track> element is used to specify text tracks for <video> and <audio> elements, such as subtitles or captions, enhancing accessibility.',

  },

  {

    id: 'html-163',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="color">?',

    answer: 'The <input type="color"> element allows users to select a color from a color picker, providing a visual interface for color selection.',

  },

  {

    id: 'html-164',

    category: 'HTML Basics',

    title: 'What is the <kbd> tag used for?',

    answer: 'The <kbd> tag is used to represent user input, typically displayed in a monospace font, indicating text that the user should type.',

  },

  {

    id: 'html-165',

    category: 'HTML5',

    title: 'What is the <dialog> element used for in HTML5?',

    answer: 'The <dialog> element is used to create a dialog box or modal that can be opened and closed programmatically, enhancing user interaction.',

  },

  {

    id: 'html-166',

    category: 'HTML Attributes',

    title: 'What is the "accept" attribute in file input fields?',

    answer: 'The "accept" attribute specifies the types of files that the server accepts when a user uploads a file, helping to filter file selection.',

  },

  {

    id: 'html-167',

    category: 'HTML Basics',

    title: 'What is the <var> tag used for?',

    answer: 'The <var> tag is used to represent a variable in a mathematical expression or programming context, typically displayed in italics.',

  },

  {

    id: 'html-168',

    category: 'HTML5',

    title: 'What is the <meter> element used for in HTML5?',

    answer: 'The <meter> element represents a scalar measurement within a known range, such as a disk usage or a temperature, and can be styled with CSS.',

  },

  {

    id: 'html-169',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="range">?',

    answer: 'The <input type="range"> element allows users to select a value from a specified range using a slider interface.',

  },

  {

    id: 'html-170',

    category: 'HTML Basics',

    title: 'What is the <wbr> tag used for?',

    answer: 'The <wbr> tag suggests an optional line break opportunity within text, allowing for better control over text wrapping in responsive designs.',

  },

  {

    id: 'html-171',

    category: 'HTML5',

    title: 'What is the <picture> element used for in HTML5?',

    answer: 'The <picture> element allows for responsive images by providing multiple sources for different screen sizes and resolutions, enhancing performance and user experience.',

  },

  {

    id: 'html-172',

    category: 'HTML Attributes',

    title: 'What is the "formnovalidate" attribute in input elements?',

    answer: 'The "formnovalidate" attribute specifies that the form should not be validated when submitted, allowing for submission of invalid data.',

  },

  {

    id: 'html-173',

    category: 'HTML Basics',

    title: 'What is the <cite> tag used for?',

    answer: 'The <cite> tag is used to reference the title of a creative work, such as a book, article, or song, and is typically displayed in italics.',

  },

  {

    id: 'html-174',

    category: 'HTML5',

    title: 'What is the <track> element used for in HTML5?',

    answer: 'The <track> element is used to specify text tracks for <video> and <audio> elements, such as subtitles or captions, enhancing accessibility.',

  },

  {

    id: 'html-175',

    category: 'HTML Forms',

    title: 'What is the purpose of the <input type="datetime-local">?',

    answer: 'The <input type="datetime-local"> element allows users to select a date and time from a single input field, providing a user-friendly interface for date and time selection.',

  }
];