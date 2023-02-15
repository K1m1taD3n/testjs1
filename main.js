console.log("test");


const first_paragraph = document.getElementById("first_paragraph");
first_paragraph.innerText = "Main";
first_paragraph.style.color = 'violet';
console.log('First paragraph: ', first_paragraph );

const footer = document.getElementById("last paragraph");
footer.style.color = 'yellow';
console.log('First paragraph: ', footer)

const elements = document.getElementById("elements");
elements.style.color = 'white';
console.log('Elements: ', elements);

const paragraph = document.getElementsByTagName("ul", [0]);
console.log("Numeration: ", paragraph)