<template>
    <div class="shop">
        <div class="searchMenu">
            <input type="text" v-model="itemSearch" class="search" placeholder="Faça sua busca aqui!"
                @keyup.enter="search(itemSearch)">
        </div>
        <div v-if="products" class="content">
            <div class="card" v-for="product in products" :key="product.id">
                <div class="divImages">
                </div>
                <span class="title">{{ product.name }}</span>
                <h2> R$ {{ product.amount }}</h2>
                <div class="buyActions">
                    <button class="buy car">
                        <h2 v-if="!product.favorited" @click="addCar(product.id)"><i class="fa-solid fa-cart-shopping"></i> Adicionar ao Carrinho</h2>
                        <h2 v-if="product.favorited" @click="addCar(product.id, true)"><i class="fa-solid fa-trash"></i> Remover do Carrinho</h2>
                    </button>
                    <button class="buy">
                        <h2><i class="fa-solid fa-sack-dollar"></i> Comprar</h2>
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="notFound">
            <h1>📦 Produto fora do radar! Tente outro termo. </h1>
        </div>
    </div>
</template>
<script>
import collect from 'collect.js';

export default {
    name: 'Shop',

    data() {
        return {
            itemSearch: null,
            products: {}
        }
    },

    mounted() {
        this.reload();
    },


    methods: {
        reload() {
            return this.$api.getData('/products').then(r => {
                this.products = r;
                this.products = this.products.map(product => {
                    product['favorited'] = false;
                    product.amount = product.amount.toString().replace('.', ',');
                    return product;
                });
            });
        },

        search(item) {
            if (!item)
                return this.reload();

            try {
                this.$api.getData(`/products/product?name=${item}`).then(r => {
                    if (collect(r).count() < 1)
                        return this.products = null

                    this.products = r;
                    this.products = this.products.map(product => {
                        product.amount = product.amount.toString().replace('.', ',');
                        return product;
                    });
                })
            } catch (error) {
                throw new Error(error)
            }
        },

        addCar(id, remove) {
            debugger
            const product = this.products.find(p => p.id === id);
            if (product) {
                if (remove) {
                    return product.favorited = false;
                }
                return product.favorited = true;
            }
        }

    }
}
</script>