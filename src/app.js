const form = document.getElementById('form')

form.onsubmit = (e) => {
    e.preventDefault();
    const url = `https://api-test.technofield.net/api/data?token=TEST_TOKEN_123&data=${form.code.value}`;
    fetch(url)
    form.code.value = '';
}

Neutralino.init({
    
});