<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Patronaje básico línea masculina
    
    .fondo-azul.tarjeta.p-4.mb-4
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-8
          p Antes de iniciar la implementación y transformación de básicos en masculino se debe tener en cuenta la introducción y los conceptos referenciados en la unidad de pre-patronaje, con el fin de mantener claridad en el desarrollo de modelos.
          p Lo primero para tener en cuenta es el manejo de cuadro de tallas y unidad de medida, en masculino el desarrollo de modelos o diseños en el manual se identifica en centímetros; sin embargo, el cuadro de tallas se encuentra en pulgadas, es necesario tener el cuadro de tallas con la conversión a centímetros para facilitar los procesos del trazo.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema2/img01.png', alt='')

    .bloque-texto-g.color-acento-contenido.p-4.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p Otro punto para tener en cuenta es el manejo de siluetas, en masculino el manual trabaja dos siluetas: una clásica y otra #[em slim fit], si bien el desarrollo de los planos y moldes cumple con los mismos pasos o el mismo orden secuencial, lo que varía son las fórmulas, específicamente para el desarrollo de los básicos. #[br] #[br]
        p Para la implementación y modificación de básicos es importante tener claridad en cada uno de los conceptos de patronaje como medidas, pasos, elementos y vocabulario técnico que se irá implementando en el desarrollo de los trazos, moldes o planos.
    
    p.mb-5 En este punto, para la implementación de los básicos se debe tomar como referencia los pasos del patronaje de acuerdo con la metodología SENA.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icon-title.svg', alt='')
        h3.mb-0.ms-2 Pasos del patronaje - implementación de básicos y desarrollo de modelos
    
    .row.justify-content-center.p-4.mb-4(data-aos="fade")
      .col-lg-8
        .border-lila
          .row.justify-content-center.align-items-center.p-4
            .col-lg-6.mb-3.mb-md-0
              ul.lista-ul--color.lista-ul--separador.mb-0
                li 
                  i
                  span.mb-0 #[b A. Básicos]
                li 
                  i
                  span.mb-0 #[b B. Interpretación]
                li.pb-0
                  ul.lista-ul--color
                    li 
                      i.fas.fa-atom
                      span.mb-0 Desahogos - contorno. Largos y anchos
                    li 
                      i.fas.fa-atom
                      span.mb-0 Sistema de ajuste
                    li 
                      i.fas.fa-atom
                      span.mb-0 Sistema de cierre
                li 
                  i
                  span.mb-0 #[b C. Complementos]
                li
                  i
                  span.mb-0 #[b D. Señalización]
                li.mb-0 
                  i
                  span.mb-0 #[b E.  Despiece]          
            .col-lg-6.col-8.col-sm-5
              img(src='@/assets/curso/temas/tema2/img03.png', alt='')  
    
    p Para esta unidad se hará la implementación del manual de patronaje básico, SENA desde la página 63 hasta la página 80, incluyendo algunas imágenes de referencia.
 

    Separador  
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Trazo de camisa clásica
      
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-8
        p Para elaborar los planos del manual de patronaje del SENA, es fundamental comenzar desde los fundamentos establecidos en los componentes previos. Este enfoque permite internalizar el análisis del manual, siguiendo la metodología del SENA. A lo largo del proceso, se encontrará con guías y ejemplos que detallan la implementación de cada paso del patronaje.
        p En la página 66 del manual, se presenta un plano de referencia para el trazo de una camisa clásica. Este plano incluye elementos como desahogos, sistemas de cierre y complementos (como almillas, prenses y bolsillos de parche). Es importante entender que este plano sirve únicamente como una guía o referencia sobre cómo implementar la base. No proporciona especificaciones ni estándares para el trazado de una camisa en particular.
        p Es esencial tener en cuenta que cada prenda, diseño, referencia, dibujo plano, ficha técnica o imagen cuenta con referencias específicas. Estas referencias están alineadas con los conceptos de diseño y los requisitos necesarios para la producción.
      .col-lg-4.col-md-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 35.
          span Camisa Clásica
        figure
          img(src='@/assets/curso/temas/tema2/img04.svg', alt='Plano técnico de camisa clásica con medidas, bolsillo y piezas delanteras y posteriores.') 

    p.mb-4 El video a continuación describe la manera de realizar el trazo de camisa clásica, teniendo en cuenta el manual de patronaje: 
    
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UwIdbbg5-fA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de camisa clásica
     

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icon-title.svg', alt='')
        h3.mb-0.ms-2 Camisa #[em slim fit]

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        p Al tomar como referencia el análisis realizado en el trazo de camisa clásica se dará inicio al trazo de la camisa #[em slim fit].     
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 36.
          span Camisa #[em slim fit]
        figure
          img(src='@/assets/curso/temas/tema2/img06.svg', alt='Plano técnico de camisa slim fit con medidas, bolsillo y piezas delanteras y posteriores.') 
      .col-lg-8 
        .col-lg-2.col-3.col-md-2
          img.px-3.mb-3(src='@/assets/curso/temas/tema2/img05.svg', alt='')         
        .col-lg-12
          p Lo primero para tener en cuenta es el manejo de los básicos, dependiendo del tipo de silueta, en este caso, se sugiere trabajar el básico de silueta #[em slim fit], con el fin de manejar la horma de acuerdo con las siluetas anteriormente trabajadas.
          p Para el trazo de camisa #[em slim fit] en la página 69 del manual encontrará un plano de referencia, en el plano identificará elementos como sistemas de cierre y complementos (almillas); este plano es solo una guía o una referencia de cómo se puede implementar la base #[em slim fit], no hace referencia a especificaciones o estándares para el trazo de una camisa #[em slim fit], debe tener en cuenta que cada prenda, diseño, referencia, dibujo plano, ficha técnica o imagen tiene unas referencias específicas, las cuales van de la mano con todos los conceptos de diseño o requerimientos que se entregan para producción.

    
    p.mb-4 En el video a continuación se describe la manera en que se realiza el trazo de camisa #[em Slim fit], basándose en el manual de patronaje:
    
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tL1lGlD5SIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Camisa #[em slim fit]


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icon-title.svg', alt='')
        h3.mb-0.ms-2 Trazo de manga, puño y cuello - camisa clásica y #[em slim fit]
    
    p Para el desarrollo de las mangas, cuellos y puños se trabajarán las generalidades de cada uno de los trazos o de las camisas clásicas y #[em slim fit], con el fin de referenciar la metodología del manual de patronaje básico SENA, en las páginas 66, 67, 69 y 70 encontrará los planos de referencia.
    p Para el desarrollo o trazo de mangas debe tener en cuenta siempre el comportamiento de las cabezas de mangas:

    .row.justify-content-center(data-aos="fade-left")
      .col-sm-6.col-lg-5.mb-4
        .tarjeta.tarjetablue.p-4.h-100
          p #[b Entre más larga] sea la altura de cabeza de manga otorgará menor movimiento sobre el cuerpo = incomodidad, pero mayor estructura, esta descripción corresponde a las prendas que van ajustadas o con la horma del cuerpo.         
      .col-sm-6.col-lg-7.mb-4
        .tarjeta.tarjetablue.p-4.h-100
          p #[b Entre más corta] sea la altura de cabeza de manga otorgará mayor movimiento sobre el cuerpo = comodidad, pero menor estructura, esta descripción corresponde a las prendas que van holgadas o desestructuradas sobre el cuerpo.
          p En este caso se identifican cabezas de manga muy cortas, lo cual indica que son prendas que quedarán desestructuradas u holgadas sobre el cuerpo.
    
    p.text-center Dentro de los ejercicios anteriores de cabezas de manga se identifica la generalidad de cabeza de manga deducida como:
 
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imgsize(src='@/assets/curso/temas/tema2/icono.svg' alt='')
          .tarjeta.bglila
            .p-4.text-center
              h5.mb-2 Cabeza de manga deportiva = sisa delantera + sisa posterior / 5
              h5.mb-2 Cabeza de manga casual = sisa delantera + sisa posterior / 4
              h5.mb-0 Cabeza de manga sastre o formal = sisa delantera + sisa posterior / 3
  
    p.text-center Sin embargo, en este caso se sugiere trabajar con otra fórmula, la cual indica por su comportamiento que quedará con menor estructura y mayor comodidad sobre el cuerpo.
    p.text-center En el caso de las cabezas de mangas deducidas para las camisas clásica y #[em slim fit] se sugiere trabajar con:    
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imgsize(src='@/assets/curso/temas/tema2/icono.svg' alt='')
          .tarjeta.bglila
            .p-4.text-center
              h5.mb-2 Cabeza de manga camisa clásica = sisa delantera + sisa posterior / 6+2
              h5.mb-0 Cabeza de manga camisa slim fit = sisa delantera + sisa posterior / 6+4
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p La sumatoria al final permite identificar que por la silueta una de las dos mangas quedará con mayor desestructura sobre el cuerpo.
        p En el largo de manga se identifican referencias o disminuciones, dependiendo del comportamiento y ancho de puño, cada una de las medidas son únicamente referencias, recuerde que usted debe tener en cuenta siempre los requerimientos del diseño y que este es solo un ejercicio práctico para ejemplificar de qué manera manejar o modificar los básicos para el desarrollo de prendas.
        p Para el desarrollo de la portañuela, prenses, pliegues y demás complementos de la manga se debe tener en cuenta siempre el diseño y la referencia de la prenda, este es solo un ejercicio práctico para ejemplificar de qué manera manejar o modificar los básicos para el desarrollo de prendas.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/1.png')
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-2.col-5.col-md-3.mb-3.mb-lg-0
        img.px-lg-3(src='@/assets/curso/temas/tema2/regla.svg')
      .col-lg-10
        p Para el trazo de cuellos se debe tener siempre la referencia del tipo de cuello, medidas de cada uno de los escotes y el plano de la prenda con la que se va a trabajar.
        p Por otro lado, es importante contemplar las piezas de entretela, la relación del tipo a usar y la tela de la camisa, en la verificación de los patrones se debe pensar en el corte de estas piezas y plantear el troquelado como una opción adecuada para cuellos, puños, portañuelas y bajantes (botoneras o pecheras), de lo anterior se deriva la importancia de estandarizar este tipo de piezas de los patrones.
        p Revisa el video para profundizar en el trazo de manga, puño y cuello:
       
    figure(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VMJYcQqIKBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de manga, puño y cuello - camisa clásica y slim fit


    Separador  
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Trazo de prendas superiores - camisa 
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-6
        p Para profundizar en los conceptos y detalles trabajados en el trazo de camisas se hará el análisis de diferentes diseños desde imagen y dibujo plano, con el fin de tener referencias visuales de lo que se va trabajando, se tendrán varias imágenes de referencia, en este punto y con la firme intención de afianzar cada vez más el conocimiento se hará o trabajará todo sobre el análisis de proporciones.
        p Las proporciones son medidas que se obtienen de una imagen, muestra física, ficha técnica, dibujo plano o diseño, que al hacer un paralelo con los básicos o moldes bases de la línea, silueta o talla que se esté trabajando, permite obtener medidas o dimensiones de referencia para el desarrollo o trazo del molde correspondiente al diseño, si bien en ocasiones anteriores se han desarrollado ejercicios sobre el análisis de proporciones, es importante resaltar que las medidas y el análisis de proporciones varía de acuerdo con el tamaño, diseño, impresión, dibujo, básico y sistema de medida; las referencias implementadas son solo ejemplos detallados de cómo y qué manera se debe implementar el desarrollo.
      .col-lg-6.col-md-8
        img(src='@/assets/curso/temas/tema2/img11.png')
    
    p Es importante plantear en esta prenda algunos detalles importantes, lo cual influye en el patronaje. La camisa es concebida de uso exclusivo de los caballeros, ha ido evolucionando no solo en la silueta, además presenta modificaciones en los cuellos, los cuales han ido tomando nombres conforme al sitio de su procedencia, generando varios tipos, se habla del cuello inglés, francés entre otros, incluso otros diseños como cuello nerú, alto, planteados para diversificar el estilo y, por tanto, se desarrolla el patronaje. Asimismo, se presentan diferencias en varias partes como en las mangas y complementos como bajantes (pecheras o botoneras), almillas, puño y portañuelas. El patronista debe considerar este tipo de alternativas para trazar sus patrones.
    p.mb-4 La finalidad del ejercicio es poder comparar de qué manera se puede implementar el básico llevándolo hacia diferentes tipos de diseño, bajo una misma tipología.

    .mb-5
      img(src='@/assets/curso/temas/tema2/4.png')
    
    p En el siguiente video se explica el trazo de prendas superiores:
    
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JuuGDR01fhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.  Trazo de prendas superiores - camisa
     
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-1.col-md-3.col-3.mb-3.mb-md-0
        img(src='@/assets/curso/temas/tema2/regla2.svg')
      .col-lg-10.col-md-9
        p Con respecto a lo anterior, en el patronaje del pantalón clásico masculino, partes como el tiro y los bolsillos laterales son de especial cuidado, debido a que deben responder a la Funcionabilidad requerida, especificaciones como la profundidad del bolsillo, la forma y tamaño de la vista debe detenerse en el planteamiento del patronaje para tener especial atención.
  
  
    Separador  
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Trazo de pantalón clásico masculino

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-8
        p Para el desarrollo de los planos del manual de patronaje SENA siempre se debe partir de las bases o básicos que se han desarrollado en componentes anteriores, con el fin de apropiar el análisis del manual, todo se irá desarrollando dentro del marco de la metodología SENA, en la cual se irán encontrando guías o ejemplos con la implementación de cada uno de los pasos del patronaje.
        p Para el trazo de pantalón clásico, en la página 79 del manual encontrará un plano de referencia, en el plano identificará elementos como desahogos, sistemas de cierre y complementos (prenses, bolsillo - boca, fondo, falso y vista de bolsillo, bolsillo de ribete, pretina recta) este plano es solo una guía o una referencia de cómo se puede implementar la base inferior de pantalón, no hace referencia a especificaciones o estándares para el trazo de un pantalón formal o clásico, debe tener en cuenta que cada prenda, diseño, referencia, dibujo plano, ficha técnica o imagen tiene unas referencias específicas, las cuales van de la mano con todos los conceptos de diseño o requerimientos que se entregan para producción. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/2.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-6.col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 37.
          span Pantalón clásico
        figure
          img(src='@/assets/curso/temas/tema2/img18.svg', alt='Patrón técnico de pantalón con trazos, medidas y ubicación de bolsillo.')

    p Al tener en cuenta que el desarrollo del trazo del pantalón clásico sale desde el básico o la base inferior del pantalón masculino, es importante tener claras las medidas y las referencias de construcción, con el fin de modificar o trabajar ajustes desde la base y no iniciar el trazo del diseño del pantalón desde cero. 
    p.mb-4 En el siguiente video se presenta esta explicación:
    
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/M-vqfL1whC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de pantalón clasico masculino    
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-9.tarjetablue.p-4
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/tema2/img19.svg', alt='')
          .col-lg-9.col-md-9
            p.mb-0 Con respecto a lo anterior, en el patronaje del pantalón clásico masculino, partes como el tiro y los bolsillos laterales son de especial cuidado, debido a que deben responder a la Funcionabilidad requerida, especificaciones como la profundidad del bolsillo, la forma y tamaño de la vista debe detenerse en el planteamiento del patronaje para tener especial atención.
            
            
    Separador  
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Trazo de pantalón tipo #[em jean slim fit]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .col-lg-8
        p Para el desarrollo de los planos del manual de patronaje SENA siempre se debe partir de las bases o básicos que se han desarrollado en componentes anteriores, con el fin de apropiar el análisis del manual, todo se irá desarrollando dentro del marco de la metodología SENA, en la cual se irán encontrando guías o ejemplos con la implementación de cada uno de los pasos del patronaje.
        p Para el trazo de pantalón tipo #[em jean] silueta #[em slim fit] (ajustado) en la página 80 del manual encontrará un plano de referencia, en el plano identificará elementos como ajustes, sistemas de cierre y complementos (pasadores, bolsillo - boca, fondo, falso y vista de bolsillo, bolsillo de parche, pretina recta, cotilla) este plano es solo una guía o una referencia de cómo se puede implementar la base inferior del pantalón, no hace referencia a especificaciones o estándares para el trazo de un pantalón ajustado o tipo #[em jean]; debe tener en cuenta que cada prenda, diseño, referencia, dibujo plano, ficha técnica o imagen tiene unas referencias específicas, las cuales van de la mano con todos los conceptos de diseño o requerimientos que se entregan para producción. 
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-9
        .titulo-sexto.color-acento-contenido
            h5 Figura 38.
            span Pantalón tipo jean - silueta #[em slim fit]
        figure
          img(src='@/assets/curso/temas/tema2/img21.svg', alt='Patrón técnico de pantalón con pretina, bolsillos y medidas delanteras y posteriores.')
    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icon-title.svg', alt='')
        h3.mb-0.ms-2 Silueta #[em Slim Fit]

    p.mb-4 Al tener en cuenta que el desarrollo del trazo de pantalón tipo jean silueta #[em slim fit] (ajustado), sale desde el básico o la base inferior de pantalón masculino, es importante tener claras las medidas y las referencias de construcción, con el fin de modificar o trabajar ajustes desde la base y no iniciar el trazo del diseño del pantalón desde cero. En este caso se realizarán ajustes por anchos, contornos y gancho o extensión de tiro, tomando como referencia o punto de anclaje la línea de aplome. En el siguiente video se presenta la explicación: 
    
    figure(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BsbFLlxOeGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de pantalón tipo jean #[em slim fit]
     
     
    Separador  
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Base sastre masculina
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        p En masculino, el nivel de dificultad frente al desarrollo de prendas de vestir depende del nivel y el requerimiento, si bien a nivel nacional, la creatividad e innovación en el vestuario no es vanguardista, sino que va más hacia un perfil clásico o neo tradicional, la calidad y horma que se exige hace que se deba categorizar cada uno de los requerimientos y solicitudes, si bien en masculino en el común denominador de las prendas no se trabajan volúmenes superiores como circunferencias en busto o ajuste en glúteos, se trabajan elementos de ajuste que van de la mano con la postura o tipo de prenda.
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-12
        p En masculino, cuando se habla de sastrería se trabaja todo lo referenciado a la postura, es decir, el comportamiento de una chaqueta sastre está diseñado, trazado y patronado para mejorar o reforzar la postura de la persona, todo esto se logra por una serie de ajustes y traslados en cada una de las medidas del cuerpo, permitiendo que únicamente con el patronaje se logre estilizar la figura, silueta y postura.
        p Para el desarrollo de la base sastre masculina se acudirá a las referencias y pasos generales implementados en el trazo de los básicos clásicos y #[em slim fit.]
        .border-lila.p-4.mb-4.mb-lg-0
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-10
              p Lo primero que se debe hacer es tomar las siguientes referencias:
              ul.lista-ul--color.lista-ul--separador.mb-0
                li 
                  i.fas.fa-atom
                  span.mb-0 #[b Tipo de plano: unido]
                li 
                  i.fas.fa-atom
                  span.mb-0 #[b Talla a trabajar: 34]
                li 
                  i.fas.fa-atom
                  span.mb-0 #[b Contorno de pecho: 86.5 cm]
                li 
                  i.fas.fa-atom
                  span.mb-0 #[b Largo de talle o espalda: 44.4 cm]
                li.mb-0
                  i.fas.fa-atom 
                  span.mb-0 #[b Tipo de papel sugerido: cartón cartulina o cartulina ]
      .col-lg-6.col-md-10
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Figura 39. 
          span Base para chaqueta sastre
        figure
          img(src='@/assets/curso/temas/tema2/img22.svg', alt='Diagrama base de torso con trazos técnicos y medidas de contorno de pecho.')
    
    p.text-center Recuerde que los básicos superiores siempre se trabajan partiendo desde un rectángulo e identificando los siguientes puntos:
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-9
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img.imgsize(src='@/assets/curso/temas/tema2/img24.svg' alt='')
          .tarjeta.bglila
            .p-4
              h5.mb-2 Parte superior (cuello) - arriba, parte inferior (cintura) - abajo = de arriba hacia abajo.
              h5.mb-0 Parte derecha - posterior, parte izquierda - delantero = de atrás hacia adelante.
    
    p.text-center El rectángulo siempre se traza con las medidas más protuberantes correspondientes a la talla:
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-6
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img.imgsize(src='@/assets/curso/temas/tema2/img25.svg' alt='')
          .tarjeta.bglila
            .p-4
              h5.mb-2 Ancho: P/2+6 cm.
              h5.mb-0 Largo: largo de talle o espalda.
  
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
        img.imgsize(src='@/assets/curso/temas/tema2/img26.svg')
      .col-lg-10.col-md-9
        p Para lograr apropiar la metodología desde el inicio se sugiere ir bautizando cada línea que se traza con la parte del cuerpo que se está trabajando, esto ayudará a entender el paso de la figura 3D (cuerpo, persona) al plano 2D (trazo). Para el desarrollo de la base se sugiere seguir el paso del trazo de básicos superiores masculino, ajustando o aplicando las medidas de las fórmulas para la base sastre masculina, como se presenta en el siguiente Video.
         
   
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZRCjy8C5A2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Base chaqueta sastre masculina
  
  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
