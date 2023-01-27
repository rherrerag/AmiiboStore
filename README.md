# Amiibo Store

Simulación de tienda de Amiibos de Nintendo con carro de compras

## Requisitos
- react-native mediante `npx`
- Node >= v16 
- Yarn >= v1.22


## Instalación
1. clonar el proyecto
2. ejecutar `yarn` para instalar las dependencias
3. ejecutar `pod install` en la carpeta `ios` (solo para xcode)

## Ejecutar en simulador
- __iOS__
        
         yarn ios

- __Android__

        yarn android
             
## Extras
- __Control de Errores:__
    **Se incluye flag para simular un pago fallido. Para esto se debe dejar ERROR_FLAG en true en src/constants/config. También por ejemplo si se fuerza un error 404 cambiando el BASE_URL de la api de Amiibo, se puede generar un error en la carga de productos. **.
- __Test unitarios:__
        **Se incluyen algunos test unitarios de componentes, containers, API y Redux**.

- __Pantallas de éxito y error:__
        **Se incluyen pantallas dummy de éxito y error al pagar productos del carro, así como error en la carga de productos.**.