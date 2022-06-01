//Para ejecutar en un principio, en terminal=> "node app.js"
//Podemos usar todo js menos elq ue referencia al dom ya que no se ejecuta en la web
const {frutas,precios} = require('./frutas');

console.log("Holis");
frutas.forEach((item) => console.log(item));
precios.forEach((item) => console.log(item));



