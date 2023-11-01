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

