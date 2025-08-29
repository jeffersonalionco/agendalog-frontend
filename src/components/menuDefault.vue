<template>

  <nav class="navbar navbar-expand-lg bg-primary navbar-dark c1">
    <div class="container-fluid">

      <!-- LOGO DO PROJETO -->
      <a class="navbar-brand" href="#">LOGO AGENDA LOG</a>


      <!-- BOTAO SANDUICHE É ACIONADO-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <!-- iTENS DE NAVEGAÇÃO DO NAVBAR-->
      <div class="collapse navbar-collapse c2" id="menu-principal">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pedidos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mais paginas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Visualizar</a></li>
              <li><a class="dropdown-item" href="#">Lancar</a></li>
              <li><a class="dropdown-item" href="#">Remover</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link">Configurações</a>
        </li>

      </ul>
      <img
        src="https://img.logo.dev/mercedes-benz.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true"
        class="rounded-circle logoC1" alt="Logo">
    </div>
  </nav>



  <router-view />

</template>


<script>


</script>

<style scoped>
.c1 {
  height: 100px;
}

.c2 {
  padding-left: 50px;
}

.logoC1 {
  height: 80px;
}
</style>
