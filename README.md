# ElPopMariano

## CLIENTE

## INTERFACES

#### Estructura:

La estructura general del html consta de header y footer constante en todas las páginas y una seccion donde se cargaran los diferentes contenidos según el tab elegido en el navegador del header, consistente en 3 secciones diferentes del programa.
El scss esta colocado de manera que lo más global como los colores y el body estan primero, y despues por orden de aparición encontramos los tres elementos header, section y footer con todos sus estilos de los contenidos anidados, de manera que la estructura queda muy parecida a la del html.
Al final del mismo podremos encontrar las @media queries para poder adaptar ciertos puntos de rotura para tablets y móviles.

Hemos optado por una pagina con un margen responsivo que permite que entre pantallas de escritorio medianas y grandes
parte del crecimiento sea ese margen, de manera que la aplicación se vea parecida en todos los escritorios.
Este margen desaparecerá para tablets y moviles, para que puedan aprovechar el 100% de una pantalla ya de por si pequeña.

En el footer es donde podemos ver una lista de Frequent Asked Questions, donde alguno de los enlaces, está activo.
Los enlaces a las redes sociales están desactivados.

#### Fuente

La fuente seleccionada es una sansserif proporcionada por google llamada "Sulphur Point"
Elegimos san serif antes que una serif por dar una mayor sensació de modernidad.
Y una sola fuente, pues usar múltiples en un programa con tan poco contenido puede dar sensación de caos que no queremos transmitir al usuario

#### Colores:

$my-greyDark: #262626;
$my-greyMid: #58595b;
\$my-blue: dodgerblue;
Hemos usado una escala de grises, por ser muy neutro y no distraer del contenido, y tenemos definido un azul en la paleta
para facilitar el acento de algunos elementos, en caso de la necesidad de acentuación.
