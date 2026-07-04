# DOM

DOM long form Document Object Model.

DOM is javascript representation of a web page with js objects.

## Document

It is a special object such as window. It has many usefull methods.
Document will be automatically created by the browser using contnet's of html and css.

document - shows html
console.dir(document) - shows js obejct

## Select element by id

```js
document.getElementById("idName");
```

## Select elements by tagname

This returns html collection. It is iterable but it is not n array.

```js
document.getElementsByTagName("tagName");
```

## Select elements by classname

This returns html collection. It is iterable but it is not n array.

```js
document.getElementsByClassName("className");
```

## Query Selector

It can do all of the above sleect things.

```js

// Find first h1 tag

document.querySelector("h1")

// Find first tag which has class .text

document.querySelector(".text")

// Find tag which has id #header

document.querySelector("#header")

```

If you want to get all matches use 

```js
document.querySelectorAll()
```
We can use any css selectors

```js
// select second h1 tag

document.querySelector("h1:nth-of-type(2)")
```

## Manipulate

**innerText** - Text between opening and closing tags

**innerHTML** - Shows texts and tags.

**textContent** - Text between opening and closing tags. It gives everything even display none tags text. It gives line breaks.

![Local Image](./images/examples/TextContentInnerTextInnerHtml.png)

