<template>
  <!-- Aqui fazemos a verificação se o usuario fez login, continua, para as demais paginas-->
 
    
  
  <menuDefault ></menuDefault>


</template>

<script>
// @ is an alias to /src
import menuDefault from '@/components/menuDefault.vue'

export default {
  name: 'HomeView',
  data: () => {
    return {
      // Função que faz o check de login do usuario no banco de dados
      checkLogin (){
        let i = true;
        if(i === true){
        return true
        }else{
          return false;
        }
      }
    }
  },
  components: {
    menuDefault
  }

}
</script>
