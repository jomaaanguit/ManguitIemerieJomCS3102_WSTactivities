<div align="center">
  <h1>Web Systems and Technologies</h1>
  <h2>Laboratory Activities Repository</h2>
</div>

<details>
<summary><h2>ðŸ“ Contents</h2></summary>
 
- [Overview](#overview)
- [Laboratory 1](#lab1)
- [Laboratory 2](#lab2)
- [Laboratory 3](#lab3)
- [Laboratory 4](#lab4)
- [Student Profile](#profile)
- [Acknowledgement](#acknowledgement)



</details>

### <a name="overview"></a>
## ðŸ ± Overview

<div align="justify">
This repository serves as a comprehensive collection of laboratory deliverables created in fulfillment of the course IT 314: Web Systems and Technologies. It encompasses a series of web development activities designed to demonstrate the practical application of key concepts and techniques covered throughout the course.<br><br>

Included below is a brief documentation that delves into the concepts and methodologies applied in the development of each webpage required by the laboratory exercises. The documentation outlines the coding practices and approaches employed, offering insights into the process and the technical decisions that shaped the outcome of each project.
<br><br>

### <a name="lab1"></a>
## ðŸ“… Laboratory 1 | Class Schedule

<b>Lesson(s): </b>HTML Tables, HTML Semantics<br><br>
<b>Agenda: </b> Create an HTML file that contains sections for your class schedule visualized by an HTML table and a footer section that contains the list of courses (course code and description).<br><br>
<b>Relevant Syntax Utilized: </b><br>
<pre><code>&lt;table&gt;&lt;/table&gt;</code></pre>
<pre><code>&lt;th rowspan&gt;&lt;/th&gt;</code></pre>
<pre><code>&lt;td rowspan&gt;&lt;/td&gt;</code></pre>
<pre><code>&lt;th colspan&gt;&lt;/th&gt;</code></pre>
<pre><code>&lt;td colspan&gt;&lt;/td&gt;</code></pre>
<pre><code>&lt;footer&gt;&lt;/footer&gt;</code></pre>
 
<h3>Preview:</h3>
<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/jomaaanguit/ManguitIemerieJomCS3102_WSTactivities/blob/main/Laboratory%20Activities/Laboratory%20Activity%201%20%7B05%7D-%7B09%7D-%7B2024%7D/html-table-output.png"></td>
    </tr>
  </table>
</div>

<h3>Important Notes:</h3>
â€¢ <b>&lt;th table&gt;</b> represents tabular dataâ€”that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.<br><br>
<pre><code>&lt;table&gt;
  <i>&lt;!-- Your table content here... --&gt;</i>
&lt;/table&gt;</code></pre>
â€¢ <b>&lt;th rowspan&gt;</b> specifies how many rows a table cell should span. Refer to the PHY 101 schedule on Tuesday and observe how it spans to three time periods.<br><br>
<pre><code>&lt;td rowspan="3"&gt;PHY 101&lt;/td&gt;</code></pre>
â€¢ <b>&lt;colspan&gt;</b> specifies how many columns a table cell should span. Refer to the lunch schedule in the image and observe how it spans to three days.<br><br>
<pre><code>&lt;td colspan="3"&gt;LUNCH&lt;/td&gt;</code></pre>
â€¢ <b>&lt;th footer&gt;</b> defines a footer for a document or section. In practical use, it typically contains authorship information, copyright information, contact information, sitemap, back-to-top links, and related documents.<br><br>
<pre><code>&lt;footer&gt;
  <i>&lt;! -- Your footer content here... --&gt;</i>
&lt;/footer&gt;</code></pre>
<br>

### <a name="lab2"></a>
## âœˆï¸ Laboratory 2 | Vision Board

<b>Lesson(s): </b>HTML, CSS Flexbox<br><br>
<b>Agenda: </b> Create an personalized vision board webpage using basic HTML and CSS Flexbox. The vision board will include images, inspirational quites, and goals, allowing students to visually represent their aspirations.<br><br>
<b>Relevant Syntax Utilized: </b><br>
<pre><code>display: flex;</code></pre>
<pre><code>flex-direction: row;</code></pre>
<pre><code>justify-content: center;</code></pre>
<pre><code>align-items: center;</code></pre>
<pre><code>.yourClassName {
  <i>/* Your styles here... */</i>
}
</code></pre>
<pre><code>&lt;div class = "yourClassName"&gt;
  <i>&lt;! -- Your content here... --&gt;</i>
&lt;/div&gt;</code></pre>
 
<h3>Preview:</h3>
<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/jomaaanguit/ManguitIemerieJomCS3102_WSTactivities/blob/main/Laboratory%20Activities/Laboratory%20Activity%202%20%E2%80%93%2029-10-2024/visionboard-output.png"></td>
    </tr>
  </table>
</div>

<h3>Important Notes:</h3>
â€¢ The <b>class = "yourClassName"</b> associates the <b>&lt;div&gt;</b> element with the <b>.yourClassName</b> style in the CSS.<br><br>
â€¢ <b>display: flex;</b> sets an element as a flex container, enabling the use of the Flexbox layout model for its child elements while <b>flex-direction: row;</b> arranges the flex items in a row (horizontally).<br><br>
â€¢ <b>justify-content: center;</b> aligns and centers flex items horizontally along the main axis (row is the default value) while <b>align-items: center;</b> aligns and centers flex items vertically along the cross-axis (column is the default value). Refer to the application icons at the bottom of the webpage and observe how the icons are displayed in a row, and are cleanly centered both horizontally and vertically inside the icon container.<br><br>
<pre><code>.app-container {
  <i>/* Styling for the app icons container... */</i>
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items; center;
}
</code></pre>
<pre><code>&lt;div class="app-container"&gt;
  <i>&lt;!-- Your app icons here... --></i>
&lt;/div&gt;
</code></pre>
<br>

### <a name="lab3"></a>
## ðŸ”¢ Laboratory 3 | Word and Sentence Counter

<b>Lesson(s): </b>JavaScript, HTML, CSS<br><br>
<b>Agenda: </b> Create a tool that counts the number of words and sentences in a given text. The tool should include a text area for user input and dynamically update the word and sentence counts as the user types. Updates should occur automatically whenever the content changes.

<b>Relevant Syntax Utilized:</b>
<pre><code>&lt;textarea&gt;</code></pre>
<pre><code>trim()</code></pre>
<pre><code>split()</code></pre>
<pre><code>length</code></pre>
<pre><code>filter</code></pre>
<pre><code>addEventListener</code></pre>

<h3>Preview:</h3>
<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/jomaaanguit/ManguitIemerieJomCS3102_WSTactivities/blob/main/Laboratory%20Activities/Laboratory%20Activity%203%20–%2018-11-2024/word-sentence-ctr-output.png"></td>
    </tr>
  </table>
</div>
<h3>Important Notes:</h3>
â€¢ <b>&lt;textarea&gt;</b> is used to create a multi-line input field where users can enter large amounts of text, such as comments or descriptions. <b>rows </b>specifies the number of visible text lines in the text area while <b>cols</b> specifies the width of the text area in terms of the number of visible character columns. <b>placeholder</b> provides a hint or instruction to the user, displayed inside the text area as light gray text until the user starts typing.
<br><br>
<pre><code>&lt;textarea rows="10" cols="50" placeholder="Enter your text here..."&gt;&lt;/textarea&gt;</code></pre>
â€¢ <b>trim()</b> removes whitespaces from both sides of a string. This ensures that any leading or trailing spaces in the user's input are removed before further processing.<br><br>
<pre><code>const text = textInput.value.trim();</code></pre>
â€¢ <b>split()</b> splits a string into an array of substrings based on a specified delimiter (regular expression or string). In the code below, <b>split(/\s+/)</b> method splits the text into an array of words based on one or more whitespace characters <b>(\s+)</b>, which includes spaces, tabs, and newlines.<br><br>
<pre><code>const words = text.split(/\s+/).filter(word => word.length > 0);</code></pre>
â€¢ <b>length</b> returns the number of elements in an array or the number of characters in a string. In the code below, the <b>sentences.length</b> property returns the number of sentences in the array created by <b>split()</b>. This gives the total sentence count.<br><br>
<pre><code>const sentenceCount = sentences.length;</code></pre>
â€¢ <b>filter</b> creates a new array with all elements that pass a test provided by a function. After splitting the text into an array of words, the <b>filter(word => word.length > 0)</b> method removes any empty strings (which could occur if there were extra spaces in the input) from the array of words. This ensures that only actual words are counted.<br><br>
<pre><code>const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);</code></pre>
â€¢ <b>addEventListener</b> is used to attach an event handler (a function) to a specified event on an HTML element. This allows you to respond to user interactions or other events that occur on the page, such as clicks, keypresses, mouse movements, etc.<br><br>
<pre><code>// Sample usage of addEventListener to a button in JavaScript
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button clicked!');
});
</code></pre>
<br>

### <a name="lab4"></a>
## ðŸ ƒ Laboratory 4 | Refined Exercise #2

<b>Lesson(s): </b> Responsive Web Design<br><br>
<b>Agenda: </b> Enhance the Exercise #2 activity in Web Systems and Technologies. Feel free to add animations, enhance the color palette, fonts, and add more details aside from personal, contact, and basic info.

<b>Relevant Syntax Utilized:</b>
<pre><code>document.getElementById</code></pre>
<pre><code>document.getElementById('elementName').style.display</code></pre>
<pre><code>document.getElementById('elementName').innerText</code></pre>
<pre><code>function</code></pre>
<pre><code>innerHTML</code></pre>
<pre><code>*/ Media queries */
@media <media-type> and (condition) {
  /* CSS rules for the specified media type and condition go here... */
}
</code></pre>
<h3>Preview:</h3>
<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/jomaaanguit/ManguitIemerieJomCS3102_WSTactivities/blob/main/Laboratory%20Activities/Laboratory%20Activity%204%20-%2028-11-2024/personal-page-output.jpg"></td>
    </tr>
  </table>
</div>
 
<h3>Important Notes:</h3>
â€¢ <b>document.getElementbyId</b> retrieves an HTML element by its id.<br><br>
<pre><code>&lt;input type="text" id="nameInput" placeholder="enter here â‹†ï½¡Â°âœ©"&gt;</code></pre>
<pre><code>const name = document.getElementById('nameInput').value;</code></pre>
â€¢ <b>document.getElementById('elementName').innerText</b> retrieves or sets the text content of an element, excluding any HTML tags. Refer to the second image in the preview.<br><br>
<pre><code>document.getElementById('textPopupContent').innerText = `hello there, ${name}!`;</code></pre>
â€¢ <b>document.getElementById('elementName').style.display</b> accesses the style property of an element and specifically the display style and allows toggling visibility of elements (block, none, etc.).<br><br>
<pre><code> // This is used to hide the popup.
document.getElementById('namePopup').style.display = 'none';
</code></pre>
â€¢ A <b>function</b> is a reusable block of code designed to perform a specific task. It can take arguments, perform operations, and return results.<br><br>
<pre><code>function submitName() {
    const name = document.getElementById('nameInput').value;
    // Rest of the logic...
}
</code></pre>
â€¢ <b>innerHTML</b> retrieves or sets the HTML content inside an element. this allows for rendering complex HTML structures. The code below dynamically updates the content of <i>popupContent</i> with the HTML fetched from the specified file.<br><br>
<pre><code>popupContent.innerHTML = html;</code></pre>
â€¢ <b>Media queries</b> allow you to apply styles based on the characteristics of the device displaying the content, such as screen width, height, resolution, or orientation. This is essential for responsive design, where the layout adapts to different screen sizes (e.g., mobile, tablet, desktop).<br><br>
<pre><code>/* Default styles (applies to all screen sizes) */
body {
    font-size: 16px;
}
</code></pre>

<pre><code>/* For screens 600px wide or less */
@media (max-width: 600px) {
    body {
        font-size: 14px; /* Reduce font size for smaller screens */
    }
}
</code></pre>

<pre><code>/* For screens wider than 600px */
@media (min-width: 601px) {
    body {
        font-size: 18px; /* Larger font for bigger screens */
    }
}
</code></pre>
<br>

### <a name="profile"></a>
## ðŸ“ Student Profile
<div align="center">
<table style="width: 100%; table-layout: auto;">
  <tr>
    <th style="width: 80px; text-align: center;">
      <img src="https://i.ibb.co/MZMmvPN/Passport-Picture-1-removebg-preview.png" width="55%">
    </th>
    <td>
      <div align="left"><strong>Vince Clyde S. Banaag</strong><br>
        âžŸ CS-3102<br>
        âžŸ 22-06373<br>
      </div>
    </td>
  </tr>
</table>
</div>
<br>

### <a name="acknowledgement"></a>
## ðŸ©· Acknowledgement
I would like to express my heartfelt gratitude to our instructor in this course, Ms. Fatima Marie Agdon, MSCS, for her unfaltering hard work, dedication, and genuine passion for teaching. She has consistently gone above and beyond to ensure that each of her students not only understands the complexities of the subject matter but also develops the confidence and skills necessary to excel in their academic journey.

As an avid fan of the PokÃ©mon franchise, I have often drawn inspiration from the qualities of its iconic protagonistsâ€”their determination, resilience, and ability to overcome any challenge or obstacle. In Ms. Fatima Marie Agdon, I see those same qualities come to life. She embodies the unwavering strength and steadfast resolve of a <img src="https://github.com/vinceclyde/BanaagVinceClydeCS3102_WSTactivities/blob/main/assets/image-removebg-preview%20(1)%20(1).png" height="15px"> type, tackling even the toughest of challenges with grace and fortitude. At the same time, she possesses the nurturing warmth and compassion of a <img src="https://github.com/vinceclyde/BanaagVinceClydeCS3102_WSTactivities/blob/main/assets/image-removebg-preview%20(2).png" height="15px"> type, always considerate and supportive, ensuring her students feel encouraged and valued every step of the way.

</div>
