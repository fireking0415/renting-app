<template>
  <Layout>
    <v-flex class="ma-6">
      <label>
        <Input style="width: 800px;float: left" search enter-button
               placeholder="支持检索小区名称、区域名称、户型消息、地铁信息、平台信息(如果同时检索多维度信息，使用#分割)"/>
      </label>
      <Button class="ml-6 disabled" type="primary">查看报表</Button>
    </v-flex>
    <v-flex style="background-color: white;">
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
          <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
      </Table>
      <v-container>
        <Page style="float: right"></Page>
      </v-container>
    </v-flex>
  </Layout>
</template>
<script>
export default {
  name: "AggregateSearch",
  data() {
    return {
      columns12: [
        {
          title: 'Name',
          slot: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data6: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
}
</script>