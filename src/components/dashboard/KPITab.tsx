import { kpiData } from "@/data/auditData";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import { 
  CheckCircle2, Zap, AlertTriangle, ClipboardList,
  Building2, User, Calendar, Shield, TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const KPIMetricCard = ({ 
  name, 
  value, 
  status, 
  description,
  icon
}: { 
  name: string; 
  value: string; 
  status: "optimal" | "warning" | "critical";
  description?: string;
  icon: string;
}) => {
  const IconComponent = icon === "check" ? CheckCircle2 : Zap;
  
  return (
    <div className="glass-card p-5 flex items-center gap-4">
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center text-xl",
        status === "optimal" && "bg-success/10 text-success",
        status === "warning" && "bg-warning/10 text-warning",
        status === "critical" && "bg-destructive/10 text-destructive"
      )}>
        <IconComponent className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground font-medium">{name}</p>
        <p className={cn(
          "text-2xl font-bold",
          status === "optimal" && "text-foreground",
          status === "warning" && "text-warning",
          status === "critical" && "text-destructive"
        )}>
          {value}
        </p>
        {description && (
          <p className={cn(
            "text-xs mt-0.5",
            status === "optimal" && "text-success",
            status === "warning" && "text-warning",
            status === "critical" && "text-destructive"
          )}>
            {status === "optimal" ? "Sobresaliente" : description}
          </p>
        )}
        {!description && status === "optimal" && (
          <p className="text-xs text-success mt-0.5">Óptimo</p>
        )}
      </div>
    </div>
  );
};

const FindingCard = ({ 
  severity, 
  title, 
  description, 
  details,
  metrics
}: { 
  severity: "low" | "medium" | "high";
  title: string;
  description: string;
  details?: {
    rut: string;
    nombreOriginal: string;
    esperado: string;
    obtenido: string;
  };
  metrics?: {
    personasNaturales: string;
    personasJuridicas: string;
    gap: string;
    accion: string;
  };
}) => (
  <div className="glass-card p-6 mb-5">
    <div className="flex items-center gap-3 mb-4">
      <span className={cn(
        "px-4 py-1.5 rounded-full text-xs font-semibold uppercase",
        severity === "low" && "bg-success/10 text-success border border-success/30",
        severity === "medium" && "bg-warning/10 text-warning border border-warning/30",
        severity === "high" && "bg-destructive/10 text-destructive border border-destructive/30"
      )}>
        {severity === "low" ? "Severidad Baja" : severity === "medium" ? "Severidad Media" : "Severidad Alta"}
      </span>
      <span className="text-lg font-semibold">{title}</span>
    </div>
    <p className="text-muted-foreground mb-4">{description}</p>
    
    {details && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">RUT Afectado</p>
          <p className="font-medium">{details.rut}</p>
        </div>
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Nombre Original</p>
          <p className="font-medium text-sm">{details.nombreOriginal}</p>
        </div>
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Esperado</p>
          <p className="font-medium text-sm">{details.esperado}</p>
        </div>
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Obtenido</p>
          <p className="font-medium text-sm text-destructive">{details.obtenido}</p>
        </div>
      </div>
    )}
    
    {metrics && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Personas Naturales</p>
          <p className="font-medium text-success">{metrics.personasNaturales}</p>
        </div>
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Personas Jurídicas</p>
          <p className="font-medium text-warning">{metrics.personasJuridicas}</p>
        </div>
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Gap identificado</p>
          <p className="font-medium">{metrics.gap}</p>
        </div>
        <div className="bg-background/50 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Acción recomendada</p>
          <p className="font-medium text-sm">{metrics.accion}</p>
        </div>
      </div>
    )}
  </div>
);

