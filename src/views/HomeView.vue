<template>
  <!-- Verificação se o usuário está logado -->
  <div v-if="checkLogin() === true">

    <!-- Menu fixo no topo -->
    <menuDefault></menuDefault>

    <!-- Container principal da Home -->
    <div class="container-fluid mt-4">
      <div class="row">
        
        <!-- Coluna da esquerda (cards de pedidos) -->
        <div class="col-md-4 border-end pe-3">
          <div class="card border-0 shadow-sm rounded-3 mb-4">
            <!-- Cabeçalho -->
            <div class="card-header bg-primary text-white rounded-top">
              <h5 class="mb-0">LISTA DE PEDIDOS</h5>
            </div>

            <!-- Corpo do card -->
            <div class="card-body bg-light">
              <h6 class="card-title">Título de exemplo</h6>
              <p class="card-text">
                Descrição de exemplo do pedido. Aqui você pode colocar informações rápidas.
              </p>
              <button class="btn btn-primary btn-sm">Detalhes</button>
            </div>
          </div>
        </div>

        <!-- Coluna da direita (outros dados / componentes) -->
        <div class="col-md-8">
          <div class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-header bg-info text-white rounded-top">
              <h5 class="mb-0">Informações adicionais</h5>
            </div>
            <div class="card-body bg-light">
              <p class="card-text">Aqui você pode renderizar outro componente ou exibir dados dinâmicos.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import menuDefault from '@/components/menuDefault.vue'

export default {
  name: 'HomeView',
  components: { menuDefault },
  methods: {
    checkLogin() {
      // Simulação de login
      return true
    }
  }
}
</script>

<style scoped>
/* só para dar uma suavizada no layout */
.container-fluid {
  padding: 20px;
}
</style>
