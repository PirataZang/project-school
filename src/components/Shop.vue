<template>
    <div class="shop">
        <div class="searchMenu">

        </div>
        <div class="content">
            <div class="card">
                <h2>Camisa Uniforme</h2>
                <div class="divImages">
                    <button><i class="fa-sharp fa-solid fa-chevron-left"></i></button>
                    <div class="images">
                        <h1>aaaaa</h1>
                        <h1>aaaaa</h1>
                        <h1>aaaaa</h1>
                        <h1>aaaaa</h1>
                        <h1>aaaaa</h1>
                    </div>
                    <button><i class="fa-sharp fa-solid fa-chevron-right"></i></button>
                </div>
                <h1>Valor: R$ 80,00</h1>
                <div class="actions">
                    <i class="fa-regular fa-heart favorite"></i>
                    <i class="fa-solid fa-heart favorite"></i>
                    <button>
                        <h2><i class="fa-solid fa-cart-shopping"></i> Carrinho</h2>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Shop.vue',

    data() {
        return {
            favorite: false
        }
    },



    methods: {
        addFavorite(id){

        }
    }
}
</script>