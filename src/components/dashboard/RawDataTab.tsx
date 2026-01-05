import { rawData, fullAuditData } from "@/data/auditData";
import { Database, CheckCircle2, FileJson } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const RawDataTab = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                Total JSON
              </p>
              <p className="text-4xl font-extrabold text-primary">500</p>
            </div>
          </div>
        </div>
        <div className="stat-card success">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-success/20 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                Ver Estructura
              </p>
              <p className="text-4xl font-extrabold text-success">OK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Raw Data Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto max-h-[500px]">
          <table className="w-full">
            <thead>
              <tr className="bg-background/80 sticky top-0 z-10">
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Index
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  RUT
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Estado
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Validación
                </th>
              </tr>
            </thead>
            <tbody>
              {rawData.map((record) => (
                <tr 
                  key={record.index} 
                  className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-5 py-3 text-sm text-muted-foreground">{record.index}</td>
                  <td className="px-5 py-3">
                    <code className="text-primary font-bold">{record.rut}</code>
                  </td>
                  <td className="px-5 py-3">
                    <Badge 
                      variant={record.estado === "Válido" ? "default" : "destructive"}
                      className={record.estado === "Válido" 
                        ? "bg-success/10 text-success border-success/20" 
                        : "bg-destructive/10 text-destructive border-destructive/20"
                      }
                    >
                      {record.estado}
                    </Badge>
                  </td>
                  <td className="px-5 py-3">
                    <span className={record.validacion === "Passed" ? "text-success" : "text-destructive"}>
                      {record.validacion}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* JSON Preview */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary/20 rounded-xl">
            <FileJson className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Estructura de Datos JSON</h2>
            <p className="text-muted-foreground text-sm">Muestra de los primeros 5 registros</p>
          </div>
        </div>
        <pre className="overflow-auto max-h-[400px] text-sm text-muted-foreground font-mono bg-background/50 p-4 rounded-lg">
          {JSON.stringify(fullAuditData.slice(0, 5), null, 2)}
        </pre>
      </div>
    </div>
  );
};
