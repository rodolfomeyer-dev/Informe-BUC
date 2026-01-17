# 📊 Validación de APIs BUC - Auditoría Técnica

Este proyecto está dedicado a la validación y gestión de definiciones Swagger para los servicios core de BUC, permitiendo la auditoría automatizada de integraciones críticas.

---

## 🎯 Objetivo
Automatizar las pruebas de humo y regresión de las siguientes APIs en ambiente QA:
- **API Productos**
- **API Clientes**
- **Pensión Settlement**
- **Payment Service**

## 📄 Documentación Completa
Para detalles técnicos sobre los flujos de validación n8n y el mapeo de endpoints, consulta la [Documentación de APIs](DOCUMENTATION.md).

---

## ✨ Características Principales

- **📈 Resumen Ejecutivo**: Visualización rápida de registros procesados, coincidencias y tasa de eficiencia técnica.
- **🔍 Detalle de Validación**: Tabla interactiva para inspeccionar cada registro, con estados visuales claros (Éxito/Error).
- **📊 Módulo KPI / KPA**: Gráficos y tarjetas de métricas para medir la calidad de la anonimización y consistencia de datos.
- **📄 Datos Brutos**: Acceso completo a la información procesada para auditorías profundas.
- **🔗 Exportación para Confluence**: Capacidad única de generar un reporte en un solo archivo HTML, optimizado para plataformas de documentación.

---

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 con TypeScript.
- **Estilos**: Tailwind CSS para un diseño responsivo y moderno.
- **Componentes UI**: Radix UI y Shadcn/UI.
- **Iconografía**: Lucide React.
- **Visualización**: Recharts para gráficos dinámicos.
- **Build Tool**: Vite para un desarrollo ultra rápido.

---

## 🛠️ Instalación y Desarrollo Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/rodolfomeyer-dev/Informe-BUC.git
   cd Informe-BUC
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:8080`.

---

## 📦 Empaquetado para Confluence

Este proyecto está configurado para generar un archivo HTML **autocontenido** (Single File), ideal para subirlo a Confluence o enviarlo por correo.

### Generar el archivo:
```bash
npm run build
```

El resultado se encontrará en:
`dist/index.html` o en la raíz como `kpi_dashboard_confluence.html`.

### Ventajas del formato Single File:
- ✅ **Sin dependencias externas**: Todos los estilos y scripts están inyectados en el HTML.
- ✅ **Compatibilidad**: Utiliza `HashRouter` para asegurar que la navegación funcione sin servidor.
- ✅ **Portabilidad**: Simplemente arrastra y suelta el archivo en cualquier navegador.

---

## 👤 Autor

**Rodolfo Meyer**  
*Desarrollador y Visionario detrás de Informe-BUC.*

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo y mejorarlo.
