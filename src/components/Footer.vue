<template>
    <div class="footer">
        <h1>Logo</h1>
        <div class="socialMedias column">
            <h1>Atendimento</h1>
            <ul class="socialMediasOptions">
                <li class="socialMedia">
                    <a href="#" target="_blank">
                        <i class="fa-brands fa-instagram"></i> Instagram
                    </a>
                </li>
                <li class="socialMedia">
                    <a href="#" target="_blank">
                        <i class="fa-brands fa-square-facebook"></i> Facebook
                    </a>
                </li>
                <li class="socialMedia">
                    <a href="#" target="_blank">
                        <i class="fa-brands fa-square-facebook"></i> Facebook
                    </a>
                </li>
                <li class="socialMedia column">
                    <textarea class="textarea" v-model="userMessage" placeholder="Escreva aqui sua mensagem"></textarea>
                    <button class="buttonWhatsapp">
                        <a class="send" :href="whatsAppLink" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i>
                            Enviar mensagem pelo WhatsApp</a>
                    </button>
                </li>
            </ul>
        </div>
        <div class="contacts column">
            <h1>Contatos</h1>
            <a class="contact" href="tel:+5547989022030"> <i class="fa-solid fa-phone" style="color: #ffffff;"></i> (47) 989022030 </a>
            <a class="contact" href="https://wa.me/47989022030"> <i class="fa-brands fa-whatsapp"></i> (47) 989022030 </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            phoneNumber: 47989022030,
            userMessage: 'Olá Vim pelo Site'
        }
    },

    methods: {
        encodeMessage(message) {
            return encodeURIComponent(message); // Converte os caracteres especiais para a URL
        },
    },

    computed: {
        whatsAppLink() {
            return `https://wa.me/${this.phoneNumber}?text=${this.encodeMessage(this.userMessage)}`;
        },
    },
}
</script>