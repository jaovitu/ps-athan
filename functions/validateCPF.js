const { cpf } = require('cpf-cnpj-validator');

exports.handler = function(context, event, callback) {
  const userReply = event.cpf.toLowerCase().trim();
  const userCPF = userReply.replace(/[^a-z0-9]+/g, '');

  const isCpfValid = cpf.isValid(userCPF);

  if (!isCpfValid) {
    return callback('CPF inválido!');
  }

  callback(null, 'CPF válido.');
}
