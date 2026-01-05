import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle2, XCircle } from "lucide-react";
import { fullAuditData } from "@/data/auditData";

export const ValidationTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm) return fullAuditData;
    const lowerSearch = searchTerm.toLowerCase();
    return fullAuditData.filter(
      (record) =>
        record.rut.toLowerCase().includes(lowerSearch) ||
        record.nombreOriginal.toLowerCase().includes(lowerSearch) ||
        record.resultadoFinal.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  return (
    <div className="space-y-4 animate-fade-up">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Filtrar por RUT, Nombre o Estado..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 h-14 bg-card border-border focus:border-primary focus:ring-primary/20"
        />
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto max-h-[600px]">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-background/80 sticky top-0 z-10">
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  RUT
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  N. Original
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  N. Enmascarado
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  N. Devuelto (PROD)
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  N. Devuelto (ANON)
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  RUT Match P.
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  RUT Match A.
                </th>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((record, index) => (
                <tr 
                  key={`${record.rut}-${index}`} 
                  className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${
                    record.resultadoFinal !== "OK" ? "bg-destructive/5" : ""
                  }`}
                >
                  <td className="px-5 py-4">
                    <code className="text-primary font-bold">{record.rut}</code>
                  </td>
                  <td className="px-5 py-4 text-sm">{record.nombreOriginal}</td>
                  <td className="px-5 py-4 text-sm">{record.nombreEnmascarado}</td>
                  <td className="px-5 py-4 text-sm">{record.devueltoNoAnon}</td>
                  <td className="px-5 py-4 text-sm">{record.devueltoAnon}</td>
                  <td className="px-5 py-4">
                    {record.rutMatchNoAnon ? (
                      <span className="text-success font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" /> Sí
                      </span>
                    ) : (
                      <span className="text-destructive font-semibold flex items-center gap-1">
                        <XCircle className="h-4 w-4" /> No
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    {record.rutMatchAnon ? (
                      <span className="text-success font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" /> Sí
                      </span>
                    ) : (
                      <span className="text-destructive font-semibold flex items-center gap-1">
                        <XCircle className="h-4 w-4" /> No
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <Badge 
                      variant={record.resultadoFinal === "OK" ? "default" : "destructive"}
                      className={record.resultadoFinal === "OK" 
                        ? "bg-success/10 text-success border-success/20 hover:bg-success/20" 
                        : "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20"
                      }
                    >
                      {record.resultadoFinal}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground text-center">
        Mostrando {filteredData.length} de {fullAuditData.length} registros
      </p>
    </div>
  );
};
