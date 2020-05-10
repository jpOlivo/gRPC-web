<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ content }}
    </p>
    <div>
      <input v-model="inputField">
      <button v-on:click="greeting">Go!</button> 
    </div>
  </div>
</template>

<script>
import { GreetingRequest } from "GreetingService_pb";
import { GreetingServiceClient } from "GreetingService_grpc_web_pb";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      inputField: 'World',
      content:''
    }
  },
  created: function() {
    this.client = new GreetingServiceClient("http://localhost:8080", null, null);
  },
  methods: {
    greeting: function () {
      let request = new GreetingRequest();
      request.setName(this.inputField);
      this.client.greeting(request, {}, (err, response) => {
        this.inputField = "";
	this.content = response.getContent();
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
