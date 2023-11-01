# DOM Selectors 

DOM Selectors, as the name suggests is used to select HTML elements within a document using JavaScript. There are **5 ways** in which you can select elements in a DOM using selectors.

1. **.getElementByTagName()** : This method returns all the elements that matches the specified Tag name.

*example*
```
document.getElementByTagName(p);
```

2. **document.getElementsByClassName()** : This method returns all the elements that matches the specified Class name.

3. **document.getElementById()** : the selection is based on the Id name. But this selector returns only the first matched element while ignoring the remaining.

4. **document.querySelector()** : This one returns the first element that matches the specified CSS selector in the document.

5. **document.querySelectorAll()** : This method returns all the elements that match the specified CSS selector in the document.

# DOM Manipulation

### To Change content

1. **.innerHTML** : returns/sets all text, including html tags, that is contained by an element.

*example*
```
document.getElementById("heading").innerHTML = "<h1>Heading</h1>"
```

2. **.innerContent** : returns all text contained by an element and all its children that are for formatting purposes only.

*example*
```
let newContent = document.getElementById("heading").innerContent;

```

3. **.innerText** : returns all text contained by an element and all its child elements.

*example*
```
let newTitle = document.getElementById("heading").innerText;
newTitle = "New Heading"
```

### To add styling using js

```
let newTitle = document.getElementById("heading");
newTitle.style.paddding = "15px" 
```
