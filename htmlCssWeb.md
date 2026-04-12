# Html & Css & web basics</br>

## Web 

- **Internet** is bunch of connected computers.
- **World wide web** is information sysytem where you can share resources over the Internet. Those resources are identified by URL (Uniform Resource Locator).Resources are transfered via HTTP.
---
- **Backend:** Web server.
- **Frontend:** Html, Css, JS.
---
- The
- **Purple:**  Css - Adjective.
- **Dino:**  Html - noun.
- **Danced:**  Js - verb.
---

**Work flow:**
My computer is a client and it sends a request to the web server and that server returns a response. Response contains html, css, javaScript. My browser takes those code and renders it.</br>

## Html

Html is a mark up language. Html stands for **Hyper Text Mark Up Language**.
### Basics

Html contains elements. Elements are opening tag, content and closing tag.

**Html Element**
```html
<p>Hello World</p>
```

**Opening tag**
```html
<p>
```

**Content**
```html
Hello World
```

**Closing tag**
```html
</p>
```

### Common tags:

**1. Make text bold.**
```html
<b>This is bold...</b>
```

**2. Paragraph.**
```html
<p>This is a paragraph...<p>
```

**3. Headings.**
</br>
We have headings from h1 to h6. Use h1 only one in a page. **Do not use headings to make text bigger.**

```html
<h1>Page title<h1>
    <h2>Something<h2>
        <h3>Sup-Something</h3>
        <h3>Sup-Something</h3>
            <h4>Sup-sup-something<h4>
    <h2>Something2<h2>
        <h3>Sup-Something2</h3>
```

**4. Links**

**href** is an attribute which tells the destination. Attributes are information about html elements.We can put links or file locations inside href.

```html
<a href="place where we will go">Text which shows up<a>
```

**5. Images**

**src** tells the img location it can be either link or file location.
**alt** Message which shows up when src does not work

```html
<img src="location" alt="message">
```

### Html skeleton

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My page</title>
    </head>
    <body>
        <p>Something...</p>
    </body>
</html>
```

**1. Doctype** means that I am using html 5.

**What is html 5?** <br>It is new version of html and many new technologies like 3d, offline storage.

**2. Html.** is a root element. It has one head and one body element.

**3. Head** Contains metadata.

**4. Body** Contains all content of the page.

**4. Title** Changes pages title. It is inside head.

### Html lists

**1. ol** - Ordered list. Gives you numbers.

**2. ul** - Unordered list. Gives you bullet points.

**3. li** - List item

```html 
    <ul>
        <li>Chaos</li>
        <li>Imperium of man kind</li>
        <li>Adeptus custodes</li>
    </ul>
```

```html 
    <ol>
        <li>Chaos</li>
        <li>Imperium of man kind</li>
        <li>Adeptus custodes</li>
    </ol>
```

### Html Comments

```html 
    <!-- This is a comment. Browser will not show it. -->
```

### Block and inline

**block** - takes all the space. (p, h1-h6, div)
**inline** - takes only its content size. (img, a, span)

### Containers

**div** - Content division element. It groups elements.
**span** - It groups text elements. We can give them different style than other texts.

### Other elements

**hr** - horizontal line. 

```html 
    <hr>
```

**br** - line break. 

```html 
    <br>
```

**sup** - Supercript element. Up

```html 
    2<sup>2</sup>=4
```

**sub** - Subscript element. Down

```html 
    H<sub>2</sub>O
```

### HTML entities

Starts with **&** and ends with **;**. Used to display reserved characters. (arrows)

Don't use < or > cause they are used to make tags and don't use &

```html
&lt; - <
&gt; - >
&amp; - &
```

### HTML semantics

**Semantic markup** - What purpose or role does the html element have?

It helps search engines and screen readers. It will make your code more easier to read.

**1. main** - main content. If something will be reapeted on other pages like navbar, footer, they will not be inside main.

**2. header** - introductory content.

**3. section** - a section of a page.

**4. nav** - navigation links.

**5. article** - self contained composition. Independently distributable or reusable.

**6. footer**

**7. aside** - indirectly related to the content.

**8. summary**

**9. details**

### HTML emmet

```html
> child
+ sibling
^ climb up
* multiplication
$ add numbers
() group

tag#id 

tag.class

tag[attribute=""]

{} add text
```

### HTML tables

**1. table** - tells it is table

**2. td** - table data, single cell.

**3. tr** - table row

**4. th** - table header

**5. thead** - tells this is a head part

**6. tbody** - tells this is a body part

**7. tfoot** - tells this is a footer part

**8. colpsan** - eats columns

**9. rowspan** - eats rows

### HTML forms

**1. form** - tells it is a form. Action attribute tells where that should go. Method attribute tells http method type.

**2. input** - to create form controls. type attribute changes input type. Placeholder writes something inside input box.

**3. label** - Is conected text to the input. It has for attribute and it tells which input it is connected with. Id and for must be the same. Id is in input.

**4. button** - Any button inside a form defaultly submits. Type button tells it is a button it won't submit. Type submit submits.

**5. radio** - You select only one of them. You need to give them same name.

**6. Checkbox** - You select many of them. To send value use value attribute.

**7. select** - Groups options and give use drop down.

## CSS - cascading style sheets

### Basic syntax

```css
selector{
    property:value;
}
```

### Connecting css to html

1. Writing css inside style attribute.

```html
    <h1 style="color:red;">Hello World</h1>
