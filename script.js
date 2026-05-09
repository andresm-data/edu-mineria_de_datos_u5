const enterpriseData = [
  {
    tool: "rapidminer",
    name: "RapidMiner",
    score: "Eficiencia destacada: prototipado y flujos visuales",
    summary: "Es especialmente eficiente cuando la prioridad es integrar datos, probar modelos y presentar resultados sin construir un stack de programación desde cero.",
    companies: [
      { name: "BMW Group", note: "Uso reportado en iniciativas analíticas y de optimización de procesos con apoyo de analítica visual." },
      { name: "Sanofi", note: "Aplicaciones analíticas en proyectos de datos y soporte a decisiones en áreas especializadas." },
      { name: "PayPal", note: "Referenciado en contextos de analítica empresarial y aceleración de experimentación de modelos." },
      { name: "Meliá Hotels International", note: "Casos de explotación de datos para mejorar decisiones de negocio y experiencia del cliente." },
      { name: "Altair", note: "Relación tecnológica por integración de capacidades analíticas y flujos de ciencia de datos empresariales." }
    ]
  },
  {
    tool: "weka",
    name: "WEKA",
    score: "Eficiencia destacada: docencia y minería clásica",
    summary: "Su eficiencia es alta para aprendizaje, validación de algoritmos clásicos y experimentos reproducibles en escenarios académicos o de laboratorio.",
    companies: [
      { name: "IBM", note: "Uso documentado en proyectos y publicaciones técnicas vinculadas a pruebas de algoritmos y benchmarking." },
      { name: "Oracle", note: "Referencias en entornos de investigación y evaluación comparativa con técnicas de machine learning." },
      { name: "Boeing", note: "Empleo en estudios aplicados y análisis experimentales en áreas técnicas y predictivas." },
      { name: "Siemens", note: "Uso en proyectos de análisis de datos e investigación aplicada reportados en literatura técnica." },
      { name: "Telefónica", note: "Casos de apoyo a experimentación analítica y clasificación en contextos específicos de datos." }
    ]
  },
  {
    tool: "orange",
    name: "Orange",
    score: "Eficiencia destacada: exploración y visualización",
    summary: "Orange sobresale cuando el objetivo es comprender datos rápidamente, comunicar hallazgos y reducir la barrera de entrada a la analítica.",
    companies: [
      { name: "Novartis", note: "Uso mencionado en talleres, formación y proyectos de visualización de datos en áreas analíticas." },
      { name: "Roche", note: "Aplicaciones en exploración de datos biomédicos y apoyo a análisis interactivos de equipos específicos." },
      { name: "Deloitte", note: "Empleo en actividades de formación, analítica demostrativa y laboratorios de innovación." },
      { name: "Ericsson", note: "Uso reportado en ejercicios de análisis de datos y evaluación visual en contextos técnicos." },
      { name: "Universidad-empresa en salud digital", note: "Orange aparece con frecuencia en proyectos colaborativos de analítica aplicada y educación corporativa." }
    ]
  },
  {
    tool: "knime",
    name: "KNIME",
    score: "Eficiencia destacada: industrialización de workflows",
    summary: "KNIME muestra alta eficiencia en organizaciones que necesitan trazabilidad, integración de múltiples fuentes y reutilización de procesos analíticos.",
    companies: [
      { name: "Lufthansa", note: "Uso reportado en procesos de analítica operacional y optimización de datos." },
      { name: "Johnson & Johnson", note: "Aplicación en workflows analíticos para entornos regulados y procesos reproducibles." },
      { name: "Merck", note: "Empleo en proyectos de ciencia de datos y automatización de flujos en investigación y negocio." },
      { name: "Deloitte", note: "Uso en servicios analíticos y automatización de procesos para clientes y equipos internos." },
      { name: "P&G", note: "Casos ligados a integración de datos y mejora continua mediante flujos analíticos empresariales." }
    ]
  },
  {
    tool: "python",
    name: "Python",
    score: "Eficiencia destacada: flexibilidad y despliegue",
    summary: "Python es el ecosistema más eficiente cuando la organización necesita construir, automatizar y desplegar soluciones de datos a escala.",
    companies: [
      { name: "Netflix", note: "Uso extensivo en machine learning, analítica de comportamiento y automatización de plataformas de datos." },
      { name: "Spotify", note: "Aplicado en recomendación, análisis de usuarios y pipelines de ciencia de datos." },
      { name: "Google", note: "Uso organizacional amplio en analítica, IA, automatización e infraestructura de datos." },
      { name: "Uber", note: "Empleo intensivo en modelos predictivos, experimentación y herramientas internas de análisis." },
      { name: "Airbnb", note: "Uso en analítica de negocio, modelado y sistemas de inferencia para la plataforma." }
    ]
  },
  {
    tool: "r",
    name: "R",
    score: "Eficiencia destacada: estadística y reporting analítico",
    summary: "R es muy eficiente en investigación aplicada, analítica estadística avanzada y comunicación reproducible de resultados.",
    companies: [
      { name: "Facebook Meta", note: "Uso histórico y documentado en experimentación, análisis estadístico y ciencia aplicada." },
      { name: "Google", note: "Empleo en equipos de investigación, análisis y modelado estadístico especializado." },
      { name: "Pfizer", note: "Uso destacado en bioestadística, ensayos y reporting analítico en áreas reguladas." },
      { name: "AstraZeneca", note: "Aplicación en análisis estadístico, investigación clínica y visualización reproducible." },
      { name: "The New York Times", note: "Uso en periodismo de datos, análisis estadístico y producción de visualizaciones explicativas." }
    ]
  }
];

const filterButtons = document.querySelectorAll(".filter-chip");
const toolCards = document.querySelectorAll(".tool-card");
const tableRows = document.querySelectorAll(".comparison-table tbody tr");
const enterpriseList = document.querySelector("#enterpriseList");

function renderEnterpriseCards() {
  enterpriseList.innerHTML = enterpriseData
    .map((entry) => `
      <article class="enterprise-card reveal" data-tool="${entry.tool}">
        <div class="enterprise-header">
          <div>
            <span class="tag">${entry.name}</span>
            <h3>${entry.name}</h3>
            <p>${entry.summary}</p>
          </div>
          <span class="enterprise-score">${entry.score}</span>
        </div>
        <div class="enterprise-body">
          <ul>
            ${entry.companies
              .map(
                (company) => `
                  <li>
                    <strong>${company.name}:</strong>
                    <span>${company.note}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>
      </article>
    `)
    .join("");
}

function applyFilter(tool) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === tool);
  });

  toolCards.forEach((card) => {
    const matches = tool === "all" || card.dataset.tool === tool;
    card.classList.toggle("is-selected", matches && tool !== "all");
    card.classList.toggle("is-dimmed", !matches);
  });

  tableRows.forEach((row) => {
    const matches = tool === "all" || row.dataset.tool === tool;
    row.classList.toggle("is-selected", matches && tool !== "all");
    row.classList.toggle("is-dimmed", !matches);
  });

  document.querySelectorAll(".enterprise-card").forEach((card) => {
    const matches = tool === "all" || card.dataset.tool === tool;
    card.style.display = matches ? "block" : "none";
  });
}

function setRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("section, .tool-card, .analysis-card, .enterprise-card").forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

renderEnterpriseCards();
applyFilter("all");
setRevealObserver();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});