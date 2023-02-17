console.log("test");

const first_paragraph = document.getElementById("first_paragraph");
first_paragraph.innerText = "Main";
first_paragraph.style.color = 'green';
console.log('First paragraph: ', first_paragraph );

const footer = document.getElementById("last paragraph");
console.log('First paragraph: ', footer)

const elements = document.getElementById("elements");
elements.style.color = 'red';
console.log('Elements: ', elements);

const listItem = document.querySelector("ul");
console.log('list ', listItem);

const newItem = document.createElement('ol');
newItem.innerHTML =
    `<ol><li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
<li>elements 123</li>
</ol>
`;
listItem.parentNode.replaceChild(newItem, listItem);




