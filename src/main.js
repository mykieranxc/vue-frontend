import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://graphql-optimus.herokuapp.com/graphql',
  fetchOptions: {
    mode: 'no-cors',
  },
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
});

app.use(router);
app.use(Antd);
app.mount('#app');


