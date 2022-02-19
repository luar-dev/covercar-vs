const app = Vue.createApp({
    data() {
        return {
            product: 'Cubreasientos',
            design_title: 'Diseña tu Modelo',
            main_bg_image: './assets/images/2022-covercar-logo.png',
            custom_made_patterns_icon: './assets/textile-industry-icons/patterns.png',
            cs_email: 'atencion@covercar.mx',
            seat_blank: true,
            seat_black_gray: false,
            seat_gray_black: false,
            seat_black_beige: false,
            materials: [
                {id: 4567, name: 'Tela Automotriz'},
                {id: 4950, name: 'Vinipiel'},
                {id: 4943, name: 'Tela con Vinipiel'}
            ],
        }
    }
})