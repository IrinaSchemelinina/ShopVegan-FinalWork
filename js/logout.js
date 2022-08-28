document.querySelector('#logout').onclick = function() {
    let c = document.cookie;

    let d = new Date();
    d.setTime(d.getTime() - (24*60*60*1500));

    let expires = d.toUTCString();
    document.cookie = `${c}; expires=${expires}; path=/`;

    location.href="/index.html";
}