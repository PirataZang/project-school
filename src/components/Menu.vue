<template>
    <div class="menu">
        <div class="contacts step row f-18 fWhite">
            <p> Portal</p>
            <router-link to="/" class="router-link">Trabalhe Conosco</router-link>
        </div>
        <div class="actions step row fWhite ">
            <div class="logo">
                <h1><router-link to="/" class="router-link">LOGO</router-link></h1>
            </div>
            <ul class="actionsButtons row f-18">
                <li @click="showOptionsSchool = !showOptionsSchool" class="school">
                    <i class="fa-solid fa-school"></i> Escola <i id="arrowSchool"
                        class="fa-solid fa-caret-up arrow down"></i>
                    <div v-if="showOptionsSchool" class="schoolOptions column">
                        <p> <i class="fa-solid fa-book"></i>
                            <router-link to="/history" class="router-link"> História </router-link>
                        </p>
                        <p> <i class="fa-solid fa-child-reaching"></i> Colonia de férias</p>
                        <p> <i class="fa-solid fa-book-bookmark"></i> Atividades extra-curriculares</p>
                    </div>
                </li>
                <li class="option"> <i class="fa-solid fa-graduation-cap"></i> Matriculas</li>
                <li class="option"> <i class="fa-solid fa-cart-shopping"></i>
                    <router-link class="router-link" to="/shop"> shop </router-link>
                </li>
                <li class="option"> <i class="fa-solid fa-comment"></i> Sugestões</li>
                <li class="option"> <i class="fa-solid fa-rectangle-list"></i> Lista de Materiais</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',

    data() {
        return {
            showOptionsSchool: false
        }
    },

    watch: {
        'showOptionsSchool': function () {
            document.getElementById('arrowSchool').classList.toggle('down')
        }

    }
}
</script>