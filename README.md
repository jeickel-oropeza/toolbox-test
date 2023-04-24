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
  COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
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