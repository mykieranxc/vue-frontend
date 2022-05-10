<template>
  <div id="dashboard">
    <div class="row">
      <div class="col-md-8" style="margin: 0 30% 0 30%">
        <a-table :dataSource="result.users" :columns="columns" :key="id"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import gql from 'graphql-tag';
  import {useQuery} from '@vue/apollo-composable';

  const { result } = useQuery( gql `
      query getUsers {
        users {
          id
          first_name
          last_name
          email
        }
      }
    `);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },
  ];
</script>
