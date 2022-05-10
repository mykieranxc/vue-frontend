<template>
  <div id="login">
    <form method="post" action="/dashboard">
      <div class="row">
        <div class="col-md-6" style="margin: 0 30% 0 30%">
          <div style="margin-bottom: 0.5em">
            <a-input v-model:value="user_credentials.email" placeholder="Email Address" />
          </div>
          <div style="margin-bottom: 0.5em">
            <a-input-password v-model:value="user_credentials.password" placeholder="Password" />
          </div>
          <div style="margin-bottom: 0.5em">
            <a-button type="primary" @click="loginUser">Submit</a-button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
  import {reactive, ref} from 'vue';
  import {useMutation} from '@vue/apollo-composable';
  import gql from 'graphql-tag';

  const user_credentials = reactive({
    email: ref(""),
    password: ref("")
  });

  const { mutate: login } = useMutation(
    gql`mutation login($email: String!, $password: String!){
        login(email: $email, password: $password)
    }
    `,
  );

  const loginUser = () => {
    login({email: user_credentials.email, password: user_credentials.password});
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
