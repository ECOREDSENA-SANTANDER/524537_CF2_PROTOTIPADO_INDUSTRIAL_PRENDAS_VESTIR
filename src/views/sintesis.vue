<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 La base fundamental para el patronaje de prendas es la apropiación de los pasos requeridos para realizarlo, el manejo de las proporciones y el análisis de cada pieza que acompaña la prenda. En este componente se realiza un recorrido por las características de básicos en línea infantil, masculina y femenina, detallando en cada una herramientas teóricas y prácticas para la producción de prendas.

    .row.justify-content-center
      .col-lg-12.mb-5        
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La imagen muestra un diagrama con múltiples nodos conectados, centrado en el tema del “Patronaje Básico”. Este nodo principal se conecta a varias categorías relacionadas con la confección y el diseño de ropa. A su alrededor, se ramifican nodos específicos para diferentes líneas y tipos de prendas: Línea Masculina: Incluye nodos para “Base Sastre”, “Jean Slim Fit”, “Pantalón Clásico” y “Camisa Clásica”. Línea Femenina: Conecta con “Chaquetas y Vestidos” y “Faldas y Overoles”. Línea Infantil: Se desglosa en “Patrón a Escala”, “Prendas Superiores”, “Overol” y “Prendas Inferiores”. También aparece un nodo para “Pinza Correctiva”, lo que sugiere ajustes y modificaciones en el diseño para un mejor ajuste. El diagrama sirve para visualizar cómo se estructura el patronaje en diferentes categorías y cómo se interrelacionan entre sí dentro del ámbito del diseño de moda, posiblemente utilizado como herramienta educativa o de planificación en el diseño de vestuario.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Anexos/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            span.mb-0 Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
