/**
 * Plastic Pollution Encyclopedia - Main JavaScript
 * Britannica-style interactive features
 */

(function() {
  'use strict';

  // ============================================
  // Language Switcher
  // ============================================
  const translations = {
    en: {
      // Header
      'header.category': 'Environment • Global Problems',
      'header.title': 'Plastic Pollution',
      'header.subtitle': 'The world has a big problem with plastic pollution because of the damage it causes to oceans, animals, and human health. One possible solution is to move toward a circular plastic economy.',
      'header.updated': 'Last updated: 2026',
      'header.readtime': '5 min read',
      'title': 'Plastic Pollution | Global Problem & Solutions',

      // Navigation
      'nav.problem': 'The Problem',
      'nav.solution': 'The Solution',
      'nav.how': 'How It Works',
      'nav.statistics': 'Statistics',
      'nav.references': 'References',

      // Hero
      'hero.caption': 'Plastic waste in oceans represents a critical threat to marine life and aquatic ecosystems. Photo: Unsplash',

      // Problem Section
      'problem.title': 'The Problem & Possible Solution',
      'problem.p1': 'The world has a big problem with <strong>plastic pollution</strong> <span class="highlight">because of</span> the damage it causes to oceans, animals, and human health. Single-use plastics, microplastics, and poorly managed waste have created an environmental crisis of unprecedented proportions.',
      'problem.p2': 'Every year, approximately 8 million tons of plastic end up in the oceans, equivalent to dumping a garbage truck full of plastic into the sea every minute. This plastic doesn\'t fully biodegrade; instead, it fragments into smaller and smaller particles called microplastics, which enter the food chain.',
      'problem.quote': '"One possible solution is to move toward a circular plastic economy, where materials are used again and again and waste production is reduced."',
      'problem.impactTitle': 'Main Impacts of Plastic Pollution',
      'problem.impact1': '<strong>Oceans:</strong> Over 800 marine species affected by ingestion or entanglement',
      'problem.impact2': '<strong>Animals:</strong> Mass mortality of seabirds, turtles, and aquatic mammals',
      'problem.impact3': '<strong>Human Health:</strong> Microplastics detected in drinking water, sea salt, and food',
      'problem.impact4': '<strong>Economy:</strong> Estimated $13 billion annual losses from ecosystem damage',

      // Solution Section
      'solution.title': 'Details About the Solution',
      'solution.p1': 'This solution means <strong>redesigning products to use less plastic</strong>, improving recycling systems, and promoting reusable alternatives. It also means that governments, companies, and citizens must work together to reduce single-use plastics and manage waste better <span class="highlight">because</span> this helps protect the environment.',
      'solution.keyTitle': 'Key Elements of a Circular Plastic Economy',
      'solution.key1': 'Phase out unnecessary single-use plastics',
      'solution.key2': 'Innovate in biodegradable and compostable materials',
      'solution.key3': 'Efficient collection and sorting systems',
      'solution.key4': 'Advanced chemical and mechanical recycling technologies',
      'solution.key5': 'Economic incentives for producers and consumers',
      'solution.pillarsTitle': 'Pillars of the Solution',
      'solution.pillar1Title': 'Product Redesign',
      'solution.pillar1Text': 'Manufacturers must rethink packaging and product design to minimize virgin plastic use, facilitate recycling, and promote reuse. This includes eliminating problematic plastics like PVC and expanded polystyrene.',
      'solution.pillar2Title': 'Improved Recycling Systems',
      'solution.pillar2Text': 'Recycling infrastructure needs significant investment to increase collection rates, improve sorting, and process more types of plastic. Chemical recycling technology can handle plastics that mechanical recycling cannot process.',
      'solution.pillar3Title': 'Reusable Alternatives',
      'solution.pillar3Text': 'Promoting return, refill, and reuse systems drastically reduces demand for single-use plastic. Models like returnable containers, refill stations, and deposit programs are proving effective.',
      'solution.pillar4Title': 'Global Collaboration',
      'solution.pillar4Text': '<span class="highlight">As a result of</span> coordinated efforts between governments, companies, and citizens, we can create systemic changes. International agreements like the UN Global Plastics Treaty are fundamental.',

      // How It Works Section
      'how.title': 'How the Circular Plastic Economy Works',
      'how.p1': 'The circular plastic economy transforms the traditional "take-make-dispose" model into a closed system where materials maintain their value for as long as possible.',
      'how.stat1': 'Of plastic could be recovered',
      'how.stat2': 'CO₂ emissions reduction',
      'how.stat3': 'Potential annual savings',
      'how.stat4': 'New green jobs',
      'how.p2': 'The cycle begins with <strong>intelligent design</strong> of products that use less material and are easier to recycle. Then, efficient collection systems capture waste before it reaches the environment. Sorting facilities separate plastics by type and color, preparing them for recycling.',
      'how.p3': 'Recycled plastic becomes new raw material for manufacturing products, closing the loop. When mechanical recycling isn\'t viable, chemical recycling can break down plastics into their basic molecular components.',

      // Statistics Section
      'stats.title': 'Global Statistics',
      'stats.boxTitle': 'Critical Facts About Plastic Pollution',
      'stats.fact1': '<strong>400 million</strong> tons of plastic produced annually',
      'stats.fact2': '<strong>50%</strong> is single-use plastic',
      'stats.fact3': '<strong>9%</strong> of all plastic ever produced has been recycled',
      'stats.fact4': '<strong>2050:</strong> Projected year when there will be more plastic than fish in the ocean',
      'stats.fact5': '<strong>11 million</strong> tons of plastic enter the ocean each year',

      // Hope Section
      'hope.title': 'Expression of Hope',
      'hope.p1': 'There is hope that, with <strong>global cooperation</strong> and changes in our habits, we can reduce pollution. Citizen movements, technological innovations, and corporate commitments are creating unprecedented momentum toward action.',
      'hope.p2': '<span class="highlight">As a result of</span> these efforts, we can build a cleaner and more sustainable future for the planet. Countries around the world are implementing single-use plastic bans, companies are adopting 100% recyclable packaging commitments, and consumers are demanding more sustainable alternatives.',
      'hope.quote': '"Change begins with awareness, strengthens with action, and consolidates with collaboration. Every person, every company, and every government has a role to play."',
      'hope.p3': 'The transition to a circular plastic economy is not just an environmental necessity; it\'s an economic opportunity that can generate millions of jobs, reduce greenhouse gas emissions, and protect biodiversity for future generations.',

      // References
      'references.title': 'References',

      // Table of Contents
      'toc.title': 'Table of Contents',
      'toc.problem': 'The Problem & Solution',
      'toc.solution': 'Solution Details',
      'toc.pillar1': 'Product Redesign',
      'toc.pillar2': 'Recycling Systems',
      'toc.pillar3': 'Reusable Alternatives',
      'toc.pillar4': 'Global Collaboration',
      'toc.how': 'How It Works',
      'toc.statistics': 'Statistics',
      'toc.hope': 'Hope',
      'toc.references': 'References',

      // Quick Facts
      'quickFacts.title': 'Quick Facts',
      'quickFacts.fact1': '<strong>Problem started:</strong> 1950s',
      'quickFacts.fact2': '<strong>Annual production:</strong> 400M tons',
      'quickFacts.fact3': '<strong>Recycling rate:</strong> 9% global',
      'quickFacts.fact4': '<strong>2030 Goal:</strong> Reduce production 50%',

      // Ask Box
      'askBox.title': 'Want to help?',
      'askBox.text': 'Join the global movement for a plastic-free planet',
      'askBox.button': 'How to act',

      // Footer
      'footer.aboutTitle': 'About this site',
      'footer.about1': 'Educational purpose',
      'footer.about2': 'Methodology',
      'footer.about3': 'Sources',
      'footer.resourcesTitle': 'Resources',
      'footer.res1': 'Action guide',
      'footer.res2': 'Downloadable data',
      'footer.res3': 'For educators',
      'footer.connectTitle': 'Connect',
      'footer.conn1': 'Newsletter',
      'footer.conn2': 'Social media',
      'footer.conn3': 'Contact',
      'footer.copyright': '© 2026 Plastic Pollution Encyclopedia. Educational content.'
    },
    es: {
      // Header
      'header.category': 'Medio Ambiente • Problemas Globales',
      'header.title': 'Contaminación Plástica',
      'header.subtitle': 'El mundo enfrenta un gran problema con la contaminación plástica debido al daño que causa a los océanos, animales y salud humana. Una solución posible es avanzar hacia una economía circular del plástico.',
      'header.updated': 'Última actualización: 2026',
      'header.readtime': '5 min de lectura',
      'title': 'Contaminación Plástica | Problema Global y Soluciones',

      // Navigation
      'nav.problem': 'El Problema',
      'nav.solution': 'La Solución',
      'nav.how': 'Cómo Funciona',
      'nav.statistics': 'Estadísticas',
      'nav.references': 'Referencias',

      // Hero
      'hero.caption': 'Los residuos plásticos en los océanos representan una amenaza crítica para la vida marina y los ecosistemas acuáticos. Foto: Unsplash',

      // Problem Section
      'problem.title': 'El Problema y la Posible Solución',
      'problem.p1': 'El mundo tiene un gran problema con la <strong>contaminación plástica</strong> <span class="highlight">because of</span> (debido a) el daño que causa a los océanos, animales y salud humana. Los plásticos de un solo uso, las microplásticos y los residuos mal gestionados han creado una crisis ambiental de proporciones sin precedentes.',
      'problem.p2': 'Cada año, aproximadamente 8 millones de toneladas de plástico terminan en los océanos, equivalente a vaciar un camión de basura lleno de plástico en el mar cada minuto. Este plástico no se biodegrada completamente; en su lugar, se fragmenta en partículas cada vez más pequeñas llamadas microplásticos, que ingresan a la cadena alimentaria.',
      'problem.quote': '"Una posible solución es avanzar hacia una economía circular del plástico, donde los materiales se usan una y otra vez y la producción de residuos se reduce."',
      'problem.impactTitle': 'Impactos Principales de la Contaminación Plástica',
      'problem.impact1': '<strong>Océanos:</strong> Más de 800 especies marinas afectadas por ingestión o enredo',
      'problem.impact2': '<strong>Animales:</strong> Mortalidad masiva de aves marinas, tortugas y mamíferos acuáticos',
      'problem.impact3': '<strong>Salud humana:</strong> Microplásticos detectados en agua potable, sal marina y alimentos',
      'problem.impact4': '<strong>Economía:</strong> Pérdidas estimadas en $13 mil millones anuales por daños a ecosistemas',

      // Solution Section
      'solution.title': 'Detalles Sobre la Solución',
      'solution.p1': 'Esta solución significa <strong>rediseñar productos para usar menos plástico</strong>, mejorar los sistemas de reciclaje y promover alternativas reutilizables. También significa que gobiernos, empresas y ciudadanos deben trabajar juntos para reducir los plásticos de un solo uso y gestionar mejor los residuos <span class="highlight">because</span> (porque) esto ayuda a proteger el medio ambiente.',
      'solution.keyTitle': 'Elementos Clave de una Economía Circular del Plástico',
      'solution.key1': 'Eliminación progresiva de plásticos de un solo uso innecesarios',
      'solution.key2': 'Innovación en materiales biodegradables y compostables',
      'solution.key3': 'Sistemas de recolección y clasificación eficientes',
      'solution.key4': 'Tecnologías de reciclaje químico y mecánico avanzadas',
      'solution.key5': 'Incentivos económicos para productores y consumidores',
      'solution.pillarsTitle': 'Pilares de la Solución',
      'solution.pillar1Title': 'Rediseño de Productos',
      'solution.pillar1Text': 'Los fabricantes deben repensar el diseño de envases y productos para minimizar el uso de plástico virgen, facilitar el reciclaje y promover la reutilización. Esto incluye eliminar plásticos problemáticos como el PVC y el poliestireno expandido.',
      'solution.pillar2Title': 'Sistemas de Reciclaje Mejorados',
      'solution.pillar2Text': 'La infraestructura de reciclaje necesita inversión significativa para aumentar las tasas de recolección, mejorar la clasificación y procesar más tipos de plástico. La tecnología de reciclaje químico puede manejar plásticos que el reciclaje mecánico no puede procesar.',
      'solution.pillar3Title': 'Alternativas Reutilizables',
      'solution.pillar3Text': 'Promover sistemas de retorno, rellenado y reutilización reduce drásticamente la demanda de plástico de un solo uso. Modelos como los envases retornables, estaciones de rellenado y programas de depósito están demostrando ser efectivos.',
      'solution.pillar4Title': 'Colaboración Global',
      'solution.pillar4Text': '<span class="highlight">As a result of</span> (como resultado de) esfuerzos coordinados entre gobiernos, empresas y ciudadanos, podemos crear cambios sistémicos. Los acuerdos internacionales como el Tratado Global sobre Plásticos de la ONU son fundamentales.',

      // How It Works Section
      'how.title': 'Cómo Funciona la Economía Circular del Plástico',
      'how.p1': 'La economía circular del plástico transforma el modelo tradicional de "tomar-hacer-desechar" en un sistema cerrado donde los materiales mantienen su valor el mayor tiempo posible.',
      'how.stat1': 'Del plástico podría recuperarse',
      'how.stat2': 'Reducción de emisiones de CO₂',
      'how.stat3': 'Ahorro anual potencial',
      'how.stat4': 'Nuevos empleos verdes',
      'how.p2': 'El ciclo comienza con el <strong>diseño inteligente</strong> de productos que usan menos material y son más fáciles de reciclar. Luego, los sistemas de recolección eficientes capturan los residuos antes de que lleguen al medio ambiente. Las instalaciones de clasificación separan los plásticos por tipo y color, preparándolos para el reciclaje.',
      'how.p3': 'El plástico reciclado se convierte en nueva materia prima para fabricar productos, cerrando el ciclo. Cuando el reciclaje mecánico no es viable, el reciclaje químico puede descomponer los plásticos en sus componentes moleculares básicos.',

      // Statistics Section
      'stats.title': 'Estadísticas Globales',
      'stats.boxTitle': 'Datos Críticos sobre Contaminación Plástica',
      'stats.fact1': '<strong>400 millones</strong> de toneladas de plástico se producen anualmente',
      'stats.fact2': '<strong>50%</strong> es plástico de un solo uso',
      'stats.fact3': '<strong>9%</strong> de todo el plástico jamás producido ha sido reciclado',
      'stats.fact4': '<strong>2050:</strong> Año proyectado cuando habrá más plástico que peces en el océano',
      'stats.fact5': '<strong>11 millones</strong> de toneladas de plástico entran al océano cada año',

      // Hope Section
      'hope.title': 'Expresión de Esperanza',
      'hope.p1': 'Hay esperanza de que, con <strong>cooperación global</strong> y cambios en nuestros hábitos, podamos reducir la contaminación. Los movimientos ciudadanos, las innovaciones tecnológicas y los compromisos corporativos están creando un momentum sin precedentes hacia la acción.',
      'hope.p2': '<span class="highlight">As a result of</span> (como resultado de) estos esfuerzos, podemos construir un futuro más limpio y sostenible para el planeta. Países de todo el mundo están implementando prohibiciones de plásticos de un solo uso, empresas están adoptando compromisos de envases 100% reciclables, y consumidores están exigiendo alternativas más sostenibles.',
      'hope.quote': '"El cambio comienza con la conciencia, se fortalece con la acción, y se consolida con la colaboración. Cada persona, cada empresa y cada gobierno tiene un papel que jugar."',
      'hope.p3': 'La transición hacia una economía circular del plástico no es solo una necesidad ambiental; es una oportunidad económica que puede generar millones de empleos, reducir las emisiones de gases de efecto invernadero y proteger la biodiversidad para las generaciones futuras.',

      // References
      'references.title': 'Referencias',

      // Table of Contents
      'toc.title': 'Tabla de Contenidos',
      'toc.problem': 'El Problema y Solución',
      'toc.solution': 'Detalles de la Solución',
      'toc.pillar1': 'Rediseño de Productos',
      'toc.pillar2': 'Sistemas de Reciclaje',
      'toc.pillar3': 'Alternativas Reutilizables',
      'toc.pillar4': 'Colaboración Global',
      'toc.how': 'Cómo Funciona',
      'toc.statistics': 'Estadísticas',
      'toc.hope': 'Esperanza',
      'toc.references': 'Referencias',

      // Quick Facts
      'quickFacts.title': 'Datos Rápidos',
      'quickFacts.fact1': '<strong>Inicio del problema:</strong> Década de 1950',
      'quickFacts.fact2': '<strong>Producción anual:</strong> 400M toneladas',
      'quickFacts.fact3': '<strong>Tasa de reciclaje:</strong> 9% global',
      'quickFacts.fact4': '<strong>Objetivo 2030:</strong> Reducir 50% producción',

      // Ask Box
      'askBox.title': '¿Quieres ayudar?',
      'askBox.text': 'Únete al movimiento global por un planeta sin plástico',
      'askBox.button': 'Cómo actuar',

      // Footer
      'footer.aboutTitle': 'Sobre este sitio',
      'footer.about1': 'Propósito educativo',
      'footer.about2': 'Metodología',
      'footer.about3': 'Fuentes',
      'footer.resourcesTitle': 'Recursos',
      'footer.res1': 'Guía de acción',
      'footer.res2': 'Datos descargables',
      'footer.res3': 'Para educadores',
      'footer.connectTitle': 'Conectar',
      'footer.conn1': 'Boletín',
      'footer.conn2': 'Redes sociales',
      'footer.conn3': 'Contacto',
      'footer.copyright': '© 2026 Plastic Pollution Encyclopedia. Contenido con fines educativos.'
    }
  };

  // Current language (default to English)
  let currentLang = 'en';

  // Initialize language switcher
  function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        if (lang !== currentLang) {
          setLanguage(lang);
        }
      });
    });

    // Load saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        // Handle HTML content
        if (translations[lang][key].includes('<')) {
          element.innerHTML = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });

    // Update title
    if (translations[lang]['title']) {
      document.title = translations[lang]['title'];
    }

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);

    // Dispatch event for other scripts to react
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const headerNav = document.getElementById('headerNav');

  if (navToggle && headerNav) {
    navToggle.addEventListener('click', function() {
      headerNav.classList.toggle('active');
      this.textContent = headerNav.classList.contains('active') ? '✕' : '☰';
      this.setAttribute('aria-expanded', headerNav.classList.contains('active'));
    });
  }

  // ============================================
  // Active Table of Contents Highlighting
  // ============================================
  const tocLinks = document.querySelectorAll('.toc-list a[href^="#"]');
  const sections = document.querySelectorAll('.article-section[id]');

  function highlightActiveSection() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  if (tocLinks.length > 0) {
    window.addEventListener('scroll', debounce(highlightActiveSection, 100));
    highlightActiveSection(); // Initial check
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (headerNav && headerNav.classList.contains('active')) {
          headerNav.classList.remove('active');
          navToggle.textContent = '☰';
        }
      }
    });
  });

  // ============================================
  // Reading Progress Indicator
  // ============================================
  function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #0066cc, #00a878);
      z-index: 9999;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    function updateProgress() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      progressBar.style.width = Math.min(progress, 100) + '%';
    }

    window.addEventListener('scroll', debounce(updateProgress, 10));
    updateProgress();
  }

  createReadingProgress();

  // ============================================
  // Lazy Loading Images
  // ============================================
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  // ============================================
  // External Link Icons
  // ============================================
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ============================================
  // Print Friendly Button (Optional)
  // ============================================
  function addPrintButton() {
    const printBtn = document.createElement('button');
    printBtn.textContent = '📄 Imprimir';
    printBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #0066cc;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-family: var(--font-sans);
      font-size: 0.875rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    `;
    printBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    });
    printBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    });
    printBtn.addEventListener('click', () => window.print());
    document.body.appendChild(printBtn);
  }

  // Uncomment to enable print button
  // addPrintButton();

  // ============================================
  // Utility: Debounce Function
  // ============================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ============================================
  // Animation on Scroll (Optional Enhancement)
  // ============================================
  function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.stat-card, .key-facts, .info-box');

    if ('IntersectionObserver' in window) {
      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(el);
      });
    }
  }

  animateOnScroll();

  // ============================================
  // Share Functionality (Optional)
  // ============================================
  function initShareButtons() {
    // Can be extended with social share buttons
    console.log('Share functionality ready to implement');
  }

  initShareButtons();

  // ============================================
  // Keyboard Navigation Enhancement
  // ============================================
  document.addEventListener('keydown', function(e) {
    // Press 't' to go to top
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // ============================================
  // Initialize
  // ============================================
  console.log('Plastic Pollution Encyclopedia loaded successfully');

})();
