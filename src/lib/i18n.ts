export interface Translation {
  // Navigation
  navigation: {
    gettingStarted: string;
    features: string;
    installation: string;
    examples: string;
    github: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    viewGithub: string;
    features: {
      modular: string;
      modularDesc: string;
      performance: string;
      performanceDesc: string;
      security: string;
      securityDesc: string;
    };
  };
  
  // Features
  features: {
    title: string;
    subtitle: string;
    httpRequests: string;
    httpRequestsDesc: string;
    websockets: string;
    websocketsDesc: string;
    authentication: string;
    authenticationDesc: string;
    interceptors: string;
    interceptorsDesc: string;
    mtls: string;
    mtlsDesc: string;
    pagination: string;
    paginationDesc: string;
  };
  
  // Getting Started
  gettingStarted: {
    title: string;
    configureUrl: string;
    configurePaths: string;
    defineModels: string;
    createRequest: string;
    swiftuiIntegration: string;
  };
  
  // Installation
  installation: {
    title: string;
    swiftPackageManager: string;
    cocoapods: string;
  };
  
  // Advanced Features
  advanced: {
    title: string;
    interceptors: string;
    authorization: string;
    mtlsCertificate: string;
    fullExample: string;
    sockets: string;
    pendingRequests: string;
    pagination: string;
    queryString: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    navigation: {
      gettingStarted: "Getting Started",
      features: "Features",
      installation: "Installation",
      examples: "Examples",
      github: "GitHub",
    },
    hero: {
      title: "Streamline",
      subtitle: "Swift Networking Framework",
      description: "A modular Swift networking framework designed for flexibility, speed, and ease of integration. Built with modern Swift practices and comprehensive feature set.",
      getStarted: "Get Started",
      viewGithub: "View on GitHub",
      features: {
        modular: "Modular Design",
        modularDesc: "Built with modularity in mind for maximum flexibility",
        performance: "High Performance",
        performanceDesc: "Optimized for speed and efficient resource usage",
        security: "Enterprise Security",
        securityDesc: "MTLS support and JWT authentication out of the box",
      },
    },
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need for modern Swift networking",
      httpRequests: "HTTP Requests",
      httpRequestsDesc: "Simple and powerful HTTP client with async/await support",
      websockets: "WebSockets",
      websocketsDesc: "Real-time communication with built-in socket management",
      authentication: "JWT Authentication",
      authenticationDesc: "Secure authentication with automatic token refresh",
      interceptors: "Request Interceptors",
      interceptorsDesc: "Modify requests and responses with custom interceptors",
      mtls: "MTLS Certificates",
      mtlsDesc: "Enterprise-grade mutual TLS certificate support",
      pagination: "Smart Pagination",
      paginationDesc: "Built-in pagination support for large data sets",
    },
    gettingStarted: {
      title: "Getting Started",
      configureUrl: "1. Configure the Base URL",
      configurePaths: "2. Configure Your API Paths",
      defineModels: "3. Define Request and Response Models",
      createRequest: "4. Create a Request",
      swiftuiIntegration: "5. SwiftUI Integration",
    },
    installation: {
      title: "Installation",
      swiftPackageManager: "Swift Package Manager",
      cocoapods: "CocoaPods",
    },
    advanced: {
      title: "Advanced Features",
      interceptors: "Request Interceptors",
      authorization: "Authorization",
      mtlsCertificate: "MTLS Certificate Support",
      fullExample: "Full Example with Authentication, Interceptor, and MTLS",
      sockets: "WebSocket Support",
      pendingRequests: "Pending Requests Configuration",
      pagination: "Pagination",
      queryString: "Query String and Params",
    },
  },
  pt: {
    navigation: {
      gettingStarted: "Começar",
      features: "Recursos",
      installation: "Instalação",
      examples: "Exemplos",
      github: "GitHub",
    },
    hero: {
      title: "Streamline",
      subtitle: "Framework de Rede Swift",
      description: "Um framework de rede Swift modular projetado para flexibilidade, velocidade e facilidade de integração. Construído com práticas modernas do Swift e conjunto abrangente de recursos.",
      getStarted: "Começar",
      viewGithub: "Ver no GitHub",
      features: {
        modular: "Design Modular",
        modularDesc: "Construído com modularidade em mente para máxima flexibilidade",
        performance: "Alta Performance",
        performanceDesc: "Otimizado para velocidade e uso eficiente de recursos",
        security: "Segurança Empresarial",
        securityDesc: "Suporte MTLS e autenticação JWT prontos para uso",
      },
    },
    features: {
      title: "Recursos Poderosos",
      subtitle: "Tudo que você precisa para redes Swift modernas",
      httpRequests: "Requisições HTTP",
      httpRequestsDesc: "Cliente HTTP simples e poderoso com suporte async/await",
      websockets: "WebSockets",
      websocketsDesc: "Comunicação em tempo real com gerenciamento de socket integrado",
      authentication: "Autenticação JWT",
      authenticationDesc: "Autenticação segura com atualização automática de token",
      interceptors: "Interceptadores de Requisição",
      interceptorsDesc: "Modifique requisições e respostas com interceptadores personalizados",
      mtls: "Certificados MTLS",
      mtlsDesc: "Suporte a certificados TLS mútuo de nível empresarial",
      pagination: "Paginação Inteligente",
      paginationDesc: "Suporte integrado de paginação para grandes conjuntos de dados",
    },
    gettingStarted: {
      title: "Começando",
      configureUrl: "1. Configure a URL Base",
      configurePaths: "2. Configure os Caminhos da API",
      defineModels: "3. Defina os Modelos de Requisição e Resposta",
      createRequest: "4. Crie uma Requisição",
      swiftuiIntegration: "5. Integração SwiftUI",
    },
    installation: {
      title: "Instalação",
      swiftPackageManager: "Swift Package Manager",
      cocoapods: "CocoaPods",
    },
    advanced: {
      title: "Recursos Avançados",
      interceptors: "Interceptadores de Requisição",
      authorization: "Autorização",
      mtlsCertificate: "Suporte a Certificado MTLS",
      fullExample: "Exemplo Completo com Autenticação, Interceptador e MTLS",
      sockets: "Suporte WebSocket",
      pendingRequests: "Configuração de Requisições Pendentes",
      pagination: "Paginação",
      queryString: "Query String e Parâmetros",
    },
  },
  es: {
    navigation: {
      gettingStarted: "Comenzar",
      features: "Características",
      installation: "Instalación",
      examples: "Ejemplos",
      github: "GitHub",
    },
    hero: {
      title: "Streamline",
      subtitle: "Framework de Red Swift",
      description: "Un framework de red Swift modular diseñado para flexibilidad, velocidad y facilidad de integración. Construido con prácticas modernas de Swift y conjunto completo de características.",
      getStarted: "Comenzar",
      viewGithub: "Ver en GitHub",
      features: {
        modular: "Diseño Modular",
        modularDesc: "Construido con modularidad en mente para máxima flexibilidad",
        performance: "Alto Rendimiento",
        performanceDesc: "Optimizado para velocidad y uso eficiente de recursos",
        security: "Seguridad Empresarial",
        securityDesc: "Soporte MTLS y autenticación JWT listos para usar",
      },
    },
    features: {
      title: "Características Poderosas",
      subtitle: "Todo lo que necesitas para redes Swift modernas",
      httpRequests: "Solicitudes HTTP",
      httpRequestsDesc: "Cliente HTTP simple y poderoso con soporte async/await",
      websockets: "WebSockets",
      websocketsDesc: "Comunicación en tiempo real con gestión de socket integrada",
      authentication: "Autenticación JWT",
      authenticationDesc: "Autenticación segura con actualización automática de token",
      interceptors: "Interceptores de Solicitud",
      interceptorsDesc: "Modifica solicitudes y respuestas con interceptores personalizados",
      mtls: "Certificados MTLS",
      mtlsDesc: "Soporte de certificados TLS mutuo de nivel empresarial",
      pagination: "Paginación Inteligente",
      paginationDesc: "Soporte integrado de paginación para grandes conjuntos de datos",
    },
    gettingStarted: {
      title: "Comenzando",
      configureUrl: "1. Configurar la URL Base",
      configurePaths: "2. Configurar las Rutas de la API",
      defineModels: "3. Definir Modelos de Solicitud y Respuesta",
      createRequest: "4. Crear una Solicitud",
      swiftuiIntegration: "5. Integración SwiftUI",
    },
    installation: {
      title: "Instalación",
      swiftPackageManager: "Swift Package Manager",
      cocoapods: "CocoaPods",
    },
    advanced: {
      title: "Características Avanzadas",
      interceptors: "Interceptores de Solicitud",
      authorization: "Autorización",
      mtlsCertificate: "Soporte de Certificado MTLS",
      fullExample: "Ejemplo Completo con Autenticación, Interceptor y MTLS",
      sockets: "Soporte WebSocket",
      pendingRequests: "Configuración de Solicitudes Pendientes",
      pagination: "Paginación",
      queryString: "Query String y Parámetros",
    },
  },
};