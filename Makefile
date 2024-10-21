# Variables
IMAGE_NAME ?= polynomium_landing_img
CONTAINER_NAME ?= polynomium_landing_container
PORT ?= 8080

# Construir la imagen Docker
build:
	docker build -t $(IMAGE_NAME) .

# Ejecutar el contenedor
run:
	docker run -d -p $(PORT):80 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Detener el contenedor
stop:
	docker stop $(CONTAINER_NAME)

# Eliminar el contenedor
remove:
	docker rm $(CONTAINER_NAME)

# Detener y eliminar el contenedor
clean:
	stop remove

# Eliminar la imagen
remove-image:
	docker rmi $(IMAGE_NAME)

# Limpieza completa: detener, eliminar el contenedor e imagen
clean-all:
	clean remove-image

# Actualizar el repositorio, reconstruir la imagen y reiniciar el contenedor
update:
	# Realizar git pull para obtener cambios recientes
	git pull origin main
	# Detener y eliminar el contenedor actual si está corriendo
	-make clean
	# Reconstruir la imagen Docker con los últimos cambios
	make build
	# Levantar un nuevo contenedor con la imagen actualizada
	make run