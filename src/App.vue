<template>
    
  <p id="Superior">
    ¡Bienvenido a mi web!
  </p>
  
  <div id="seccion1" class="col-12 col-lg-12">
    <!-- Navbar content -->
    <nav id="transparencia" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <div id="logohead">
          <router-link to="/Inicio"><img id="LOGO" src="../public/Nuevo logo a4 BORDE.png" alt="logo del header" width="105px" /></router-link>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">⋮</span>
        </button>

        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <router-link to="/home">Home </router-link>
           
            </li><span>  </span>

            <li class="nav-item dropdown">
              <router-link to="/contacto"> Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <box class="box" id ="inferior">  </box> <!-- linea naranja inferior navbar -->
  <box class="box" id ="inferior2">  </box> <!-- linea sombra de inferior navbar -->

  <div id="entrada" class="rounded col-12 col-lg-12 container-fluid">
    <h2 class="texto-imagen">{{ animatedText }}<span class="texto-imagen2">{{ secondText }}</span>
    </h2>



    <!-- Estrellas en el fondo -->
    <div class="starfield">
      <div v-for="star in stars" :key="star.id" class="star" :style="star.style"></div>

    </div>
    <div class="starfield2"></div>
  </div>

  <!-- Aquí se renderizan las vistas correspondientes según la ruta -->

  <router-view/>

</template>

<script>


export default {
  data() {
    return {
      text:'< Diseño y Desarrollo web / ',
      secondText: ' > ',
      animatedText: '',
      secondTextVisible: false,
      stars: []


    };

  },

  mounted() {
    this.animateText();
    this.generateStars(1000); // Genera 100 estrellas al montar el componente
  },
  methods: {
    animateText() {
      let i = 0;
      const textLength = this.text.length;
      const interval = setInterval(() => {
        this.animatedText += this.text.charAt(i);
        i++;
        if (i === textLength) {
          clearInterval(interval);
          this.showSecondText();
        }
      }, 75); // El intervalo de 75ms controla la velocidad de la animación del texto
    },

    showSecondText() {
      this.secondTextVisible = true;
    },

    generateStars(count) {
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + -1; // Tamaño aleatorio entre 1 y 4
        const duration = Math.random() * 9 + 75; // Duración aleatoria entre 5s y 10s
        const delay = Math.random() * 8; // Retraso aleatorio entre 0s y 5s
        this.stars.push({
          id: i,
          style: {
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `-${delay}s`
          }
        });
      }
    }
  }
};


</script>

<style>
#LOGO {

  margin-left: -23%;
  
}

#seccion1 {
  margin: 0%;
  background-color: rgb(0, 0, 0);
  background-image: url('../public/Designer\ \(4\).jpeg');
  /* Especifica la ruta de la imagen */
  background-size: cover;
  background-position: center;
  /* Centra la imagen en el fondo */
}

#Superior {
  margin: 0%;
  background-color: rgb(255, 142, 35);
  display: flex;
  justify-content: center;
  align-items: center;
}

#inferior {
  width:auto;      /* Ancho fijo */
  height:1.5px; 
  margin: 0%;
  background-color: rgb(255, 142, 35);
  display: flex;
}
#inferior2 {
  width:auto;      /* Ancho fijo */
  height:1px; 
  margin: 0%;
  background-color: rgb(190, 78, 2);
  display: flex;
}

.container-fluid {
  width: 100%;
}

.navbar-toggler {
  
  background-color: rgb(0, 0, 0);
  color: rgb(255, 142, 35);
  border-color: rgb(255, 142, 35);
  border-radius: 6%;
  font-size: larger;
  font-style: normal;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
 
}

.navbar-toggler:hover { /* color fondo boton para moviles navbar */
  background-color: rgb(255, 142, 35);
  color: #000000;
  border-color: #ffffff;
  border-radius: 6%;
}

.collapse{  /* fondo oscuro semi tranparente navbar */
  
  background-color: rgba(0, 0, 0, 0.0);
  margin-bottom: -2.5%;
  width: 100%;
  
}


/*
padding-left: 82%;
  margin-left: -8%;
  margin-right: -8%;
*/
.navbar-nav{  
  padding-top: 2.5%;
  font-size: xx-large;
}

