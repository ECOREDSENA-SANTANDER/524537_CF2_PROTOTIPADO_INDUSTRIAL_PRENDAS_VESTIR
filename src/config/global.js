export default {
  global: {
    Name: 'Patronaje básico',
    Description:
      'El presente componente aborda el desarrollo y la elaboración de moldes desde la implementación de los básicos en las diferentes líneas, el análisis de cada una de las partes que compone una prenda, pasados a planos técnicos con medidas y formas correspondientes a cada estructura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        titulo: 'Patronaje básico de línea infantil',
        numero: '1',
        nombreRuta: 'tema1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Cómo hacer un patrón a escala',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Implementación de básico superior: desarrollo de prendas superiores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazo de cabezas de mangas: análisis de manga',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Trazo de cuellos: generalidades y comportamientos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Despiece de planos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Trazo de prendas superiores',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Trazo de prendas inferiores: faldas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Trazo de prendas inferiores: pantalón',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Trazo de prendas: overol',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Trazo de prendas: bata o vestido',
            hash: 't_1_10',
          },
        ],
      },
      {
        titulo: 'Patronaje básico línea masculina',
        nombreRuta: 'tema2',
        numero: '2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trazo de camisa clásica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Trazo de prendas superiores: camisa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Trazo de pantalón clásico masculino',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Trazo de pantalón tipo <em>jean slim fit</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Base sastre masculina',
            hash: 't_2_5',
          },
        ],
      },
      {
        titulo: 'Patronaje básico línea femenina',
        nombreRuta: 'tema3',
        numero: '3',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Traslados de pinza correctiva de talles',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: ' Trazo de blusa femenina',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: ' Trazo de escotes y tipos de cuellos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Trazo de chaqueta tipo sastre',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Trazo de manga y cabezas de manga',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: ' Trazo de falda y modificación de básicos de falda',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: ' Trazo de vestido de noche',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Interpretación de prendas inferiores ',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Interpretación de overoles',
            hash: 't_3_9',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_524537_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manual de patronaje básico e interpretación de diseños',
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
  ],
  glosario: [
    {
      termino: 'Patronaje básico',
      significado:
        'técnica de elaboración de moldes base para la confección de prendas de vestir. ',
    },
    {
      termino: 'Patrón a escala',
      significado:
        'representación reducida de un molde utilizada para practicar trazos y proporciones.',
    },
    {
      termino: 'Básico superior',
      significado:
        'molde base del torso empleado para desarrollar prendas superiores como blusas y camisas.',
    },
    {
      termino: 'Manga',
      significado:
        'pieza de tela que cubre total o parcialmente el brazo en una prenda. ',
    },
    {
      termino: 'Cabeza de manga',
      significado:
        'parte superior de la manga que se une a la sisa del cuerpo de la prenda. ',
    },
    {
      termino: 'Cuello',
      significado: 'pieza que rodea o adorna el escote de una prenda. ',
    },
    {
      termino: 'Despiece de planos',
      significado:
        'proceso de separación de las piezas de un patrón para su corte y confección. ',
    },
    {
      termino: 'Prenda superior',
      significado:
        'vestuario que cubre la parte alta del cuerpo, como camisas, blusas o chaquetas. ',
    },
    {
      termino: 'Falda',
      significado:
        'prenda inferior que cubre desde la cintura hacia abajo sin dividir las piernas. ',
    },
    {
      termino: 'Pantalón clásico',
      significado:
        'prenda inferior de corte recto y estructura formal utilizada en vestuario masculino o femenino.',
    },
    {
      termino: 'Jean <em>slim fit</em>',
      significado:
        'pantalón de ajuste estrecho que se adapta a la forma de las piernas. ',
    },
    {
      termino: 'Overol',
      significado:
        'prenda de una sola pieza que integra parte superior e inferior del vestuario. ',
    },
    {
      termino: 'Pinza correctiva',
      significado:
        'ajuste realizado en el patrón para adaptar la prenda a la forma del cuerpo. ',
    },
    {
      termino: 'Escote',
      significado:
        'abertura en la parte superior de una prenda alrededor del cuello.',
    },
    {
      termino: 'Base sastre',
      significado:
        'patrón estructurado utilizado para confeccionar chaquetas y prendas de sastrería. ',
    },
    {
      termino: 'Interpretación de prendas',
      significado:
        'proceso de transformar un diseño en moldes listos para confección. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3. Servicio Nacional de Aprendizaje',
    },
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA. ',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Maritza Rodríguez Beltrán ',
          cargo: 'Instructora técnica ',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital ',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro ',
          cargo: 'Diseñadora y evaluadora instruccional ',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Julia Isabel Roberto ',
          cargo: 'Diseñadora y evaluadora instruccional ',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Paez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Carolina Jiménez Suescún  ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
