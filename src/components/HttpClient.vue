<template>

  <section class="src-components-http-client">
    <div class="jumbotron">
      <h2>HTTP Client</h2>
      <hr>
      <hr>
      <br>

      <button class="btn btn-success my-3 mr-3" @click="getPostsXHRPromise()">XHR request</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">Fetch request</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Axios request</button>


      <button class="btn btn-danger my-3 mr-3" @click="users = []">Borrar todo</button>
      <br>

      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>

          <tr v-for="user in users" :key="user.id">
            <td>{{ user.nombre }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.telefono }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encuentraron datos</h4>

    </div>
  </section>

</template>

<script>

export default {
  name: 'src-components-http-client',
  props: [],
  mounted() {

  },
  data() {
    return {
      url: 'https://635e8a8303d2d4d47af10cea.mockapi.io/users',
      users: []
    }
  },
  methods: {
    xhrPromise() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', this.url)
        xhr.addEventListener('load', () => {
          if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            resolve(respuesta)
          }
          else {
            reject(`Error http: ${xhr.status}`)
          }
        })
        xhr.send()
      })
    },
    async getPostsXHRPromise() {
      try {
        let respuesta = await this.xhrPromise()
        this.users = respuesta
      }
      catch (error) {
        console.error(error)
      }
    },
    async getPostsFetch() {
      try {
        let response = await fetch(this.url)
        let respuesta = await response.json()
        this.users = respuesta
      }
      catch (error) {
        console.error(error)
      }
    },
    async getPostsAxios() {
      try {
        let respuesta = await this.axios(this.url)
        this.users = respuesta.data
      }
      catch (error) { console.error(error) }
    }
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-components-http-client {

}

h2 {
  font-size: 50px;
  font-family: serif;
}

table, th, td {
  border: 2px solid;
  background-color: steelblue;
}



</style>
