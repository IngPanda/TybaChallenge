# Tyba-backend-test

### Requisitos minimos 

 * Nodejs v10.15.3
 * npm 6.4.1
 * Git



### Instrucciones de instalacion

 en terminal linux

 * Ejecutar -> $ git clone https://github.com/IngPanda/TybaChallenge.git
 * Ejecutar -> $npm install
 * Correr serv -> $ npm start
 Listo ! puede abrir el proyecto en http://localhost:3000/


### Endpoints de Usuario

 * /users        POST -> Registrar usuario
    body :

     {
        "name": "samuel",
        "email": "samueluseche87@gmail.com",
        "password": "test123"
     }

 * /users/login     POST -> login de usuario
    body: 

    {
        "email": "samueluseche87@gmail.com",
        "password": "test123"
    }
 * /users/me        GET     -> datos del usuario 
 * /users/logout    POST    -> logout del usuario

### Endpoints transacciones

 * /transaction     POST -> crea una transaccion (Necesario token de auth)
   body:
    {
	"name": "Venta de inmueble",
	"amount": 150000000,
	"currency": "COP",
	"transaction_type": "venta"	
    }
 * /transaction/list  GET -> Listas de transacciones del usuario  (Necesario token de auth)

### Endpoint de lista de restaurantes cercanos 

 * /places GET -> Listas de restaurantes   (Necesario token de auth)

  Ejemplo : localhost:3000/places?latitud=4.5709&longitud=-74.2973


