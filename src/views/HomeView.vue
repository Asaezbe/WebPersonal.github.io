<template> <!--este es el Parent-->
 
 <div class="graficos col-12 col-lg-8">
   
    
    <div id="chart" ></div>
  </div>

   


</template>

<script>
   document.addEventListener('DOMContentLoaded', function () {
    var options = {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      series: [{
        data: [95, 55, 41, 17, 15],
        name: 'Valor'
      }],
      
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '25px',
          fontWeight: 'bold',
          colors: ['#000000']
        },
        formatter: function (val) {
          // Mapeo de valores numéricos a palabras
          const palabras = {
            95: 'Photo Shop, Affinity Photo y Lightroom',
            55: 'FreeHand, Affinity Designer e Inkscape',
            41: 'Blender y 3d max',
            17: 'Clip Studio Paint',
            15: 'Clip Studio Paint'
          };
          return palabras[val] || val;  // Retorna la palabra o el valor si no hay mapeo
        }
      },
      xaxis: {
        categories: ['', '', '', '', ''],
        labels: {
          style: {
            colors: [
              'rgba(255, 152, 50)',
            ],
            fontSize: '20px'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5
      },
      colors: ['rgb(16, 185, 115)'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  });
</script>


<style scoped>
.graficos {
  width: 100%;

  /* Ancho fijo */
display: inline-block;
  padding-top: 3.0%;
}


</style>
