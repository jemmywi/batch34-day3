function showData() {


    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    document.getElementById("name").value = ""

    if (name == "") {
        return alert("Name input must be not empty")
    }

    let emailReceiver = 'rhomairama.dev@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}, ${subject}, ${message}.`
    a.click()

    let dataObject = {
        dataName: name,
        dataEmail: email,
        phone,
        subject,
        message
    }

    console.table(dataObject);
}
