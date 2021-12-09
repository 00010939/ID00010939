document.getElementById('ff').addEventListener('submit', (event) => {
    event.preventDefault();
    let values = {};
    values['name'] = document.getElementById('name').value;
    values['email'] = document.getElementById('email').value;
    values['message'] = document.getElementById('message').value;
    alert(`Submitted values: ${JSON.stringify(values)}`);
})