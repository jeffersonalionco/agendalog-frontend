<template>
  <!-- Componente de Login -->
  <LoginForms />
  <p v-show="loading">LOGADO {{ users.email }}</p>
  <p v-if="error" style="color:red;">{{ error }}</p>
</template>

<script>
import LoginForms from "@/components/LoginForms.vue";

export default {
  name: "LoginView",
  data() {
    return {
      users: {}, // 👈 usuário logado (não precisa ser array)
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  components: {
    LoginForms,
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      alert("Inicio do try")
      try {
        const response = await fetch("http://localhost:3009/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "teste", // 👈 certifique-se que existe no banco
            senha: "123456",       // 👈 backend espera "password" (não "senha")
          }),
        });

        if (!response.ok) throw new Error("Erro ao fazer login");

        const data = await response.json();
        this.users = data.user; // 👈 supondo que backend retorna { token, user }
        alert("Login bem-sucedido")
        console.log("Login bem-sucedido:", data);
      } catch (err) {
        alert("Inicio error" + err)
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
