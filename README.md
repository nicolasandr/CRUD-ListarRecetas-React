# Proyecto lista de recetas

Crea una aplicación web, que permita mostrar un blog de recetas de cocina en una
página, desde otra pagina debo poder agregar, modificar o quitar las recetas

## instalaciones

$ `npm i`

## simula un server backend: 

$ `npm install -g json-server`

## Ejecuciones

### Ejecutar proyecto 

$`npm start`

### Ejecutar json server 

$`json-server --watch db.json --port 3005`

## Testeo de ADMINISTRADOR:

una vez ejecutado backend y frontend crear un usuario haciendo un (POST) desde Postman a la siguiente direccion:

$`http://localhost:4000/apireceta/usuario`

    {
      "administrador": "nicolas",
      "claveadmin": "1234"
    }