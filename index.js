function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const jsonData = {
        name: name,
        email: email,
        age: age
    };

    document.getElementById('jsonOutput').textContent = JSON.stringify(jsonData, null, 2);
}