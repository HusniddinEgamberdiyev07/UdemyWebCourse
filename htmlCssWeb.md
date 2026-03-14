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

# Resources:

**1. MDN** - Docs for html, css, js

**2. html.spec** - Explains how html works.

**3. html entities list** - https://html.spec.whatwg.org/multipage/named-characters.html

**4. HTML emmet** - https://docs.emmet.io/