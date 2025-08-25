<!-- Todo codigo HTML sera escrito aqui-->
<template>

    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
  <form class="p-4 border rounded" style="min-width: 300px;">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Usuario (Email):</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Aceita os Termos</label>
    </div>
    <button type="submit" class="btn btn-primary w-100">Login</button>
  </form>
</div>

</template>


<!-- codigo javascript sera feito aqui -->
<script>
export default {

    methods: {
        onClick () {
            alert("Clicopu")
        }
    }

}

</script>


<!-- Todo arquivo css ou STYLE do elemento será escrito aqui-->
<style scoped>


</style>
