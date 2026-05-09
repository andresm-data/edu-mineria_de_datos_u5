# Minería de datos - Unidad 5

Repositorio orientado a la publicación de una landing estática para análisis comparativo de herramientas de minería de datos, estructurada para despliegue directo en GitHub Pages y consumo local sin dependencias de backend.

## Tabla de contenido

- [Descripción del proyecto](#descripción-del-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)



## Descripción del proyecto

El repositorio contiene una implementación web estática enfocada en la presentación comparativa de herramientas de minería de datos, específicamente WEKA, KNIME, Orange, RapidMiner, Python y R. La solución se diseñó como una landing page técnica para uso académico, con una arquitectura ligera basada en HTML, CSS y JavaScript del lado del cliente.

Desde la perspectiva de flujo de datos, la aplicación opera completamente en el navegador. El documento principal define la estructura semántica y las secciones de navegación; la hoja de estilos establece la identidad visual, la adaptación responsiva y la jerarquía de lectura; el script del cliente encapsula los datos de empresas asociadas a cada herramienta y renderiza dinámicamente los bloques correspondientes en el DOM. Los activos gráficos se sirven desde el directorio local de recursos, sin depender de servicios externos de almacenamiento o procesamiento.

La ausencia de componentes de backend, bases de datos o procesos de compilación permite una superficie operativa mínima y una trazabilidad clara del contenido desplegado. Esta aproximación resulta adecuada para escenarios académicos, documentación comparativa, prototipado de información y publicación en infraestructuras estáticas como GitHub Pages.



## Estructura del proyecto

```bash
.
├── assets/                # Recursos gráficos locales utilizados por la interfaz
│   └── ucatolica.jpg      # Logo institucional
├── index.html             # Documento principal con la estructura de la landing
├── README.md              # Documentación técnica y operativa del repositorio
├── script.js              # Lógica de interacción y renderizado dinámico en cliente
└── styles.css             # Hoja de estilos principal y reglas de responsividad
```



## Instalación

La preparación del entorno es directa debido a que el repositorio no incorpora un proceso de compilación ni gestores de dependencias específicos del proyecto. El despliegue local requiere únicamente un navegador moderno y, de forma opcional, un servidor HTTP liviano para pruebas de navegación equivalentes a un entorno publicado.

Clonación del repositorio desde GitHub:

```bash
git clone git@github.com:andresm-data/edu-mineria_de_datos_u5.git
cd edu-mineria_de_datos_u5
```



## Uso

El proyecto admite múltiples modalidades de ejecución local, todas orientadas a servir o visualizar una única interfaz estática. La interacción con el sistema se produce mediante el menú superior, el cuadro comparativo, los filtros por herramienta y la sección de relación con empresas del sector real.

Ejecución mediante un servidor HTTP integrado de Python:

```bash
python3 -m http.server 8000
```

Con este comando, la landing queda disponible en `http://localhost:8000`, permitiendo validar navegación, estilos, comportamiento responsivo y renderizado dinámico del contenido generado por `script.js`.
