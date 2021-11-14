$(function () {
  $("#answer").on("submit", function (e) {
    e.preventDefault();
    let resultado_selecionado = $("input:checked");
    const resultado = {
      selecionado: resultado_selecionado.val(),
      certo: $(".resposta-certa").val(),
    };

    if (resultado.selecionado == resultado.certo) {
      resultado_selecionado.parent().addClass("resultado_certo");
    } else {
      resultado_selecionado.parent().addClass("resultado_errado");
    }

    $("input[type=submit]").prop("disabled", true);
    $("input[type=radio]").prop("disabled", true);

    setInterval(function () {
      window.location.reload();
    }, 6000);
  });
});
