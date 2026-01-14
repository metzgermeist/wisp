BACKLOG BACKEND - API REST (C# / .NET)

Contexto general
Lenguaje: C#
Framework: ASP.NET Core
Tipo: API REST
Estado: MVP escalable
Consumo: Frontend React
Autenticacion: No incluida en esta fase
Base de datos: Opcional / futura

Lineamientos tecnicos obligatorios (TRANSVERSALES)
LT-BE-01 - Arquitectura
API REST desacoplada
Separacion por capas:
- Controllers
- Services
- DTOs
Preparado para agregar persistencia

LT-BE-02 - Formato de comunicacion
JSON
UTF-8
HTTP status codes correctos

LT-BE-03 - Seguridad basica
Validacion de inputs
Sanitizacion de datos
No exponer errores internos
HTTPS (asumido en deploy)

LT-BE-04 - Escalabilidad
Codigo preparado para:
- agregar base de datos
- agregar autenticacion
- agregar nuevos modulos

EPIC 1 - Base de la API
US-BE-01 - Inicializacion del proyecto
Como desarrollador
quiero una API base bien estructurada
para poder escalarla facilmente
Criterios de aceptacion:
Proyecto ASP.NET Core creado
Estructura por capas
Configuracion por entorno

US-BE-02 - Health Check
Como frontend
quiero validar que la API este disponible
para saber si puedo consumirla
Criterios de aceptacion:
Endpoint /health
Retorna estado OK
Respuesta liviana

EPIC 2 - Contacto (Funcionalidad Principal)
US-BE-03 - Endpoint de contacto
Como usuario
quiero enviar un mensaje
para contactar a la empresa
Criterios de aceptacion:
Endpoint POST /contact
Recibe:
- nombre
- email
- mensaje
Validaciones obligatorias
Retorna confirmacion

US-BE-04 - Validaciones del lado servidor
Criterios de aceptacion:
Campos obligatorios
Email valido
Longitud minima y maxima
Mensajes de error claros

US-BE-05 - Manejo de errores
Criterios de aceptacion:
Respuestas consistentes
Codigos HTTP correctos
No exponer stacktrace

EPIC 3 - Preparacion para Persistencia (Futuro)
US-BE-06 - Abstraccion de almacenamiento
Como desarrollador
quiero desacoplar la logica de almacenamiento
para agregar base de datos luego
Criterios de aceptacion:
Interfaces para repositorios
Implementacion dummy / in-memory
Sin dependencia directa a DB

EPIC 4 - Configuracion y Entornos
US-BE-07 - Configuracion por entorno
Criterios de aceptacion:
appsettings por entorno
Variables de entorno
No hardcodear valores sensibles

US-BE-08 - CORS
Como frontend
quiero consumir la API sin bloqueos
para integrarme correctamente
Criterios de aceptacion:
Politica CORS configurada
Origenes controlados
Metodos permitidos explicitos

EPIC 5 - Documentacion Tecnica
US-BE-09 - Documentacion de endpoints
Como desarrollador
quiero documentar la API
para facilitar su uso y mantenimiento
Criterios de aceptacion:
Swagger / OpenAPI
Descripcion clara de endpoints
Ejemplos de request / response

EPIC 6 - Calidad y Mantenibilidad
US-BE-10 - DTOs claros
Criterios de aceptacion:
Separacion entre modelos internos y externos
Validaciones en DTOs
No exponer entidades internas

US-BE-11 - Logging basico
Criterios de aceptacion:
Logs de errores
Logs de eventos clave
No loggear datos sensibles

EPIC 7 - Seguridad y Robustez
US-BE-12 - Proteccion ante requests invalidos
Criterios de aceptacion:
Manejo de payloads malformados
Respuestas controladas
Evitar caidas del servicio

EPIC 8 - Preparacion para Escalar
US-BE-13 - Preparado para autenticacion futura
Criterios de aceptacion:
Middleware preparado
No romper endpoints existentes
Diseno extensible
