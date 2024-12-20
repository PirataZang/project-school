<template>
    <div class="menu">
        <div class="contacts step row f-18 fWhite">
            <router-link to="/KARAIO" class="router-link">Portal</router-link>
            <router-link to="/" class="router-link">Trabalhe Conosco</router-link>
        </div>
        <div class="actions step row fWhite ">
            <div class="logo">
                <h1>LOGO</h1>
            </div>
            <ul class="actionsButtons row f-18">
                <li @click="showOptionsSchool = !showOptionsSchool" class="school">
                    Escola <i id="arrowSchool" class="fa-solid fa-caret-up arrow down"></i>
                    <div v-if="showOptionsSchool" class="schoolOptions column">
                        <p>História</p>
                        <p>Colonia de férias</p>
                        <p>Faixa-etaria</p>
                        <p>História</p>
                    </div>
                </li>
                <li class="option">Actions</li>
                <li class="option">Actions</li>
                <li class="option">Actions</li>
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