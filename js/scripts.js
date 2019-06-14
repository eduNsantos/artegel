
$(document).ready(function() {
    $('#toggle-contato').click(function() {
        $('#form-contato').toggle('fast');
    });

    $('#close-contato').click(function() {
        $('#form-contato').hide();
        $('#contato-opcoes').hide();
    })
});