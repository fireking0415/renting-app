<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">

        <span class="headline font-weight-bold">租房信息聚合检索平台</span>

        <v-btn
            v-for="link in links"
            :key="link"
            text>
          <router-link class="font-weight-medium" :to="link.url">
            {{ link.name }}
          </router-link>
        </v-btn>

      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>

          <v-col>
            <v-sheet
                min-height="85vh"
                rounded="lg"
            >
              <router-view/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {name: '贝壳找房', url: "/"},
      {name: '我爱我家', url: "/"},
      {name: '自如租房', url: "/"},
      {name: '中原地产', url: "/"},
      {name: '安居客', url: "/"},
      {name: '房天下', url: "/"},
    ],
  }),
}
</script>