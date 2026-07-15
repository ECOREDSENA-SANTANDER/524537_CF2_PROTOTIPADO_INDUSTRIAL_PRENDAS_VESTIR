<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 En el siguiente video se presenta una breve explicación de los temas que serán tratados en este componente: 
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gSoxcc4J2To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Patronaje básico 
    
    .titulo-principal.color-acento-contenido
      h1 Patronaje básico 
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-9
        p Para comenzar con el trazado de patrones desde los básicos en prendas inferiores, es crucial establecer la línea de aplomo o línea base de construcción, que se corresponde con la altura de cadera o tiro. Del mismo modo, al trazar patrones desde los básicos en prendas superiores, la línea de aplomo o línea base de construcción se sitúa en la línea de sisa o la altura de cadera.
        p Es importante tener en cuenta que las medidas presentadas en los videos son ejemplos y orientaciones únicamente. Cada diseñador puede tener referencias distintas, dependiendo del tipo de trazado, elementos utilizados e incluso del tipo de herramienta de dibujo. Sin embargo, siempre es fundamental hacer referencia a las medidas del cuadro de tallas y a las fórmulas pertinentes.
        p Es esencial también reconocer que en el ámbito comercial se utilizan diversos nombres para describir las siluetas y formas de las prendas. No obstante, en este proceso de aprendizaje nos enfocaremos en aspectos funcionales sin entrar en especificaciones de nombres comerciales.
      .col-lg-3.col-md-4.col-7
        img(src='@/assets/curso/temas/tema1/img01.svg', alt='')
    
    .cajon.color-acento-contenido.p-4.mb-0
      .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
        .col-lg-1.col-md-2.col-4.mb-3.mb-md-0
          img(src='@/assets/curso/temas/tema1/img02.svg', alt='')
        .col-lg-11.col-md-10
          p.mb-0 Al tener en cuenta los términos de los estudiosos, se puede determinar que satisfacción, cliente, necesidades, mercado y expectativas son las palabras comunes que engloban el concepto para concluir que la calidad es el nivel de satisfacción del cliente al cubrir sus necesidades y expectativas. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
