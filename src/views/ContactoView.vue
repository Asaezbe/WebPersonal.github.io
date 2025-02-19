<template>
 <div class="contacto">

<h1>
  Dejanos un mensaje y responderemos a la brevedad posible
</h1>
<textarea id="mensaje" name="mensaje" rows="4" cols="50" placeholder="Cuentanos aquí"></textarea>
<br>
  <button  @click="navigateTo404" >Enviar</button>

 
</div> 
</template>

<script>
export default {
  name: 'Home',
  methods: {
    navigateTo404() {
      this.$router.push('/pagina-no-existe'); // Ruta que no existe
    },
  },
};
</script>

<style>
.contacto {
  font-weight: 500;
  color: rgb(101, 226, 43);
}

.btn {
  border-radius: 1rem;
  margin: 0 5px;
  width: 100px;
  padding: 5px;
  font-size: 1rem;
}
.primary {
  background-color: rgb(20, 190, 43); /*rgb(77, 77, 231)*/
  color: rgb(255, 255, 255);
}
.counter {
  font-size: 36px;
}

.warning {
  background-color: rgb(230, 53, 53);
  color: rgb(255, 255, 255);
}
</style>