<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#addPerson"
  >
    Add person
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addPerson"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="modal-body">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" v-model="person.name" :class="{error: error.status}" />
            <p v-if="error.status" :class="{'error-text':error.status}">{{ error.text }}</p>
            <label for="email">Email: </label>
            <input type="text" name="email" id="email" v-model="person.email" />
            <p>Hobbies</p>
            <div
              v-for="job in jobs"
              :key="job.id"
              :style="{
                backgroundColor: person.jobs.includes(job.id) ? '#313131' : '',
              }"
            >
              <input
                type="checkbox"
                name=""
                :id="job.name"
                :value="job.id" v-model="person.jobs"
              />
              
              <label :for="job.name">{{ job.name }}</label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "",
        email: "",
        jobs: [],
      },
      error: {
        text: "",
        status: false,
      },
      jobs: [
        {
          id: 1,
          name: "music",
        },
        {
          id: 2,
          name: "football",
        },
        {
          id: 3,
          name: "movies",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.person);
      if (this.person.name.length < 6 || this.person.name > 18) {
        this.error = {
          text: "Look failed! Name ",
          status: true,
        };
      }else{
        this.error = {
            text: "Great! ",
        status: false,
        }
      }
    },
  },
};
</script>

<style scoped>
.error{
    border-color: red;
}
.error-text{
    color: red;
}
.success{
    color:greenyellow
}
</style>