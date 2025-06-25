function adicionar() {
    //Selecionar as informações
    const produto = $('#produto').val();
    const quantidade = $('#quantidade').val();
    const valor = $('#valor').val();
    const codigo = $('#lista-produtos tbody tr').length + 1;

    // criar a linha
    const linha = `<tr>
                        <td>${codigo}</td>
                        <td>${produto}</td>
                        <td>${quantidade}</td>
                        <td>${valor}</td>
                    </tr>`;

    //Adicionar na tabela
    $('#lista-produtos tbody').append(linha);

    // Update total quantidade and valor
    total_quantidade += parseInt(quantidade);
    total_valor += parseFloat(valor);

    $("#total_quantidade").text(total_quantidade);
    $("#total_valor").text(total_valor.toFixed(2));
}