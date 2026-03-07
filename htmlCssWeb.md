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

# Resources:

**1. MDN** - Docs for html, css, js