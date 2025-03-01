const formEmail = document.getElementById("emailForm");

function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(formEmail);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  fetch("/api/send_email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const statusMessage = document.getElementById("statusMessage");
      statusMessage.style.display = "block";
      statusMessage.style.backgroundColor = "#d4edda";
      statusMessage.style.color = "#155724";
      statusMessage.innerHTML = `<strong>Sucesso:</strong> ${data.message}`;
      //   document.getElementById("emailForm").style.display = "none";
    })
    .catch((error) => {
      const statusMessage = document.getElementById("statusMessage");
      statusMessage.style.display = "block";
      statusMessage.style.backgroundColor = "#f8d7da";
      statusMessage.style.color = "#721c24";
      statusMessage.innerHTML = `<strong>Erro:</strong> Não foi possível enviar o email. Tente novamente.`;

      console.error(error);
    });
}

formEmail.addEventListener("submit", submitForm);
