$(document).ready(() => {
    $(".nav-toggle").on('click', () => {
        $("#nav-bar ul").slideToggle("medium");
    });

    $("#contact-form").on("submit", function(event){
        event.preventDefault();
        alert("Formulário enviado com sucesso!");

        if(!$("#name").val()) {
            alert("Preencha o campo nome");
        }

        if(!$("#email").val()) {
            alert("Informe o seu e-mail");
        }

        if(!$("#subject").val()) {
            alert("Informe o assunto");
        }

        if(!$("#message").val()) {
            alert("Escreva sua mensagem");
        }

        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        console.log(formData);

        /*
        $.ajax({
            type: "POST",
            url: 'endereço-backend',
            data: formData
            sucess: function(response) {
                console.log("Formulário enviado com sucesso!");
            },
            error: function(error) {
                console.error("Erro ao enviar o formulário:", error);
            }
        });
        */

    });

});