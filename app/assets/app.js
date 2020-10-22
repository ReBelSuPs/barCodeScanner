const url = 'https://api-test.technofield.net/api/data?'

var params = {'token': 'TEST_TOKEN_123', 'data': text} 

url.search = new URLSearchParams(params).toString();


const form = document.getElementById('form')

form.onsubmit = (e) => {
    e.preventDefault()
    fetch(url)
        .then(response => response.json())
        .then(data => alert(data))
    form.code.value = ''
}


var getUsername = function () {
    var key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
    Neutralino.os.getEnvar(key, function(data) {
        document.getElementById('name').innerText = data.value;
    },
    function () {
        //handle error
    }
    );

}

Neutralino.init({
    load: function () {
        getUsername();
    }
});