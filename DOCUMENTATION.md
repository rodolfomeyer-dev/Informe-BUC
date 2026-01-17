# Documentación Técnica: Validación de APIs BUC

## 🎯 Objetivo del Proyecto
Este proyecto tiene como propósito central la **auditoría y validación automatizada** de las APIs核心 del ecosistema BUC (Búsqueda Unificada de Clientes). Utiliza definiciones Swagger y flujos de n8n para garantizar la consistencia de los datos entre ambientes anonimizados y no anonimizados.

---

## � APIs Monitoreadas

El sistema valida activamente los siguientes servicios en el ambiente de QA:

### 1. API Productos
- **Documentación**: [Swagger Productos](http://api-productos.qa.seguros.local/swagger/index.html?urls.primaryName=1.0)
- **Definición Local**: `swagger.json`, `swagger_v1_latest.json`
- **Validador**: `swagger_validation_v1_comprehensive.json`

### 2. API Clientes
- **Documentación**: [Swagger Clientes](http://api-clientes.qa.seguros.local/swagger/index.html)
- **Definición Local**: `swagger_clientes.json`
- **Validador**: `swagger_validation_clientes.json`

### 3. Pensión Settlement
- **Documentación**: [Swagger Pension Settlement](http://api.qa.seguros.local/pension-settlement/swagger/index.html)
- **Definición Local**: `swagger_pension_settlement.json`
- **Validador**: `swagger_validation_pension_settlement.json`

### 4. Payment Service
- **Documentación**: [Swagger Payment Service](http://api.qa.seguros.local/payment-service/swagger/index.html?urls.primaryName=1.0)
- **Validador**: `swagger_validation_payment_service.json`

---

## �️ Componentes de Validación

### Definiciones Swagger (Carpeta `docker/`)
Contiene los archivos JSON que describen la estructura, endpoints y parámetros de cada API. Estos archivos sirven de "contrato" para las pruebas.

### Workflows de n8n (`swagger_validation_*.json`)
Archivos de configuración para la plataforma de automatización n8n. Cada flujo realiza las siguientes tareas:
1. **Consumo de Datos**: Lee un archivo Excel (`RUTS.xlsx`) con datos de prueba.
2. **Mapeo Dinámico**: Construye las URLs de consulta reemplazando RUTs y Pólizas en las rutas definidas en el Swagger.
3. **Ejecución**: Realiza peticiones HTTP a los servicios en QA.
4. **Resumen**: Determina el estado `PASS` o `FAIL` basándose en el código de respuesta y la integridad del cuerpo del mensaje.

### Scripts de Soporte
- `extract_endpoints.py`: Utilidad en Python para extraer rápidamente la lista de rutas y parámetros desde un archivo Swagger (.json) a un formato CSV legible y editable.

---

## � Proceso de Auditoría

1. **Actualización de Swaggers**: Asegurar que los archivos en `docker/` reflejen la última versión de QA.
2. **Configuración de Datos**: Asegurar que el archivo Excel con los RUTs y Pólizas a validar esté disponible en la ruta especificada en los flujos (ej: `C:\Users\Vidata11\n8n-local\n8n-data\RUTS.xlsx`).
3. **Ejecución de Flujos**: Importar y ejecutar los archivos `.json` en n8n.
4. **Análisis de Resultados**: Revisar los informes generados por los nodos de "Reporting" o "Summary" dentro de cada workflow.
