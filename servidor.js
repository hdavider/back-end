const http = require("http"); //modulo de http

const host = 'localhost'; //anfitrion
const port = 4010; //puerto
// Crear el servidor
const servidor = http.createServer((req, res)=>{
    const ruta = new URL(req.url, `http://${host}:${port}`);

if(ruta.pathname === "/persona"){
    const nombre = ruta.searchParams.get("nombre")
    console.log(nombre);
   res.writeHead(200);
   res.write(JSON.stringify({nombre: nombre})); 
   
}   else if (ruta.pathname === "/api/v3/user"){
    res.writeHead(200);
   res.write(JSON.stringify(user)); }
    // console.log("Mi primer servidor con un console.log")
res.end();
/*
req = solicitudes
res = respuestas
*/



});
const user = [
  {
    id: "1",
    name: "Juan",
  },
  {
    id: "2",
    name: "Maria",
  },
  {
    id: "3",
    name: "Diego",
  },
];
servidor.listen(port, host, ()=> {
    console.log(`http://${host}:${port}`)
});