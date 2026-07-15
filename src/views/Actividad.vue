<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje básico',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los fundamentos técnicos para interpretar básicos, desarrollar planos, aplicar desahogos, complementos, señalización y despiece en prendas infantiles, masculinas y femeninas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito central del patronaje básico en el desarrollo industrial de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar básicos en planos y moldes técnicos que respondan al diseño, la talla y la funcionalidad de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Seleccionar únicamente colores, estampados y acabados decorativos para definir la apariencia comercial de cada colección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar la publicidad de la prenda mediante fotografías, catálogos y recursos gráficos para su comercialización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar solo la maquinaria de ensamble sin analizar medidas, proporciones, planos ni piezas del patrón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del patronaje básico como proceso técnico para convertir básicos en moldes funcionales y productivos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 2,
          texto:
            '¿Qué recomienda la metodología SENA al trabajar prendas superiores, aunque el manual presente planos separados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Trabajar cada básico de forma aislada para evitar comparar largos, proporciones y líneas de aplome del diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Trabajar en plano unido para validar largos, proporciones y referencias del diseño durante el desarrollo del patrón.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Trabajar sin líneas de construcción para favorecer decisiones libres durante la interpretación del dibujo plano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trabajar únicamente con moldes recortados para sustituir el análisis previo de medidas y proporciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la importancia del plano unido para verificar proporciones y referencias del diseño en prendas superiores.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 3,
          texto:
            '¿Qué significa elaborar un patrón a escala dentro del proceso de aprendizaje del patronaje?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el margen de costura en todas las piezas para simular el consumo industrial de tela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar el cuadro de tallas por medidas visuales tomadas directamente desde una imagen comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Trazar un molde en tamaño menor o mayor, manteniendo proporciones y referencias técnicas del patrón original.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Modificar la silueta de la prenda sin respetar líneas base, recorridos, contornos ni fórmulas de construcción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia dominio del concepto de escala como reducción o ampliación proporcional de un molde técnico.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 4,
          texto:
            '¿Cuáles son los tres básicos que la metodología SENA reconoce como puntos de partida para el desarrollo de prendas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Base de cuello, base de bolsillo y base de puño, porque conforman los complementos principales del diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Base de manga, base de cierre y base de almilla, porque definen la estructura completa de prendas superiores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Base de pretina, base de bota y base de ruedo, porque ordenan el desarrollo de prendas inferiores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Base superior, base inferior de falda y base inferior de pantalón, porque permiten iniciar interpretaciones y trazos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión de los básicos principales que estructuran el desarrollo de patrones en la metodología SENA.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumplen los desahogos en la interpretación de una prenda desde un básico anatómico?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Agregar holguras o incrementos a contornos, largos y anchos para lograr funcionalidad, comodidad y uso adecuado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar toda amplitud del patrón para que la prenda conserve únicamente las medidas exactas del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir la señalización del molde por notas generales sobre color, textura, temporada y usuario final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir exclusivamente el tipo de puntada que se aplicará durante el ensamble industrial de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia apropiación de los desahogos como incrementos necesarios para transformar un básico en prenda funcional.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el punto de referencia principal para aplicar desahogos por contorno en prendas superiores?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El contorno de muñeca, porque determina el ancho final de mangas, puños y portañuelas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El contorno de pecho sobre la línea de profundidad de sisa, porque orienta la holgura inicial del plano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El contorno de rodilla, porque permite establecer la movilidad vertical de la prenda superior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El contorno de tobillo, porque define la caída del textil y la estructura del ruedo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el contorno de pecho y la línea de profundidad de sisa como referencias centrales para desahogos superiores.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 7,
          texto:
            '¿Qué comprende el sistema de cierre dentro del análisis funcional de una prenda de vestir?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las líneas de aplome y piquetes que permiten ubicar el hilo de tela en cada pieza del patrón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los aumentos de largo aplicados al ruedo para ajustar la caída de la prenda en el cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los mecanismos que permiten abrir y cerrar la prenda, como cremalleras, botones, broches o cordones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los cortes decorativos que modifican únicamente la apariencia visual sin afectar el uso de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del sistema de cierre como recurso funcional para vestir y desvestir la prenda.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 8,
          texto:
            '¿Qué se entiende por complementos en los pasos del patronaje básico?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las normas comerciales que definen precio, empaque, etiqueta, canal de venta y promoción de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los valores de conversión entre centímetros y pulgadas utilizados para interpretar cuadros de tallas masculinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los ejercicios de control de pedal, remate y costura recta que se realizan antes del ensamble.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las piezas adicionales del diseño, como bolsillos, cuellos, mangas, cortes, puños y demás elementos funcionales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación del concepto de complementos como piezas que completan la interpretación técnica del diseño.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 9,
          texto:
            '¿Qué caracteriza al despiece de planos en el proceso de patronaje básico?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Consiste en calcar cada pieza por separado, identificarla, agregar márgenes y preparar moldes para corte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Consiste en dibujar la prenda terminada sin medidas, piquetes, hilos de tela ni especificaciones técnicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Consiste en coser directamente la muestra física antes de validar el plano y sus proporciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Consiste en elegir el color de la tela según tendencia, temporada, usuario y línea comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia dominio del despiece como separación técnica de las piezas del plano para su posterior corte.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 10,
          texto:
            '¿De qué depende el margen de costura asignado a las piezas durante el despiece?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Del color de la tela y de la combinación cromática planteada en la ficha de diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Del tipo de costura, la operación y la maquinaria que se utilizará en el proceso de ensamble.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Del nombre comercial de la silueta y de la temporada en la que se venderá la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Del tamaño de la imagen de referencia y de la calidad de impresión del dibujo plano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que el margen de costura responde a la operación técnica, al acabado y a la maquinaria de confección.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 11,
          texto:
            '¿Qué información integra la señalización de una pieza de patrón para facilitar su lectura técnica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Precio unitario, proveedor textil, canal de distribución, empaque sugerido y estrategia de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fotografía comercial, temporada de moda, estilo de vitrina, usuario aspiracional y concepto gráfico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Nombre de pieza, referencia, hilo de tela, piquetes, cantidad a cortar y material correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Velocidad de costura, tipo de motor, lubricación, voltaje de máquina y mantenimiento preventivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la señalización como sistema de información para corte, producción y control del molde.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 12,
          texto:
            '¿Cómo se relaciona la altura de cabeza de manga con la movilidad y estructura de la prenda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una cabeza más larga da mayor movimiento y menor estructura, propia de prendas deportivas holgadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una cabeza más corta da menor movimiento y mayor estructura, propia de prendas formales ajustadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La altura de cabeza no modifica comodidad ni estructura, porque solo determina el largo total de manga.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una cabeza más larga da menor movimiento y mayor estructura, mientras una más corta favorece comodidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra dominio del comportamiento de la cabeza de manga en relación con movilidad, comodidad y estructura.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 13,
          texto:
            '¿Qué fórmula general se usa para deducir la cabeza de manga casual desde el recorrido de sisas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sisa delantera más sisa posterior dividido entre cuatro, según el comportamiento intermedio de la prenda casual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sisa delantera más sisa posterior dividido entre cinco, según el comportamiento de prendas deportivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sisa delantera más sisa posterior dividido entre tres, según el comportamiento de prendas formales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sisa delantera menos sisa posterior dividido entre seis, según el comportamiento de camisas masculinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia apropiación de la fórmula asociada a la cabeza de manga casual y su comportamiento intermedio.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 14,
          texto:
            '¿Cómo se clasifican funcionalmente los cuellos en patronaje según el componente formativo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuellos deportivos, clásicos y comerciales, definidos por el mercado y la procedencia de cada estilo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuellos por medida de contorno, por unión de hombro y por extensión, según su relación con el escote.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cuellos rectos, curvos y diagonales, definidos únicamente por el tipo de regla utilizada en el trazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuellos delanteros, posteriores y laterales, definidos por el sentido del hilo en el material textil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la clasificación funcional de los cuellos de acuerdo con su comportamiento sobre el escote y el cuerpo.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 15,
          texto:
            '¿Qué aspecto distingue a los cuellos por extensión dentro del trazo funcional de prendas superiores?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Siempre se trazan como tiras separadas que abrazan el cuello y se mantienen levantadas sobre la estructura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se construyen únicamente desde la pretina y se aplican a prendas inferiores con cierre lateral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Combinan una parte levantada que abraza el cuello y otra que descansa como extensión de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se aplican solo en mangas, puños y portañuelas para reforzar el acabado de camisas formales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del cuello por extensión como combinación de apoyo sobre el cuerpo y levantamiento en el cuello.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe considerarse en el patronaje de pantalones infantiles con sistema de ajuste encauchado?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el encauchado elimine toda amplitud para mantener la prenda rígida y sin movilidad en cintura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que el cierre se ubique siempre en el centro frente aunque el diseño no lo requiera funcionalmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que la pretina sustituya bolsillos, aletillas y fondos para simplificar todas las piezas del molde.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que brinde seguridad, confort y movilidad sin generar presión excesiva ni incomodidad en la piel del infante.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión del encauchado infantil como sistema de ajuste que debe equilibrar seguridad, confort y movilidad.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 17,
          texto:
            '¿Qué elemento funcional debe incorporarse al unir básicos superiores e inferiores en el patronaje de overoles?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La horcajadura, porque aporta holgura o desahogo necesario para que la prenda funcione sobre el cuerpo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La entretela completa, porque reemplaza toda señalización y evita el uso de sistemas de cierre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El cuello por contorno, porque determina la caída de las botas y la amplitud del pantalón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La portañuela de manga, porque controla el vuelo de la falda y la profundidad del escote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia dominio de la horcajadura como desahogo funcional necesario en prendas tipo overol.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 18,
          texto:
            '¿Qué diferencia general se contempla entre camisa clásica y camisa <em>slim fit</em> en la línea masculina?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La camisa clásica se traza sin básicos, mientras la camisa <em>slim fit</em> se construye solo desde imágenes comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La camisa <em>slim fit</em> requiere base ajustada y fórmulas propias, aunque conserva la secuencia técnica de patronaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La camisa clásica elimina complementos como almilla, bolsillo y cierre para reducir operaciones de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La camisa <em>slim fit</em> se desarrolla únicamente en línea infantil y no aplica en patronaje masculino industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la diferencia de silueta y fórmula entre la camisa clásica y la camisa <em>slim fit</em> dentro del mismo procedimiento.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la función principal de la pinza correctiva de talle en la línea femenina?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir el ancho de ruedo de las faldas rotondas sin considerar contorno de cintura ni cadera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir el sistema de cierre en blusas y chaquetas mediante una pieza decorativa invisible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Corregir desniveles anatómicos y permitir traslados para ajustar volúmenes, siluetas y estructuras del cuerpo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Calcular la cantidad de puntadas por pulgada en telas elásticas durante el ensamble industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la pinza correctiva de talle como recurso técnico para ajustar volúmenes y siluetas femeninas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 20,
          texto:
            '¿Qué permite el análisis de proporciones al interpretar diseños desde una imagen, ficha técnica o muestra física?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar el uso de básicos porque la imagen contiene todas las medidas exactas de la prenda final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir únicamente el estilo comercial de la prenda sin intervenir el trazo, las medidas ni el plano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar los sistemas de cierre por decoraciones, textiles y acabados seleccionados visualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Obtener medidas de referencia al comparar el diseño con básicos, moldes, talla y sistema de medida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra dominio del análisis de proporciones como recurso para traducir referencias visuales en medidas de patronaje.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra apropiación de los fundamentos técnicos del patronaje básico aplicados al desarrollo de prendas infantiles, masculinas y femeninas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
