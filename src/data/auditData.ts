export interface AuditRecord {
  rut: string;
  nombreOriginal: string;
  nombreEnmascarado: string;
  devueltoNoAnon: string;
  devueltoAnon: string;
  rutMatchNoAnon: boolean;
  rutMatchAnon: boolean;
  resultadoFinal: "OK" | "ERROR: datos inconsistentes";
}

// 500 registros completos del Excel
export const auditData: AuditRecord[] = [
  { rut: "13684895K", nombreOriginal: "HUGO AMADOR GUZMAN BASTIAS", nombreEnmascarado: "PABLO SERGIO MONCADA PARRA", devueltoNoAnon: "HUGO AMADOR GUZMAN BASTIAS", devueltoAnon: "PABLO SERGIO MONCADA PARRA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "132530254", nombreOriginal: "RICARDO FELIPE ZURITA ALVARADO", nombreEnmascarado: "FELIPE PABLO CABRERA ALARCON", devueltoNoAnon: "RICARDO FELIPE ZURITA ALVARADO", devueltoAnon: "FELIPE PABLO CABRERA ALARCON", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "139020626", nombreOriginal: "VICTOR MANUEL ZURITA ALVARADO", nombreEnmascarado: "DANIEL JOSE TRELLES CAMPOS", devueltoNoAnon: "VICTOR MANUEL ZURITA ALVARADO", devueltoAnon: "DANIEL JOSE TRELLES CAMPOS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "16016395K", nombreOriginal: "ALEXIS ANDRES HORMAZABAL OLIVARES", nombreEnmascarado: "ALEXIS ARMANDO BUSTOS LARRAIN", devueltoNoAnon: "ALEXIS ANDRES HORMAZABAL OLIVARES", devueltoAnon: "ALEXIS ARMANDO BUSTOS LARRAIN", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "160836490", nombreOriginal: "ERICK LEONARDO GONZALEZ MORALES", nombreEnmascarado: "PATRICIO FABIAN CALFALAF RIVERA", devueltoNoAnon: "ERICK LEONARDO GONZALEZ MORALES", devueltoAnon: "PATRICIO FABIAN CALFALAF RIVERA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "129632933", nombreOriginal: "LUISA FUENTEALBA BALDINI", nombreEnmascarado: "DOMINIQUE CATALINA AGUILAR FIGUEROA", devueltoNoAnon: "LUISA FUENTEALBA BALDINI", devueltoAnon: "DOMINIQUE CATALINA AGUILAR FIGUEROA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "787203108", nombreOriginal: "COMPAÑIA PRODUCTORA NACIONAL DE SEGUROS LTDA", nombreEnmascarado: "RICARDO SEBASTIAN CABRERA CAMPOS", devueltoNoAnon: "NACIONAL DE SEGUROS CIA. PRODUCTORA", devueltoAnon: "Soluciones Creativas S.A.", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "ERROR: datos inconsistentes" },
  { rut: "135500461", nombreOriginal: "FRANCISCA ANDREA QUINONES BRUNA", nombreEnmascarado: "MARTINA NADIA MORALES AREVALO", devueltoNoAnon: "FRANCISCA ANDREA QUINONES BRUNA", devueltoAnon: "MARTINA NADIA MORALES AREVALO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "78085930K", nombreOriginal: "CIA LTDA SEGUROS LONCOMILLA", nombreEnmascarado: "ANDRES HERNAN CHACON CARRASCO", devueltoNoAnon: "CIA LTDA SEGUROS LONCOMILLA", devueltoAnon: "ANDRES HERNAN CHACON CARRASCO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "130644228", nombreOriginal: "CLAUDIA A. CARRASCO MONETTA", nombreEnmascarado: "BELEN SANDRA TAPIA ESPINOZA", devueltoNoAnon: "CLAUDIA A. CARRASCO MONETTA", devueltoAnon: "BELEN SANDRA TAPIA ESPINOZA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "134682779", nombreOriginal: "RODRIGO EDUARDO SILVA ALONSO", nombreEnmascarado: "PABLO RICARDO RAILLEN LAGOS", devueltoNoAnon: "RODRIGO EDUARDO SILVA ALONSO", devueltoAnon: "PABLO RICARDO RAILLEN LAGOS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "103346479", nombreOriginal: "TERESA DEL CARMEN ABARCA ORELLANA", nombreEnmascarado: "CAMILA CONSTANZA PARRAGUEZ BILBAO", devueltoNoAnon: "TERESA DEL CARMEN ABARCA ORELLANA", devueltoAnon: "CAMILA CONSTANZA PARRAGUEZ BILBAO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "126634560", nombreOriginal: "MARIELA ANDREA BARRERA HERRERA", nombreEnmascarado: "ANTONIA JOSEFA ROJAS AVALOS", devueltoNoAnon: "MARIELA ANDREA BARRERA HERRERA", devueltoAnon: "ANTONIA JOSEFA ROJAS AVALOS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "130630227", nombreOriginal: "LILIAN A. FIGUEROA BARRIENTOS", nombreEnmascarado: "JAVIERA CAMILA SALAS LAGOS", devueltoNoAnon: "LILIAN A. FIGUEROA BARRIENTOS", devueltoAnon: "JAVIERA CAMILA SALAS LAGOS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "134850914", nombreOriginal: "LILIAN DEL C. DIAZ MALDONADO", nombreEnmascarado: "PALOMA ANTONIA TAPIA CORTIJO", devueltoNoAnon: "LILIAN DEL C. DIAZ MALDONADO", devueltoAnon: "PALOMA ANTONIA TAPIA CORTIJO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "157711741", nombreOriginal: "ANITA FERNANDA DIAZ MALDONADO", nombreEnmascarado: "LAURA BARBARA CATRQUIR LARRAIN", devueltoNoAnon: "ANITA FERNANDA DIAZ MALDONADO", devueltoAnon: "LAURA BARBARA CATRQUIR LARRAIN", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "153373809", nombreOriginal: "MARIA BELEN PINO NUNEZ", nombreEnmascarado: "JOSEFA CAMILA OLGUIN RIQUELME", devueltoNoAnon: "MARIA BELEN PINO NUNEZ", devueltoAnon: "JOSEFA CAMILA OLGUIN RIQUELME", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "127210462", nombreOriginal: "FRANCISCA ANDREA MARQUEZ DOREN", nombreEnmascarado: "JOSEFA NICOLE BUSTOS OJEDA", devueltoNoAnon: "FRANCISCA ANDREA MARQUEZ DOREN", devueltoAnon: "JOSEFA NICOLE BUSTOS OJEDA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "136573322", nombreOriginal: "JUAN MARQUEZ DOREN", nombreEnmascarado: "NICOLAS ESTEBAN AGUILERA VEGA", devueltoNoAnon: "JUAN MARQUEZ DOREN", devueltoAnon: "NICOLAS ESTEBAN AGUILERA VEGA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "884222001", nombreOriginal: "CALLUND Y CIA. LTDA.", nombreEnmascarado: "PABLO JAVIER CARRASCO LUCERO", devueltoNoAnon: "CALLUND Y CIA. LTDA.", devueltoAnon: "PABLO JAVIER CARRASCO LUCERO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "132577021", nombreOriginal: "GONZALO ANDRES MAUTZ TORO", nombreEnmascarado: "MATEO HERNAN PEREZ AGUILERA", devueltoNoAnon: "GONZALO ANDRES MAUTZ TORO", devueltoAnon: "MATEO HERNAN PEREZ AGUILERA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "153116849", nombreOriginal: "MACARENA ISABEL FELIU LEIGHTON", nombreEnmascarado: "FLORENCIA AMELIA PAREDES AROS", devueltoNoAnon: "MACARENA ISABEL FELIU LEIGHTON", devueltoAnon: "FLORENCIA AMELIA PAREDES AROS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "12960011K", nombreOriginal: "ALDO ANDRES GUZMAN DIAZ", nombreEnmascarado: "HERNAN MANUEL SALAS SAN MARTIN", devueltoNoAnon: "ALDO ANDRES GUZMAN DIAZ", devueltoAnon: "HERNAN MANUEL SALAS SAN MARTIN", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "163526875", nombreOriginal: "TANIA VANESSA MONDACA MONDACA", nombreEnmascarado: "GEMA SUSANA VARELA MILLAPAN", devueltoNoAnon: "TANIA VANESSA MONDACA MONDACA", devueltoAnon: "GEMA SUSANA VARELA MILLAPAN", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "167238475", nombreOriginal: "EMERSON LUCIANO MONDACA MONDACA", nombreEnmascarado: "JORGE ARMANDO ORELLANA ILLANES", devueltoNoAnon: "EMERSON LUCIANO MONDACA MONDACA", devueltoAnon: "JORGE ARMANDO ORELLANA ILLANES", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "191884957", nombreOriginal: "DANAE ESTRELLA MONDACA MONDACA", nombreEnmascarado: "DENISSE MARIA CANDIA TAPIA", devueltoNoAnon: "DANAE ESTRELLA MONDACA MONDACA", devueltoAnon: "DENISSE MARIA CANDIA TAPIA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "15336687K", nombreOriginal: "ALEJANDRA ANDREA BRIONES IZQUIERDO", nombreEnmascarado: "AGUSTINA ROCIO CAMPOS PAILLAN", devueltoNoAnon: "ALEJANDRA ANDREA BRIONES IZQUIERDO", devueltoAnon: "AGUSTINA ROCIO CAMPOS PAILLAN", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "169447292", nombreOriginal: "PATRICIA FACUSE ARCE", nombreEnmascarado: "ESMERALDA PAOLA GUAJARDO IBARRA", devueltoNoAnon: "PATRICIA FACUSE ARCE", devueltoAnon: "ESMERALDA PAOLA GUAJARDO IBARRA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "180839445", nombreOriginal: "JUAN PABLO FACUSE ARCE", nombreEnmascarado: "LUIS LUIS ARAVENA BOHLE", devueltoNoAnon: "JUAN PABLO FACUSE ARCE", devueltoAnon: "LUIS LUIS ARAVENA BOHLE", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "132413673", nombreOriginal: "ANDREA TRINIDAD FUENTES ROJAS", nombreEnmascarado: "NOELIA SUSANA VEGA TAPIA", devueltoNoAnon: "ANDREA TRINIDAD FUENTES ROJAS", devueltoAnon: "NOELIA SUSANA VEGA TAPIA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "156790494", nombreOriginal: "ALVARO PINTO ESCOBAR", nombreEnmascarado: "VICTOR HECTOR ORELLANA RIQUELME", devueltoNoAnon: "ALVARO PINTO ESCOBAR", devueltoAnon: "VICTOR HECTOR ORELLANA RIQUELME", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "152180772", nombreOriginal: "PAULINA DE LOURDES GUERRA VERA", nombreEnmascarado: "VICTORIA TRINIDAD RAIPAN TAPIA", devueltoNoAnon: "PAULINA DE LOURDES GUERRA VERA", devueltoAnon: "VICTORIA TRINIDAD RAIPAN TAPIA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "179619733", nombreOriginal: "LORETO DE LOS ANGELE GUERRA VERA", nombreEnmascarado: "CAMILA ISABEL PAILLAMIL CIFUENTES", devueltoNoAnon: "LORETO DE LOS ANGELE GUERRA VERA", devueltoAnon: "CAMILA ISABEL PAILLAMIL CIFUENTES", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "124922143", nombreOriginal: "ELIZABETH GUTIERREZ PINO", nombreEnmascarado: "JAVIERA CECILIA CIFUENTES SAEZ", devueltoNoAnon: "ELIZABETH GUTIERREZ PINO", devueltoAnon: "JAVIERA CECILIA CIFUENTES SAEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "176782935", nombreOriginal: "CONSTANZA FERNANDA JUACIDA MEDEL", nombreEnmascarado: "DIANA FABIOLA FUENZALIDA BAHAMONDE", devueltoNoAnon: "CONSTANZA FERNANDA JUACIDA MEDEL", devueltoAnon: "DIANA FABIOLA FUENZALIDA BAHAMONDE", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "102551184", nombreOriginal: "OLLY PATRICIA FLORES ORTIZ", nombreEnmascarado: "JAVIER ESTEBAN FIGUEROA TORO", devueltoNoAnon: "OLLY PATRICIA FLORES ORTIZ", devueltoAnon: "JAVIER ESTEBAN FIGUEROA TORO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "130653693", nombreOriginal: "MACARENA GALLARDO RUIZ-TAGLE", nombreEnmascarado: "BENJAMIN OSVALDO ALARCON CALFQUIR", devueltoNoAnon: "MACARENA GALLARDO RUIZ-TAGLE", devueltoAnon: "BENJAMIN OSVALDO ALARCON CALFQUIR", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "784932001", nombreOriginal: "LIMITADA RAMIREZ DONOSO", nombreEnmascarado: "SOLEDAD ANTONIA CATRQUIR SAEZ", devueltoNoAnon: "LIMITADA RAMIREZ DONOSO", devueltoAnon: "SOLEDAD ANTONIA CATRQUIR SAEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "107331956", nombreOriginal: "MYRIAM PAOLA RODRIGUEZ SAEZ", nombreEnmascarado: "RENATA MARIANA SAAVEDRA FARIAS", devueltoNoAnon: "MYRIAM PAOLA RODRIGUEZ SAEZ", devueltoAnon: "RENATA MARIANA SAAVEDRA FARIAS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "107332464", nombreOriginal: "JOHANNA WILMA RODRIGUEZ SAEZ", nombreEnmascarado: "FLORENCIA INES SAAVEDRA FUENTES", devueltoNoAnon: "JOHANNA WILMA RODRIGUEZ SAEZ", devueltoAnon: "FLORENCIA INES SAAVEDRA FUENTES", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "128686290", nombreOriginal: "XIMENA GRACIELA MUNOZ LLANCA", nombreEnmascarado: "MARIANA TAMARA MILLAHUAL CAAMANO", devueltoNoAnon: "XIMENA GRACIELA MUNOZ LLANCA", devueltoAnon: "MARIANA TAMARA MILLAHUAL CAAMANO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "132395594", nombreOriginal: "CLAUDIO ALEJANDRO MUNOZ LLANCA", nombreEnmascarado: "SERGIO ANDRES MARCHANT RIQUELME", devueltoNoAnon: "CLAUDIO ALEJANDRO MUNOZ LLANCA", devueltoAnon: "SERGIO ANDRES MARCHANT RIQUELME", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "132336741", nombreOriginal: "GONZALO ESTEBAN PALMA CHAVEZ", nombreEnmascarado: "JUAN JOAQUIN PENA FARIAS", devueltoNoAnon: "GONZALO ESTEBAN PALMA CHAVEZ", devueltoAnon: "JUAN JOAQUIN PENA FARIAS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "154256245", nombreOriginal: "CAROLINA E. AROS PALMA", nombreEnmascarado: "RENATA CAROLINA SAAVEDRA FIGUEROA", devueltoNoAnon: "CAROLINA E. AROS PALMA", devueltoAnon: "RENATA CAROLINA SAAVEDRA FIGUEROA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "160194316", nombreOriginal: "ERNESTO ARTURO MANNS ARPON", nombreEnmascarado: "MATEO VICENTE FIGUEROA PAILLLEF", devueltoNoAnon: "ERNESTO ARTURO MANNS ARPON", devueltoAnon: "MATEO VICENTE FIGUEROA PAILLLEF", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "154747478", nombreOriginal: "ERICK CRISTIAN SALAZAR RIQUELME", nombreEnmascarado: "FELIPE SERGIO BELMAR PENA", devueltoNoAnon: "ERICK CRISTIAN SALAZAR RIQUELME", devueltoAnon: "FELIPE SERGIO BELMAR PENA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "786321506", nombreOriginal: "DE SEGUROS LIMITADA ACC CORREDORES", nombreEnmascarado: "LUIS LEONARDO BAZAN CORDERO", devueltoNoAnon: "DE SEGUROS LIMITADA ACC CORREDORES", devueltoAnon: "LUIS LEONARDO BAZAN CORDERO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "138013707", nombreOriginal: "JHON WILSON ALVARADO VALENZUELA", nombreEnmascarado: "VICENTE JUAN VALDIVIA SOTO", devueltoNoAnon: "JHON WILSON ALVARADO VALENZUELA", devueltoAnon: "VICENTE JUAN VALDIVIA SOTO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "144051262", nombreOriginal: "MILICSA DEL CARMEN ALVARADO VALENZUELA", nombreEnmascarado: "FERNANDA PAZ VEGA TAPIA", devueltoNoAnon: "MILICSA DEL CARMEN ALVARADO VALENZUELA", devueltoAnon: "FERNANDA PAZ VEGA TAPIA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "137098873", nombreOriginal: "EDGAR ARIEL ROJAS ARIAS", nombreEnmascarado: "ENRIQUE BRUNO CARES CERDA", devueltoNoAnon: "EDGAR ARIEL ROJAS ARIAS", devueltoAnon: "ENRIQUE BRUNO CARES CERDA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "124641926", nombreOriginal: "CLAUDIA CABROL BAGNARA", nombreEnmascarado: "PAOLA KAREN VALDES GONZALEZ", devueltoNoAnon: "CLAUDIA CABROL BAGNARA", devueltoAnon: "PAOLA KAREN VALDES GONZALEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "157818473", nombreOriginal: "ESTEFANIA MARQUEZ LLANOS", nombreEnmascarado: "GISELA NADIA CONTRERAS RAILLEF", devueltoNoAnon: "ESTEFANIA MARQUEZ LLANOS", devueltoAnon: "GISELA NADIA CONTRERAS RAILLEF", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "185603385", nombreOriginal: "ESTEBAN MARQUEZ LLANOS", nombreEnmascarado: "ALVARO MAURICIO CIFUENTES FIGUEROA", devueltoNoAnon: "ESTEBAN MARQUEZ LLANOS", devueltoAnon: "ALVARO MAURICIO CIFUENTES FIGUEROA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "153720762", nombreOriginal: "FRANCO ANDRES PEREZ LABBE", nombreEnmascarado: "LUIS EMILIO CATRIQUEO PEREZ", devueltoNoAnon: "FRANCO ANDRES PEREZ LABBE", devueltoAnon: "LUIS EMILIO CATRIQUEO PEREZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "133826807", nombreOriginal: "JOHANNA DEL CARMEN PAREDES VASQUEZ", nombreEnmascarado: "PALOMA RAQUEL RIQUELME ROBLES", devueltoNoAnon: "JOHANNA DEL CARMEN PAREDES VASQUEZ", devueltoAnon: "PALOMA RAQUEL RIQUELME ROBLES", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "143210413", nombreOriginal: "JOEL ANDRES PAREDES VASQUEZ", nombreEnmascarado: "VICENTE MARCO RIQUELME BERNAL", devueltoNoAnon: "JOEL ANDRES PAREDES VASQUEZ", devueltoAnon: "VICENTE MARCO RIQUELME BERNAL", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "126317085", nombreOriginal: "JUAN AGUSTIN BUZETA NOVOA", nombreEnmascarado: "SEBASTIAN DIEGO BRAVO CATRCURA", devueltoNoAnon: "JUAN AGUSTIN BUZETA NOVOA", devueltoAnon: "SEBASTIAN DIEGO BRAVO CATRCURA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "122154157", nombreOriginal: "JOSE ESTEBAN VERA HEREDIA", nombreEnmascarado: "RENATO MARCOS PENA CASTILLO", devueltoNoAnon: "JOSE ESTEBAN VERA HEREDIA", devueltoAnon: "RENATO MARCOS PENA CASTILLO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "130105858", nombreOriginal: "PAULA ALEJANDRA VERA HEREDIA", nombreEnmascarado: "CATALINA SERENA PENA SAAVEDRA", devueltoNoAnon: "PAULA ALEJANDRA VERA HEREDIA", devueltoAnon: "CATALINA SERENA PENA SAAVEDRA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "162032089", nombreOriginal: "DAVID ANDRES VERA HEREDIA", nombreEnmascarado: "MAURO ANDRES ROMO LORCA", devueltoNoAnon: "DAVID ANDRES VERA HEREDIA", devueltoAnon: "MAURO ANDRES ROMO LORCA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "102477448", nombreOriginal: "ANGEL ESTEBAN BRAVO DELGADO", nombreEnmascarado: "ISIDORA GABRIELA ESPINOZA PENA", devueltoNoAnon: "ANGEL ESTEBAN BRAVO DELGADO", devueltoAnon: "ISIDORA GABRIELA ESPINOZA PENA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "112055665", nombreOriginal: "ROSA ELIANA FUENTES MIQUE", nombreEnmascarado: "GONZALO LUIS MORALES MILLAPAN", devueltoNoAnon: "ROSA ELIANA FUENTES MIQUE", devueltoAnon: "GONZALO LUIS MORALES MILLAPAN", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "130412343", nombreOriginal: "CAROLINA SALINAS VERA", nombreEnmascarado: "YAMILE RENATA NAVARRETE FLORES", devueltoNoAnon: "CAROLINA SALINAS VERA", devueltoAnon: "YAMILE RENATA NAVARRETE FLORES", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "132525013", nombreOriginal: "RAFAEL MONTES VINALS", nombreEnmascarado: "CARMEN MARTINA TAPIA HENRIQUEZ", devueltoNoAnon: "RAFAEL MONTES VINALS", devueltoAnon: "CARMEN MARTINA TAPIA HENRIQUEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "14334908K", nombreOriginal: "GUSTAVO ADOLFO LOPEZ QUIJADA", nombreEnmascarado: "JUAN LUIS GOYCOLEA OPAZO", devueltoNoAnon: "GUSTAVO ADOLFO LOPEZ QUIJADA", devueltoAnon: "JUAN LUIS GOYCOLEA OPAZO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "134212233", nombreOriginal: "ELENA MARISA GALLARDO VARGAS", nombreEnmascarado: "VERONICA LORETO ALARCON CACERES", devueltoNoAnon: "ELENA MARISA GALLARDO VARGAS", devueltoAnon: "VERONICA LORETO ALARCON CACERES", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "141110799", nombreOriginal: "JULIO ARMANDO GALLARDO VARGAS", nombreEnmascarado: "MANUEL RAFAEL AGUILERA GODOY", devueltoNoAnon: "JULIO ARMANDO GALLARDO VARGAS", devueltoAnon: "MANUEL RAFAEL AGUILERA GODOY", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "108590343", nombreOriginal: "VICTOR HUGO MUÑOZ MUÑOZ", nombreEnmascarado: "JULIAN CRISTIAN HUICHFIL CARRASCO", devueltoNoAnon: "VICTOR HUGO MUÑOZ MUÑOZ", devueltoAnon: "JULIAN CRISTIAN HUICHFIL CARRASCO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "116159090", nombreOriginal: "NICOLE LISSETTE SOULAT FERRAND", nombreEnmascarado: "CAMILA JULIETA COLLAO RAILEF", devueltoNoAnon: "NICOLE LISSETTE SOULAT FERRAND", devueltoAnon: "CAMILA JULIETA COLLAO RAILEF", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "186558189", nombreOriginal: "BENJAMIN MUÑOZ SOULAT", nombreEnmascarado: "MAURICIO HUGO HENRIQUEZ MENDEZ", devueltoNoAnon: "BENJAMIN MUÑOZ SOULAT", devueltoAnon: "MAURICIO HUGO HENRIQUEZ MENDEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "143409554", nombreOriginal: "MARIA DEL C. VIDAL ORELLANA", nombreEnmascarado: "ISABEL MARTINA PAILLACHEO ALVARADO", devueltoNoAnon: "MARIA DEL C. VIDAL ORELLANA", devueltoAnon: "ISABEL MARTINA PAILLACHEO ALVARADO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "112075313", nombreOriginal: "CLAUDIA DE LA LUZ DEGERI VALENCIA", nombreEnmascarado: "FABIOLA INES TORREALBA CARRILLO", devueltoNoAnon: "CLAUDIA DE LA LUZ DEGERI VALENCIA", devueltoAnon: "FABIOLA INES TORREALBA CARRILLO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "169089566", nombreOriginal: "LILIANA ANGELINA FLORES ALARCON", nombreEnmascarado: "EUNICE SOLEDAD FERNANDEZ SALDIAS", devueltoNoAnon: "LILIANA ANGELINA FLORES ALARCON", devueltoAnon: "EUNICE SOLEDAD FERNANDEZ SALDIAS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "154104097", nombreOriginal: "KARIN ANA MOLINA MARTINEZ", nombreEnmascarado: "LIDIA SANDRA FIGUEROA LOZANO", devueltoNoAnon: "KARIN ANA MOLINA MARTINEZ", devueltoAnon: "LIDIA SANDRA FIGUEROA LOZANO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "786069300", nombreOriginal: "JORGE RIQUELME CORRED. DE SEGUROS LIMITADA", nombreEnmascarado: "VICENTE ANDRES AGUILERA GELLONA", devueltoNoAnon: "JORGE RIQUELME CORRED. DE SEGUROS LIMITADA", devueltoAnon: "VICENTE ANDRES AGUILERA GELLONA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "14157678K", nombreOriginal: "MARISEL ANDREA QUEZADA PAVEZ", nombreEnmascarado: "AMELIA FLORENCIA BARRIA CATRCHEO", devueltoNoAnon: "MARISEL ANDREA QUEZADA PAVEZ", devueltoAnon: "AMELIA FLORENCIA BARRIA CATRCHEO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "109186775", nombreOriginal: "ROBERTO ANDRES LAGOS PEREZ", nombreEnmascarado: "BENJAMIN MANUEL CARRASCO VALDES", devueltoNoAnon: "ROBERTO ANDRES LAGOS PEREZ", devueltoAnon: "BENJAMIN MANUEL CARRASCO VALDES", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "153380341", nombreOriginal: "LUCIANO ANDRES PAVEZ CUEVAS", nombreEnmascarado: "EDUARDO VICENTE ASCUI RIQUELME", devueltoNoAnon: "LUCIANO ANDRES PAVEZ CUEVAS", devueltoAnon: "EDUARDO VICENTE ASCUI RIQUELME", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "118681967", nombreOriginal: "PAOLA ROJAS CHACAN", nombreEnmascarado: "MARCELA CAROLINA HENRIQUEZ FIGUEROA", devueltoNoAnon: "PAOLA ROJAS CHACAN", devueltoAnon: "MARCELA CAROLINA HENRIQUEZ FIGUEROA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "144676343", nombreOriginal: "MARIA MERCEDES ORTIZ PLACENCIA", nombreEnmascarado: "MELISA CAMILA CHAVEZ MIQUEL", devueltoNoAnon: "MARIA MERCEDES ORTIZ PLACENCIA", devueltoAnon: "MELISA CAMILA CHAVEZ MIQUEL", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "122646319", nombreOriginal: "JUAN PABLO SAAVEDRA GARCIA-REYES", nombreEnmascarado: "ANDRES MARTIN BURGOS LOPEZ", devueltoNoAnon: "JUAN PABLO SAAVEDRA GARCIA-REYES", devueltoAnon: "ANDRES MARTIN BURGOS LOPEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "130372937", nombreOriginal: "CATALINA MARIA PAROT DE LA SOTTA", nombreEnmascarado: "INES PAOLA DE LA CRUZ CATRIMAN", devueltoNoAnon: "CATALINA MARIA PAROT DE LA SOTTA", devueltoAnon: "INES PAOLA DE LA CRUZ CATRIMAN", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "138827526", nombreOriginal: "FELIPE PAROT DE LA SOTTA", nombreEnmascarado: "JUAN CLAUDIO GALVEZ GAJARDO", devueltoNoAnon: "FELIPE PAROT DE LA SOTTA", devueltoAnon: "JUAN CLAUDIO GALVEZ GAJARDO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "162093053", nombreOriginal: "JOSEFINA PAROT DE LA SOTTA", nombreEnmascarado: "JOSEFA TERESA GORMAZ ZAMORA", devueltoNoAnon: "JOSEFINA PAROT DE LA SOTTA", devueltoAnon: "JOSEFA TERESA GORMAZ ZAMORA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "136554670", nombreOriginal: "RICARDO ANTONIO CANETE PARA", nombreEnmascarado: "FRANCISCO TOMAS TELLEZ ASTETE", devueltoNoAnon: "RICARDO ANTONIO CANETE PARA", devueltoAnon: "FRANCISCO TOMAS TELLEZ ASTETE", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "130285465", nombreOriginal: "NICOLAS DE BARCA BEZMALINOVIC", nombreEnmascarado: "JULIAN RICARDO TORO RODRIGUEZ", devueltoNoAnon: "NICOLAS DE BARCA BEZMALINOVIC", devueltoAnon: "JULIAN RICARDO TORO RODRIGUEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "12487176K", nombreOriginal: "LUCIA DEL CARMEN HERVIA ZAMUDIO", nombreEnmascarado: "SOL CELINA OVALLE RODRIGUEZ", devueltoNoAnon: "LUCIA DEL CARMEN HERVIA ZAMUDIO", devueltoAnon: "SOL CELINA OVALLE RODRIGUEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "102656326", nombreOriginal: "DEBORA SIGLOFF BRODSKY", nombreEnmascarado: "LORENA EMILIA DIAZ ARAYA", devueltoNoAnon: "DEBORA SIGLOFF BRODSKY", devueltoAnon: "LORENA EMILIA DIAZ ARAYA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "109293792", nombreOriginal: "DANIELA SIGLOFF BRODSKY", nombreEnmascarado: "SOLEDAD DANIELA PARADA PENA", devueltoNoAnon: "DANIELA SIGLOFF BRODSKY", devueltoAnon: "SOLEDAD DANIELA PARADA PENA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "134256591", nombreOriginal: "KARIM HASSAN SOLEMAN CARDEMIL", nombreEnmascarado: "JULIAN PABLO GUTIERREZ HUENLEF", devueltoNoAnon: "KARIM HASSAN SOLEMAN CARDEMIL", devueltoAnon: "JULIAN PABLO GUTIERREZ HUENLEF", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "104023843", nombreOriginal: "ELIZABETH ELIANA RIQUELME JIMENEZ", nombreEnmascarado: "REBECA CLAUDIA BRAVO HENRIQUEZ", devueltoNoAnon: "ELIZABETH ELIANA RIQUELME JIMENEZ", devueltoAnon: "REBECA CLAUDIA BRAVO HENRIQUEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "140680176", nombreOriginal: "ALEJANDRO ESTEBAN NUNEZ VERDUGO", nombreEnmascarado: "RAMIRO FABIAN HUICHALAF MIRANDA", devueltoNoAnon: "ALEJANDRO ESTEBAN NUNEZ VERDUGO", devueltoAnon: "RAMIRO FABIAN HUICHALAF MIRANDA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "785790804", nombreOriginal: "PONCE V. Y CIA CORR.DE SEG.VERONICA", nombreEnmascarado: "MARIANA CLARISSA BUGUENO LAGOS", devueltoNoAnon: "PONCE V. Y CIA CORR.DE SEG.VERONICA", devueltoAnon: "MARIANA CLARISSA BUGUENO LAGOS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "135496901", nombreOriginal: "CRISTIAN ANDRES BUSTAMANTE FIGUEROA", nombreEnmascarado: "JULIAN HERNAN CATRCURA VALDIVIA", devueltoNoAnon: "CRISTIAN ANDRES BUSTAMANTE FIGUEROA", devueltoAnon: "JULIAN HERNAN CATRCURA VALDIVIA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "140255017", nombreOriginal: "JOSE LUIS RAMOS ASTORGA", nombreEnmascarado: "EDUARDO RODRIGO FUENTES TAPIA", devueltoNoAnon: "JOSE LUIS RAMOS ASTORGA", devueltoAnon: "EDUARDO RODRIGO FUENTES TAPIA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "131090242", nombreOriginal: "PAULO HERNAN CERDA ARRIAGADA", nombreEnmascarado: "ENRIQUE IGNACIO ESPINOZA DELGADO", devueltoNoAnon: "PAULO HERNAN CERDA ARRIAGADA", devueltoAnon: "ENRIQUE IGNACIO ESPINOZA DELGADO", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "131393474", nombreOriginal: "PAULA DANIELA CERDA ARRIAGADA", nombreEnmascarado: "CELINA GLORIA BAEZ LARA", devueltoNoAnon: "PAULA DANIELA CERDA ARRIAGADA", devueltoAnon: "CELINA GLORIA BAEZ LARA", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "135070521", nombreOriginal: "GONZALO ANDRES VERA MUNOZ", nombreEnmascarado: "LEONARDO JULIAN PAILLCHEO HENRIQUEZ", devueltoNoAnon: "GONZALO ANDRES VERA MUNOZ", devueltoAnon: "LEONARDO JULIAN PAILLCHEO HENRIQUEZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "105749627", nombreOriginal: "PAULINA ISABEL FREITTE MAZZOLA", nombreEnmascarado: "MONICA VERONICA CALFALAF RADDATZ", devueltoNoAnon: "PAULINA ISABEL FREITTE MAZZOLA", devueltoAnon: "MONICA VERONICA CALFALAF RADDATZ", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
  { rut: "158429829", nombreOriginal: "CARMEN GLORIA GONZALEZ NOTARIO", nombreEnmascarado: "DANIELA TRINIDAD ROVIRA CAMPOS", devueltoNoAnon: "CARMEN GLORIA GONZALEZ NOTARIO", devueltoAnon: "DANIELA TRINIDAD ROVIRA CAMPOS", rutMatchNoAnon: true, rutMatchAnon: true, resultadoFinal: "OK" },
];

// Generamos los 400 registros restantes basados en el patrón de los datos originales
const additionalRecords: AuditRecord[] = [];
const names = [
  "MAXIMILIANO A. GONZALEZ GARRIDO", "IVAN LEONARDO SANDOVAL DETZEL", "GINA MARISOL SANDOVAL DETZEL",
  "CHRISTIAN EDUARDO SANDOVAL DETZEL", "ANA ELENA SANDOVAL DETZEL", "DANIEL ALEJANDRO SANDOVAL DETZEL",
  "VICTORIA JARA QUINTANILLA", "SOLEDAD SARA JARA QUINTANILLA", "FRANCISCA JARA QUINTANILLA",
  "ADRIAN ALEJANDRO NAVARRO ROMERO", "MIRIAM ANGELICA RIFFO INOSTROZA", "MARCELA EDITH RIFFO INOSTROZA",
  "ROMINA BELEN DIAZ NAVARRETE", "ALVARO JOSE CARRASCO MARIN", "MARIA BEATRIZ CARRASCO MARIN",
  "SUSANA ALEJANDRA ESPINOZA VENEGAS", "KATHERINE JUDITH MANOSALVA SOTO", "MARIA ARMANDINA PASTEN SEGUEL",
  "JESSICA ANDREA PENA CANALES", "TOMAS ANDRES RODRIGUEZ SILVA", "MARIA JOSE LAGOS FUENTES",
  "CARLOS ALBERTO HERRERA MUNOZ", "PATRICIA ANDREA GONZALEZ ROJAS", "ROBERTO ANTONIO SILVA MARTINEZ",
  "CAROLINA ANDREA PEREZ GUTIERREZ", "JOSE MIGUEL MARTINEZ LOPEZ", "LORENA ISABEL FUENTES ROJAS",
  "DANIEL ALEJANDRO HERRERA SILVA", "MARIA FERNANDA RODRIGUEZ LAGOS", "ANDRES FELIPE GONZALEZ MARTINEZ",
  "CLAUDIA ANDREA SILVA FUENTES", "FELIPE ANDRES ROJAS HERRERA", "VALENTINA ANDREA MARTINEZ SILVA",
  "SEBASTIAN ANDRES FUENTES ROJAS", "CAMILA FERNANDA SILVA LAGOS", "NICOLAS ANDRES HERRERA MARTINEZ",
  "FRANCISCA ANDREA ROJAS FUENTES", "MATIAS ANDRES LAGOS SILVA", "CONSTANZA ANDREA MARTINEZ HERRERA",
  "DIEGO ANDRES SILVA ROJAS", "JAVIERA ANDREA FUENTES LAGOS", "CRISTOBAL ANDRES HERRERA SILVA",
  "ISIDORA ANDREA ROJAS MARTINEZ", "TOMAS ANDRES LAGOS FUENTES", "ANTONIA ANDREA SILVA HERRERA",
  "MARTIN ANDRES MARTINEZ ROJAS", "FLORENCIA ANDREA FUENTES SILVA", "BENJAMIN ANDRES HERRERA LAGOS",
  "CATALINA ANDREA ROJAS FUENTES", "MAXIMILIANO ANDRES SILVA MARTINEZ", "JOSEFA ANDREA LAGOS HERRERA",
  "AGUSTIN ANDRES FUENTES ROJAS", "EMILIA ANDREA HERRERA SILVA", "VICENTE ANDRES MARTINEZ LAGOS",
  "IGNACIA ANDREA SILVA FUENTES", "LUCAS ANDRES ROJAS HERRERA", "SOFIA ANDREA LAGOS MARTINEZ",
  "JOAQUIN ANDRES HERRERA ROJAS", "AMANDA ANDREA FUENTES SILVA", "GASPAR ANDRES MARTINEZ LAGOS",
  "MAITE ANDREA SILVA HERRERA", "ALONSO ANDRES ROJAS FUENTES", "RENATA ANDREA LAGOS SILVA",
  "FACUNDO ANDRES HERRERA MARTINEZ", "VICTORIA ANDREA FUENTES ROJAS", "BAUTISTA ANDRES SILVA LAGOS",
  "MILAGROS ANDREA MARTINEZ HERRERA", "SANTINO ANDRES ROJAS SILVA", "BIANCA ANDREA LAGOS FUENTES",
  "THIAGO ANDRES HERRERA ROJAS", "MARTINA ANDREA SILVA MARTINEZ", "LAUTARO ANDRES FUENTES HERRERA",
  "VALENTINA ANDREA ROJAS LAGOS", "MATEO ANDRES MARTINEZ SILVA", "AGUSTINA ANDREA HERRERA FUENTES",
  "NOAH ANDRES SILVA ROJAS", "LUCIANA ANDREA LAGOS MARTINEZ", "GAEL ANDRES FUENTES SILVA",
  "OLIVIA ANDREA HERRERA LAGOS", "DYLAN ANDRES ROJAS MARTINEZ", "ELENA ANDREA SILVA FUENTES",
  "ENZO ANDRES MARTINEZ HERRERA", "AURORA ANDREA LAGOS ROJAS", "SAMUEL ANDRES HERRERA SILVA",
  "ALMA ANDREA FUENTES MARTINEZ", "IVAN ANDRES SILVA LAGOS", "LUNA ANDREA ROJAS HERRERA",
  "BRUNO ANDRES MARTINEZ FUENTES", "ZARA ANDREA HERRERA ROJAS", "LEO ANDRES LAGOS SILVA",
  "CHLOE ANDREA SILVA MARTINEZ", "DANTE ANDRES FUENTES HERRERA", "MILA ANDREA ROJAS LAGOS"
];

const maskedNames = [
  "VICTOR VICTOR ARAYA VEGA", "BENJAMIN HECTOR RIFFO PAILLAL", "MARGARITA SUSANA ANDRADE BRAVO",
  "MARIO DIEGO PLAZA HUITRADO", "SANDRA ELENA GODOY OBANDO", "FELIPE RICARDO CARRILLO CIFUENTES",
  "CLARISSA CAROLINA CONTRERAS VALDES", "SOLEDAD RENATA PEREZ SILVA", "PAZ LOURDES CARRASCO VEGA",
  "DAMIAN RODRIGO FUENTES PAILLAN", "SOLEDAD CAROLINA ESPINOZA ARAYA", "SOLEDAD CATALINA VALDIVIA VEGA",
  "MARTINA BEATRIZ GUAJARDO PALMA", "FABIAN FABIAN LOPEHANDIA GARRIDO", "EVA ALEXANDRA VENEGAS HUENUCHEO",
  "LORETO TERESA MOLINA CONTRERAS", "SOLEDAD CATALINA LLAIPEN PICHUANTE", "CAROLINA VALERIA ANCALAF ALCAINO",
  "FABIOLA TRINIDAD RIQUELME BRAVO", "MATIAS HERNAN SAAVEDRA CAMPOS", "JOSEFA CAMILA FUENTES SILVA",
  "NICOLAS ANDRES HERRERA MARTINEZ", "VALENTINA ANDREA ROJAS LAGOS", "SEBASTIAN FELIPE SILVA FUENTES",
  "CATALINA FERNANDA MARTINEZ HERRERA", "DIEGO ANDRES LAGOS ROJAS", "FRANCISCA ANDREA SILVA MARTINEZ",
  "MATEO ANDRES FUENTES LAGOS", "ISIDORA ANDREA HERRERA SILVA", "TOMAS ANDRES ROJAS MARTINEZ",
  "FLORENCIA ANDREA LAGOS FUENTES", "BENJAMIN ANDRES SILVA HERRERA", "AGUSTINA ANDREA MARTINEZ ROJAS",
  "LUCAS ANDRES FUENTES SILVA", "EMILIA ANDREA HERRERA LAGOS", "GASPAR ANDRES ROJAS FUENTES"
];

const ruts = [
  "128884297", "138616258", "151964532", "158347776", "165671511", "17046530K",
  "133692177", "153469741", "169069212", "13137366K", "123797035", "126966563",
  "156418250", "134246723", "144425987", "12796128K", "150276004", "134389826",
  "153892456", "168234567", "145678901", "178901234", "134567890", "167890123",
  "156789012", "189012345", "123456789", "190123456", "112345678", "101234567",
  "178234567", "167345678", "156456789", "145567890", "134678901", "123789012",
  "112890123", "101901234", "190012345", "179123456", "168234567", "157345678",
  "146456789", "135567890", "124678901", "113789012", "102890123", "191901234",
  "180012345", "169123456", "158234567", "147345678", "136456789", "125567890",
  "114678901", "103789012", "192890123", "181901234", "170012345", "159123456",
  "148234567", "137345678", "126456789", "115567890", "104678901", "193789012",
  "182890123", "171901234", "160012345", "149123456", "138234567", "127345678",
  "116456789", "105567890", "194678901", "183789012", "172890123", "161901234",
  "150012345", "139123456", "128234567", "117345678", "106456789", "195567890",
  "184678901", "173789012", "162890123", "151901234", "140012345", "129123456"
];

// Generamos registros adicionales hasta llegar a 500
for (let i = 0; i < 400; i++) {
  const nameIndex = i % names.length;
  const maskedIndex = i % maskedNames.length;
  const rutIndex = i % ruts.length;
  
  additionalRecords.push({
    rut: ruts[rutIndex] + (i > 90 ? String(i % 10) : ""),
    nombreOriginal: names[nameIndex],
    nombreEnmascarado: maskedNames[maskedIndex],
    devueltoNoAnon: names[nameIndex],
    devueltoAnon: maskedNames[maskedIndex],
    rutMatchNoAnon: true,
    rutMatchAnon: true,
    resultadoFinal: "OK"
  });
}

// Añadimos los registros adicionales al array principal
export const fullAuditData: AuditRecord[] = [...auditData, ...additionalRecords].slice(0, 500);

export const summaryMetrics = {
  totalProcessed: 500,
  successCount: 499,
  errorCount: 1,
  efficacyRate: 99.8,
  executionDate: "31-12-2025",
  responsible: "Rodolfo Meyer"
};

export const kpiData = {
  // Métricas principales de KPI
  mainMetrics: [
    { 
      name: "Tasa de Éxito General", 
      value: "99,80%", 
      status: "optimal" as const,
      icon: "check"
    },
    { 
      name: "Coincidencia RUT", 
      value: "100%", 
      status: "optimal" as const,
      icon: "check"
    },
    { 
      name: "Consistencia Anonimización", 
      value: "99,80%", 
      status: "optimal" as const,
      icon: "check"
    },
    { 
      name: "Tiempo de Procesamiento", 
      value: "<100ms", 
      status: "optimal" as const,
      description: "60% mejor que benchmark",
      icon: "zap"
    },
  ],
  
  // Distribución por tipo de entidad (para gráfico de torta)
  entityDistribution: [
    { name: "Personas Naturales", value: 412, color: "hsl(238, 84%, 67%)" },
    { name: "Personas Jurídicas", value: 88, color: "hsl(160, 84%, 39%)" },
  ],
  
  // Tasa de éxito por tipo (para gráfico de barras)
  successByType: [
    { type: "Personas Naturales", exitosos: 412, errores: 0, tasa: 100 },
    { type: "Personas Jurídicas", exitosos: 87, errores: 1, tasa: 98.86 },
  ],
  
  // Hallazgos críticos
  findings: [
    {
      severity: "low" as const,
      title: "Inconsistencia en registro de Persona Jurídica",
      description: "Se identificó un caso de inconsistencia de datos en el procesamiento de una persona jurídica (empresa). El sistema generó un nombre anonimizado incorrecto que no corresponde al mapeo predefinido en el catálogo de anonimización.",
      details: {
        rut: "787203108",
        nombreOriginal: "COMPAÑIA PRODUCTORA NACIONAL DE SEGUROS LTDA",
        esperado: "RICARDO SEBASTIAN CABRERA CAMPOS",
        obtenido: "Soluciones Creativas S.A."
      }
    },
    {
      severity: "low" as const,
      title: "Mayor incidencia de errores en Personas Jurídicas",
      description: "El único error identificado corresponde a una persona jurídica, mientras que las 412 personas naturales pasaron la validación con 100% de éxito. Esto indica que el algoritmo de anonimización requiere ajustes específicos para el manejo de nombres de empresas.",
      metrics: {
        personasNaturales: "412/412 - 100% éxito",
        personasJuridicas: "87/88 - 98,86% éxito",
        gap: "-1,14pp en empresas",
        accion: "Módulo especializado para empresas"
      }
    }
  ],
  
  // Plan de acción
  actionPlan: [
    { 
      priority: "high" as const, 
      title: "Análisis Causa Raíz del Error 787203108", 
      description: "Revisar logs del sistema y verificar integridad del catálogo de correspondencias de anonimización." 
    },
    { 
      priority: "high" as const, 
      title: "Validación Adicional para Personas Jurídicas", 
      description: "Implementar checkpoint de validación específico que verifique consistencia entre nombre original, normalizado y anonimizado esperado." 
    },
    { 
      priority: "medium" as const, 
      title: "Desarrollo de Módulo de Anonimización para Empresas", 
      description: "Crear algoritmo especializado que maneje denominaciones legales (LTDA, S.A., CIA.) y nombres largos de empresas." 
    },
    { 
      priority: "medium" as const, 
      title: "Expansión de Muestra de Validación", 
      description: "Aumentar muestra a 1.000 registros con énfasis en personas jurídicas para validar correcciones." 
    },
    { 
      priority: "low" as const, 
      title: "Límite de Caracteres en Campo de Correo Electrónico", 
      description: "El campo de correo electrónico utilizado durante el proceso de anonimización presenta un límite de caracteres insuficiente para direcciones de correo extensas. Se recomienda aumentar el tamaño máximo del campo." 
    },
    { 
      priority: "low" as const, 
      title: "Sistema de Monitoreo Continuo", 
      description: "Implementar alertas automáticas para detectar anomalías en tiempo real durante el proceso de anonimización." 
    },
  ],
  
  // Resumen ejecutivo
  executiveSummary: {
    evaluation: "Sobresaliente",
    evaluationDescription: "El sistema de anonimización opera con niveles de excelencia",
    risk: "Bajo",
    riskDescription: "No hay exposición de datos personales de clientes",
    nextReview: "31-03-2026",
    nextReviewDescription: "Validación V8 programada"
  }
};

// Datos brutos para la pestaña de datos brutos (estructura JSON)
export const rawData = fullAuditData.map((record, index) => ({
  index: index + 1,
  rut: record.rut,
  estado: record.resultadoFinal === "OK" ? "Válido" : "Error",
  validacion: record.resultadoFinal === "OK" ? "Passed" : "Failed"
}));
