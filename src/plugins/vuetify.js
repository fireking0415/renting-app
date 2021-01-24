import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#11698e", // #E53935
                secondary: "#11698e", // #FFCDD2
                accent: "#f8f1f1", // #3F51B5
            }
        },
    },
});
