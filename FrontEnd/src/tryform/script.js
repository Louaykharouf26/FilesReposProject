const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    // Prevents HTML handling submission
    const name = document.getElementById("name");
    const files = document.getElementById("files");
    const formData = new FormData();
    // Creates empty formData object
    formData.append("name", name.value);
    // Appends value of text input
    for(let i =0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
    }
    // Appends value(s) of file input
    // Post data to Node and Express server:
    fetch('http://localhost:4000/api', {
        method: 'POST',
        body: formData, // Payload is formData object
    })
    .then(res => res.json())
    .then(data => console.log(data));
})