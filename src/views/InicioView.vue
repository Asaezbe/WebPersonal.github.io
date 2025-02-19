<template>
  <!--este es el Parent-->

  <section class="inicio container-fluid">
    <div class="box1 col-12 col-lg-6">
      <p class="textoBox1">
        «Programa siempre como si la persona que finalmente mantendrá tu código
        fuera un psicópata violento que sabe dónde vives».
        <br />
        <span class="DesarrolladorParentesisInit">{</span><span class="Desarrollador">Martin Golding</span><span
          class="DesarrolladorParentesisFin">}</span>
        <br /> <!--&#9679;&#9679;&#9679;//-->
        <img class="logo" src="../../public/html.svg" alt="logo HTML naranjo" />
      </p>
      <div class="logo-container"></div>
    </div>
 
   
    <div class="box2 col-12 col-lg-6">
      <p class="textoBox2"><i id="htmlCol" class="fa-brands fa-html5"></i> <i id="cssCol"
          class="fa-brands fa-css3-alt"></i> <i id="jsCol" class="fa-brands fa-square-js"></i> <i id="bootstrapCol"
          class="fa-brands fa-bootstrap"></i><br><i id="excelCol" class="fa-sharp fa-solid fa-file-excel"></i> <i
          id="gitCol" class="fa-brands fa-github"> </i> <i id="vueCol" class="fa-brands fa-vuejs"></i> <i id="sassCol"
          class="fa-brands fa-sass"></i></p>
    </div>
  </section>
  <!--Seccion 2 inicio//-->
  <section class="inicio container-fluid">
    <div class="box3 col-12 col-lg-6">
      <img class="DiseñoW" src="../../public/diseñoWeb.png" alt="logo HTML naranjo" />
      <div class="logo-container"></div>
    </div>

    <div class="box4 col-12 col-lg-6">
      <p class="textoBox4">Soy <span class="TextoNombre">Andrés Saéz B.</span> <br>
Vivo en Chile, soy alguien muy inquieto y me gusta la idea de crear como lo hacen los niños.
Si crees que pueda encajar en alguno de tus proyectos, no dudes en contactarme y hablamos.
</p>

<button id="botonContacto" class="btn btn-success">Contacto</button>
<p class="textoBox4">Hace algún tiempo escribí varios posts relacionados a tecnología en linkedin.</p>
<img class="ImgLink1" src="../../public/unix_.jpg" alt="logo HTML naranjo" />
<img class="ImgLink2" src="../../public/energia_.jpg" alt="logo HTML naranjo" />
<img class="ImgLink3" src="../../public/SEO_.jpg" alt="logo HTML naranjo" />

    </div>
  </section>
  <!--Seccion 2 fin//-->



  <section class="inicio container-fluid">
   
   

    <div class="box1 col-12 col-lg-6">
     
    </div>


  </section>
  <router-view></router-view>
</template>

<script>
export default {
  name: "InicioView",

  
};
</script>

<style>
.inicio {
  /*container*/
  margin-top: 1%;
  display: flex;
  flex-wrap: wrap;
}

.TextoNombre{
font-size: 150%;
}

.inicioRecuadro2 {
  /*container*/
  margin-top: 1%;
 
  display: flex;
  flex-wrap: wrap;
}

.container-fluid {

  padding-left: 0;
  padding-right: 0;
}

.box1 {
  width: 100%;
  /* Ancho fijo */
  padding-right: 10%;
  padding-left: 10%;
  background-color: rgb(107, 107, 107);
  display: inline-block;
  padding-top: 3.5%;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 7%;
}

.textoBox1 {
  font-size: xx-large;
  text-align: center;
  font-style: italic;
  margin-left: 4%;
  margin-right: 4%;
  color:rgb(255, 255, 255);
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.textoBox2 {
  padding-top: 2%;
  margin-left: 0%;
  width:85%;
  height: 92%;
  border-radius: 12px;
  background: linear-gradient(to right, rgb(158, 158, 158) -10%, rgb(255, 255, 255) 20%);
  padding-bottom: 2%;
}

@media (max-width: 768px) {
  .textoBox2 {
    margin-left: auto;
    margin-right: auto;
    display: block; /* El elemento se comporta como bloque */
  }
}

/*icoconos colores fondo inicio*/
#htmlCol {
  color: rgb(255, 152, 0);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */
}

#cssCol {
  color: rgb(0, 153, 255);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */

}

#jsCol {
  color: rgb(255, 221, 51);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */

}

#bootstrapCol {
  color: rgb(66, 27, 140);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */

}

#excelCol {
  color: rgb(0, 176, 80);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */

}

#gitCol {
  color: rgb(0, 0, 0);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */

}

#vueCol {
  color: rgb(0, 204, 102);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */

}

#sassCol {
  color: rgb(214, 72, 121);
  width: 120px;
  height: 96px;
  border-radius: 7px;
  /* Opcional: hace un círculo */

}

#htmlCol,
#cssCol,
#jsCol,
#bootstrapCol,
#excelCol,
#gitCol,
#vueCol,
#sassCol {

  margin: 0 10px;
  /* Espacio entre iconos */
  transition: all 0.3s ease;
  /* Transición suave */
}

#htmlCol:hover,
#cssCol:hover,
#jsCol:hover,
#bootstrapCol:hover,
#excelCol:hover,
#gitCol:hover,
#vueCol:hover,
#sassCol:hover {
  transform: scale(1.3);
  color: rgb(255, 152, 0);
}

/*icoconos colores fondo fin*/

.DesarrolladorParentesisInit,
.DesarrolladorParentesisFin {

  font-size: large;
  color: rgb(252, 255, 77);
  /*rgb(16, 185, 115)*/
}

.Desarrollador {
  font-size: medium;
  color: rgb(79, 233, 169);
}



.box2  {
  /* Ancho fijo  padding-right: 5%;
  padding-left: 5%;
  margin-left: -5%; */
 
  font-size: 550%;
  text-align: center;
  background: linear-gradient(to left, rgb(32, 32, 32) 5%, rgb(107, 107, 107) 50%);
  display: inline-block;
  padding-top: 2%;
  justify-content: center;
  align-items: center;
}
.box4 {
  /* Ancho fijo  padding-right: 5%;
  padding-left: 5%;
  margin-left: -5%; */
 
  font-size: large;
  text-align: center;
  display: inline-block;
  padding-top: 2%;
  justify-content: center;
  align-items: center;
}

.ImgLink1, .ImgLink2, .ImgLink3 {
  width: 20%;
  margin: 2% ;
  border-radius: 50%;
  border:7px solid;
  border-color:rgb(16, 185, 115);
}

.ImgLink1:hover,
.ImgLink2:hover,
.ImgLink3:hover {
  transition: all 0.3s ease;
  transform: scale(1.3);
  border:4px solid;
  border-color: rgba(255, 152, 50);
}
#botonContacto {
  margin-top: 5%;
  width: auto;
  font-size: 150%;
}

/* seccion2 inicio */
.DiseñoW {
  width: 80%;
  margin-left: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textoBox4 {
  font-size: 170%;
  text-align: center;
  margin-top: 5%;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 12px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:rgba(255, 152, 50);
}

/* seccion2 fin */

.box5 {
  width: 100%;
  /* Ancho fijo */
  background: linear-gradient(to right, rgb(32, 32, 32) 5%, rgb(107, 107, 107) 50%);
  display: inline-block;
  padding-top: 3.0%;
}
</style>
