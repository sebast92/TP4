<template>

<section class="src-components-formulario">
    <div class="jumbotron">
      <h2>Formulario</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">


        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre" 
            name="nombre"
            required
            no-espacios
            entre-5-15-caracteres
          >

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2 ml-1">Campo requerido</div>
            <div slot="entre-5-15-caracteres" class="alert alert-danger mt-2 mr-1">
              Este campo debe poseer entre {{ MinLength }} y {{ MaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-2">
              Este campo no permite espacios intermedios
            </div>

          </field-messages>
        </validate>
    
        <br>


        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.edad" 
            name="edad"
            required
            entre-18-120-anos
          >

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2 ml-1">Campo requerido</div>
            <div slot="entre-18-120-anos" class="alert alert-danger mt-2 mr-1">
              La edad mínima debe ser mayor a {{ edadMin }} y menor a {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>

        <br>


        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.email" 
            name="email"
            required
          >
      
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2 ml-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-2 mr-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>    

      <hr>
      <p><u>Datos del formulario</u></p>
      <div v-if="formData.nombre != null" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>{{ formData.nombre }}</td>
            <td>{{ formData.edad }}</td>
            <td>{{ formData.email }}</td>
          </tr>
        </table>
      </div>

    </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData: this.getInitialData(),
        MinLength: 5,
        MaxLength: 15,
        edadMin: 18,
        edadMax: 120
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre: null,
          edad: null,
          email: null
        }
    },
    enviar() {
      this.formData = this.getInitialData()
      this.formState._reset()
    }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  h2 {
    font-size: 50px;
    font-family: serif;
  }

</style>
