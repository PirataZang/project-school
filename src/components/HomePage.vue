<template>
    <div class="home">
        <div class="image">
            <img src="../Image/school.jpg" alt="imageSchool" class="imageSchool">
        </div>

        <div class="instagramLayout">
            <h2> <i class="fa-brands fa-instagram"></i> Confira em Nosso instagram</h2>
            <div class="gallery">
                <img class="photos" src="../Image/kids1.jpg" alt="">
                <img class="photos" src="../Image/kids2.jpg" alt="">
                <img class="photos" src="../Image/kids3.jpg" alt="">
                <img class="photos" src="../Image/kids4.jpg" alt="">
                <img class="photos" src="../Image/kids5.jpg" alt="">
                <img class="photos" src="../Image/kids6.jpg" alt="">
            </div>
        </div>

        <div class="stages">
            <div class="gallery">
                <span class="stage">
                    <img class="photos" src="../Image/infantil.jpg" alt="">
                    <span class="text">Educação Infantil</span>
                </span>
                <span class="stage">
                    <img class="photos" src="../Image/fundamental.jpg" alt="">
                    <span class="text">Ensino Fundamental</span>
                </span>
                <span class="stage">
                    <img class="photos" src="../Image/highSchool.jpg" alt="">
                    <span class="text">Ensino Médio</span>
                </span>
                <span class="stage">
                    <img class="photos" src="../Image/college.jpg" alt="">
                    <span class="text">Faculdade</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',

    data() {
        return {
            positionImage: 1,
        }
    },
}
</script>