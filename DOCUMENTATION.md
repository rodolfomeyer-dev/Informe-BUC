# Documentación Detallada del Proyecto: Dashboard de Auditoría KPI - BUC

## 📌 Visión General
Este proyecto es una herramienta avanzada de visualización y auditoría diseñada para validar los procesos de anonimización y consistencia de datos en el sistema **BUC (Búsqueda Unificada de Clientes)**. Proporciona una interfaz ejecutiva y técnica para analizar los resultados de las pruebas de regresión y validación de APIs.

---

## 🏗️ Arquitectura Técnica
El dashboard está construido sobre un stack moderno que prioriza la velocidad de desarrollo y la portabilidad:

- **Frontend**: [React 18](https://reactjs.org/) con [TypeScript](https://www.typescriptlang.org/).
- **Bundler**: [Vite](https://vitejs.dev/) (configurado para salida de archivo único).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) para diseño responsivo.
- **Componentes**: [Shadcn UI](https://ui.shadcn.com/) y [Radix UI](https://www.radix-ui.com/).
- **Gráficos**: [Recharts](https://recharts.org/).
- **Enrutamiento**: `HashRouter` (para compatibilidad con archivos locales y Confluence).

---

## 📂 Estructura de Archivos

### 📁 Raíz del Proyecto
- `extract_endpoints.py`: Script Python que extrae rutas y parámetros de archivos Swagger JSON y los exporta a CSV.
- `kpi_dashboard_confluence.html`: Versión empaquetada y autocontenida del dashboard para distribución.
- `swagger*.json`: Archivos de definición de API que sirven como base para la validación.
- `docker/`: Carpeta de respaldo que contiene las definiciones Swagger del proyecto.
- `endpoints_*.csv`: Archivos generados por el script de extracción.

### 📁 `src/` (Código Fuente)
- `App.tsx`: Punto de entrada de la aplicación y configuración de rutas.
- `data/auditData.ts`: **Motor de datos**. Contiene la lógica de generación y almacenamiento de los 500 registros de auditoría que alimentan el dashboard.
- `components/dashboard/`: Componentes modulares de la interfaz:
  - `KPITab.tsx`: Visualizaciones de métricas, distribución de entidades y plan de acción.
  - `SummaryTab.tsx`: Resumen ejecutivo de alto nivel.
  - `ValidationTable.tsx`: Tabla interactiva con búsqueda y filtrado de registros.
  - `RawDataTab.tsx`: Vista técnica de los datos en formato lista.
- `components/ui/`: Componentes base del sistema de diseño (botones, tarjetas, tablas, etc.).

---

## 📊 Modelo de Datos
La auditoría se centra en la interfaz `AuditRecord`:

```typescript
interface AuditRecord {
  rut: string;
  nombreOriginal: string;
  nombreEnmascarado: string;
  devueltoNoAnon: string; // Respuesta de API NO Anonimizada
  devueltoAnon: string;   // Respuesta de API Anonimizada
  rutMatchNoAnon: boolean;
  rutMatchAnon: boolean;
  resultadoFinal: "OK" | "ERROR: datos inconsistentes";
}
```

---

## 🔄 Flujo de Trabajo (Workflow)

1. **Definición de API**: Se mantienen los archivos Swagger actualizados en la raíz o en `docker/`.
2. **Generación de Plantillas**: Se ejecuta `extract_endpoints.py` para obtener los CSV de pruebas.
3. **Carga de Datos**: Los resultados de las pruebas se integran en `src/data/auditData.ts`.
4. **Construcción**: Se ejecuta `npm run build` para generar el reporte final.
5. **Distribución**: El archivo `kpi_dashboard_confluence.html` se sube a Confluence para revisión de los stakeholders.

---

## 📦 Empaquetado Especial (Single File)
Para garantizar que el dashboard funcione dentro de entornos restringidos como Confluence, el proyecto utiliza el plugin `vite-plugin-singlefile`. Esto inyecta:
- Todo el CSS directamente en etiquetas `<style>`.
- Todo el JavaScript compilado en etiquetas `<script>`.
- Todos los assets (imágenes, fuentes) como Base64.

---

## 🚀 Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el entorno de desarrollo en `localhost:8080`. |
| `npm run build` | Genera el archivo HTML autocontenido para producción. |
| `python extract_endpoints.py` | Genera el CSV de endpoints desde el Swagger. |

---

## 🔐 Respaldos y Git
- **Repositorio Principal**: `rodolfomeyer-dev/Informe-BUC`
- **Repositorio de APIs (Swagger)**: `rodolfomeyer-dev/BUC_APIS` (Backup automático de la carpeta `docker/`).
