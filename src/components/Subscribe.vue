<template>
    <Modal :show="show" title="Matrículas" @close="$emit('close')">
        <div class="row wrap">
            <div class="input">
                <label class="textInput" for="nome">Nome:</label>
                <input type="text" id="nome" />
            </div>
            <div class="input">
                <label class="textInput" for="Telefone">Telefone:</label>
                <input type="text" id="Telefone" />
            </div>
            <div class="input">
                <label class="textInput" for="Endereço">Endereço:</label>
                <input type="text" id="Endereço" />
            </div>
        </div>

        <template #footer>
            <button @click="send">Enviar</button>
        </template>
    </Modal>
</template>

<script setup>
import Modal from './Modal.vue';

const props = defineProps({
    show: Boolean,
})

const emit = defineEmits(['close']);
</script>
