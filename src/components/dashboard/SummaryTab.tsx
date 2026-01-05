import { StatCard } from "./StatCard";
import { summaryMetrics } from "@/data/auditData";
import { Database, CheckCircle2, XCircle, Activity, AlertTriangle } from "lucide-react";

export const SummaryTab = () => {
  return (
    <div className="space-y-8 animate-fade-up">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Procesados"
          value={summaryMetrics.totalProcessed}
          icon={<Database className="h-6 w-6" />}
        />
        <StatCard
          label="Éxitos (Match)"
          value={summaryMetrics.successCount}
          variant="success"
          icon={<CheckCircle2 className="h-6 w-6" />}
        />
        <StatCard
          label="Discrepancias"
          value={summaryMetrics.errorCount}
          variant="danger"
          icon={<XCircle className="h-6 w-6" />}
        />
        <StatCard
          label="% Eficacia Técnica"
          value={`${summaryMetrics.efficacyRate}%`}
          icon={<Activity className="h-6 w-6" />}
        />
      </div>

      {/* Result Summary Card */}
      <div className="glass-card p-8 bg-gradient-to-r from-primary/10 via-transparent to-transparent">
        <div className="flex items-start gap-4">
          <div className="p-4 bg-warning/20 rounded-2xl">
            <AlertTriangle className="h-8 w-8 text-warning" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Resultado del Testing</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Se ha detectado <span className="text-destructive font-bold">1</span> caso que requiere atención. 
              Principalmente relacionado con discrepancia en el nombre mostrado en el ambiente Anonimizado.
            </p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h4 className="text-lg font-semibold mb-4 text-primary">📋 Información del Reporte</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Fecha de Ejecución</span>
              <span className="font-semibold">{summaryMetrics.executionDate}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Responsable</span>
              <span className="font-semibold">{summaryMetrics.responsible}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Fuente de Datos</span>
              <span className="font-semibold text-sm">Informe_Validacion_BUC_V7_FINAL.xlsx</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <h4 className="text-lg font-semibold mb-4 text-success">✅ Validaciones Realizadas</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 py-2 border-b border-border/50">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-muted-foreground">Cruce de RUT ambiente PROD vs ANON</span>
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-border/50">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-muted-foreground">Validación de nombres enmascarados</span>
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-border/50">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-muted-foreground">Consistencia de datos entre ambientes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
