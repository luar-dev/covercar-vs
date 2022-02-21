const app = Vue.createApp({
    data() {
        return {
            product: 'Cubreasientos',
            main_bg_image: './assets/images/2022-covercar-logo.png',
            custom_made_patterns_icon: './assets/textile-industry-icons/patterns.png',
            cs_email: 'atencion@covercar.mx',
        }
    },

    computed: {
        productSpecs() {
            return 0
        }
    }
})