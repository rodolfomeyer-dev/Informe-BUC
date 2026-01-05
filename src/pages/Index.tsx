import { useState } from "react";
import { TabButton } from "@/components/dashboard/TabButton";
import { SummaryTab } from "@/components/dashboard/SummaryTab";
import { ValidationTable } from "@/components/dashboard/ValidationTable";
import { KPITab } from "@/components/dashboard/KPITab";
import { RawDataTab } from "@/components/dashboard/RawDataTab";
import { summaryMetrics } from "@/data/auditData";
import { Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportToHtml } from "@/utils/exportToHtml";

type TabId = "summary" | "details" | "kpi" | "raw";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("summary");

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/20 rounded-2xl animate-pulse-glow">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                BUC Auditoría - Informe Testing
              </h1>
              <p className="text-muted-foreground mt-1">
                Análisis de Identidades Cruzadas ambiente Anonimizado y NO Anonimizado
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-2">
            <Button 
              onClick={exportToHtml}
              className="gap-2"
              variant="outline"
            >
              <Download className="h-4 w-4" />
              Exportar HTML
            </Button>
            <p className="text-muted-foreground">
              Actualizado: <span className="font-bold text-foreground">{summaryMetrics.executionDate}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Fuente: Informe_Validacion_BUC_V7_FINAL.xlsx
            </p>
          </div>
        </header>

        {/* Tabs Navigation */}
        <nav className="mb-8">
          <div className="inline-flex bg-secondary/50 p-1.5 rounded-xl gap-2">
            <TabButton 
              active={activeTab === "summary"} 
              onClick={() => setActiveTab("summary")}
            >
              Resumen Ejecutivo
            </TabButton>
            <TabButton 
              active={activeTab === "details"} 
              onClick={() => setActiveTab("details")}
            >
              Detalle de Validación
            </TabButton>
            <TabButton 
              active={activeTab === "kpi"} 
              onClick={() => setActiveTab("kpi")}
            >
              KPI / KPA
            </TabButton>
            <TabButton 
              active={activeTab === "raw"} 
              onClick={() => setActiveTab("raw")}
            >
              Datos Brutos
            </TabButton>
          </div>
        </nav>

        {/* Tab Content */}
        <main>
          {activeTab === "summary" && <SummaryTab />}
          {activeTab === "details" && <ValidationTable />}
          {activeTab === "kpi" && <KPITab />}
          {activeTab === "raw" && <RawDataTab />}
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            BUC V7 - Dashboard de Auditoría Técnica • {summaryMetrics.executionDate}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
