app.component('seat-display', {
    template:
    /* html */
    `<section id="design" class="seat">
        <p class="design_title">{{ design_title }}</p>

        <img :src="imagePath" alt="">

        <p>Tonos</p>
        <div class="seat_palette">

            <p v-for="combination in seatColorCombinations"
                @click="setColorCombination(combination.imagePath)"
                class="seat_combination"
                :class="combination.class"></p>
        </div>

        <!-- <div>
            <p>Materiales</p>
            <ul>
                <li v-for="material in materials" :key="material.id">{{ material.name }}</li>
            </ul>
        </div> -->
    </section>`,

    data() {
        return {
            design_title: 'Diseña tu Modelo',
            imagePath: './assets/images/seat_blank.png',

            seatColorCombinations: [
                //{id: 0, class: '', imagePath: './assets/images/seat_blank.png'},
                {id: 1, class: 'black_gray', imagePath: './assets/images/seat-black_gray.png'},
                {id: 2, class: 'gray_black', imagePath: './assets/images/seat-gray_black.png'},
                {id: 3, class: 'black_beige', imagePath: './assets/images/seat-black_beige.png'},
            ],

            materials: [
                {id: 4567, name: 'Tela Automotriz'},
                {id: 4950, name: 'Vinipiel'},
                {id: 4943, name: 'Tela con Vinipiel'}
            ],

        }
    },

    methods: {
        setColorCombination(variantImage) {
            this.imagePath = variantImage;
        },
    },
})