const ActionItem = ({ 
  priority, 
  title, 
  description 
}: { 
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg mb-3">
    <span className={cn(
      "px-3 py-1 rounded text-xs font-bold uppercase whitespace-nowrap",
      priority === "high" && "bg-destructive/10 text-destructive",
      priority === "medium" && "bg-warning/10 text-warning",
      priority === "low" && "bg-primary/10 text-primary"
    )}>
      {priority === "high" ? "Alta" : priority === "medium" ? "Media" : "Baja"}
    </span>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export const KPITab = () => {
  return (
    <div className="space-y-10 animate-fade-up">
      {/* Indicadores Clave de Rendimiento */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="w-1 h-7 bg-primary rounded-full"></span>
          Indicadores Clave de Rendimiento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiData.mainMetrics.map((metric, index) => (
            <KPIMetricCard
              key={index}
              name={metric.name}
              value={metric.value}
              status={metric.status}
              description={metric.description}
              icon={metric.icon}
            />
          ))}
        </div>
      </section>

      {/* Análisis de Métricas por Tipo de Entidad */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="w-1 h-7 bg-primary rounded-full"></span>
          Análisis de Métricas por Tipo de Entidad
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Distribución por Tipo de Registro */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Distribución por Tipo de Registro
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={kpiData.entityDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(1)}%)`}
                    labelLine={false}
                  >
                    {kpiData.entityDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(222, 47%, 14%)', 
                      border: '1px solid hsl(217, 33%, 20%)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Personas Naturales (412)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Personas Jurídicas (88)</span>
              </div>
            </div>
          </div>

          {/* Tasa de Éxito por Tipo de Entidad */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Tasa de Éxito por Tipo de Entidad
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={kpiData.successByType} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 20%)" />
                  <XAxis 
                    type="number"
                    stroke="hsl(215, 20%, 65%)"
                    tick={{ fill: 'hsl(215, 20%, 65%)' }}
                  />
                  <YAxis 
                    dataKey="type" 
                    type="category"
                    stroke="hsl(215, 20%, 65%)"
                    tick={{ fill: 'hsl(215, 20%, 65%)' }}
                    width={130}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(222, 47%, 14%)', 
                      border: '1px solid hsl(217, 33%, 20%)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="exitosos" fill="hsl(160, 84%, 39%)" name="Exitosos" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="errores" fill="hsl(0, 84%, 60%)" name="Errores" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Hallazgos Críticos */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="w-1 h-7 bg-primary rounded-full"></span>
          Hallazgos Críticos
        </h2>
        {kpiData.findings.map((finding, index) => (
          <FindingCard
            key={index}
            severity={finding.severity}
            title={finding.title}
            description={finding.description}
            details={"details" in finding ? finding.details : undefined}
            metrics={"metrics" in finding ? finding.metrics : undefined}
          />
        ))}
      </section>

      {/* Plan de Acción */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="w-1 h-7 bg-primary rounded-full"></span>
          Plan de Acción
        </h2>
        <div className="glass-card p-6 bg-gradient-to-br from-primary/5 via-transparent to-transparent border-primary/20">
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            Acciones Recomendadas
          </h3>
          {kpiData.actionPlan.map((action, index) => (
            <ActionItem
              key={index}
              priority={action.priority}
              title={action.title}
              description={action.description}
            />
          ))}
        </div>
      </section>

      {/* Resumen Ejecutivo Gerencial */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="w-1 h-7 bg-primary rounded-full"></span>
          Resumen Ejecutivo Gerencial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stat-card success">
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">
              Evaluación General
            </p>
            <p className="text-3xl font-bold text-success mb-2">
              {kpiData.executiveSummary.evaluation}
            </p>
            <p className="text-sm text-muted-foreground">
              {kpiData.executiveSummary.evaluationDescription}
            </p>
          </div>
          
          <div className="stat-card">
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-2">
              Riesgo Operativo
            </p>
            <p className="text-3xl font-bold text-success mb-2">
              {kpiData.executiveSummary.risk}
            </p>
            <p className="text-sm text-muted-foreground">
              {kpiData.executiveSummary.riskDescription}
            </p>
          </div>
          
          <div className="stat-card">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                Próxima Revisión
              </p>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">
              {kpiData.executiveSummary.nextReview}
            </p>
            <p className="text-sm text-muted-foreground">
              {kpiData.executiveSummary.nextReviewDescription}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
