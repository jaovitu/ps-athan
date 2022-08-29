exports.handler = function(context, event, callback) {
  const date = new Date();
  const hour = date.getHours();

  if ( !( hour >= 9 && hour <= 18 ) ) {
    return callback('Fora de horário!');
  }

  callback(null, 'Dentro do horário.');
}