.nav-item {
padding-bottom: 0%;
  margin-bottom: 0%;
    padding-left: 4%;
    padding-right: 4%;
    background-color: rgba(0, 0, 0, 0.6);
    margin-left: 7%;
    margin-right: 7%;
    }

 .nav-item:hover {
  background-color: rgba(21, 63, 13, 0.75); /*rgba(88, 250, 56, 0.2)*/
  transition: background-color 0.3s, color 0.3s;
 }


#entrada {
  background-color: rgb(0, 0, 0);
  display: flex;
  margin-top: 8px;
  width: 96%;
  /* Asegura que ocupe el 100% del ancho */
  height: 150px;
  justify-content: center;
  align-items: center;
  position: relative;
  /* Para asegurarse que los elementos dentro estén posicionados bien */
  overflow: hidden;
}
.texto-imagen, .texto-imagen2 {
  display: flex;
  justify-content: center; /* Centrado horizontal */
  align-items: center;     /* Centrado vertical si es necesario */
  text-align: center;      /* Asegura el texto centrado */
  
}

.texto-imagen {
 display: flex;
  bottom: 1%;
  padding-top: 2%;
  color: rgb(54, 173, 252);
  font-size:xx-large;
  font-weight:700;
  text-shadow: 2px 2px 5px rgba(105, 98, 61, 0.7);
  z-index: 2;/* Asegurarse de que el texto esté por encima de las estrellas */
}



.texto-imagen2 {

  font-size:xx-large;
  font-weight: bold;
  color: rgb(249, 252, 54);
  text-shadow: 2px 2px 5px #ffffffb3;
  z-index: 1;
  animation: titileoColor 1.7s infinite;
  /* Asegurarse de que el texto esté por encima de las estrellas */
}
@keyframes titileoColor {  /* corresponde a texto-imagen2 */
 
 100% {
    opacity: 5;
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 5px rgb(253, 113, 19);;
  }
  80% {
    opacity: 3;
    color: rgb(249, 252, 54); /* Cambiar a otro color */
    text-shadow: 2px 2px 10px rgb(252, 199, 54);
  }
50% {
    opacity: 1;
    color: rgb(235, 238, 33); /* Cambiar a otro color */
    text-shadow: 2px 2px 20px rgb(250, 252, 158);
  }
  20% {
    opacity: 0;
    color:  rgb(255, 166, 0); /* Cambiar a otro color */
    text-shadow: 2px 2px 30px #ffffff;
  }
  60% {
    opacity: 5;
    color: rgb(235, 238, 33); /* Cambiar a otro color */
    text-shadow: 2px 2px 20px rgb(250, 252, 158);
    
  }
  80% {
    opacity: 5;
    color: rgb(249, 252, 54); /* Cambiar a otro color */
    text-shadow: 2px 2px 10px rgb(252, 199, 54);
  }
  100% {
    opacity: 1;
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 5x rgb(253, 113, 19);
  }
}

@media (max-width: 600px) { /*ajusta el caracter al centro */
  .texto-imagen, .texto-imagen2 {
    font-size: large; /* Ajusta el tamaño de fuente para pantallas pequeñas */
    padding-top: 1%; /* Ajusta el padding si es necesario */
    text-align: center; /* Centra el texto */
  }
}

/* Estrellas de fondo */
.starfield {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black;
  /* Fondo oscuro para las estrellas */
}

.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 2px;
  height: 2px;
  animation: moveStar linear infinite;
}

@keyframes moveStar {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100vh);
  }

}

.starfield2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: transparent;
  z-index: 1;
  /* Las estrellas están por detrás del texto */
  pointer-events: none;
  /* Evita que interfiera con la interacción del usuario */
  animation: starAnimation 100s linear infinite;
}

.starfield2::before {
  content: '';
  position: absolute;
  margin-top: 2%;
  top: 0;
  left: 0;
  width: 300%;
  height: 300%;
  background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
  /* Fondo de estrellas */
  background-repeat: repeat;
  opacity: 10;
  animation: starAnimation 1000s linear infinite;
}

@keyframes starAnimation {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>
