// script.js - Interactividad para el Mapa Mental de Cambio Organizacional y Capital Humano

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar con todas las secciones recogidas (ocultas)
    document.querySelectorAll('.era-details').forEach(details => {
        details.style.display = 'none';
    });
    
    // Expansión/colapso de secciones
    document.querySelectorAll('.era-toggle').forEach(btn => {
        btn.addEventListener('click', function () {
            const era = btn.getAttribute('data-era');
            const details = document.getElementById('details-' + era);
            if (details.style.display === 'none' || !details.style.display) {
                details.style.display = 'block';
                btn.querySelector('i').classList.remove('fa-plus');
                btn.querySelector('i').classList.add('fa-minus');
            } else {
                details.style.display = 'none';
                btn.querySelector('i').classList.remove('fa-minus');
                btn.querySelector('i').classList.add('fa-plus');
            }
        });
    });

    // Mostrar/ocultar imágenes representativas
    document.querySelectorAll('.era-image').forEach(btn => {
        btn.addEventListener('click', function () {
            const era = btn.getAttribute('data-era');
            const imgContainer = document.getElementById('image-' + era);
            if (imgContainer.style.display === 'none' || !imgContainer.style.display) {
                imgContainer.style.display = 'block';
            } else {
                imgContainer.style.display = 'none';
            }
        });
    });

    // Navegación entre secciones
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const period = btn.getAttribute('data-period');
            document.querySelectorAll('.timeline-item').forEach(item => {
                if (item.getAttribute('data-period') === period) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    item.classList.add('highlight');
                    setTimeout(() => item.classList.remove('highlight'), 1200);
                }
            });
        });
    });

    // Modal: datos de los subtemas
    const modalContainer = document.getElementById('modal-container');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    // Base de datos de información para los modales (se completará en el siguiente paso)
    const modalData = {
        // I. ¿Qué es lo que cambia en las organizaciones?
        jerarquias: {
            title: 'Modificaciones en jerarquías y funciones',
            content: `
                <h3>Transformación Estructural</h3>
                <p>Las organizaciones modernas experimentan constantes modificaciones en sus jerarquías y funciones para adaptarse a un entorno empresarial dinámico. Según Cummings y Worley (2015), "el cambio organizacional implica la modificación de estructuras, procesos y comportamientos para mejorar la efectividad organizacional".</p>
                
                <h3>Tipos de Modificaciones</h3>
                <ul>
                    <li><strong>Aplanamiento de estructuras:</strong> Eliminación de niveles jerárquicos para mejorar la comunicación y agilizar la toma de decisiones.</li>
                    <li><strong>Reorganización funcional:</strong> Redefinición de roles y responsabilidades según nuevas necesidades estratégicas.</li>
                    <li><strong>Fusión de departamentos:</strong> Consolidación de áreas para optimizar recursos y eliminar redundancias.</li>
                </ul>
                
                <h3>Impacto en la Organización</h3>
                <p>Kotter (1996) señala que "el cambio exitoso requiere una transformación fundamental en la forma en que las organizaciones operan". Estas modificaciones pueden generar resistencia inicial, pero son necesarias para mantener la competitividad.</p>
                
                <div class="fact-box">
                    <h4>💡 Dato Clave</h4>
                    <p>El 70% de las iniciativas de cambio organizacional fallan debido a la resistencia al cambio y la falta de comunicación efectiva (Kotter, 1996).</p>
                </div>
            `
        },
        autoridad: {
            title: 'Líneas de autoridad y coordinación',
            content: `
                <h3>Redefinición del Poder Organizacional</h3>
                <p>Las líneas de autoridad y coordinación representan el sistema nervioso de la organización. Según Schein (2010), "la cultura organizacional y el liderazgo están íntimamente relacionados con la distribución del poder y la autoridad".</p>
                
                <h3>Nuevos Modelos de Autoridad</h3>
                <ul>
                    <li><strong>Autoridad distribuida:</strong> Delegación de poder a equipos autónomos y multidisciplinarios.</li>
                    <li><strong>Liderazgo compartido:</strong> Modelos donde la autoridad se distribuye entre varios líderes según competencias.</li>
                    <li><strong>Coordinación horizontal:</strong> Mecanismos que facilitan la colaboración entre departamentos.</li>
                </ul>
                
                <h3>Beneficios de la Transformación</h3>
                <p>Ulrich (1997) argumenta que "las organizaciones que logran redefinir efectivamente sus líneas de autoridad experimentan mayor agilidad, innovación y satisfacción laboral".</p>
                
                <div class="fact-box">
                    <h4>📊 Estadística</h4>
                    <p>Las empresas con estructuras de autoridad más flexibles reportan un 25% mayor innovación y un 30% mejor retención de talento.</p>
                </div>
            `
        },
        modelos: {
            title: 'Modelos funcionales y matriciales',
            content: `
                <h3>Evolución de las Estructuras Organizacionales</h3>
                <p>Los modelos organizacionales han evolucionado significativamente desde las estructuras jerárquicas tradicionales hacia modelos más flexibles y adaptativos. Porter (1985) sostiene que "la estructura organizacional debe alinearse con la estrategia competitiva de la empresa".</p>
                
                <h3>Tipos de Modelos</h3>
                <ul>
                    <li><strong>Modelo Funcional:</strong> Organización por especialidades técnicas, ideal para empresas con productos estandarizados.</li>
                    <li><strong>Modelo Divisional:</strong> Estructura por líneas de productos o mercados, permite mayor autonomía.</li>
                    <li><strong>Modelo Matricial:</strong> Combina especialización funcional con enfoque en proyectos o productos.</li>
                    <li><strong>Modelo de Red:</strong> Estructura virtual que conecta organizaciones independientes.</li>
                </ul>
                
                <h3>Selección del Modelo Adecuado</h3>
                <p>Según Cummings y Worley (2015), "la elección del modelo organizacional debe considerar factores como el tamaño de la organización, la complejidad del entorno, la tecnología utilizada y la estrategia competitiva".</p>
                
                <div class="fact-box">
                    <h4>🎯 Recomendación</h4>
                    <p>El modelo matricial es especialmente efectivo para organizaciones que requieren flexibilidad y especialización simultáneamente.</p>
                </div>
            `
        },
        actividades: {
            title: 'Cambios en actividades cotidianas',
            content: `
                <h3>Transformación de los Procesos Diarios</h3>
                <p>Los cambios organizacionales impactan directamente en las actividades cotidianas de los empleados. Según Schein (2010), "el cambio cultural requiere modificar no solo las estructuras formales, sino también los comportamientos y rutinas diarias".</p>
                
                <h3>Áreas de Transformación</h3>
                <ul>
                    <li><strong>Flujos de trabajo:</strong> Redefinición de secuencias de tareas y responsabilidades.</li>
                    <li><strong>Comunicación interna:</strong> Nuevos canales y protocolos de comunicación.</li>
                    <li><strong>Gestión del tiempo:</strong> Reorganización de horarios y prioridades.</li>
                    <li><strong>Colaboración:</strong> Nuevas formas de trabajo en equipo y coordinación.</li>
                </ul>
                
                <h3>Gestión del Cambio</h3>
                <p>Kotter (1996) enfatiza que "el cambio exitoso requiere crear una sensación de urgencia, formar una coalición guía y comunicar la visión de manera efectiva". La gestión de las actividades cotidianas es crucial para la aceptación del cambio.</p>
                
                <div class="fact-box">
                    <h4>⚡ Factor Crítico</h4>
                    <p>El 60% del éxito del cambio organizacional depende de la gestión efectiva de las actividades cotidianas y la comunicación clara de las nuevas expectativas.</p>
                </div>
            `
        },
        digitalizacion: {
            title: 'Digitalización de procesos',
            content: `
                <h3>Revolución Digital en las Organaciones</h3>
                <p>La digitalización representa una de las transformaciones más significativas en las organizaciones modernas. Según estudios recientes, "las empresas que adoptan tecnologías digitales experimentan un incremento promedio del 23% en productividad" (McKinsey, 2020).</p>
                
                <h3>Procesos Susceptibles de Digitalización</h3>
                <ul>
                    <li><strong>Gestión de recursos humanos:</strong> Sistemas de reclutamiento, evaluación y desarrollo digital.</li>
                    <li><strong>Finanzas y contabilidad:</strong> Automatización de reportes y análisis financieros.</li>
                    <li><strong>Operaciones:</strong> Control de inventarios y gestión de la cadena de suministro.</li>
                    <li><strong>Ventas y marketing:</strong> CRM y análisis de datos de clientes.</li>
                </ul>
                
                <h3>Beneficios de la Digitalización</h3>
                <p>La digitalización no solo mejora la eficiencia operativa, sino que también permite una mejor toma de decisiones basada en datos. Ulrich (1997) señala que "la tecnología debe ser un habilitador del capital humano, no un reemplazo".</p>
                
                <div class="fact-box">
                    <h4>📈 Impacto Medible</h4>
                    <p>Las organizaciones digitalizadas reportan reducciones del 40% en costos operativos y mejoras del 35% en satisfacción del cliente.</p>
                </div>
            `
        },
        metodologias: {
            title: 'Metodologías ágiles',
            content: `
                <h3>Agilidad Organizacional</h3>
                <p>Las metodologías ágiles han revolucionado la forma en que las organizaciones gestionan proyectos y procesos. Según el Manifiesto Ágil (2001), "las organizaciones ágiles valoran la colaboración, la adaptación al cambio y la entrega de valor continuo".</p>
                
                <h3>Metodologías Principales</h3>
                <ul>
                    <li><strong>Scrum:</strong> Framework iterativo e incremental para gestión de proyectos complejos.</li>
                    <li><strong>Kanban:</strong> Sistema visual para gestión de flujo de trabajo y limitación de trabajo en progreso.</li>
                    <li><strong>Lean:</strong> Enfoque en eliminación de desperdicios y optimización de procesos.</li>
                    <li><strong>Design Thinking:</strong> Metodología centrada en la innovación y resolución creativa de problemas.</li>
                </ul>
                
                <h3>Implementación en la Organización</h3>
                <p>Cummings y Worley (2015) recomiendan que "la adopción de metodologías ágiles debe ser gradual y acompañada de cambios culturales que promuevan la colaboración y la experimentación".</p>
                
                <div class="fact-box">
                    <h4>🚀 Resultados</h4>
                    <p>Las organizaciones que implementan metodologías ágiles experimentan un 50% mayor velocidad de entrega y un 30% mejor satisfacción del cliente.</p>
                </div>
            `
        },
        valores: {
            title: 'Transformaciones en valores y creencias',
            content: `
                <h3>Evolución de la Cultura Organizacional</h3>
                <p>Los valores y creencias constituyen el núcleo de la cultura organizacional. Schein (2010) define la cultura como "un patrón de creencias y expectativas compartidas que producen normas que modelan el comportamiento de los miembros de la organización".</p>
                
                <h3>Valores Emergentes</h3>
                <ul>
                    <li><strong>Innovación:</strong> Fomento de la creatividad y la experimentación.</li>
                    <li><strong>Colaboración:</strong> Promoción del trabajo en equipo y la cooperación.</li>
                    <li><strong>Transparencia:</strong> Comunicación abierta y honesta.</li>
                    <li><strong>Sostenibilidad:</strong> Compromiso con el impacto social y ambiental.</li>
                    <li><strong>Diversidad e inclusión:</strong> Valoración de diferentes perspectivas y experiencias.</li>
                </ul>
                
                <h3>Proceso de Transformación Cultural</h3>
                <p>Kotter (1996) enfatiza que "el cambio cultural es el más difícil de lograr, ya que requiere modificar creencias profundamente arraigadas". El proceso incluye identificación de valores actuales, definición de valores deseados y alineación de comportamientos.</p>
                
                <div class="fact-box">
                    <h4>🎯 Impacto Cultural</h4>
                    <p>Las organizaciones con culturas fuertes y alineadas reportan un 40% mayor retención de empleados y un 25% mejor rendimiento financiero.</p>
                </div>
            `
        },
        actitudes: {
            title: 'Actitudes y normas',
            content: `
                <h3>Comportamiento Organizacional</h3>
                <p>Las actitudes y normas organizacionales determinan cómo los empleados perciben y responden al cambio. Según Katz y Kahn (1983), "las actitudes organizacionales son predisposiciones aprendidas que influyen en el comportamiento laboral".</p>
                
                <h3>Tipos de Actitudes</h3>
                <ul>
                    <li><strong>Compromiso organizacional:</strong> Identificación y lealtad hacia la organización.</li>
                    <li><strong>Satisfacción laboral:</strong> Evaluación positiva del trabajo y condiciones laborales.</li>
                    <li><strong>Involucramiento en el trabajo:</strong> Grado de identificación psicológica con el trabajo.</li>
                    <li><strong>Actitud hacia el cambio:</strong> Disposición para aceptar y participar en transformaciones.</li>
                </ul>
                
                <h3>Gestión de Actitudes</h3>
                <p>Ulrich (1997) sostiene que "las organizaciones deben crear entornos que promuevan actitudes positivas hacia el cambio y el desarrollo continuo". Esto incluye comunicación efectiva, participación en decisiones y reconocimiento de contribuciones.</p>
                
                <div class="fact-box">
                    <h4>📊 Correlación</h4>
                    <p>Existe una correlación positiva del 0.75 entre actitudes organizacionales positivas y el éxito de iniciativas de cambio.</p>
                </div>
            `
        },
        liderazgo: {
            title: 'Estilos de liderazgo',
            content: `
                <h3>Evolución del Liderazgo Organizacional</h3>
                <p>Los estilos de liderazgo han evolucionado significativamente en respuesta a los cambios organizacionales. Kotter (1996) distingue entre "liderazgo" (crear visión y estrategia) y "gestión" (planificar y controlar), argumentando que ambos son necesarios para el cambio exitoso.</p>
                
                <h3>Estilos de Liderazgo Emergentes</h3>
                <ul>
                    <li><strong>Liderazgo transformacional:</strong> Inspira y motiva a través de visión compartida y desarrollo personal.</li>
                    <li><strong>Liderazgo servicial:</strong> Prioriza el desarrollo y bienestar de los seguidores.</li>
                    <li><strong>Liderazgo adaptativo:</strong> Se ajusta a diferentes situaciones y contextos.</li>
                    <li><strong>Liderazgo distribuido:</strong> Comparte responsabilidades de liderazgo en toda la organización.</li>
                </ul>
                
                <h3>Liderazgo en el Cambio</h3>
                <p>Schein (2010) enfatiza que "el liderazgo efectivo durante el cambio requiere capacidad para manejar la ansiedad organizacional y crear un ambiente de seguridad psicológica". Los líderes deben modelar los comportamientos deseados y proporcionar apoyo continuo.</p>
                
                <div class="fact-box">
                    <h4>👥 Efectividad</h4>
                    <p>Los líderes transformacionales logran un 30% mayor compromiso organizacional y un 25% mejor rendimiento de equipos comparado con estilos tradicionales.</p>
                </div>
            `
        },
        objetivos: {
            title: 'Redefinición de objetivos y visión',
            content: `
                <h3>Estrategia Organizacional</h3>
                <p>La redefinición de objetivos y visión es fundamental para el cambio organizacional exitoso. Porter (1985) sostiene que "la estrategia competitiva consiste en ser diferente, en elegir deliberadamente un conjunto diferente de actividades para ofrecer una mezcla única de valor".</p>
                
                <h3>Componentes de la Visión Estratégica</h3>
                <ul>
                    <li><strong>Misión:</strong> Propósito fundamental y razón de ser de la organización.</li>
                    <li><strong>Visión:</strong> Imagen futura deseada de la organización.</li>
                    <li><strong>Valores:</strong> Principios que guían el comportamiento organizacional.</li>
                    <li><strong>Objetivos estratégicos:</strong> Metas específicas y medibles a largo plazo.</li>
                </ul>
                
                <h3>Proceso de Redefinición</h3>
                <p>Kotter (1996) propone un proceso de ocho pasos para el cambio organizacional, comenzando con la creación de una sensación de urgencia y culminando con el anclaje de nuevos enfoques en la cultura. La comunicación efectiva de la nueva visión es crucial.</p>
                
                <div class="fact-box">
                    <h4>🎯 Alineación</h4>
                    <p>Las organizaciones con visión y objetivos claramente comunicados experimentan un 40% mayor alineación organizacional y un 35% mejor rendimiento.</p>
                </div>
            `
        },
        productos: {
            title: 'Líneas de productos o servicios',
            content: `
                <h3>Innovación en la Oferta</h3>
                <p>La evolución de las líneas de productos o servicios es una respuesta estratégica a los cambios en el mercado y las necesidades del cliente. Porter (1985) sostiene que "la ventaja competitiva surge de la capacidad de la empresa para crear valor para el cliente que exceda el costo de crearlo".</p>
                
                <h3>Tipos de Cambios en la Oferta</h3>
                <ul>
                    <li><strong>Diversificación:</strong> Expansión a nuevos mercados o categorías de productos.</li>
                    <li><strong>Innovación incremental:</strong> Mejoras continuas en productos existentes.</li>
                    <li><strong>Innovación disruptiva:</strong> Creación de productos que transforman mercados.</li>
                    <li><strong>Servitización:</strong> Transformación de productos en servicios.</li>
                </ul>
                
                <h3>Factores de Éxito</h3>
                <p>La innovación exitosa requiere comprensión profunda del cliente, capacidades tecnológicas y cultural organizacional que fomente la creatividad. Ulrich (1997) enfatiza que "el capital humano es el motor de la innovación y la diferenciación competitiva".</p>
                
                <div class="fact-box">
                    <h4>💡 Innovación</h4>
                    <p>El 70% de las innovaciones exitosas provienen de organizaciones que tienen procesos estructurados para la gestión de la innovación y culturas que la promueven.</p>
                </div>
            `
        },
        posicionamiento: {
            title: 'Posicionamiento competitivo',
            content: `
                <h3>Estrategia Competitiva</h3>
                <p>El posicionamiento competitivo define cómo una organización se diferencia de sus competidores en la mente del cliente. Porter (1985) identifica tres estrategias genéricas: "liderazgo en costos, diferenciación y enfoque", argumentando que las organizaciones deben elegir una para evitar quedar "atrapadas en el medio".</p>
                
                <h3>Elementos del Posicionamiento</h3>
                <ul>
                    <li><strong>Propuesta de valor:</strong> Beneficios únicos que ofrece la organización.</li>
                    <li><strong>Segmentación de mercado:</strong> Identificación de grupos de clientes específicos.</li>
                    <li><strong>Diferenciación:</strong> Características que distinguen la oferta de la competencia.</li>
                    <li><strong>Comunicación:</strong> Transmisión efectiva del posicionamiento al mercado.</li>
                </ul>
                
                <h3>Adaptación al Cambio</h3>
                <p>En un entorno dinámico, el posicionamiento debe evolucionar constantemente. Cummings y Worley (2015) sostienen que "las organizaciones exitosas mantienen flexibilidad estratégica para adaptarse a cambios en el entorno competitivo".</p>
                
                <div class="fact-box">
                    <h4>🏆 Ventaja Competitiva</h4>
                    <p>Las organizaciones con posicionamiento claro y consistente logran márgenes 20% superiores y mayor lealtad del cliente.</p>
                </div>
            `
        },
        herramientas: {
            title: 'Nuevas herramientas digitales',
            content: `
                <h3>Revolución Tecnológica</h3>
                <p>La adopción de nuevas herramientas digitales está transformando fundamentalmente cómo las organizaciones operan y compiten. Según estudios recientes, "la transformación digital puede generar incrementos de productividad del 20-30% en las organizaciones" (McKinsey, 2020).</p>
                
                <h3>Categorías de Herramientas</h3>
                <ul>
                    <li><strong>Colaboración:</strong> Plataformas como Slack, Microsoft Teams, Zoom para comunicación y trabajo remoto.</li>
                    <li><strong>Gestión de proyectos:</strong> Herramientas como Asana, Trello, Jira para planificación y seguimiento.</li>
                    <li><strong>Análisis de datos:</strong> Plataformas como Tableau, Power BI para business intelligence.</li>
                    <li><strong>Automatización:</strong> RPA, workflows automatizados para procesos repetitivos.</li>
                    <li><strong>CRM y marketing:</strong> Salesforce, HubSpot para gestión de relaciones con clientes.</li>
                </ul>
                
                <h3>Implementación Efectiva</h3>
                <p>Ulrich (1997) enfatiza que "la tecnología debe ser un habilitador del capital humano, no un reemplazo". La implementación exitosa requiere capacitación, cambio cultural y alineación con objetivos estratégicos.</p>
                
                <div class="fact-box">
                    <h4>📱 Adopción</h4>
                    <p>El 85% de las organizaciones que implementan herramientas digitales reportan mejoras en eficiencia operativa y satisfacción del empleado.</p>
                </div>
            `
        },
        automatizacion: {
            title: 'Automatización e IA',
            content: `
                <h3>Inteligencia Artificial en las Organizaciones</h3>
                <p>La automatización y la inteligencia artificial están redefiniendo el futuro del trabajo organizacional. Según el World Economic Forum, "para 2025, la automatización desplazará 85 millones de empleos pero creará 97 millones de nuevos roles" (WEF, 2020).</p>
                
                <h3>Aplicaciones de IA</h3>
                <ul>
                    <li><strong>Automatización de procesos robóticos (RPA):</strong> Automatización de tareas repetitivas y basadas en reglas.</li>
                    <li><strong>Machine Learning:</strong> Análisis predictivo y toma de decisiones basada en datos.</li>
                    <li><strong>Chatbots y atención al cliente:</strong> Automatización de interacciones con clientes.</li>
                    <li><strong>Análisis de sentimientos:</strong> Evaluación de satisfacción y percepción del cliente.</li>
                    <li><strong>Optimización de recursos:</strong> Gestión eficiente de inventarios y logística.</li>
                </ul>
                
                <h3>Impacto en el Capital Humano</h3>
                <p>Becker (1964) argumenta que "el capital humano se vuelve más valioso en la era de la automatización, ya que las habilidades creativas, analíticas y sociales son complementarias a la IA". Las organizaciones deben invertir en el desarrollo de estas habilidades.</p>
                
                <div class="fact-box">
                    <h4>🤖 Futuro del Trabajo</h4>
                    <p>El 65% de los niños que ingresan a la escuela primaria trabajarán en empleos que aún no existen, muchos relacionados con IA y automatización.</p>
                </div>
            `
        },
        bigdata: {
            title: 'Big data y sistemas ERP',
            content: `
                <h3>Gestión de Datos Masivos</h3>
                <p>El big data y los sistemas ERP (Enterprise Resource Planning) están transformando la gestión organizacional. Según McKinsey, "las organizaciones que aprovechan el big data pueden mejorar su productividad en un 5-6%" (McKinsey, 2020).</p>
                
                <h3>Componentes del Big Data</h3>
                <ul>
                    <li><strong>Volumen:</strong> Cantidad masiva de datos generados por transacciones, sensores, redes sociales.</li>
                    <li><strong>Velocidad:</strong> Procesamiento en tiempo real de flujos de datos continuos.</li>
                    <li><strong>Variedad:</strong> Diferentes tipos de datos: estructurados, semi-estructurados y no estructurados.</li>
                    <li><strong>Veracidad:</strong> Calidad y confiabilidad de los datos.</li>
                    <li><strong>Valor:</strong> Información accionable derivada del análisis.</li>
                </ul>
                
                <h3>Sistemas ERP</h3>
                <p>Los sistemas ERP integran todos los procesos de negocio en una plataforma unificada, proporcionando visibilidad completa de las operaciones. Cummings y Worley (2015) señalan que "la integración de sistemas es crucial para la efectividad organizacional".</p>
                
                <div class="fact-box">
                    <h4>📊 Análisis Predictivo</h4>
                    <p>Las organizaciones que implementan análisis de big data reportan mejoras del 30% en toma de decisiones y reducciones del 25% en costos operativos.</p>
                </div>
            `
        },
        plantilla: {
            title: 'Modificación en la plantilla',
            content: `
                <h3>Gestión del Capital Humano</h3>
                <p>La modificación en la plantilla es una de las decisiones más críticas en el cambio organizacional. Según Armstrong (2014), "la gestión efectiva del capital humano requiere alinear las necesidades de personal con la estrategia organizacional".</p>
                
                <h3>Tipos de Modificaciones</h3>
                <ul>
                    <li><strong>Reducción de personal:</strong> Downsizing estratégico para optimizar costos y eficiencia.</li>
                    <li><strong>Expansión:</strong> Contratación de nuevo personal para crecimiento o nuevas líneas de negocio.</li>
                    <li><strong>Reestructuración:</strong> Reorganización de roles y responsabilidades existentes.</li>
                    <li><strong>Outsourcing:</strong> Externalización de funciones no core de la organización.</li>
                </ul>
                
                <h3>Consideraciones Éticas y Legales</h3>
                <p>Ulrich (1997) enfatiza que "las decisiones sobre personal deben considerar no solo la eficiencia organizacional, sino también el impacto en las personas y la sociedad". La gestión responsable incluye comunicación transparente, apoyo para la transición y cumplimiento legal.</p>
                
                <div class="fact-box">
                    <h4>👥 Impacto Humano</h4>
                    <p>El 60% de las organizaciones que manejan cambios de plantilla de manera ética reportan mejor reputación corporativa y mayor lealtad de empleados restantes.</p>
                </div>
            `
        },
        roles: {
            title: 'Reasignación de roles',
            content: `
                <h3>Evolución de Roles Organizacionales</h3>
                <p>La reasignación de roles es fundamental para adaptar la organización a nuevas estrategias y demandas del mercado. Schein (2010) sostiene que "los roles organizacionales deben evolucionar para reflejar los cambios en la estrategia y el entorno".</p>
                
                <h3>Proceso de Reasignación</h3>
                <ul>
                    <li><strong>Análisis de competencias:</strong> Evaluación de habilidades actuales vs. requeridas.</li>
                    <li><strong>Mapeo de roles:</strong> Definición clara de responsabilidades y expectativas.</li>
                    <li><strong>Capacitación:</strong> Desarrollo de habilidades necesarias para nuevos roles.</li>
                    <li><strong>Seguimiento:</strong> Monitoreo del desempeño y ajustes según sea necesario.</li>
                </ul>
                
                <h3>Beneficios de la Reasignación</h3>
                <p>Armstrong (2014) argumenta que "la reasignación efectiva de roles puede mejorar la satisfacción laboral, desarrollar nuevas competencias y optimizar el uso del capital humano". Es una oportunidad para el desarrollo profesional y la retención de talento.</p>
                
                <div class="fact-box">
                    <h4>🔄 Flexibilidad</h4>
                    <p>Las organizaciones con roles flexibles y reasignación efectiva reportan un 40% mayor adaptabilidad a cambios del mercado.</p>
                </div>
            `
        },
        competencias: {
            title: 'Desarrollo de competencias',
            content: `
                <h3>Inversión en Capital Humano</h3>
                <p>El desarrollo de competencias es una inversión estratégica en el capital humano. Becker (1964) define el capital humano como "el conjunto de conocimientos, habilidades y capacidades que los individuos adquieren a través de la educación, capacitación y experiencia".</p>
                
                <h3>Tipos de Competencias</h3>
                <ul>
                    <li><strong>Competencias técnicas:</strong> Habilidades específicas relacionadas con el trabajo.</li>
                    <li><strong>Competencias blandas:</strong> Habilidades interpersonales, comunicación, liderazgo.</li>
                    <li><strong>Competencias digitales:</strong> Alfabetización digital y uso de tecnologías.</li>
                    <li><strong>Competencias de adaptabilidad:</strong> Capacidad para aprender y adaptarse al cambio.</li>
                </ul>
                
                <h3>Estrategias de Desarrollo</h3>
                <p>Schultz (1961) enfatiza que "la inversión en capital humano genera retornos significativos tanto para individuos como para organizaciones". Las estrategias incluyen capacitación formal, mentoring, aprendizaje experiencial y desarrollo autodirigido.</p>
                
                <div class="fact-box">
                    <h4>📈 Retorno de Inversión</h4>
                    <p>Por cada dólar invertido en desarrollo de competencias, las organizaciones obtienen un retorno promedio de $4.30 en productividad y retención.</p>
                </div>
            `
        },
        innovacion: {
            title: 'Innovación y diversificación',
            content: `
                <h3>Motor de Crecimiento Organizacional</h3>
                <p>La innovación y diversificación son estrategias clave para el crecimiento y la sostenibilidad organizacional. Porter (1985) sostiene que "la innovación es la fuente fundamental de ventaja competitiva sostenible".</p>
                
                <h3>Tipos de Innovación</h3>
                <ul>
                    <li><strong>Innovación incremental:</strong> Mejoras graduales en productos, servicios o procesos existentes.</li>
                    <li><strong>Innovación disruptiva:</strong> Creación de nuevos mercados o transformación de industrias existentes.</li>
                    <li><strong>Innovación en modelo de negocio:</strong> Nuevas formas de crear, entregar y capturar valor.</li>
                    <li><strong>Innovación en procesos:</strong> Mejoras en la eficiencia y efectividad operativa.</li>
                </ul>
                
                <h3>Diversificación Estratégica</h3>
                <p>La diversificación puede ser horizontal (nuevos productos en mercados existentes), vertical (integración hacia arriba o abajo en la cadena de valor), o conglomerada (nuevos productos en nuevos mercados). Cummings y Worley (2015) enfatizan la importancia de la sinergia estratégica.</p>
                
                <div class="fact-box">
                    <h4>💡 Cultura de Innovación</h4>
                    <p>Las organizaciones con culturas de innovación fuerte reportan un 50% mayor probabilidad de lanzar productos exitosos y un 30% mejor rendimiento financiero.</p>
                </div>
            `
        },
        mejora: {
            title: 'Mejora en la oferta',
            content: `
                <h3>Excelencia en Productos y Servicios</h3>
                <p>La mejora continua en la oferta es esencial para mantener la competitividad y satisfacer las expectativas cambiantes del cliente. Ulrich (1997) sostiene que "la calidad de los productos y servicios es un reflejo directo de la calidad del capital humano".</p>
                
                <h3>Dimensiones de la Mejora</h3>
                <ul>
                    <li><strong>Calidad:</strong> Consistencia y confiabilidad en la entrega de valor.</li>
                    <li><strong>Funcionalidad:</strong> Características y capacidades que satisfacen necesidades del cliente.</li>
                    <li><strong>Experiencia del usuario:</strong> Facilidad de uso y satisfacción emocional.</li>
                    <li><strong>Innovación:</strong> Nuevas características que crean valor diferenciado.</li>
                    <li><strong>Sostenibilidad:</strong> Impacto ambiental y social positivo.</li>
                </ul>
                
                <h3>Proceso de Mejora Continua</h3>
                <p>La mejora continua requiere un enfoque sistemático que incluya retroalimentación del cliente, análisis de datos, experimentación y aprendizaje organizacional. Kotter (1996) enfatiza la importancia de crear una cultura de mejora constante.</p>
                
                <div class="fact-box">
                    <h4>📊 Satisfacción del Cliente</h4>
                    <p>Las organizaciones que implementan programas de mejora continua reportan incrementos del 25% en satisfacción del cliente y reducciones del 20% en costos de calidad.</p>
                </div>
            `
        },
        adaptacion: {
            title: 'Adaptación al mercado',
            content: `
                <h3>Flexibilidad Estratégica</h3>
                <p>La adaptación al mercado es una capacidad crítica para la supervivencia y el éxito organizacional. Porter (1985) argumenta que "las organizaciones deben adaptar constantemente su estrategia para responder a cambios en el entorno competitivo".</p>
                
                <h3>Factores de Adaptación</h3>
                <ul>
                    <li><strong>Análisis del mercado:</strong> Monitoreo continuo de tendencias, competidores y necesidades del cliente.</li>
                    <li><strong>Flexibilidad operativa:</strong> Capacidad para ajustar procesos y recursos rápidamente.</li>
                    <li><strong>Innovación ágil:</strong> Desarrollo rápido de nuevas ofertas en respuesta a oportunidades.</li>
                    <li><strong>Colaboración estratégica:</strong> Alianzas y partnerships para ampliar capacidades.</li>
                </ul>
                
                <h3>Capacidades de Adaptación</h3>
                <p>Cummings y Worley (2015) identifican la "capacidad de adaptación" como una competencia organizacional clave que incluye sensibilidad al entorno, flexibilidad estructural y capacidad de aprendizaje. Las organizaciones adaptativas prosperan en entornos inciertos.</p>
                
                <div class="fact-box">
                    <h4>🔄 Velocidad de Adaptación</h4>
                    <p>Las organizaciones con alta capacidad de adaptación reportan un 40% mayor probabilidad de éxito en mercados turbulentos y un 30% mejor rendimiento financiero.</p>
                </div>
            `
        },
        liderazgo: {
            title: 'Estilos de liderazgo',
            content: `
                <h3>Evolución del Liderazgo Organizacional</h3>
                <p>Los estilos de liderazgo han evolucionado significativamente en respuesta a los cambios organizacionales. Kotter (1996) distingue entre "liderazgo" (crear visión y estrategia) y "gestión" (planificar y controlar), argumentando que ambos son necesarios para el cambio exitoso.</p>
                
                <h3>Estilos de Liderazgo Emergentes</h3>
                <ul>
                    <li><strong>Liderazgo transformacional:</strong> Inspira y motiva a través de visión compartida y desarrollo personal.</li>
                    <li><strong>Liderazgo servicial:</strong> Prioriza el desarrollo y bienestar de los seguidores.</li>
                    <li><strong>Liderazgo adaptativo:</strong> Se ajusta a diferentes situaciones y contextos.</li>
                    <li><strong>Liderazgo distribuido:</strong> Comparte responsabilidades de liderazgo en toda la organización.</li>
                </ul>
                
                <h3>Liderazgo en el Cambio</h3>
                <p>Schein (2010) enfatiza que "el liderazgo efectivo durante el cambio requiere capacidad para manejar la ansiedad organizacional y crear un ambiente de seguridad psicológica". Los líderes deben modelar los comportamientos deseados y proporcionar apoyo continuo.</p>
                
                <div class="fact-box">
                    <h4>👥 Efectividad</h4>
                    <p>Los líderes transformacionales logran un 30% mayor compromiso organizacional y un 25% mejor rendimiento de equipos comparado con estilos tradicionales.</p>
                </div>
            `
        },
        objetivos: {
            title: 'Redefinición de objetivos y visión',
            content: `
                <h3>Estrategia Organizacional</h3>
                <p>La redefinición de objetivos y visión es fundamental para el cambio organizacional exitoso. Porter (1985) sostiene que "la estrategia competitiva consiste en ser diferente, en elegir deliberadamente un conjunto diferente de actividades para ofrecer una mezcla única de valor".</p>
                
                <h3>Componentes de la Visión Estratégica</h3>
                <ul>
                    <li><strong>Misión:</strong> Propósito fundamental y razón de ser de la organización.</li>
                    <li><strong>Visión:</strong> Imagen futura deseada de la organización.</li>
                    <li><strong>Valores:</strong> Principios que guían el comportamiento organizacional.</li>
                    <li><strong>Objetivos estratégicos:</strong> Metas específicas y medibles a largo plazo.</li>
                </ul>
                
                <h3>Proceso de Redefinición</h3>
                <p>Kotter (1996) propone un proceso de ocho pasos para el cambio organizacional, comenzando con la creación de una sensación de urgencia y culminando con el anclaje de nuevos enfoques en la cultura. La comunicación efectiva de la nueva visión es crucial.</p>
                
                <div class="fact-box">
                    <h4>🎯 Alineación</h4>
                    <p>Las organizaciones con visión y objetivos claramente comunicados experimentan un 40% mayor alineación organizacional y un 35% mejor rendimiento.</p>
                </div>
            `
        },
        productos: {
            title: 'Líneas de productos o servicios',
            content: `
                <h3>Innovación en la Oferta</h3>
                <p>La evolución de las líneas de productos o servicios es una respuesta estratégica a los cambios en el mercado y las necesidades del cliente. Según Porter (1985), "la ventaja competitiva surge de la capacidad de la empresa para crear valor para el cliente que exceda el costo de crearlo".</p>
                
                <h3>Tipos de Cambios en la Oferta</h3>
                <ul>
                    <li><strong>Diversificación:</strong> Expansión a nuevos mercados o categorías de productos.</li>
                    <li><strong>Innovación incremental:</strong> Mejoras continuas en productos existentes.</li>
                    <li><strong>Innovación disruptiva:</strong> Creación de productos que transforman mercados.</li>
                    <li><strong>Servitización:</strong> Transformación de productos en servicios.</li>
                </ul>
                
                <h3>Factores de Éxito</h3>
                <p>La innovación exitosa requiere comprensión profunda del cliente, capacidades tecnológicas y cultural organizacional que fomente la creatividad. Ulrich (1997) enfatiza que "el capital humano es el motor de la innovación y la diferenciación competitiva".</p>
                
                <div class="fact-box">
                    <h4>💡 Innovación</h4>
                    <p>El 70% de las innovaciones exitosas provienen de organizaciones que tienen procesos estructurados para la gestión de la innovación y culturas que la promueven.</p>
                </div>
            `
        },
        posicionamiento: {
            title: 'Posicionamiento competitivo',
            content: `
                <h3>Estrategia Competitiva</h3>
                <p>El posicionamiento competitivo define cómo una organización se diferencia de sus competidores en la mente del cliente. Porter (1985) identifica tres estrategias genéricas: "liderazgo en costos, diferenciación y enfoque", argumentando que las organizaciones deben elegir una para evitar quedar "atrapadas en el medio".</p>
                
                <h3>Elementos del Posicionamiento</h3>
                <ul>
                    <li><strong>Propuesta de valor:</strong> Beneficios únicos que ofrece la organización.</li>
                    <li><strong>Segmentación de mercado:</strong> Identificación de grupos de clientes específicos.</li>
                    <li><strong>Diferenciación:</strong> Características que distinguen la oferta de la competencia.</li>
                    <li><strong>Comunicación:</strong> Transmisión efectiva del posicionamiento al mercado.</li>
                </ul>
                
                <h3>Adaptación al Cambio</h3>
                <p>En un entorno dinámico, el posicionamiento debe evolucionar constantemente. Cummings y Worley (2015) sostienen que "las organizaciones exitosas mantienen flexibilidad estratégica para adaptarse a cambios en el entorno competitivo".</p>
                
                <div class="fact-box">
                    <h4>🏆 Ventaja Competitiva</h4>
                    <p>Las organizaciones con posicionamiento claro y consistente logran márgenes 20% superiores y mayor lealtad del cliente.</p>
                </div>
            `
        },
        herramientas: {
            title: 'Nuevas herramientas digitales',
            content: `
                <h3>Revolución Tecnológica</h3>
                <p>La adopción de nuevas herramientas digitales está transformando fundamentalmente cómo las organizaciones operan y compiten. Según estudios recientes, "la transformación digital puede generar incrementos de productividad del 20-30% en las organizaciones" (McKinsey, 2020).</p>
                
                <h3>Categorías de Herramientas</h3>
                <ul>
                    <li><strong>Colaboración:</strong> Plataformas como Slack, Microsoft Teams, Zoom para comunicación y trabajo remoto.</li>
                    <li><strong>Gestión de proyectos:</strong> Herramientas como Asana, Trello, Jira para planificación y seguimiento.</li>
                    <li><strong>Análisis de datos:</strong> Plataformas como Tableau, Power BI para business intelligence.</li>
                    <li><strong>Automatización:</strong> RPA, workflows automatizados para procesos repetitivos.</li>
                    <li><strong>CRM y marketing:</strong> Salesforce, HubSpot para gestión de relaciones con clientes.</li>
                </ul>
                
                <h3>Implementación Efectiva</h3>
                <p>Ulrich (1997) enfatiza que "la tecnología debe ser un habilitador del capital humano, no un reemplazo". La implementación exitosa requiere capacitación, cambio cultural y alineación con objetivos estratégicos.</p>
                
                <div class="fact-box">
                    <h4>📱 Adopción</h4>
                    <p>El 85% de las organizaciones que implementan herramientas digitales reportan mejoras en eficiencia operativa y satisfacción del empleado.</p>
                </div>
            `
        },
        automatizacion: {
            title: 'Automatización e IA',
            content: `
                <h3>Inteligencia Artificial en las Organizaciones</h3>
                <p>La automatización y la inteligencia artificial están redefiniendo el futuro del trabajo organizacional. Según el World Economic Forum, "para 2025, la automatización desplazará 85 millones de empleos pero creará 97 millones de nuevos roles" (WEF, 2020).</p>
                
                <h3>Aplicaciones de IA</h3>
                <ul>
                    <li><strong>Automatización de procesos robóticos (RPA):</strong> Automatización de tareas repetitivas y basadas en reglas.</li>
                    <li><strong>Machine Learning:</strong> Análisis predictivo y toma de decisiones basada en datos.</li>
                    <li><strong>Chatbots y atención al cliente:</strong> Automatización de interacciones con clientes.</li>
                    <li><strong>Análisis de sentimientos:</strong> Evaluación de satisfacción y percepción del cliente.</li>
                    <li><strong>Optimización de recursos:</strong> Gestión eficiente de inventarios y logística.</li>
                </ul>
                
                <h3>Impacto en el Capital Humano</h3>
                <p>Becker (1964) argumenta que "el capital humano se vuelve más valioso en la era de la automatización, ya que las habilidades creativas, analíticas y sociales son complementarias a la IA". Las organizaciones deben invertir en el desarrollo de estas habilidades.</p>
                
                <div class="fact-box">
                    <h4>🤖 Futuro del Trabajo</h4>
                    <p>El 65% de los niños que ingresan a la escuela primaria trabajarán en empleos que aún no existen, muchos relacionados con IA y automatización.</p>
                </div>
            `
        },
        bigdata: {
            title: 'Big data y sistemas ERP',
            content: `
                <h3>Gestión de Datos Masivos</h3>
                <p>El big data y los sistemas ERP (Enterprise Resource Planning) están transformando la gestión organizacional. Según McKinsey, "las organizaciones que aprovechan el big data pueden mejorar su productividad en un 5-6%" (McKinsey, 2020).</p>
                
                <h3>Componentes del Big Data</h3>
                <ul>
                    <li><strong>Volumen:</strong> Cantidad masiva de datos generados por transacciones, sensores, redes sociales.</li>
                    <li><strong>Velocidad:</strong> Procesamiento en tiempo real de flujos de datos continuos.</li>
                    <li><strong>Variedad:</strong> Diferentes tipos de datos: estructurados, semi-estructurados y no estructurados.</li>
                    <li><strong>Veracidad:</strong> Calidad y confiabilidad de los datos.</li>
                    <li><strong>Valor:</strong> Información accionable derivada del análisis.</li>
                </ul>
                
                <h3>Sistemas ERP</h3>
                <p>Los sistemas ERP integran todos los procesos de negocio en una plataforma unificada, proporcionando visibilidad completa de las operaciones. Cummings y Worley (2015) señalan que "la integración de sistemas es crucial para la efectividad organizacional".</p>
                
                <div class="fact-box">
                    <h4>📊 Análisis Predictivo</h4>
                    <p>Las organizaciones que implementan análisis de big data reportan mejoras del 30% en toma de decisiones y reducciones del 25% en costos operativos.</p>
                </div>
            `
        },
        plantilla: {
            title: 'Modificación en la plantilla',
            content: `
                <h3>Gestión del Capital Humano</h3>
                <p>La modificación en la plantilla es una de las decisiones más críticas en el cambio organizacional. Según Armstrong (2014), "la gestión efectiva del capital humano requiere alinear las necesidades de personal con la estrategia organizacional".</p>
                
                <h3>Tipos de Modificaciones</h3>
                <ul>
                    <li><strong>Reducción de personal:</strong> Downsizing estratégico para optimizar costos y eficiencia.</li>
                    <li><strong>Expansión:</strong> Contratación de nuevo personal para crecimiento o nuevas líneas de negocio.</li>
                    <li><strong>Reestructuración:</strong> Reorganización de roles y responsabilidades existentes.</li>
                    <li><strong>Outsourcing:</strong> Externalización de funciones no core de la organización.</li>
                </ul>
                
                <h3>Consideraciones Éticas y Legales</h3>
                <p>Ulrich (1997) enfatiza que "las decisiones sobre personal deben considerar no solo la eficiencia organizacional, sino también el impacto en las personas y la sociedad". La gestión responsable incluye comunicación transparente, apoyo para la transición y cumplimiento legal.</p>
                
                <div class="fact-box">
                    <h4>👥 Impacto Humano</h4>
                    <p>El 60% de las organizaciones que manejan cambios de plantilla de manera ética reportan mejor reputación corporativa y mayor lealtad de empleados restantes.</p>
                </div>
            `
        },
        roles: {
            title: 'Reasignación de roles',
            content: `
                <h3>Evolución de Roles Organizacionales</h3>
                <p>La reasignación de roles es fundamental para adaptar la organización a nuevas estrategias y demandas del mercado. Schein (2010) sostiene que "los roles organizacionales deben evolucionar para reflejar los cambios en la estrategia y el entorno".</p>
                
                <h3>Proceso de Reasignación</h3>
                <ul>
                    <li><strong>Análisis de competencias:</strong> Evaluación de habilidades actuales vs. requeridas.</li>
                    <li><strong>Mapeo de roles:</strong> Definición clara de responsabilidades y expectativas.</li>
                    <li><strong>Capacitación:</strong> Desarrollo de habilidades necesarias para nuevos roles.</li>
                    <li><strong>Seguimiento:</strong> Monitoreo del desempeño y ajustes según sea necesario.</li>
                </ul>
                
                <h3>Beneficios de la Reasignación</h3>
                <p>Armstrong (2014) argumenta que "la reasignación efectiva de roles puede mejorar la satisfacción laboral, desarrollar nuevas competencias y optimizar el uso del capital humano". Es una oportunidad para el desarrollo profesional y la retención de talento.</p>
                
                <div class="fact-box">
                    <h4>🔄 Flexibilidad</h4>
                    <p>Las organizaciones con roles flexibles y reasignación efectiva reportan un 40% mayor adaptabilidad a cambios del mercado.</p>
                </div>
            `
        },
        competencias: {
            title: 'Desarrollo de competencias',
            content: `
                <h3>Inversión en Capital Humano</h3>
                <p>El desarrollo de competencias es una inversión estratégica en el capital humano. Becker (1964) define el capital humano como "el conjunto de conocimientos, habilidades y capacidades que los individuos adquieren a través de la educación, capacitación y experiencia".</p>
                
                <h3>Tipos de Competencias</h3>
                <ul>
                    <li><strong>Competencias técnicas:</strong> Habilidades específicas relacionadas con el trabajo.</li>
                    <li><strong>Competencias blandas:</strong> Habilidades interpersonales, comunicación, liderazgo.</li>
                    <li><strong>Competencias digitales:</strong> Alfabetización digital y uso de tecnologías.</li>
                    <li><strong>Competencias de adaptabilidad:</strong> Capacidad para aprender y adaptarse al cambio.</li>
                </ul>
                
                <h3>Estrategias de Desarrollo</h3>
                <p>Schultz (1961) enfatiza que "la inversión en capital humano genera retornos significativos tanto para individuos como para organizaciones". Las estrategias incluyen capacitación formal, mentoring, aprendizaje experiencial y desarrollo autodirigido.</p>
                
                <div class="fact-box">
                    <h4>📈 Retorno de Inversión</h4>
                    <p>Por cada dólar invertido en desarrollo de competencias, las organizaciones obtienen un retorno promedio de $4.30 en productividad y retención.</p>
                </div>
            `
        },
        innovacion: {
            title: 'Innovación y diversificación',
            content: `
                <h3>Motor de Crecimiento Organizacional</h3>
                <p>La innovación y diversificación son estrategias clave para el crecimiento y la sostenibilidad organizacional. Porter (1985) sostiene que "la innovación es la fuente fundamental de ventaja competitiva sostenible".</p>
                
                <h3>Tipos de Innovación</h3>
                <ul>
                    <li><strong>Innovación incremental:</strong> Mejoras graduales en productos, servicios o procesos existentes.</li>
                    <li><strong>Innovación disruptiva:</strong> Creación de nuevos mercados o transformación de industrias existentes.</li>
                    <li><strong>Innovación en modelo de negocio:</strong> Nuevas formas de crear, entregar y capturar valor.</li>
                    <li><strong>Innovación en procesos:</strong> Mejoras en la eficiencia y efectividad operativa.</li>
                </ul>
                
                <h3>Diversificación Estratégica</h3>
                <p>La diversificación puede ser horizontal (nuevos productos en mercados existentes), vertical (integración hacia arriba o abajo en la cadena de valor), o conglomerada (nuevos productos en nuevos mercados). Cummings y Worley (2015) enfatizan la importancia de la sinergia estratégica.</p>
                
                <div class="fact-box">
                    <h4>💡 Cultura de Innovación</h4>
                    <p>Las organizaciones con culturas de innovación fuerte reportan un 50% mayor probabilidad de lanzar productos exitosos y un 30% mejor rendimiento financiero.</p>
                </div>
            `
        },
        mejora: {
            title: 'Mejora en la oferta',
            content: `
                <h3>Excelencia en Productos y Servicios</h3>
                <p>La mejora continua en la oferta es esencial para mantener la competitividad y satisfacer las expectativas cambiantes del cliente. Ulrich (1997) sostiene que "la calidad de los productos y servicios es un reflejo directo de la calidad del capital humano".</p>
                
                <h3>Dimensiones de la Mejora</h3>
                <ul>
                    <li><strong>Calidad:</strong> Consistencia y confiabilidad en la entrega de valor.</li>
                    <li><strong>Funcionalidad:</strong> Características y capacidades que satisfacen necesidades del cliente.</li>
                    <li><strong>Experiencia del usuario:</strong> Facilidad de uso y satisfacción emocional.</li>
                    <li><strong>Innovación:</strong> Nuevas características que crean valor diferenciado.</li>
                    <li><strong>Sostenibilidad:</strong> Impacto ambiental y social positivo.</li>
                </ul>
                
                <h3>Proceso de Mejora Continua</h3>
                <p>La mejora continua requiere un enfoque sistemático que incluya retroalimentación del cliente, análisis de datos, experimentación y aprendizaje organizacional. Kotter (1996) enfatiza la importancia de crear una cultura de mejora constante.</p>
                
                <div class="fact-box">
                    <h4>📊 Satisfacción del Cliente</h4>
                    <p>Las organizaciones que implementan programas de mejora continua reportan incrementos del 25% en satisfacción del cliente y reducciones del 20% en costos de calidad.</p>
                </div>
            `
        },
        adaptacion: {
            title: 'Adaptación al mercado',
            content: `
                <h3>Flexibilidad Estratégica</h3>
                <p>La adaptación al mercado es una capacidad crítica para la supervivencia y el éxito organizacional. Porter (1985) argumenta que "las organizaciones deben adaptar constantemente su estrategia para responder a cambios en el entorno competitivo".</p>
                
                <h3>Factores de Adaptación</h3>
                <ul>
                    <li><strong>Análisis del mercado:</strong> Monitoreo continuo de tendencias, competidores y necesidades del cliente.</li>
                    <li><strong>Flexibilidad operativa:</strong> Capacidad para ajustar procesos y recursos rápidamente.</li>
                    <li><strong>Innovación ágil:</strong> Desarrollo rápido de nuevas ofertas en respuesta a oportunidades.</li>
                    <li><strong>Colaboración estratégica:</strong> Alianzas y partnerships para ampliar capacidades.</li>
                </ul>
                
                <h3>Capacidades de Adaptación</h3>
                <p>Cummings y Worley (2015) identifican la "capacidad de adaptación" como una competencia organizacional clave que incluye sensibilidad al entorno, flexibilidad estructural y capacidad de aprendizaje. Las organizaciones adaptativas prosperan en entornos inciertos.</p>
                
                <div class="fact-box">
                    <h4>🔄 Velocidad de Adaptación</h4>
                    <p>Las organizaciones con alta capacidad de adaptación reportan un 40% mayor probabilidad de éxito en mercados turbulentos y un 30% mejor rendimiento financiero.</p>
                </div>
            `
        },
        // II. ¿Por qué cambian las organizaciones?
        competencia: {
            title: 'Competencia y presión del mercado',
            content: `
                <h3>Entorno Competitivo</h3>
                <p>La competencia y presión del mercado son fuerzas motrices fundamentales del cambio organizacional. Porter (1985) identifica cinco fuerzas competitivas que moldean la estrategia organizacional: "competidores existentes, nuevos entrantes, productos sustitutos, poder de negociación de proveedores y poder de negociación de compradores".</p>
                
                <h3>Impacto de la Competencia</h3>
                <ul>
                    <li><strong>Presión de precios:</strong> Competidores que ofrecen productos similares a menor costo.</li>
                    <li><strong>Innovación acelerada:</strong> Necesidad de desarrollar nuevos productos y servicios más rápido.</li>
                    <li><strong>Diferenciación:</strong> Búsqueda de características únicas para destacar en el mercado.</li>
                    <li><strong>Eficiencia operativa:</strong> Optimización de procesos para reducir costos.</li>
                </ul>
                
                <h3>Respuesta Estratégica</h3>
                <p>Cummings y Worley (2015) sostienen que "las organizaciones deben desarrollar capacidades dinámicas para responder rápidamente a cambios en el entorno competitivo". Esto incluye flexibilidad estructural, capacidad de aprendizaje y agilidad estratégica.</p>
                
                <div class="fact-box">
                    <h4>🏆 Ventaja Competitiva</h4>
                    <p>El 75% de las organizaciones que responden proactivamente a la competencia mantienen o mejoran su posición de mercado.</p>
                </div>
            `
        },
        mercado: {
            title: 'Cambios en el mercado o cliente',
            content: `
                <h3>Evolución de las Necesidades del Cliente</h3>
                <p>Los cambios en el mercado y las necesidades del cliente son catalizadores fundamentales del cambio organizacional. Ulrich (1997) enfatiza que "las organizaciones exitosas mantienen una conexión profunda con sus clientes y adaptan sus ofertas según evolucionan las necesidades del mercado".</p>
                
                <h3>Tipos de Cambios en el Mercado</h3>
                <ul>
                    <li><strong>Cambios demográficos:</strong> Evolución en edad, género, ingresos y preferencias de los consumidores.</li>
                    <li><strong>Cambios tecnológicos:</strong> Nuevas tecnologías que crean nuevas necesidades y expectativas.</li>
                    <li><strong>Cambios sociales:</strong> Evolución de valores, creencias y comportamientos sociales.</li>
                    <li><strong>Cambios regulatorios:</strong> Nuevas leyes y regulaciones que afectan el mercado.</li>
                </ul>
                
                <h3>Adaptación Organizacional</h3>
                <p>Kotter (1996) argumenta que "las organizaciones que no se adaptan a los cambios del mercado están condenadas al fracaso". La adaptación requiere sensibilidad al entorno, flexibilidad estratégica y capacidad de innovación.</p>
                
                <div class="fact-box">
                    <h4>📊 Satisfacción del Cliente</h4>
                    <p>Las organizaciones que se adaptan rápidamente a cambios del mercado reportan un 40% mayor satisfacción del cliente y un 30% mejor retención.</p>
                </div>
            `
        },
        'avances-tec': {
            title: 'Avances tecnológicos',
            content: `
                <h3>Revolución Tecnológica</h3>
                <p>Los avances tecnológicos están transformando fundamentalmente cómo las organizaciones operan y compiten. Según el World Economic Forum, "la Cuarta Revolución Industrial está cambiando la naturaleza del trabajo y las competencias requeridas" (WEF, 2020).</p>
                
                <h3>Tecnologías Disruptivas</h3>
                <ul>
                    <li><strong>Inteligencia Artificial:</strong> Machine learning, procesamiento de lenguaje natural, visión computacional.</li>
                    <li><strong>Internet de las Cosas (IoT):</strong> Conectividad de dispositivos y sensores.</li>
                    <li><strong>Blockchain:</strong> Tecnología de registro distribuido para transacciones seguras.</li>
                    <li><strong>Computación en la nube:</strong> Acceso a recursos informáticos bajo demanda.</li>
                    <li><strong>Realidad aumentada/virtual:</strong> Nuevas formas de interacción y experiencia.</li>
                </ul>
                
                <h3>Impacto Organizacional</h3>
                <p>Becker (1964) sostiene que "el capital humano se vuelve más valioso en la era de la automatización, ya que las habilidades creativas y analíticas son complementarias a la tecnología". Las organizaciones deben invertir en el desarrollo de estas habilidades.</p>
                
                <div class="fact-box">
                    <h4>🚀 Transformación Digital</h4>
                    <p>El 80% de las organizaciones que adoptan tecnologías emergentes reportan mejoras significativas en eficiencia y competitividad.</p>
                </div>
            `
        },
        legales: {
            title: 'Cambios legales o regulatorios',
            content: `
                <h3>Marco Regulatorio</h3>
                <p>Los cambios legales y regulatorios pueden obligar a las organizaciones a modificar sus prácticas, productos y procesos. Cummings y Worley (2015) enfatizan que "el cumplimiento regulatorio no es solo una obligación legal, sino también una oportunidad para mejorar la gestión organizacional".</p>
                
                <h3>Tipos de Cambios Regulatorios</h3>
                <ul>
                    <li><strong>Regulaciones ambientales:</strong> Normas sobre emisiones, residuos y sostenibilidad.</li>
                    <li><strong>Regulaciones laborales:</strong> Leyes sobre condiciones de trabajo, seguridad y derechos.</li>
                    <li><strong>Regulaciones de seguridad:</strong> Normas sobre protección de datos y ciberseguridad.</li>
                    <li><strong>Regulaciones comerciales:</strong> Leyes sobre competencia, comercio y protección al consumidor.</li>
                </ul>
                
                <h3>Gestión del Cumplimiento</h3>
                <p>Schein (2010) sostiene que "las organizaciones que integran el cumplimiento regulatorio en su cultura organizacional logran mayor eficiencia y menor riesgo". Esto requiere sistemas de monitoreo, capacitación continua y liderazgo comprometido.</p>
                
                <div class="fact-box">
                    <h4>⚖️ Cumplimiento</h4>
                    <p>Las organizaciones con sistemas robustos de cumplimiento regulatorio experimentan un 60% menor riesgo legal y mejor reputación corporativa.</p>
                </div>
            `
        },
        economicos: {
            title: 'Factores económicos, sociales o políticos',
            content: `
                <h3>Entorno Macroeconómico</h3>
                <p>Los factores económicos, sociales y políticos crean un contexto que influye significativamente en las decisiones organizacionales. Porter (1985) argumenta que "las organizaciones deben analizar constantemente el entorno macroeconómico para identificar oportunidades y amenazas".</p>
                
                <h3>Factores Clave</h3>
                <ul>
                    <li><strong>Factores económicos:</strong> Crecimiento del PIB, inflación, tasas de interés, desempleo.</li>
                    <li><strong>Factores sociales:</strong> Cambios demográficos, valores sociales, tendencias de consumo.</li>
                    <li><strong>Factores políticos:</strong> Estabilidad gubernamental, políticas públicas, relaciones internacionales.</li>
                    <li><strong>Factores geográficos:</strong> Globalización, regionalización, cambios en patrones comerciales.</li>
                </ul>
                
                <h3>Adaptación Estratégica</h3>
                <p>Kotter (1996) enfatiza que "las organizaciones exitosas desarrollan capacidades de anticipación y adaptación a cambios en el entorno macroeconómico". Esto incluye análisis de escenarios, flexibilidad estratégica y gestión de riesgos.</p>
                
                <div class="fact-box">
                    <h4>🌍 Análisis del Entorno</h4>
                    <p>Las organizaciones que monitorean proactivamente factores macroeconómicos reportan un 35% mejor capacidad de anticipación y adaptación a cambios.</p>
                </div>
            `
        },
        eficiencia: {
            title: 'Mejorar la eficiencia',
            content: `
                <h3>Optimización Organizacional</h3>
                <p>La búsqueda de mayor eficiencia es un motor fundamental del cambio organizacional. Armstrong (2014) sostiene que "la eficiencia organizacional es la relación entre los resultados logrados y los recursos utilizados para alcanzarlos".</p>
                
                <h3>Dimensiones de la Eficiencia</h3>
                <ul>
                    <li><strong>Eficiencia operativa:</strong> Optimización de procesos y uso de recursos.</li>
                    <li><strong>Eficiencia financiera:</strong> Maximización del retorno sobre la inversión.</li>
                    <li><strong>Eficiencia energética:</strong> Reducción del consumo de energía y recursos naturales.</li>
                    <li><strong>Eficiencia del tiempo:</strong> Optimización de la gestión del tiempo y productividad.</li>
                </ul>
                
                <h3>Estrategias de Mejora</h3>
                <p>Ulrich (1997) enfatiza que "la mejora de la eficiencia debe ir acompañada del desarrollo del capital humano, ya que las personas son el motor de la productividad organizacional". Las estrategias incluyen automatización, reingeniería de procesos y desarrollo de competencias.</p>
                
                <div class="fact-box">
                    <h4>📈 Productividad</h4>
                    <p>Las organizaciones que implementan programas de mejora de eficiencia reportan incrementos promedio del 25% en productividad y reducciones del 20% en costos operativos.</p>
                </div>
            `
        },
        desempeno: {
            title: 'Problemas de desempeño',
            content: `
                <h3>Indicadores de Desempeño</h3>
                <p>Los problemas de desempeño son señales claras de la necesidad de cambio organizacional. Cummings y Worley (2015) sostienen que "el análisis sistemático del desempeño organizacional es fundamental para identificar áreas de mejora y oportunidades de cambio".</p>
                
                <h3>Tipos de Problemas de Desempeño</h3>
                <ul>
                    <li><strong>Problemas de productividad:</strong> Baja eficiencia y rendimiento operativo.</li>
                    <li><strong>Problemas de calidad:</strong> Defectos, errores y baja satisfacción del cliente.</li>
                    <li><strong>Problemas de innovación:</strong> Falta de nuevos productos o servicios.</li>
                    <li><strong>Problemas de satisfacción:</strong> Baja moral y rotación de empleados.</li>
                    <li><strong>Problemas financieros:</strong> Pérdidas, baja rentabilidad o problemas de liquidez.</li>
                </ul>
                
                <h3>Diagnóstico y Solución</h3>
                <p>Schein (2010) enfatiza que "el diagnóstico organizacional debe ser sistemático y considerar múltiples niveles: individual, grupal y organizacional". La solución requiere identificación de causas raíz, diseño de intervenciones y evaluación de resultados.</p>
                
                <div class="fact-box">
                    <h4>🔍 Diagnóstico</h4>
                    <p>El 70% de los problemas de desempeño organizacional tienen causas sistémicas que requieren cambios estructurales o culturales.</p>
                </div>
            `
        },
        metas: {
            title: 'Nuevas metas estratégicas',
            content: `
                <h3>Evolución Estratégica</h3>
                <p>El establecimiento de nuevas metas estratégicas es un catalizador fundamental del cambio organizacional. Porter (1985) sostiene que "la estrategia competitiva consiste en ser diferente, en elegir deliberadamente un conjunto diferente de actividades para ofrecer una mezcla única de valor".</p>
                
                <h3>Tipos de Metas Estratégicas</h3>
                <ul>
                    <li><strong>Metas de crecimiento:</strong> Expansión de mercado, nuevos productos o servicios.</li>
                    <li><strong>Metas de eficiencia:</strong> Optimización de procesos y reducción de costos.</li>
                    <li><strong>Metas de innovación:</strong> Desarrollo de nuevas capacidades y tecnologías.</li>
                    <li><strong>Metas de sostenibilidad:</strong> Impacto ambiental y social positivo.</li>
                    <li><strong>Metas de diversificación:</strong> Expansión a nuevos mercados o industrias.</li>
                </ul>
                
                <h3>Implementación Estratégica</h3>
                <p>Kotter (1996) propone un proceso de ocho pasos para implementar cambios estratégicos, enfatizando la importancia de crear urgencia, formar coaliciones guía y comunicar la visión de manera efectiva.</p>
                
                <div class="fact-box">
                    <h4>🎯 Alineación</h4>
                    <p>Las organizaciones con metas estratégicas claras y bien comunicadas experimentan un 40% mayor alineación organizacional y mejor rendimiento.</p>
                </div>
            `
        },
        'cultura-obs': {
            title: 'Cultura organizacional obsoleta',
            content: `
                <h3>Evolución Cultural</h3>
                <p>La cultura organizacional obsoleta puede convertirse en una barrera significativa para el cambio y la adaptación. Schein (2010) define la cultura como "un patrón de creencias y expectativas compartidas que producen normas que modelan el comportamiento de los miembros de la organización".</p>
                
                <h3>Señales de Obsolescencia Cultural</h3>
                <ul>
                    <li><strong>Resistencia al cambio:</strong> Actitudes negativas hacia nuevas ideas y procesos.</li>
                    <li><strong>Jerarquías rígidas:</strong> Estructuras de poder inflexibles y comunicación vertical.</li>
                    <li><strong>Falta de innovación:</strong> Cultura que no fomenta la creatividad y experimentación.</li>
                    <li><strong>Baja colaboración:</strong> Trabajo en silos y falta de cooperación entre departamentos.</li>
                    <li><strong>Valores desalineados:</strong> Creencias que no reflejan las necesidades actuales.</li>
                </ul>
                
                <h3>Transformación Cultural</h3>
                <p>Kotter (1996) enfatiza que "el cambio cultural es el más difícil de lograr, ya que requiere modificar creencias profundamente arraigadas". El proceso incluye identificación de valores actuales, definición de valores deseados y alineación de comportamientos.</p>
                
                <div class="fact-box">
                    <h4>🔄 Cambio Cultural</h4>
                    <p>Las organizaciones que transforman exitosamente su cultura reportan un 50% mayor innovación y un 30% mejor retención de talento.</p>
                </div>
            `
        },
        'liderazgo': {
            title: 'Nuevo liderazgo',
            content: `
                <h3>Transición de Liderazgo</h3>
                <p>La llegada de nuevos líderes puede traer consigo una visión renovada y cambios significativos en la organización. Ulrich (1997) sostiene que "el liderazgo efectivo es fundamental para el éxito del cambio organizacional y el desarrollo del capital humano".</p>
                
                <h3>Impacto del Nuevo Liderazgo</h3>
                <ul>
                    <li><strong>Nueva visión estratégica:</strong> Reorientación de la dirección y objetivos organizacionales.</li>
                    <li><strong>Cambios en la cultura:</strong> Modificación de valores, creencias y comportamientos.</li>
                    <li><strong>Reestructuración:</strong> Modificación de estructuras, procesos y roles.</li>
                    <li><strong>Desarrollo de talento:</strong> Nuevos enfoques para la gestión del capital humano.</li>
                    <li><strong>Innovación:</strong> Fomento de nuevas ideas y enfoques.</li>
                </ul>
                
                <h3>Gestión de la Transición</h3>
                <p>Schein (2010) enfatiza que "los nuevos líderes deben manejar cuidadosamente la transición para minimizar la resistencia y maximizar el compromiso organizacional". Esto incluye comunicación efectiva, participación de stakeholders y gestión del cambio.</p>
                
                <div class="fact-box">
                    <h4>👥 Liderazgo Efectivo</h4>
                    <p>El 65% de las organizaciones que experimentan transiciones de liderazgo exitosas reportan mejoras significativas en rendimiento y satisfacción organizacional.</p>
                </div>
            `
        },
        'adaptacion': {
            title: 'Adaptación o liderazgo del cambio',
            content: `
                <h3>Capacidad de Adaptación</h3>
                <p>La capacidad de adaptación o liderazgo del cambio es una competencia organizacional crítica en entornos dinámicos. Cummings y Worley (2015) identifican la "capacidad de adaptación" como una competencia organizacional clave que incluye sensibilidad al entorno, flexibilidad estructural y capacidad de aprendizaje.</p>
                
                <h3>Dimensiones de la Adaptación</h3>
                <ul>
                    <li><strong>Sensibilidad al entorno:</strong> Capacidad de detectar cambios y oportunidades.</li>
                    <li><strong>Flexibilidad estructural:</strong> Capacidad de modificar estructuras y procesos rápidamente.</li>
                    <li><strong>Capacidad de aprendizaje:</strong> Habilidad para aprender de experiencias y aplicar conocimientos.</li>
                    <li><strong>Innovación continua:</strong> Fomento de nuevas ideas y enfoques.</li>
                    <li><strong>Colaboración:</strong> Trabajo en equipo y cooperación interdepartamental.</li>
                </ul>
                
                <h3>Desarrollo de Capacidades</h3>
                <p>Kotter (1996) sostiene que "las organizaciones adaptativas desarrollan culturas que valoran el cambio, la experimentación y el aprendizaje continuo". Esto requiere liderazgo comprometido, sistemas de aprendizaje y gestión del conocimiento.</p>
                
                <div class="fact-box">
                    <h4>🔄 Agilidad Organizacional</h4>
                    <p>Las organizaciones con alta capacidad de adaptación reportan un 40% mayor probabilidad de éxito en mercados turbulentos y un 30% mejor rendimiento financiero.</p>
                </div>
            `
        },
        diversificacion: {
            title: 'Diversificación',
            content: `
                <h3>Estrategia de Diversificación</h3>
                <p>La diversificación es una estrategia de crecimiento que implica expandirse a nuevos mercados, productos o servicios. Porter (1985) sostiene que "la diversificación exitosa requiere sinergias estratégicas que creen valor superior al que se podría lograr operando las unidades por separado".</p>
                
                <h3>Tipos de Diversificación</h3>
                <ul>
                    <li><strong>Diversificación horizontal:</strong> Nuevos productos en mercados existentes.</li>
                    <li><strong>Diversificación vertical:</strong> Integración hacia arriba o abajo en la cadena de valor.</li>
                    <li><strong>Diversificación conglomerada:</strong> Nuevos productos en nuevos mercados.</li>
                    <li><strong>Diversificación relacionada:</strong> Nuevos productos que comparten recursos o competencias.</li>
                    <li><strong>Diversificación no relacionada:</strong> Nuevos productos sin relación con el negocio actual.</li>
                </ul>
                
                <h3>Factores de Éxito</h3>
                <p>Ulrich (1997) enfatiza que "la diversificación exitosa requiere capital humano con las competencias necesarias para operar en nuevos mercados o industrias". Esto incluye desarrollo de competencias, gestión del conocimiento y transferencia de mejores prácticas.</p>
                
                <div class="fact-box">
                    <h4>📈 Crecimiento</h4>
                    <p>Las organizaciones que diversifican exitosamente reportan un 35% mayor crecimiento de ingresos y mejor distribución de riesgos.</p>
                </div>
            `
        },
        supervivencia: {
            title: 'Supervivencia',
            content: `
                <h3>Imperativo de Supervivencia</h3>
                <p>La supervivencia organizacional es el imperativo más básico que impulsa el cambio. Kotter (1996) enfatiza que "en entornos turbulentos, el cambio no es opcional; es una cuestión de supervivencia". Las organizaciones que no se adaptan están condenadas al fracaso.</p>
                
                <h3>Factores de Supervivencia</h3>
                <ul>
                    <li><strong>Adaptación al entorno:</strong> Capacidad de responder a cambios en el mercado y la competencia.</li>
                    <li><strong>Innovación continua:</strong> Desarrollo de nuevos productos, servicios y procesos.</li>
                    <li><strong>Eficiencia operativa:</strong> Optimización de recursos y procesos.</li>
                    <li><strong>Capital humano:</strong> Desarrollo y retención de talento clave.</li>
                    <li><strong>Gestión financiera:</strong> Mantenimiento de la viabilidad económica.</li>
                </ul>
                
                <h3>Estrategias de Supervivencia</h3>
                <p>Cummings y Worley (2015) sostienen que "las organizaciones que prosperan en entornos turbulentos desarrollan capacidades de anticipación, adaptación y aprendizaje continuo". Esto requiere liderazgo visionario, cultura de cambio y sistemas de gestión ágiles.</p>
                
                <div class="fact-box">
                    <h4>🛡️ Resiliencia</h4>
                    <p>Las organizaciones con alta capacidad de adaptación tienen un 60% mayor probabilidad de supervivencia en crisis económicas y cambios del mercado.</p>
                </div>
            `
        },
        // III. ¿Cómo cambian las organizaciones?
        areas: {
            title: 'Afecta todas las áreas de la organización',
            content: `
                <h3>Impacto Integral del Cambio</h3>
                <p>El cambio organizacional puede afectar todas las áreas de la organización, creando una transformación sistémica. Cummings y Worley (2015) sostienen que "el cambio efectivo requiere una perspectiva sistémica que considere las interrelaciones entre diferentes partes de la organización".</p>
                
                <h3>Áreas Susceptibles de Cambio</h3>
                <ul>
                    <li><strong>Estructura organizacional:</strong> Jerarquías, roles y responsabilidades.</li>
                    <li><strong>Procesos y sistemas:</strong> Flujos de trabajo y procedimientos.</li>
                    <li><strong>Cultura y clima:</strong> Valores, creencias y comportamientos.</li>
                    <li><strong>Tecnología:</strong> Herramientas y plataformas digitales.</li>
                    <li><strong>Capital humano:</strong> Competencias y desarrollo de talento.</li>
                </ul>
                
                <h3>Gestión del Cambio Sistémico</h3>
                <p>Kotter (1996) enfatiza que "el cambio sistémico requiere liderazgo comprometido, comunicación efectiva y participación de todos los niveles organizacionales". La gestión debe ser integral y considerar las interdependencias.</p>
                
                <div class="fact-box">
                    <h4>🔄 Cambio Sistémico</h4>
                    <p>El 80% de los cambios organizacionales exitosos consideran el impacto en todas las áreas de la organización.</p>
                </div>
            `
        },
        totalidad: {
            title: 'Puede ocurrir en la totalidad o partes específicas',
            content: `
                <h3>Alcance del Cambio Organizacional</h3>
                <p>El cambio organizacional puede ser total o parcial, dependiendo de la naturaleza y objetivos de la transformación. Schein (2010) distingue entre "cambio evolutivo" (gradual y parcial) y "cambio revolucionario" (rápido y total).</p>
                
                <h3>Tipos de Alcance</h3>
                <ul>
                    <li><strong>Cambio total:</strong> Transformación que afecta toda la organización.</li>
                    <li><strong>Cambio parcial:</strong> Modificaciones en áreas o departamentos específicos.</li>
                    <li><strong>Cambio incremental:</strong> Mejoras graduales en procesos existentes.</li>
                    <li><strong>Cambio transformacional:</strong> Reestructuración fundamental de la organización.</li>
                </ul>
                
                <h3>Factores que Determinan el Alcance</h3>
                <p>Ulrich (1997) sostiene que "el alcance del cambio debe determinarse según la urgencia, la magnitud del problema y la capacidad organizacional para el cambio". La evaluación cuidadosa es crucial para el éxito.</p>
                
                <div class="fact-box">
                    <h4>📊 Efectividad</h4>
                    <p>Los cambios parciales tienen un 70% de éxito, mientras que los cambios totales requieren mayor preparación y recursos.</p>
                </div>
            `
        },
        tipos: {
            title: 'Lineal, discontinuo, radical o progresivo',
            content: `
                <h3>Tipologías del Cambio Organizacional</h3>
                <p>Los cambios organizacionales pueden clasificarse según su naturaleza y velocidad. Porter (1985) sostiene que "la elección del tipo de cambio debe alinearse con la estrategia competitiva y la capacidad organizacional".</p>
                
                <h3>Clasificaciones del Cambio</h3>
                <ul>
                    <li><strong>Cambio lineal:</strong> Progresión gradual y predecible.</li>
                    <li><strong>Cambio discontinuo:</strong> Transformaciones abruptas y no lineales.</li>
                    <li><strong>Cambio radical:</strong> Transformación fundamental y disruptiva.</li>
                    <li><strong>Cambio progresivo:</strong> Mejoras continuas y evolutivas.</li>
                </ul>
                
                <h3>Implicaciones Estratégicas</h3>
                <p>Cummings y Worley (2015) enfatizan que "cada tipo de cambio requiere diferentes enfoques de gestión, liderazgo y comunicación". La selección debe considerar el contexto organizacional y las capacidades disponibles.</p>
                
                <div class="fact-box">
                    <h4>🎯 Selección Estratégica</h4>
                    <p>El 60% de las organizaciones exitosas combinan diferentes tipos de cambio según las necesidades específicas.</p>
                </div>
            `
        },
        superficial: {
            title: 'Cambio superficial o de superficie',
            content: `
                <h3>Cambios de Primer Nivel</h3>
                <p>Los cambios superficiales modifican aspectos visibles de la organización sin alterar su esencia fundamental. Schein (2010) los describe como "cambios que afectan comportamientos y procesos sin modificar valores y creencias profundas".</p>
                
                <h3>Características del Cambio Superficial</h3>
                <ul>
                    <li><strong>Modificaciones cosméticas:</strong> Cambios en apariencia sin alterar estructura.</li>
                    <li><strong>Ajustes de procedimientos:</strong> Mejoras en procesos existentes.</li>
                    <li><strong>Cambios de personal:</strong> Reasignaciones menores de roles.</li>
                    <li><strong>Actualizaciones tecnológicas:</strong> Mejoras incrementales en herramientas.</li>
                </ul>
                
                <h3>Limitaciones y Oportunidades</h3>
                <p>Kotter (1996) advierte que "los cambios superficiales pueden crear la ilusión de progreso sin abordar problemas fundamentales". Sin embargo, pueden ser útiles como primer paso hacia transformaciones más profundas.</p>
                
                <div class="fact-box">
                    <h4>⚠️ Advertencia</h4>
                    <p>Los cambios superficiales tienen un 40% de efectividad a largo plazo comparado con cambios estructurales.</p>
                </div>
            `
        },
        profundo: {
            title: 'Cambio profundo o estructural',
            content: `
                <h3>Transformación Fundamental</h3>
                <p>El cambio profundo modifica la estructura fundamental, cultura y valores de la organización. Cummings y Worley (2015) lo definen como "transformación que altera la identidad y propósito fundamental de la organización".</p>
                
                <h3>Elementos del Cambio Profundo</h3>
                <ul>
                    <li><strong>Transformación cultural:</strong> Modificación de valores y creencias fundamentales.</li>
                    <li><strong>Reestructuración organizacional:</strong> Cambios en jerarquías y sistemas de poder.</li>
                    <li><strong>Evolución estratégica:</strong> Redefinición de misión, visión y objetivos.</li>
                    <li><strong>Cambio de paradigma:</strong> Nuevas formas de pensar y operar.</li>
                </ul>
                
                <h3>Desafíos y Requisitos</h3>
                <p>Schein (2010) enfatiza que "el cambio profundo requiere tiempo, recursos significativos y liderazgo comprometido". Es un proceso complejo que puede generar resistencia pero ofrece beneficios duraderos.</p>
                
                <div class="fact-box">
                    <h4>💎 Valor Duradero</h4>
                    <p>Los cambios profundos tienen un 85% de efectividad a largo plazo y crean ventajas competitivas sostenibles.</p>
                </div>
            `
        },
        planeado: {
            title: 'Cambio planeado',
            content: `
                <h3>Gestión Estratégica del Cambio</h3>
                <p>El cambio planeado es resultado de una estrategia deliberada y sistemática. Kotter (1996) sostiene que "el cambio planeado exitoso requiere un proceso estructurado de ocho pasos que incluye crear urgencia, formar coaliciones y comunicar visión".</p>
                
                <h3>Fases del Cambio Planeado</h3>
                <ul>
                    <li><strong>Diagnóstico:</strong> Análisis de la situación actual y necesidades.</li>
                    <li><strong>Planificación:</strong> Diseño de estrategias y objetivos.</li>
                    <li><strong>Implementación:</strong> Ejecución sistemática del plan.</li>
                    <li><strong>Evaluación:</strong> Monitoreo y ajustes del proceso.</li>
                </ul>
                
                <h3>Factores de Éxito</h3>
                <p>Ulrich (1997) enfatiza que "el cambio planeado requiere alineación entre estrategia, estructura, sistemas y personas". La participación de stakeholders y la comunicación efectiva son cruciales.</p>
                
                <div class="fact-box">
                    <h4>📋 Planificación</h4>
                    <p>El 75% de los cambios planeados exitosos incluyen participación activa de empleados en el proceso de diseño.</p>
                </div>
            `
        },
        espontaneo: {
            title: 'Cambio no planeado o espontáneo',
            content: `
                <h3>Adaptación Emergente</h3>
                <p>El cambio espontáneo surge de manera imprevista como respuesta a eventos externos o internos. Cummings y Worley (2015) lo describen como "adaptación emergente que ocurre sin planificación formal pero puede ser gestionada efectivamente".</p>
                
                <h3>Causas del Cambio Espontáneo</h3>
                <ul>
                    <li><strong>Crisis externas:</strong> Cambios en el mercado o entorno competitivo.</li>
                    <li><strong>Eventos internos:</strong> Problemas operativos o de liderazgo.</li>
                    <li><strong>Oportunidades emergentes:</strong> Nuevas tecnologías o mercados.</li>
                    <li><strong>Presiones regulatorias:</strong> Cambios en leyes o regulaciones.</li>
                </ul>
                
                <h3>Gestión del Cambio Emergente</h3>
                <p>Schein (2010) sostiene que "las organizaciones ágiles pueden capitalizar el cambio espontáneo convirtiéndolo en oportunidades estratégicas". Requiere flexibilidad y capacidad de respuesta rápida.</p>
                
                <div class="fact-box">
                    <h4>⚡ Agilidad</h4>
                    <p>Las organizaciones con alta capacidad de adaptación aprovechan el 60% de las oportunidades emergentes.</p>
                </div>
            `
        },
        descongelar: {
            title: 'Descongelar',
            content: `
                <h3>Primera Fase del Modelo de Lewin</h3>
                <p>La fase de descongelar prepara a la organización para el cambio cuestionando el statu quo. Lewin (1947) sostiene que "el cambio requiere crear insatisfacción con la situación actual y motivación para la transformación".</p>
                
                <h3>Actividades de Descongelar</h3>
                <ul>
                    <li><strong>Crear urgencia:</strong> Comunicar la necesidad imperiosa del cambio.</li>
                    <li><strong>Cuestionar creencias:</strong> Desafiar supuestos y valores existentes.</li>
                    <li><strong>Reducir resistencia:</strong> Abordar miedos y preocupaciones.</li>
                    <li><strong>Construir coaliciones:</strong> Formar alianzas de apoyo al cambio.</li>
                </ul>
                
                <h3>Importancia Estratégica</h3>
                <p>Kotter (1996) enfatiza que "sin una fase de descongelar efectiva, los esfuerzos de cambio están condenados al fracaso". Es fundamental para crear la base psicológica del cambio.</p>
                
                <div class="fact-box">
                    <h4>🧊 Fundación</h4>
                    <p>El 70% del éxito del cambio depende de una fase de descongelar bien ejecutada.</p>
                </div>
            `
        },
        cambiar: {
            title: 'Cambiar (movimiento)',
            content: `
                <h3>Segunda Fase del Modelo de Lewin</h3>
                <p>La fase de cambio implementa las transformaciones planificadas. Lewin (1947) describe esta fase como "el período de transición donde se introducen nuevas ideas, procesos y estructuras".</p>
                
                <h3>Elementos del Proceso de Cambio</h3>
                <ul>
                    <li><strong>Implementación gradual:</strong> Introducción progresiva de nuevas prácticas.</li>
                    <li><strong>Capacitación:</strong> Desarrollo de habilidades necesarias.</li>
                    <li><strong>Experimentación:</strong> Prueba de nuevos enfoques y procesos.</li>
                    <li><strong>Ajustes continuos:</strong> Modificaciones basadas en retroalimentación.</li>
                </ul>
                
                <h3>Gestión de la Transición</h3>
                <p>Cummings y Worley (2015) sostienen que "la fase de cambio requiere liderazgo activo, comunicación constante y gestión de la resistencia". Es un período de alta incertidumbre que necesita apoyo continuo.</p>
                
                <div class="fact-box">
                    <h4>🔄 Transición</h4>
                    <p>La fase de cambio típicamente dura entre 6-18 meses dependiendo de la magnitud de la transformación.</p>
                </div>
            `
        },
        recongelar: {
            title: 'Recongelar',
            content: `
                <h3>Tercera Fase del Modelo de Lewin</h3>
                <p>La fase de recongelar estabiliza la organización tras el cambio, consolidando las nuevas prácticas. Lewin (1947) enfatiza que "sin recongelar, las organizaciones tienden a volver a sus patrones anteriores".</p>
                
                <h3>Actividades de Recongelar</h3>
                <ul>
                    <li><strong>Institucionalizar cambios:</strong> Integrar nuevas prácticas en sistemas formales.</li>
                    <li><strong>Recompensar comportamientos:</strong> Reconocer y premiar nuevas conductas.</li>
                    <li><strong>Comunicar éxitos:</strong> Compartir logros y beneficios del cambio.</li>
                    <li><strong>Desarrollar cultura:</strong> Alinear valores y creencias con nuevas prácticas.</li>
                </ul>
                
                <h3>Consolidación del Cambio</h3>
                <p>Schein (2010) sostiene que "el recongelar efectivo requiere tiempo y consistencia en el refuerzo de nuevos comportamientos". Es crucial para asegurar la sostenibilidad del cambio.</p>
                
                <div class="fact-box">
                    <h4>❄️ Sostenibilidad</h4>
                    <p>El 80% de los cambios exitosos incluyen una fase de recongelar bien planificada y ejecutada.</p>
                </div>
            `
        },
        'tipos-resistencia': {
            title: 'Abierta o encubierta',
            content: `
                <h3>Manifestaciones de la Resistencia</h3>
                <p>La resistencia al cambio puede manifestarse de manera visible o sutil. Kotter (1996) sostiene que "la resistencia es una respuesta natural al cambio que debe ser anticipada y gestionada proactivamente".</p>
                
                <h3>Tipos de Resistencia</h3>
                <ul>
                    <li><strong>Resistencia abierta:</strong> Oposición visible y directa al cambio.</li>
                    <li><strong>Resistencia encubierta:</strong> Resistencia sutil y difícil de detectar.</li>
                    <li><strong>Resistencia pasiva:</strong> Falta de participación o entusiasmo.</li>
                    <li><strong>Resistencia activa:</strong> Acciones deliberadas para obstaculizar el cambio.</li>
                </ul>
                
                <h3>Gestión de la Resistencia</h3>
                <p>Ulrich (1997) enfatiza que "la gestión efectiva de la resistencia requiere comprensión de sus causas raíz y estrategias específicas para cada tipo". La comunicación y participación son herramientas clave.</p>
                
                <div class="fact-box">
                    <h4>🛡️ Anticipación</h4>
                    <p>El 90% de las organizaciones experimentan resistencia al cambio, pero solo el 30% la gestionan efectivamente.</p>
                </div>
            `
        },
        origen: {
            title: 'Individual o organizacional',
            content: `
                <h3>Fuentes de la Resistencia</h3>
                <p>La resistencia al cambio puede originarse a nivel individual o organizacional. Cummings y Worley (2015) sostienen que "comprender el origen de la resistencia es fundamental para diseñar estrategias efectivas de gestión".</p>
                
                <h3>Niveles de Resistencia</h3>
                <ul>
                    <li><strong>Resistencia individual:</strong> Miedos personales, inseguridad, pérdida de estatus.</li>
                    <li><strong>Resistencia grupal:</strong> Dinámicas de equipo, normas sociales, cohesión.</li>
                    <li><strong>Resistencia organizacional:</strong> Cultura, sistemas, estructuras formales.</li>
                    <li><strong>Resistencia sistémica:</strong> Interdependencias, recursos, capacidades.</li>
                </ul>
                
                <h3>Estrategias de Intervención</h3>
                <p>Schein (2010) enfatiza que "las intervenciones deben ser diseñadas según el nivel de resistencia y las características específicas de la organización". Requiere enfoques diferenciados.</p>
                
                <div class="fact-box">
                    <h4>🎯 Intervención</h4>
                    <p>Las estrategias de gestión de resistencia deben ser específicas para cada nivel y tipo de resistencia.</p>
                </div>
            `
        },
        estrategias: {
            title: 'Estrategias para reducirla',
            content: `
                <h3>Gestión Proactiva de la Resistencia</h3>
                <p>La reducción efectiva de la resistencia requiere estrategias específicas y bien diseñadas. Kotter (1996) propone "ocho estrategias clave que incluyen comunicación, participación, facilitación y negociación".</p>
                
                <h3>Estrategias Principales</h3>
                <ul>
                    <li><strong>Comunicación efectiva:</strong> Información clara y oportuna sobre el cambio.</li>
                    <li><strong>Participación:</strong> Involucrar a empleados en el diseño e implementación.</li>
                    <li><strong>Capacitación:</strong> Desarrollar habilidades necesarias para el cambio.</li>
                    <li><strong>Facilitación:</strong> Proporcionar recursos y apoyo durante la transición.</li>
                    <li><strong>Negociación:</strong> Acuerdos con grupos resistentes.</li>
                </ul>
                
                <h3>Implementación de Estrategias</h3>
                <p>Ulrich (1997) sostiene que "las estrategias deben ser implementadas de manera sistemática y evaluadas continuamente". La flexibilidad y adaptación son cruciales.</p>
                
                <div class="fact-box">
                    <h4>📈 Efectividad</h4>
                    <p>Las organizaciones que implementan estrategias sistemáticas de gestión de resistencia reportan un 60% mayor éxito en iniciativas de cambio.</p>
                </div>
            `
        },
        'competencia-entorno': {
            title: 'Competencia del entorno',
            content: `
                <h3>Presión Competitiva Externa</h3>
                <p>La competencia del entorno es uno de los impulsores más poderosos del cambio organizacional. Porter (1985) identifica "cinco fuerzas competitivas que crean presión constante para la adaptación y mejora".</p>
                
                <h3>Factores Competitivos</h3>
                <ul>
                    <li><strong>Competidores existentes:</strong> Rivalidad intensa en el mercado.</li>
                    <li><strong>Nuevos entrantes:</strong> Amenaza de competidores potenciales.</li>
                    <li><strong>Productos sustitutos:</strong> Alternativas que satisfacen necesidades similares.</li>
                    <li><strong>Poder de proveedores:</strong> Influencia de la cadena de suministro.</li>
                    <li><strong>Poder de compradores:</strong> Presión de clientes por mejor valor.</li>
                </ul>
                
                <h3>Respuesta Estratégica</h3>
                <p>Cummings y Worley (2015) sostienen que "las organizaciones deben desarrollar capacidades dinámicas para responder rápidamente a cambios en el entorno competitivo". La agilidad es clave.</p>
                
                <div class="fact-box">
                    <h4>🏆 Ventaja Competitiva</h4>
                    <p>El 75% de las organizaciones que responden proactivamente a la competencia mantienen o mejoran su posición de mercado.</p>
                </div>
            `
        },
        crisis: {
            title: 'Crisis e innovación tecnológica',
            content: `
                <h3>Catalizadores del Cambio</h3>
                <p>Las crisis y la innovación tecnológica son impulsores fundamentales del cambio organizacional. Ulrich (1997) sostiene que "las crisis pueden ser oportunidades disfrazadas que impulsan transformaciones necesarias".</p>
                
                <h3>Tipos de Impulsores</h3>
                <ul>
                    <li><strong>Crisis financieras:</strong> Presiones económicas que requieren adaptación.</li>
                    <li><strong>Crisis operativas:</strong> Problemas de eficiencia o calidad.</li>
                    <li><strong>Innovación disruptiva:</strong> Nuevas tecnologías que transforman industrias.</li>
                    <li><strong>Cambios regulatorios:</strong> Nuevas leyes que obligan adaptación.</li>
                </ul>
                
                <h3>Gestión de Crisis y Oportunidades</h3>
                <p>Kotter (1996) enfatiza que "las organizaciones exitosas convierten las crisis en oportunidades de transformación y mejora". Requiere liderazgo visionario y capacidad de adaptación.</p>
                
                <div class="fact-box">
                    <h4>🚀 Transformación</h4>
                    <p>El 60% de las innovaciones exitosas surgen como respuesta a crisis o presiones del mercado.</p>
                </div>
            `
        },
        globalizacion: {
            title: 'Globalización y tecnología',
            content: `
                <h3>Fuerzas Globales de Transformación</h3>
                <p>La globalización y la tecnología están redefiniendo fundamentalmente el entorno empresarial. Porter (1985) sostiene que "la globalización crea nuevas oportunidades y amenazas que requieren adaptación estratégica".</p>
                
                <h3>Impactos de la Globalización</h3>
                <ul>
                    <li><strong>Mercados globales:</strong> Acceso a nuevos clientes y competidores.</li>
                    <li><strong>Cadenas de valor:</strong> Integración de operaciones internacionales.</li>
                    <li><strong>Competencia global:</strong> Presión de competidores internacionales.</li>
                    <li><strong>Estándares globales:</strong> Convergencia de prácticas y regulaciones.</li>
                </ul>
                
                <h3>Adaptación Tecnológica</h3>
                <p>Becker (1964) enfatiza que "la tecnología global requiere capital humano con competencias internacionales y digitales". Las organizaciones deben invertir en desarrollo de talento global.</p>
                
                <div class="fact-box">
                    <h4>🌍 Oportunidad Global</h4>
                    <p>Las organizaciones que aprovechan la globalización y tecnología reportan un 40% mayor crecimiento y expansión internacional.</p>
                </div>
            `
        },
        // IV. ¿Qué es el cambio organizacional?
        proceso: {
            title: 'Proceso de modificación de estructuras',
            content: `
                <h3>Transformación Estructural</h3>
                <p>El cambio organizacional implica modificaciones fundamentales en las estructuras organizacionales. Katz y Kahn (1983) definen el cambio como "un proceso de transformación de sistemas sociales complejos que requiere modificación de estructuras, procesos y comportamientos".</p>
                
                <h3>Elementos de la Modificación Estructural</h3>
                <ul>
                    <li><strong>Jerarquías organizacionales:</strong> Redefinición de niveles y líneas de autoridad.</li>
                    <li><strong>Departamentos y funciones:</strong> Reorganización de áreas y responsabilidades.</li>
                    <li><strong>Sistemas de coordinación:</strong> Nuevos mecanismos de integración.</li>
                    <li><strong>Procesos de decisión:</strong> Modificación de flujos de autoridad.</li>
                </ul>
                
                <h3>Impacto de las Modificaciones</h3>
                <p>Cummings y Worley (2015) sostienen que "las modificaciones estructurales pueden mejorar la eficiencia, comunicación y capacidad de respuesta organizacional". Sin embargo, requieren gestión cuidadosa del cambio.</p>
                
                <div class="fact-box">
                    <h4>🏗️ Estructura</h4>
                    <p>El 70% de las reorganizaciones estructurales exitosas incluyen participación de empleados en el diseño.</p>
                </div>
            `
        },
        procesos: {
            title: 'Cambios en procesos y cultura',
            content: `
                <h3>Transformación de Procesos y Cultura</h3>
                <p>El cambio organizacional abarca tanto modificaciones en procesos como transformaciones culturales. Schein (2010) enfatiza que "la cultura y los procesos están íntimamente relacionados y deben evolucionar juntos".</p>
                
                <h3>Dimensiones del Cambio</h3>
                <ul>
                    <li><strong>Procesos operativos:</strong> Flujos de trabajo y procedimientos.</li>
                    <li><strong>Procesos de gestión:</strong> Sistemas de planificación y control.</li>
                    <li><strong>Cultura organizacional:</strong> Valores, creencias y comportamientos.</li>
                    <li><strong>Clima organizacional:</strong> Percepción del ambiente de trabajo.</li>
                </ul>
                
                <h3>Integración de Cambios</h3>
                <p>Kotter (1996) sostiene que "los cambios en procesos y cultura deben ser alineados y reforzados mutuamente". La consistencia es crucial para el éxito del cambio.</p>
                
                <div class="fact-box">
                    <h4>🔄 Alineación</h4>
                    <p>Las organizaciones que alinean cambios de procesos y cultura reportan un 50% mayor efectividad del cambio.</p>
                </div>
            `
        },
        funcionamiento: {
            title: 'Modificación de formas de funcionamiento',
            content: `
                <h3>Evolución del Funcionamiento Organizacional</h3>
                <p>El cambio organizacional modifica fundamentalmente cómo las organizaciones operan y funcionan. Ulrich (1997) sostiene que "el funcionamiento organizacional debe evolucionar para responder a nuevas demandas y oportunidades".</p>
                
                <h3>Aspectos del Funcionamiento</h3>
                <ul>
                    <li><strong>Modelos de negocio:</strong> Nuevas formas de crear y entregar valor.</li>
                    <li><strong>Estructuras de trabajo:</strong> Organización de tareas y responsabilidades.</li>
                    <li><strong>Sistemas de comunicación:</strong> Flujos de información y colaboración.</li>
                    <li><strong>Mecanismos de coordinación:</strong> Integración de esfuerzos organizacionales.</li>
                </ul>
                
                <h3>Adaptación Continua</h3>
                <p>Porter (1985) enfatiza que "las organizaciones exitosas modifican constantemente su funcionamiento para mantener ventajas competitivas". La flexibilidad es clave.</p>
                
                <div class="fact-box">
                    <h4>⚙️ Funcionamiento</h4>
                    <p>El 65% de las organizaciones que modifican su funcionamiento reportan mejoras significativas en eficiencia y competitividad.</p>
                </div>
            `
        },
        continuo: {
            title: 'Proceso continuo y dinámico',
            content: `
                <h3>Naturaleza Dinámica del Cambio</h3>
                <p>El cambio organizacional es un proceso continuo y dinámico que nunca termina. Heráclito afirmaba que "nada es permanente excepto el cambio", principio que aplica perfectamente a las organizaciones modernas.</p>
                
                <h3>Características del Proceso Continuo</h3>
                <ul>
                    <li><strong>Evolución constante:</strong> Adaptación continua a cambios del entorno.</li>
                    <li><strong>Aprendizaje organizacional:</strong> Mejora continua basada en experiencia.</li>
                    <li><strong>Innovación incremental:</strong> Mejoras graduales en procesos y productos.</li>
                    <li><strong>Flexibilidad adaptativa:</strong> Capacidad de responder rápidamente.</li>
                </ul>
                
                <h3>Gestión del Cambio Continuo</h3>
                <p>Cummings y Worley (2015) sostienen que "las organizaciones exitosas desarrollan capacidades para gestionar el cambio como un proceso continuo, no como eventos aislados".</p>
                
                <div class="fact-box">
                    <h4>🔄 Continuidad</h4>
                    <p>Las organizaciones con culturas de cambio continuo reportan un 40% mayor adaptabilidad y éxito a largo plazo.</p>
                </div>
            `
        },
        planificado: {
            title: 'Puede ser planificado o espontáneo',
            content: `
                <h3>Tipos de Cambio Organizacional</h3>
                <p>El cambio organizacional puede surgir de manera planificada o espontánea. Kotter (1996) distingue entre "cambio planificado" (resultado de estrategia deliberada) y "cambio emergente" (respuesta a eventos inesperados).</p>
                
                <h3>Características de Cada Tipo</h3>
                <ul>
                    <li><strong>Cambio planificado:</strong> Estrategia deliberada, objetivos claros, recursos asignados.</li>
                    <li><strong>Cambio espontáneo:</strong> Respuesta reactiva, adaptación rápida, oportunidad emergente.</li>
                    <li><strong>Cambio híbrido:</strong> Combinación de planificación y adaptación.</li>
                </ul>
                
                <h3>Gestión Diferenciada</h3>
                <p>Schein (2010) enfatiza que "cada tipo de cambio requiere diferentes enfoques de gestión y liderazgo". La flexibilidad es crucial para ambos tipos.</p>
                
                <div class="fact-box">
                    <h4>📋 Flexibilidad</h4>
                    <p>El 60% de las organizaciones exitosas combinan cambios planificados y espontáneos según las necesidades.</p>
                </div>
            `
        },
        adaptacion: {
            title: 'Respuesta a estímulos internos y externos',
            content: `
                <h3>Adaptación Organizacional</h3>
                <p>El cambio organizacional es una respuesta a estímulos tanto internos como externos. Porter (1985) sostiene que "las organizaciones deben adaptarse constantemente a cambios en el entorno competitivo y en sus capacidades internas".</p>
                
                <h3>Tipos de Estímulos</h3>
                <ul>
                    <li><strong>Estímulos externos:</strong> Cambios en mercado, tecnología, regulaciones.</li>
                    <li><strong>Estímulos internos:</strong> Problemas de eficiencia, cultura, liderazgo.</li>
                    <li><strong>Oportunidades:</strong> Nuevas tecnologías, mercados, capacidades.</li>
                    <li><strong>Amenazas:</strong> Competencia, crisis, cambios regulatorios.</li>
                </ul>
                
                <h3>Respuesta Estratégica</h3>
                <p>Ulrich (1997) enfatiza que "las organizaciones exitosas desarrollan capacidades de anticipación y respuesta rápida a estímulos del entorno". La agilidad es clave.</p>
                
                <div class="fact-box">
                    <h4>🎯 Respuesta</h4>
                    <p>Las organizaciones ágiles responden un 50% más rápido a estímulos del entorno que las organizaciones tradicionales.</p>
                </div>
            `
        },
        'katz-kahn': {
            title: 'Katz y Kahn (1983)',
            content: `
                <h3>Fundamentos Teóricos del Cambio</h3>
                <p>Katz y Kahn (1983) proporcionan una base teórica fundamental para entender el cambio organizacional. Su obra "Psicología social de las organizaciones" establece que "las organizaciones son sistemas sociales abiertos que intercambian energía con su entorno".</p>
                
                <h3>Principios Clave</h3>
                <ul>
                    <li><strong>Sistemas abiertos:</strong> Las organizaciones interactúan constantemente con su entorno.</li>
                    <li><strong>Equilibrio dinámico:</strong> Las organizaciones buscan equilibrio mientras cambian.</li>
                    <li><strong>Interdependencia:</strong> Las partes de la organización están interconectadas.</li>
                    <li><strong>Adaptación:</strong> Las organizaciones deben adaptarse para sobrevivir.</li>
                </ul>
                
                <h3>Implicaciones para el Cambio</h3>
                <p>Sus teorías sugieren que "el cambio organizacional debe considerar las interdependencias sistémicas y la necesidad de equilibrio dinámico". El enfoque sistémico es crucial.</p>
                
                <div class="fact-box">
                    <h4>📚 Fundación</h4>
                    <p>El trabajo de Katz y Kahn sigue siendo referencia fundamental en el estudio del cambio organizacional.</p>
                </div>
            `
        },
        heracleito: {
            title: 'Heráclito - Sistemas vivos',
            content: `
                <h3>Filosofía del Cambio Continuo</h3>
                <p>La filosofía de Heráclito sobre el cambio constante aplica perfectamente a las organizaciones modernas. Su famosa frase "nada es permanente excepto el cambio" refleja la naturaleza dinámica de las organizaciones como sistemas vivos.</p>
                
                <h3>Principios de Heráclito</h3>
                <ul>
                    <li><strong>Cambio constante:</strong> Todo está en flujo perpetuo.</li>
                    <li><strong>Unidad en la diversidad:</strong> Los opuestos se complementan.</li>
                    <li><strong>Ley del devenir:</strong> El cambio es la esencia de la realidad.</li>
                    <li><strong>Armonía dinámica:</strong> El equilibrio surge del cambio.</li>
                </ul>
                
                <h3>Aplicación Organizacional</h3>
                <p>Esta filosofía sugiere que "las organizaciones deben abrazar el cambio como parte natural de su existencia, no como eventos excepcionales". La adaptación continua es esencial.</p>
                
                <div class="fact-box">
                    <h4>🌊 Flujo</h4>
                    <p>Las organizaciones que adoptan la filosofía del cambio constante reportan mayor resiliencia y adaptabilidad.</p>
                </div>
            `
        },
        'lewin-gestion': {
            title: 'Modelo de Lewin en la gestión',
            content: `
                <h3>Aplicación Práctica del Modelo de Lewin</h3>
                <p>El modelo de Lewin (1947) proporciona un marco práctico para gestionar el cambio organizacional. Sus tres fases - descongelar, cambiar, recongelar - siguen siendo relevantes en la gestión moderna del cambio.</p>
                
                <h3>Fases del Modelo</h3>
                <ul>
                    <li><strong>Descongelar:</strong> Preparar la organización para el cambio.</li>
                    <li><strong>Cambiar:</strong> Implementar las transformaciones planificadas.</li>
                    <li><strong>Recongelar:</strong> Estabilizar las nuevas prácticas.</li>
                </ul>
                
                <h3>Relevancia Actual</h3>
                <p>Kotter (1996) adaptó el modelo de Lewin en su proceso de ocho pasos, demostrando su "validez continua en la gestión del cambio organizacional". El enfoque sistemático sigue siendo efectivo.</p>
                
                <div class="fact-box">
                    <h4>🧊 Modelo Clásico</h4>
                    <p>El modelo de Lewin sigue siendo utilizado por el 70% de las organizaciones que gestionan cambios exitosamente.</p>
                </div>
            `
        },
        // V. Concepto de Capital Humano
        'definicion-ch': {
            title: 'Definición del Capital Humano',
            content: `
                <h3>Concepto Fundamental</h3>
                <p>El capital humano es el conjunto de capacidades, conocimientos, habilidades y actitudes de los empleados que contribuyen al éxito organizacional. Becker (1964) lo define como "la inversión en educación, capacitación y experiencia que incrementa la productividad individual y organizacional".</p>
                
                <h3>Componentes Clave</h3>
                <ul>
                    <li><strong>Conocimientos:</strong> Información y saberes técnicos.</li>
                    <li><strong>Habilidades:</strong> Capacidades para realizar tareas específicas.</li>
                    <li><strong>Actitudes:</strong> Disposiciones y comportamientos laborales.</li>
                    <li><strong>Experiencia:</strong> Aprendizaje acumulado en el trabajo.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>💡 Valor Estratégico</h4>
                    <p>El capital humano representa el 70% del valor de las organizaciones modernas.</p>
                </div>
            `
        },
        conjunto: {
            title: 'Conjunto de capacidades, conocimientos y habilidades',
            content: `
                <h3>Integración de Competencias</h3>
                <p>El capital humano integra múltiples dimensiones de competencias que trabajan de manera sinérgica. Schultz (1961) enfatiza que "la inversión en capital humano genera retornos significativos tanto para individuos como para organizaciones".</p>
                
                <h3>Dimensiones Integradas</h3>
                <ul>
                    <li><strong>Competencias técnicas:</strong> Habilidades específicas del trabajo.</li>
                    <li><strong>Competencias blandas:</strong> Habilidades interpersonales y de comunicación.</li>
                    <li><strong>Competencias digitales:</strong> Alfabetización tecnológica.</li>
                    <li><strong>Competencias adaptativas:</strong> Capacidad de aprender y cambiar.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🔄 Sinergia</h4>
                    <p>La integración de competencias múltiples multiplica el valor del capital humano.</p>
                </div>
            `
        },
        actitudes: {
            title: 'Actitudes de los empleados',
            content: `
                <h3>Factor Psicológico del Capital Humano</h3>
                <p>Las actitudes organizacionales determinan el compromiso y la efectividad del capital humano. Ulrich (1997) sostiene que "las actitudes positivas son multiplicadores del valor del capital humano".</p>
                
                <h3>Tipos de Actitudes Clave</h3>
                <ul>
                    <li><strong>Compromiso organizacional:</strong> Identificación con la organización.</li>
                    <li><strong>Satisfacción laboral:</strong> Evaluación positiva del trabajo.</li>
                    <li><strong>Involucramiento:</strong> Identificación psicológica con el trabajo.</li>
                    <li><strong>Actitud hacia el cambio:</strong> Disposición para adaptarse.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>📊 Impacto</h4>
                    <p>Las actitudes positivas incrementan la productividad en un 25%.</p>
                </div>
            `
        },
        inversion: {
            title: 'Inversión en formación y políticas de gestión',
            content: `
                <h3>Desarrollo Estratégico del Capital Humano</h3>
                <p>La inversión en formación y políticas de gestión es fundamental para maximizar el valor del capital humano. Armstrong (2014) sostiene que "el desarrollo del capital humano requiere inversión sistemática y políticas coherentes".</p>
                
                <h3>Áreas de Inversión</h3>
                <ul>
                    <li><strong>Formación continua:</strong> Capacitación y desarrollo profesional.</li>
                    <li><strong>Políticas de retención:</strong> Estrategias para mantener talento.</li>
                    <li><strong>Desarrollo de liderazgo:</strong> Formación de futuros líderes.</li>
                    <li><strong>Bienestar organizacional:</strong> Programas de salud y satisfacción.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>📈 Retorno</h4>
                    <p>Por cada dólar invertido en capital humano, las organizaciones obtienen $4.30 en retorno.</p>
                </div>
            `
        },
        vision: {
            title: 'Visión holística y ética',
            content: `
                <h3>Perspectiva Integral del Capital Humano</h3>
                <p>La gestión del capital humano requiere una visión holística que considere el desarrollo integral de las personas. Schein (2010) enfatiza que "el capital humano debe gestionarse de manera ética y considerando el bienestar integral".</p>
                
                <h3>Principios Éticos</h3>
                <ul>
                    <li><strong>Desarrollo integral:</strong> Crecimiento personal y profesional.</li>
                    <li><strong>Dignidad humana:</strong> Respeto por la persona como fin, no medio.</li>
                    <li><strong>Equidad:</strong> Oportunidades justas de desarrollo.</li>
                    <li><strong>Sostenibilidad:</strong> Desarrollo a largo plazo.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🌱 Sostenibilidad</h4>
                    <p>Las organizaciones éticas reportan mayor retención y satisfacción del talento.</p>
                </div>
            `
        },
        acumulacion: {
            title: 'Diferenciación entre acumulación de habilidades',
            content: `
                <h3>Calidad vs. Cantidad en el Capital Humano</h3>
                <p>La diferenciación entre acumulación de habilidades y desarrollo integral es crucial. Becker (1964) distingue entre "inversión en capital humano específico" y "desarrollo de competencias transferibles".</p>
                
                <h3>Tipos de Desarrollo</h3>
                <ul>
                    <li><strong>Habilidades específicas:</strong> Competencias para tareas particulares.</li>
                    <li><strong>Habilidades generales:</strong> Competencias transferibles.</li>
                    <li><strong>Desarrollo integral:</strong> Crecimiento personal y profesional.</li>
                    <li><strong>Adaptabilidad:</strong> Capacidad de aprender continuamente.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🎯 Estrategia</h4>
                    <p>El desarrollo integral genera mayor valor a largo plazo que la acumulación simple.</p>
                </div>
            `
        },
        talento: {
            title: 'Formación de talento integral y motivado',
            content: `
                <h3>Desarrollo de Talento Estratégico</h3>
                <p>La formación de talento integral y motivado es esencial para la competitividad organizacional. Ulrich (1997) sostiene que "el talento integral combina competencias técnicas, habilidades blandas y motivación intrínseca".</p>
                
                <h3>Elementos del Talento Integral</h3>
                <ul>
                    <li><strong>Competencias técnicas:</strong> Habilidades específicas del trabajo.</li>
                    <li><strong>Habilidades blandas:</strong> Comunicación, liderazgo, trabajo en equipo.</li>
                    <li><strong>Motivación intrínseca:</strong> Pasión y compromiso con el trabajo.</li>
                    <li><strong>Adaptabilidad:</strong> Capacidad de cambio y aprendizaje.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>⭐ Talento</h4>
                    <p>El talento integral es 3 veces más valioso que las competencias técnicas solas.</p>
                </div>
            `
        },
        desafios: {
            title: 'Esencial para enfrentar desafíos actuales',
            content: `
                <h3>Capital Humano en la Era Digital</h3>
                <p>El capital humano es esencial para enfrentar los desafíos de la era digital y la globalización. Porter (1985) sostiene que "en un entorno competitivo dinámico, el capital humano es la fuente fundamental de ventaja competitiva".</p>
                
                <h3>Desafíos Actuales</h3>
                <ul>
                    <li><strong>Transformación digital:</strong> Adaptación a nuevas tecnologías.</li>
                    <li><strong>Globalización:</strong> Competencia internacional.</li>
                    <li><strong>Cambio acelerado:</strong> Adaptación constante.</li>
                    <li><strong>Innovación:</strong> Creatividad y desarrollo de nuevos productos.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🚀 Competitividad</h4>
                    <p>El capital humano es responsable del 60% de la ventaja competitiva organizacional.</p>
                </div>
            `
        },
        recurso: {
            title: 'Recurso estratégico fundamental',
            content: `
                <h3>Valor Estratégico del Capital Humano</h3>
                <p>El capital humano es el recurso estratégico más valioso de las organizaciones modernas. Armstrong (2014) sostiene que "el capital humano es la única fuente de ventaja competitiva sostenible en el largo plazo".</p>
                
                <h3>Características Estratégicas</h3>
                <ul>
                    <li><strong>Escaso:</strong> Difícil de replicar por competidores.</li>
                    <li><strong>Valioso:</strong> Genera valor superior.</li>
                    <li><strong>Inimitable:</strong> Único y difícil de copiar.</li>
                    <li><strong>No sustituible:</strong> No puede ser reemplazado fácilmente.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>💎 Recurso Único</h4>
                    <p>El capital humano representa el 70% del valor de mercado de las organizaciones.</p>
                </div>
            `
        },
        exito: {
            title: 'Fundamental para el éxito y desarrollo',
            content: `
                <h3>Motor del Éxito Organizacional</h3>
                <p>El capital humano es fundamental para el éxito y desarrollo organizacional. Ulrich (1997) enfatiza que "las organizaciones exitosas reconocen que las personas son el motor del éxito, no solo un recurso".</p>
                
                <h3>Contribuciones al Éxito</h3>
                <ul>
                    <li><strong>Innovación:</strong> Desarrollo de nuevos productos y servicios.</li>
                    <li><strong>Eficiencia:</strong> Optimización de procesos y recursos.</li>
                    <li><strong>Calidad:</strong> Mejora en productos y servicios.</li>
                    <li><strong>Adaptabilidad:</strong> Respuesta rápida a cambios del mercado.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🏆 Éxito</h4>
                    <p>El 85% del éxito organizacional depende de la calidad del capital humano.</p>
                </div>
            `
        },
        globalizacion: {
            title: 'Contexto de globalización y avances tecnológicos',
            content: `
                <h3>Capital Humano en Contexto Global</h3>
                <p>En el contexto de globalización y avances tecnológicos, el capital humano adquiere mayor relevancia. Becker (1964) sostiene que "la globalización incrementa el valor del capital humano al crear nuevas oportunidades y desafíos".</p>
                
                <h3>Impactos de la Globalización</h3>
                <ul>
                    <li><strong>Competencia global:</strong> Necesidad de competencias internacionales.</li>
                    <li><strong>Innovación tecnológica:</strong> Adaptación a nuevas tecnologías.</li>
                    <li><strong>Diversidad cultural:</strong> Habilidades interculturales.</li>
                    <li><strong>Flexibilidad:</strong> Adaptación a cambios rápidos.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🌍 Oportunidad</h4>
                    <p>La globalización incrementa el valor del capital humano en un 40%.</p>
                </div>
            `
        },
        riqueza: {
            title: 'Produce riqueza y desarrollo',
            content: `
                <h3>Generador de Valor Económico y Social</h3>
                <p>El capital humano produce riqueza y desarrollo tanto para individuos como para organizaciones y sociedades. Schultz (1961) demostró que "la inversión en capital humano genera retornos económicos superiores a la inversión en capital físico".</p>
                
                <h3>Tipos de Riqueza Generada</h3>
                <ul>
                    <li><strong>Riqueza económica:</strong> Incremento en productividad y rentabilidad.</li>
                    <li><strong>Desarrollo social:</strong> Mejora en calidad de vida.</li>
                    <li><strong>Innovación:</strong> Nuevos productos y servicios.</li>
                    <li><strong>Sostenibilidad:</strong> Desarrollo a largo plazo.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>💰 Valor</h4>
                    <p>El capital humano genera el 60% del crecimiento económico mundial.</p>
                </div>
            `
        },
        contribucion: {
            title: 'Contribuciones principales',
            content: `
                <h3>Impacto Multidimensional del Capital Humano</h3>
                <p>El capital humano contribuye de múltiples maneras al éxito organizacional. Armstrong (2014) identifica "tres contribuciones principales: productividad, competitividad y bienestar social".</p>
                
                <h3>Contribuciones Clave</h3>
                <ul>
                    <li><strong>Productividad:</strong> Incremento en eficiencia y resultados.</li>
                    <li><strong>Competitividad:</strong> Ventajas en el mercado.</li>
                    <li><strong>Innovación:</strong> Desarrollo de nuevas soluciones.</li>
                    <li><strong>Bienestar:</strong> Mejora en calidad de vida laboral.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>📊 Impacto</h4>
                    <p>El capital humano contribuye al 70% de la productividad organizacional.</p>
                </div>
            `
        },
        productividad: {
            title: 'Mejora la productividad',
            content: `
                <h3>Motor de la Productividad Organizacional</h3>
                <p>El capital humano es el principal motor de la productividad organizacional. Becker (1964) demostró que "la inversión en capital humano incrementa la productividad individual y organizacional de manera significativa".</p>
                
                <h3>Mecanismos de Mejora</h3>
                <ul>
                    <li><strong>Habilidades mejoradas:</strong> Mayor competencia técnica.</li>
                    <li><strong>Eficiencia operativa:</strong> Optimización de procesos.</li>
                    <li><strong>Innovación:</strong> Nuevas formas de hacer las cosas.</li>
                    <li><strong>Motivación:</strong> Mayor compromiso y esfuerzo.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>📈 Productividad</h4>
                    <p>El capital humano incrementa la productividad en un 25-30%.</p>
                </div>
            `
        },
        competitividad: {
            title: 'Aumenta la competitividad',
            content: `
                <h3>Fuente de Ventaja Competitiva</h3>
                <p>El capital humano es la fuente fundamental de ventaja competitiva sostenible. Porter (1985) sostiene que "las organizaciones con capital humano superior logran posiciones competitivas más fuertes".</p>
                
                <h3>Factores Competitivos</h3>
                <ul>
                    <li><strong>Diferenciación:</strong> Productos y servicios únicos.</li>
                    <li><strong>Innovación:</strong> Nuevas soluciones y enfoques.</li>
                    <li><strong>Calidad:</strong> Excelencia en productos y servicios.</li>
                    <li><strong>Adaptabilidad:</strong> Respuesta rápida a cambios.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🏆 Ventaja</h4>
                    <p>El capital humano representa el 60% de la ventaja competitiva organizacional.</p>
                </div>
            `
        },
        bienestar: {
            title: 'Contribuye al bienestar social',
            content: `
                <h3>Impacto Social del Capital Humano</h3>
                <p>El capital humano contribuye significativamente al bienestar social y el desarrollo de las comunidades. Schultz (1961) sostiene que "la inversión en capital humano genera beneficios sociales que van más allá de los retornos económicos".</p>
                
                <h3>Contribuciones Sociales</h3>
                <ul>
                    <li><strong>Desarrollo económico:</strong> Crecimiento de la economía local.</li>
                    <li><strong>Mejora educativa:</strong> Elevación del nivel educativo.</li>
                    <li><strong>Cohesión social:</strong> Fortalecimiento de comunidades.</li>
                    <li><strong>Sostenibilidad:</strong> Desarrollo a largo plazo.</li>
                </ul>
                
                <div class="fact-box">
                    <h4>🌱 Desarrollo</h4>
                    <p>El capital humano contribuye al 40% del desarrollo social y económico.</p>
                </div>
            `
        }
    };

    // Mostrar modal al hacer clic en subtemas
    document.querySelectorAll('.era-section ul li').forEach(li => {
        li.addEventListener('click', function (e) {
            e.stopPropagation();
            const key = li.getAttribute('data-modal');
            if (modalData[key]) {
                modalTitle.textContent = modalData[key].title;
                modalBody.innerHTML = modalData[key].content;
                modalContainer.style.display = 'flex';
            } else {
                modalTitle.textContent = 'Información';
                modalBody.innerHTML = 'Próximamente...';
                modalContainer.style.display = 'flex';
            }
        });
    });

    // Cerrar modal
    modalClose.addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });
    modalContainer.addEventListener('click', function (e) {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
    
    // Navegación con números del teclado (1-5)
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key >= '1' && key <= '5') {
            const sections = [
                'Qué cambia',
                'Por qué cambian', 
                'Cómo cambian',
                'Definición',
                'Capital Humano'
            ];
            const targetSection = sections[parseInt(key) - 1];
            navigateToSection(targetSection);
        }
    });
    
    function navigateToSection(sectionName) {
        const targetElement = document.querySelector(`[data-period="${sectionName}"]`);
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Resaltar temporalmente la sección
            targetElement.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.5)';
            setTimeout(() => {
                targetElement.style.boxShadow = '';
            }, 2000);
        }
    }
    
    // Funcionalidad para mostrar/ocultar la guía de uso
    const guideToggle = document.getElementById('guide-toggle');
    const usageGuide = document.getElementById('usage-guide');
    
    guideToggle.addEventListener('click', function() {
        if (usageGuide.style.display === 'none') {
            usageGuide.style.display = 'block';
            guideToggle.classList.add('active');
            guideToggle.querySelector('span').textContent = 'Ocultar Guía de Uso';
        } else {
            usageGuide.style.display = 'none';
            guideToggle.classList.remove('active');
            guideToggle.querySelector('span').textContent = 'Mostrar Guía de Uso';
        }
    });

    // Al final del DOMContentLoaded
    // Inicializar todas las listas de subitems contraídas
    document.querySelectorAll('.era-section').forEach(section => {
        section.classList.remove('open');
        const btn = section.querySelector('.section-toggle');
        if (btn) {
            btn.querySelector('i').classList.remove('fa-minus');
            btn.querySelector('i').classList.add('fa-plus');
        }
    });

    // Lógica de expandir/colapsar ramificaciones
    document.querySelectorAll('.section-toggle').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const section = btn.closest('.era-section');
            if (section.classList.contains('open')) {
                section.classList.remove('open');
                btn.querySelector('i').classList.remove('fa-minus');
                btn.querySelector('i').classList.add('fa-plus');
            } else {
                section.classList.add('open');
                btn.querySelector('i').classList.remove('fa-plus');
                btn.querySelector('i').classList.add('fa-minus');
            }
        });
    });
}); 