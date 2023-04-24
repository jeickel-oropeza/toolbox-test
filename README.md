# Toolbox test

Test técnico para Toolbox


## Instalación y ejecución del proyecto

Clonar el repositorio:
```bash
  git clone https://github.com/jeickel-oropeza/toolbox-test.git
```

Dirigirse a la carpeta ***/toolbox-test***:
```bash
  cd /toolbox-test
```

Para ejecutar la api debe dirigirse a la carpeta ***/api***:
```bash
  cd /api
```
Dentro del directorio ***/api*** ejecutar el siguiente comando:
```bash
  docker-compose build
```
Una vez finalice la ejecución del comando anterior se procede a ejecutar el siguiente:
```bash
  docker-compose up
```
La API se ejecuta en la siguiente ruta: http://localhost:3000/

Para ejectar las pruebas debe ejecutar el comando: 
```bash
  npm test
```
## Proyecto de react
Para ejecutar el proyecto de react debe dirigirse a la carpeta ***/front***:
```bash
  cd /front
```
Debe instalar las dependencias con el comando:
```bash
  npm install
```
Una vez instaladas las dependencias debe ejecutar el comando:
```bash
  npm run dev
```

La aplicación se ejecuta en la siguiente ruta: http://localhost:3011/


## Rest API
Endpoint: ***/files/data***

Ejemplo de respuesta:
```bash
  [
    {
      "file": "test2.csv",
      "lines": [
        {
          "text": "KNSSDVeCtpbUbdcED",
          "number": "4509",
          "hex": "ee53c8c1a295d9cb912582ad2f323882"
        }
      ]
    },
    {
      "file": "test3.csv",
      "lines": [
        {
          "text": "IcbuPIFOiPuSwqJyhgSmyW",
          "number": "6004614076",
          "hex": "ee5b8220d041ee32923ce3406763995a"
        },
      ]
    }
  ]
```

Endpoint: ***/files/data?fileName=name***

Ejemplo de respuesta:
```bash
  [
    {
      "file": "test2.csv",
      "lines": [
        {
          "text": "KNSSDVeCtpbUbdcED",
          "number": "4509",
          "hex": "ee53c8c1a295d9cb912582ad2f323882"
        }
      ]
    }
  ]
```

Endpoint: ***/files/list***

Ejemplo de respuesta:
```bash

  [
	"test1.csv",
	"test2.csv",
	"test3.csv",
	"test18.csv",
	"test4.csv",
	"test5.csv",
	"test6.csv",
	"test9.csv",
	"test15.csv"
]
```