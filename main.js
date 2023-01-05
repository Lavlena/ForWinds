
document.addEventListener("submit", e =>{
    e.preventDefault();
    console.log(e);
    let newNam = e.target.elements.name.value;
    let emNew = e.target.elements.email.value;
    console.log(newNam,emNew);
});