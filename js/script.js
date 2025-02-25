function sendForm(event) {

    event.preventDefault(); 

    let form = event.target;

    let formMessage = document.getElementById("form-message");

    fetch(form.action, {

        method: form.method,

        body: new FormData(form),

        headers: { 'Accept': 'application/json' }

    })

    .then(response => response.ok ? response.json() : Promise.reject(response))

    .then(() => {

        formMessage.textContent = "The message was sent!";

        form.reset();

    })

    .catch(() => {

        formMessage.textContent = "Try again";

    });

    return false; 

}