```

2. Writing css inside style tag. Style tag is inside head.

```html
    <head>
        <style>
            h1{
                color:red;
            }
        </style>
    </head>
```

3. Write css on separate file and include it using link

```html
<link rel="stylesheet" href="./css/style.css">
```


### Color properties:

1. color changes text color.

2. background-color changes background

### CSS colors:

1. Named colors (white, black).

2. rgb colors - red, green, blue each one goes from 0 to 255. red 0 - no red, 255 red - max red. (255, 0, 0) - (red, green, blue)

3. hexadecimal - Decimal(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F). #ffff00 #ff(red)ff(green)00(blue). #ffffff #000000 #ff0000 #0000ff #00ff00 #ccffee #cfe #fff #000

### Text properties:

1. text-align - how text aligned withing an element.

    1.1 left.

    1.2 right.

    1.3 center.

    1.4 justify.

2. font-weight
    
    2.1 normal-400
    
    2.2 lighter-100
    
    2.3 bold-700

3. text-decoration -> line

    line position:

    3.1 underline

    3.2 line-through
    
    3.3 overline

    line style:

    3.1 dashed
    
    3.2 dotted
    
    3.3 wavy
    
    3.4 solid
    
    3.5 double
    
    3.6 none

4. line-height -> position of a line

fontsize * value

6. letter-spacing

7. font-size

8. font-family

    We can give more than one font after comma if our first one does not work it takes second one.

    Or we can tell font family group such as serif.

9. text-transform

    9.1 uppercase
    
    9.2 lowercase
    
    9.3 capitalize

### Units

1. Pixels -> absolute unit. Not recommended for responsive.

2. Percentages -> Sometimes its value is from parent and sometimes from itself

3. em - 1em == font size of parent element. 2em is twice of it. margin:1em; it takes from font-size on element itself not parent. They can stack.

4. rem -> they take valu from root html element


rem are good for font and em are good for margin, padding

### Selectors

1. Universal selector * selects everything.

2. Selecting by an element.

3. Selecting by id. #name

4. Selecting by a class. Class helps us to group elements.  .name

5. Descendant. li a{}. Means all a inside li.

6. Adjacent. Selects element which come after first element. input + button. Selects button which came after input.

7. Direct child. div > li selects li that are direct children of div.

8. Select by attribute. input[type="text"].

### Pseudo Classes

1. :active

2. :checked

5. :hover

8. :nth-of-type()

### Pseudo elements

1. ::first-letter

2. ::first-line

3. ::selection

### Specificity

More specific selectors will win
!important>Inline styles>Id>Class, Pseudo Class, Attribute>Element

Don't use !important or inline styles

### Inheritence

Child elements will inherit styles from parent element.

color:inherit;

### Box model

margin [ border [ padding [ width-height ] padding ] border ] margin

1. width

2. height

3. border

4. border-width - thickness

5. border-color

6. border-style - line style

7. border-radius

8. padding - vertical horizontal , top right bottom left, all

9. margin - vertical horizontal , top right bottom left, all

### Display

1. inline - takes content space. It ignores width and height. Padding, margin works horizontal and not vertical

2. block - takes all space. Width, height, padding, margin works on it.

3. inline-block - behaves like a inline and respects width, height, margin, padding

### Opacity

1. rgba -> a can have value from 0 to 1. 0 - transparent and 1 - not

2. opacity -> makes everything transparent.

3. hexadecimal - after 6 we have 2 more digits.

### Position

Position tell top, left, bottom, right how to work

1. Static - default value

2. Relative - moves them from original position

3. Absolute - Element is removed from document and moves from other positioned parent element.

4. fixed - stays on that position

### Transitions

1. transition -> propert name | duration | timing function | delay

### Transform

1. rotate -> deg

2. scale

3. translate -> moves

4. skew -> deg x, deg y

### background

1. background-image -> url

2. background-size -> cover, contain, auto

3. background-repeat -> repeat, no-repeat

4. background-position -> top, left, right, bottom

5. background-color

### Flexbox

flex has two axis main and cross.

1. display:flex; -> turns flex on

2. flex-direction:; -> changes main axis. row or column, row-reverse or column-reverse

3. justify-content:; -> moves the content on main axis. flex-start, flex-end, center, space-between, space-around, space-evenly. 

4. flex-wrap -> wrap, wrap-reverse. wrap-reverse changes cross axis

5. align-items:; -> moves content on cross axis. flex-start, flex-end, center, baseline(looks for font-size)

6. align-content:; -> center, space-between, space-around, space-evenly. Cross axis

7. align-self:; -> child of display flex element. Moves itself on cross axis

8. flex-basis:; -> initial size

9. flex-grow:; -> tells to get more space if available

10. flex-shrink:; -> if elements are larger than container it tells how much to shrink

11 flex:grow|shrink|basis;

### Responsive

1. Media queries
    1.1 @media (width: 360px){}


# Resources:

**1. MDN** - Docs for html, css, js

**2. html.spec** - Explains how html works.

**3. html entities list** - https://html.spec.whatwg.org/multipage/named-characters.html

**4. HTML emmet** - https://docs.emmet.io/

**5. Timing Functions** - https://easings.net/

**6. Fonts** - https://fonts.google.com/