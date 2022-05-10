<template>
    <div>
      <form method="post" action="/dashboard">
        <div class="row">
          <div class="col-md-6" style="margin: 0 30% 0 30%">
            <div style="margin-bottom: 0.5em">
              <a-input v-model:value="user_data.first_name" placeholder="First Name" />
            </div>
            <div style="margin-bottom: 0.5em">
              <a-input v-model:value="user_data.last_name" placeholder="Last Name" />
            </div>
            <div style="margin-bottom: 0.5em">
              <a-input v-model:value="user_data.email" placeholder="Email Address" />
            </div>
            <div style="margin-bottom: 0.5em">
              <a-input-password v-model:value="user_data.password" placeholder="Password" />
            </div>
            <div style="margin-bottom: 0.5em">
              <a-button type="primary" @click="registerUser">Submit</a-button>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script setup>
  import {ref, reactive} from 'vue';
  import gql from 'graphql-tag';
  import {useMutation} from '@vue/apollo-composable';

  const user_data = reactive({
    first_name: ref(""),
    last_name: ref(""),
    email: ref(""),
    password: ref("")
  });

  const message = reactive({});

  const {mutate: createUser, onDone} = useMutation(
    gql`mutation createUser($first_name: String!, $last_name: String!, $email: String!, $password: String!){
        createUser(input: {first_name: $first_name, last_name: $last_name, email: $email, password: $password}){
            message,
            user {
                email
            }
        }
    }
    `,
  );

  const registerUser = () => {
    createUser(user_data);
    onDone(result => {
      console.log(result.data);
    })
  }
</script>
