# MatiStore - Documentacion

-----------------------------------Backend---------------------------------------

Lo primero que realice fue crear una conexion a Mysql con la ayuda de su libreria y la de express. Para probar la conexion la aloje primeramente en mi localhost.
Programe los query necesarios para las consultas necesitaba para mi front y agregue un .listen para conocer el estado de mi conexion.

Luego que deje la api rest funcionando la aloje en heroku para luego pasar a la parte de frontend 
Link del repositorio del BACKEND: https://github.com/matias-sanchez1998/MatiStoreBackend

-----------------------------------Frontend---------------------------------------

Realice mi frontend con la ayuda de un proyecto que habia realizado con anterioridad, hice los llamados con axios para que mi codigo sea mas facil de leer y entender.
Luego de recibir las consultas cree primero los contenedores de las categorias a las cuales asigne un ID especifico atraves de mi funcion 'CreateCategory' y con ese ID especifico 
luego atraves de otra funcion agregue los productos en su contenedor especifico.
Tambien pude agregarle a la tienda un buscador el cual funciona con los nombres del producto, el cual puede ser mejorado con posterioridad agregando filtros ya sea de categorias o por precios.
Pude prevenir errores como el de que no se encontrara una imagen o buscaran un producto con caracteres erroneos 
Agregue addEventListener al objeto window para que al recargar la pagina o cambiar su hash cumpla ciertas medidas


-----------------------------------Conclusion---------------------------------------

Fue un proyecto en el cual me senti verdaderamente comodo trabajando e ideando las estrategias de conexion y tambien diseño de la pagina.
Es un gusto poder estar dentro de sus consideraciones y ojala nuestros caminos se puedan encontrar. Saludos y gracias
