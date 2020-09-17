
# Laboratorio: Desarrollo de Proyectos y Productos de Datos - Profesor: Alonso Astroza
Este repositorio corresponde a un proyecto desarrollado para el curso de Desarrollo de Proyectos y Producto de Datos del Magíster en Data Science, Universidad del Desarrollo. El proyecto toma como base el repositorio clase_productodatos_2019_udd de Alonso Astroza ([https://github.com/aastroza/clase_productodatos_2019_udd](https://github.com/aastroza/clase_productodatos_2019_udd)), y se adaptó para hacer un detector de incendios forestales.

## Propuesta: Forest Fire Detection
El presente proyecto corresponde a una aplicación que está pensada con la visión de procesar imágenes aéreas capturadas por drones, a fin de identificar incendios forestales. Para fines de este curso, se propone:

- Entrenar un modelo de red neuronal que permita clasificar imágenes aéreas en dos categorías: "Fire" y "No_Fire", que corresponden a si se detecta o no un incendio en las imágenes.
- Disponibilizar el modelo a través de una aplicación web, donde el usuario deberá cargar manualmente una imagen y se entregará como respuesta la categoría a la que pertenece esa imagen según la predicción generada por el modelo.


Para ello se entrenó un modelo de Deep Learning, en particular una red neuronal convolucional de arquitectura resnet43, con 400 imágenes aéreas de zonas con bosques: 200 con incendio y 200 sin incendio (puede ver los detalles en el [notebook](https://github.com/AndreaVerena/forest-fire-classification/blob/master/notebooks/clasificador-deteccion-incendio.ipynb)). Luego, se pone el modelo en producción con una aplicación desarrollada en Python, la cual se disponibiliza a través de la plataforma gratuita de [Heroku](https://www.heroku.com).

## ¿Cómo probar la app?
Para probar la aplicación, usted debe ingresar a la app en [https://forest-fire-classification.herokuapp.com](https://forest-fire-classification.herokuapp.com) y cargar una imagen aérea de bosques desde su equipo. Para obtener el resultado presione el botón "Predecir" y se mostrará el la predicción realizada por el modelo:
- Fire: indica que se ha detectado un incendio forestal en la imagen analizada.
- No_Fire: indica que no se ha detectado un incendio forestal en la imagen analizada.

### Imágenes ejemplo
![Image 1](https://i.ytimg.com/vi/fjgGz6Bugew/maxresdefault.jpg)
![Image 2](https://africacenter.org/wp-content/uploads/2019/09/Cameroon_timber-e1568838351206.jpg)
![Image 3](https://www.doi.gov/sites/doi.gov/files/styles/featured_image__full_width/public/press-release/primary-images/Adler%20Fire%20Yellowstone%20NPS%201080x650.jpg?itok=A201cGK6)
![Image 4](https://ak.picdn.net/shutterstock/videos/32633209/thumb/1.jpg)

## Créditos

- La propuesta se basa en el Laboratorio diseñado por Alonso Astroza, disponible en el repositorio [(https://github.com/aastroza/clase_productodatos_2019_udd)](https://github.com/aastroza/clase_productodatos_2019_udd).



"# forest-fire-detector-v0" 
