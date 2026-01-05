import { summaryMetrics, kpiData, fullAuditData, rawData } from "@/data/auditData";

export const exportToHtml = () => {
  // Entity distribution from kpiData
  const pnData = kpiData.entityDistribution.find(e => e.name === "Personas Naturales");
  const pjData = kpiData.entityDistribution.find(e => e.name === "Personas Jurídicas");
  const pnTotal = pnData?.value || 412;
  const pjTotal = pjData?.value || 88;
  
  // Success by type
  const pnTypeData = kpiData.successByType.find(e => e.type === "Personas Naturales");
  const pjTypeData = kpiData.successByType.find(e => e.type === "Personas Jurídicas");
  const pnSuccess = pnTypeData?.exitosos || 412;
  const pnErrors = pnTypeData?.errores || 0;
  const pjSuccess = pjTypeData?.exitosos || 87;
  const pjErrors = pjTypeData?.errores || 1;

  // Icons SVG
  const icons = {
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    zap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    building: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,
  };

  // Get icon based on name
  const getIconForMetric = (icon: string) => {
    return icon === "check" ? icons.checkCircle : icons.zap;
  };

  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BUC Auditoría - Informe Testing</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    :root {
      --background: 222 47% 11%;
      --foreground: 210 40% 98%;
      --card: 217 33% 17%;
      --card-foreground: 210 40% 98%;
      --primary: 160 84% 39%;
      --primary-foreground: 210 40% 98%;
      --secondary: 217 33% 17%;
      --muted: 217 33% 17%;
      --muted-foreground: 215 20% 65%;
      --accent: 217 33% 17%;
      --border: 217 33% 17%;
      --success: 160 84% 39%;
      --warning: 38 92% 50%;
      --danger: 0 84% 60%;
    }
    body {
      background: linear-gradient(135deg, hsl(222, 47%, 8%) 0%, hsl(222, 47%, 14%) 100%);
      color: hsl(210, 40%, 98%);
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
    }
    .glass-card {
      background: linear-gradient(145deg, hsl(217, 33%, 17%) 0%, hsl(217, 33%, 14%) 100%);
      border: 1px solid hsla(160, 84%, 39%, 0.2);
      border-radius: 1rem;
      padding: 1.5rem;
    }
    .glow-primary {
      box-shadow: 0 0 20px hsla(160, 84%, 39%, 0.3);
    }
    .stat-card {
      background: linear-gradient(145deg, hsl(217, 33%, 17%) 0%, hsl(217, 33%, 14%) 100%);
      border: 1px solid hsla(160, 84%, 39%, 0.2);
      border-radius: 1rem;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }
    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 30px hsla(160, 84%, 39%, 0.2);
    }
    .stat-card.success {
      border-left: 4px solid hsl(160, 84%, 39%);
    }
    .tab-btn {
      padding: 0.625rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.2s;
      cursor: pointer;
      border: none;
      background: transparent;
      color: hsl(215, 20%, 65%);
    }
    .tab-btn:hover {
      color: hsl(210, 40%, 98%);
      background: hsla(217, 33%, 17%, 0.5);
    }
    .tab-btn.active {
      background: hsl(160, 84%, 39%);
      color: hsl(210, 40%, 98%);
      box-shadow: 0 0 20px hsla(160, 84%, 39%, 0.3);
    }
    .badge-success { background: hsla(160, 84%, 39%, 0.2); color: hsl(160, 84%, 50%); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
    .badge-warning { background: hsla(38, 92%, 50%, 0.2); color: hsl(38, 92%, 60%); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
    .badge-danger { background: hsla(0, 84%, 60%, 0.2); color: hsl(0, 84%, 70%); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
    .badge-severity-low { background: hsla(160, 84%, 39%, 0.1); color: hsl(160, 84%, 50%); border: 1px solid hsla(160, 84%, 39%, 0.3); padding: 0.375rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
    .badge-severity-medium { background: hsla(38, 92%, 50%, 0.1); color: hsl(38, 92%, 60%); border: 1px solid hsla(38, 92%, 50%, 0.3); padding: 0.375rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
    .badge-severity-high { background: hsla(0, 84%, 60%, 0.1); color: hsl(0, 84%, 70%); border: 1px solid hsla(0, 84%, 60%, 0.3); padding: 0.375rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
    .badge-priority-high { background: hsla(0, 84%, 60%, 0.1); color: hsl(0, 84%, 70%); padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
    .badge-priority-medium { background: hsla(38, 92%, 50%, 0.1); color: hsl(38, 92%, 60%); padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
    .badge-priority-low { background: hsla(160, 84%, 39%, 0.1); color: hsl(160, 84%, 50%); padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid hsla(217, 33%, 30%, 0.5); }
    th { background: hsla(160, 84%, 39%, 0.1); font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; }
    tr:hover { background: hsla(160, 84%, 39%, 0.05); }
    .tab-content { display: none; }
    .tab-content.active { display: block; }
    .chart-container { position: relative; height: 300px; }
    .section-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    .section-title::before {
      content: '';
      width: 4px;
      height: 1.75rem;
      background: hsl(160, 84%, 39%);
      border-radius: 9999px;
    }
    .metric-card {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .metric-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .metric-icon.success { background: hsla(160, 84%, 39%, 0.1); color: hsl(160, 84%, 50%); }
    .metric-icon.warning { background: hsla(38, 92%, 50%, 0.1); color: hsl(38, 92%, 60%); }
    .metric-icon.danger { background: hsla(0, 84%, 60%, 0.1); color: hsl(0, 84%, 70%); }
    .text-success { color: hsl(160, 84%, 50%); }
    .text-warning { color: hsl(38, 92%, 60%); }
    .text-danger { color: hsl(0, 84%, 70%); }
    .text-primary { color: hsl(160, 84%, 50%); }
    .text-muted { color: hsl(215, 20%, 65%); }
    .finding-card { margin-bottom: 1.25rem; }
    .finding-details { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
    .finding-detail-box { background: hsla(0, 0%, 0%, 0.2); padding: 1rem; border-radius: 0.5rem; }
    @media (max-width: 768px) { .finding-details { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .finding-details { grid-template-columns: 1fr; } }
    .action-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: hsla(0, 0%, 0%, 0.2);
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
    }
  </style>
</head>
<body class="p-6 md:p-10">
  <div class="max-w-[1400px] mx-auto">
    <!-- Header -->
    <header class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 pb-6 border-b" style="border-color: hsla(217, 33%, 30%, 0.5);">
      <div class="flex items-center gap-4">
        <div class="p-4 rounded-2xl glow-primary" style="background: hsla(160, 84%, 39%, 0.2);">
          <span class="text-primary">${icons.shield}</span>
        </div>
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">BUC Auditoría - Informe Testing</h1>
          <p class="text-muted mt-1">Análisis de Identidades Cruzadas ambiente Anonimizado y NO Anonimizado</p>
        </div>
      </div>
      <div class="text-right">
        <p class="text-muted">Actualizado: <span class="font-bold" style="color: hsl(210, 40%, 98%);">${summaryMetrics.executionDate}</span></p>
        <p class="text-sm text-muted">Fuente: Informe_Validacion_BUC_V7_FINAL.xlsx</p>
      </div>
    </header>

    <!-- Tabs Navigation -->
    <nav class="mb-8">
      <div class="inline-flex p-1.5 rounded-xl gap-2" style="background: hsla(217, 33%, 17%, 0.5);">
        <button class="tab-btn active" onclick="showTab('summary')">Resumen Ejecutivo</button>
        <button class="tab-btn" onclick="showTab('details')">Detalle de Validación</button>
        <button class="tab-btn" onclick="showTab('kpi')">KPI / KPA</button>
        <button class="tab-btn" onclick="showTab('raw')">Datos Brutos</button>
      </div>
    </nav>

    <!-- Summary Tab -->
    <div id="summary" class="tab-content active">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="stat-card">
          <p class="text-sm text-muted">Total Procesados</p>
          <p class="text-4xl font-bold mt-2 text-success">${summaryMetrics.totalProcessed}</p>
          <p class="text-xs mt-2 text-muted">Registros analizados</p>
        </div>
        <div class="stat-card">
          <p class="text-sm text-muted">Exitosos</p>
          <p class="text-4xl font-bold mt-2 text-success">${summaryMetrics.successCount}</p>
          <p class="text-xs mt-2 text-muted">Validaciones correctas</p>
        </div>
        <div class="stat-card">
          <p class="text-sm text-muted">Con Observaciones</p>
          <p class="text-4xl font-bold mt-2 text-warning">${summaryMetrics.errorCount}</p>
          <p class="text-xs mt-2 text-muted">Requieren atención</p>
        </div>
        <div class="stat-card">
          <p class="text-sm text-muted">Tasa de Eficacia</p>
          <p class="text-4xl font-bold mt-2 text-success">${summaryMetrics.efficacyRate}</p>
          <p class="text-xs mt-2 text-muted">Validación exitosa</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="glass-card">
          <h3 class="text-xl font-bold mb-4 text-success">Resumen de Resultados</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-3 rounded-lg" style="background: hsla(160, 84%, 39%, 0.1);">
              <span>Exitosos</span>
              <span class="badge-success">${summaryMetrics.successCount}</span>
            </div>
            <div class="flex justify-between items-center p-3 rounded-lg" style="background: hsla(38, 92%, 50%, 0.1);">
              <span>Con Observaciones</span>
              <span class="badge-warning">${summaryMetrics.errorCount}</span>
            </div>
            <div class="flex justify-between items-center p-3 rounded-lg" style="background: hsla(0, 84%, 60%, 0.1);">
              <span>Críticos</span>
              <span class="badge-danger">0</span>
            </div>
          </div>
        </div>

        <div class="glass-card">
          <h3 class="text-xl font-bold mb-4 text-success">Información del Reporte</h3>
          <div class="space-y-3">
            <div class="flex justify-between"><span class="text-muted">Fecha de Ejecución</span><span>${summaryMetrics.executionDate}</span></div>
            <div class="flex justify-between"><span class="text-muted">Tipo de Validación</span><span>Cruzada Anonimizado/No Anonimizado</span></div>
            <div class="flex justify-between"><span class="text-muted">Entorno</span><span>Testing BUC V7</span></div>
            <div class="flex justify-between"><span class="text-muted">Responsable</span><span>${summaryMetrics.responsible}</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Details Tab -->
    <div id="details" class="tab-content">
      <div class="glass-card">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-success">Detalle de Validación</h3>
          <span class="badge-success">${fullAuditData.length} registros</span>
        </div>
        <div class="overflow-x-auto" style="max-height: 600px; overflow-y: auto;">
          <table>
            <thead style="position: sticky; top: 0;">
              <tr>
                <th>#</th>
                <th>RUT</th>
                <th>Nombre Original</th>
                <th>Nombre Enmascarado</th>
                <th>Match No Anon</th>
                <th>Match Anon</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              ${fullAuditData.map((row, idx) => `
                <tr>
                  <td class="font-mono text-sm">${idx + 1}</td>
                  <td class="font-mono">${row.rut}</td>
                  <td class="text-sm">${row.nombreOriginal}</td>
                  <td class="text-sm">${row.nombreEnmascarado}</td>
                  <td><span class="${row.rutMatchNoAnon ? 'badge-success' : 'badge-danger'}">${row.rutMatchNoAnon ? 'Sí' : 'No'}</span></td>
                  <td><span class="${row.rutMatchAnon ? 'badge-success' : 'badge-danger'}">${row.rutMatchAnon ? 'Sí' : 'No'}</span></td>
                  <td><span class="${row.resultadoFinal === 'OK' ? 'badge-success' : 'badge-danger'}">${row.resultadoFinal}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- KPI Tab -->
    <div id="kpi" class="tab-content">
      <!-- Indicadores Clave de Rendimiento -->
      <section class="mb-10">
        <h2 class="section-title">Indicadores Clave de Rendimiento</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          ${kpiData.mainMetrics.map(metric => {
            const statusClass = metric.status === 'optimal' ? 'success' : metric.status === 'warning' ? 'warning' : 'danger';
            const statusText = metric.status === 'optimal' ? (metric.description || 'Óptimo') : metric.description;
            return `
            <div class="glass-card">
              <div class="metric-card">
                <div class="metric-icon ${statusClass}">
                  ${getIconForMetric(metric.icon)}
                </div>
                <div>
                  <p class="text-sm text-muted font-medium">${metric.name}</p>
                  <p class="text-2xl font-bold">${metric.value}</p>
                  <p class="text-xs mt-0.5 text-${statusClass}">${metric.status === 'optimal' ? 'Sobresaliente' : statusText}</p>
                </div>
              </div>
            </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Análisis de Métricas por Tipo de Entidad -->
      <section class="mb-10">
        <h2 class="section-title">Análisis de Métricas por Tipo de Entidad</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="glass-card">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <span class="text-primary">${icons.user}</span>
              Distribución por Tipo de Registro
            </h3>
            <div class="chart-container">
              <canvas id="entityPieChart"></canvas>
            </div>
            <div class="flex justify-center gap-6 mt-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full" style="background: hsl(160, 84%, 39%);"></div>
                <span class="text-sm text-muted">Personas Naturales (${pnTotal})</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full" style="background: hsl(160, 84%, 50%);"></div>
                <span class="text-sm text-muted">Personas Jurídicas (${pjTotal})</span>
              </div>
            </div>
          </div>
          <div class="glass-card">
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <span class="text-primary">${icons.building}</span>
              Tasa de Éxito por Tipo de Entidad
            </h3>
            <div class="chart-container">
              <canvas id="resultsBarChart"></canvas>
            </div>
          </div>
        </div>
      </section>

      <!-- Hallazgos Críticos -->
      <section class="mb-10">
        <h2 class="section-title">Hallazgos Críticos</h2>
        ${kpiData.findings.map(finding => {
          const sev = finding.severity as string;
          const severityClass = sev === 'high' ? 'high' : sev === 'medium' ? 'medium' : 'low';
          const severityLabel = sev === 'high' ? 'Severidad Alta' : sev === 'medium' ? 'Severidad Media' : 'Severidad Baja';
          
          let detailsHtml = '';
          if ('details' in finding && finding.details) {
            detailsHtml = `
              <div class="finding-details">
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">RUT Afectado</p>
                  <p class="font-medium">${finding.details.rut}</p>
                </div>
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">Nombre Original</p>
                  <p class="font-medium text-sm">${finding.details.nombreOriginal}</p>
                </div>
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">Esperado</p>
                  <p class="font-medium text-sm">${finding.details.esperado}</p>
                </div>
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">Obtenido</p>
                  <p class="font-medium text-sm text-danger">${finding.details.obtenido}</p>
                </div>
              </div>
            `;
          }
          if ('metrics' in finding && finding.metrics) {
            detailsHtml = `
              <div class="finding-details">
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">Personas Naturales</p>
                  <p class="font-medium text-success">${finding.metrics.personasNaturales}</p>
                </div>
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">Personas Jurídicas</p>
                  <p class="font-medium text-warning">${finding.metrics.personasJuridicas}</p>
                </div>
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">Gap identificado</p>
                  <p class="font-medium">${finding.metrics.gap}</p>
                </div>
                <div class="finding-detail-box">
                  <p class="text-xs text-muted uppercase tracking-wide mb-1">Acción recomendada</p>
                  <p class="font-medium text-sm">${finding.metrics.accion}</p>
                </div>
              </div>
            `;
          }
          
          return `
          <div class="glass-card finding-card">
            <div class="flex items-center gap-3 mb-4">
              <span class="badge-severity-${severityClass}">${severityLabel}</span>
              <span class="text-lg font-semibold">${finding.title}</span>
            </div>
            <p class="text-muted mb-4">${finding.description}</p>
            ${detailsHtml}
          </div>
          `;
        }).join('')}
      </section>

      <!-- Plan de Acción -->
      <section class="mb-10">
        <h2 class="section-title">Plan de Acción</h2>
        <div class="glass-card" style="background: linear-gradient(to bottom right, hsla(160, 84%, 39%, 0.05), transparent); border-color: hsla(160, 84%, 39%, 0.2);">
          <h3 class="text-lg font-semibold mb-5 flex items-center gap-2">
            <span class="text-primary">${icons.clipboard}</span>
            Acciones Recomendadas
          </h3>
          ${kpiData.actionPlan.map(action => {
            const priorityLabel = action.priority === 'high' ? 'Alta' : action.priority === 'medium' ? 'Media' : 'Baja';
          const priorityClass = action.priority;
          return `
            <div class="action-item">
              <span class="badge-priority-${priorityClass}">${priorityLabel}</span>
              <div>
                <h4 class="font-semibold mb-1">${action.title}</h4>
                <p class="text-sm text-muted">${action.description}</p>
              </div>
            </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Resumen Ejecutivo Gerencial -->
      <section>
        <h2 class="section-title">Resumen Ejecutivo Gerencial</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="stat-card success">
            <p class="text-sm text-muted font-semibold uppercase tracking-wider mb-2">Evaluación General</p>
            <p class="text-3xl font-bold text-success mb-2">${kpiData.executiveSummary.evaluation}</p>
            <p class="text-sm text-muted">${kpiData.executiveSummary.evaluationDescription}</p>
          </div>
          <div class="stat-card">
            <p class="text-sm text-muted font-semibold uppercase tracking-wider mb-2">Riesgo Operativo</p>
            <p class="text-3xl font-bold text-success mb-2">${kpiData.executiveSummary.risk}</p>
            <p class="text-sm text-muted">${kpiData.executiveSummary.riskDescription}</p>
          </div>
          <div class="stat-card">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-primary">${icons.calendar}</span>
              <p class="text-sm text-muted font-semibold uppercase tracking-wider">Próxima Revisión</p>
            </div>
            <p class="text-2xl font-bold text-primary mb-2">${kpiData.executiveSummary.nextReview}</p>
            <p class="text-sm text-muted">${kpiData.executiveSummary.nextReviewDescription}</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Raw Data Tab -->
    <div id="raw" class="tab-content">
      <div class="glass-card mb-6">
        <h3 class="text-xl font-bold mb-4 text-success">Datos Brutos</h3>
        <div class="overflow-x-auto" style="max-height: 500px; overflow-y: auto;">
          <table>
            <thead style="position: sticky; top: 0;">
              <tr>
                <th>#</th>
                <th>RUT</th>
                <th>Estado</th>
                <th>Validación</th>
              </tr>
            </thead>
            <tbody>
              ${rawData.map(row => `
                <tr>
                  <td class="font-mono text-sm">${row.index}</td>
                  <td class="font-mono">${row.rut}</td>
                  <td><span class="${row.estado === 'Válido' ? 'badge-success' : 'badge-danger'}">${row.estado}</span></td>
                  <td><span class="${row.validacion === 'Passed' ? 'badge-success' : 'badge-danger'}">${row.validacion}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="glass-card">
        <h3 class="text-xl font-bold mb-4 text-success">Vista JSON (Muestra)</h3>
        <pre class="p-4 rounded-lg overflow-x-auto text-sm" style="background: hsla(0, 0%, 0%, 0.3); color: hsl(160, 84%, 50%);">${JSON.stringify(fullAuditData.slice(0, 5), null, 2)}</pre>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-16 pt-8 border-t text-center" style="border-color: hsla(217, 33%, 30%, 0.5);">
      <p class="text-sm text-muted">BUC V7 - Dashboard de Auditoría Técnica • ${summaryMetrics.executionDate}</p>
    </footer>
  </div>

  <script>
    function showTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      event.target.classList.add('active');
    }

    document.addEventListener('DOMContentLoaded', function() {
      const pieCtx = document.getElementById('entityPieChart').getContext('2d');
      new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Personas Naturales', 'Personas Jurídicas'],
          datasets: [{
            data: [${pnTotal}, ${pjTotal}],
            backgroundColor: ['hsl(160, 84%, 39%)', 'hsl(160, 84%, 50%)'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      const barCtx = document.getElementById('resultsBarChart').getContext('2d');
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Personas Naturales', 'Personas Jurídicas'],
          datasets: [
            {
              label: 'Exitosos',
              data: [${pnSuccess}, ${pjSuccess}],
              backgroundColor: 'hsl(160, 84%, 39%)',
              borderRadius: 4
            },
            {
              label: 'Errores',
              data: [${pnErrors}, ${pjErrors}],
              backgroundColor: 'hsl(0, 84%, 60%)',
              borderRadius: 4
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: 'hsl(215, 20%, 65%)' }
            }
          },
          scales: {
            y: {
              grid: { color: 'hsla(217, 33%, 30%, 0.3)' },
              ticks: { color: 'hsl(215, 20%, 65%)' }
            },
            x: {
              grid: { color: 'hsla(217, 33%, 30%, 0.3)' },
              ticks: { color: 'hsl(215, 20%, 65%)' }
            }
          }
        }
      });
    });
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'BUC_Dashboard_Auditoria.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
