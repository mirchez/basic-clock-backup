const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let sec = formatoHora(fecha.getSeconds());
  document.getElementById("hora").innerHTML = `${hr}:${min}:${sec}`;
  document.getElementById(
    "fecha"
  ).innerHTML = `${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
};
