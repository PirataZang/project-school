<template>
    <div class="home">
        <div class="image">
            <img src="../Image/matriculas.jpg" alt="imageSchool" class="imageSchool">
        </div>

        <div class="textInit">
            <h2 class="title">Sobre a Escola</h2>
            <section>
                A Escola Monte do Saber é uma instituição de ensino dedicada à formação acadêmica, social e emocional de
                crianças e jovens, abrangendo desde a Educação Infantil até o Ensino Médio. Fundada com o propósito de
                oferecer um ambiente acolhedor e inovador, a escola visa preparar seus alunos para os desafios do mundo
                moderno, cultivando valores como respeito, responsabilidade, criatividade e excelência acadêmica.
            </section>

            <section>
                <h2>Educação Infantil (3 a 5 anos)</h2>
                <p>Na primeira etapa da jornada educacional, oferecemos um ambiente lúdico e estimulante, com foco no
                    desenvolvimento socioemocional, motor e cognitivo.</p>
            </section>

            <section>
                <h2>Ensino Fundamental (1º ao 9º ano)</h2>
                <p>Promovemos o desenvolvimento do pensamento crítico, autonomia e responsabilidade por meio de
                    atividades interdisciplinares e projetos dinâmicos.</p>
            </section>

            <section>
                <h2>Ensino Médio (1ª à 3ª série)</h2>
                <p>Preparamos nossos alunos para vestibulares, ENEM e desafios do futuro, com orientação vocacional e
                    acesso a tecnologia de ponta.</p>
            </section>

            <section>
                <h2>Diferenciais</h2>
                <ul class="topics">
                    <li>Salas de aula equipadas com tecnologia educacional</li>
                    <li>Espaços verdes para integração com a natureza</li>
                    <li>Programas de incentivo ao esporte, artes e cultura</li>
                    <li>Apoio psicológico e orientação educacional</li>
                    <li>Parcerias com universidades e instituições internacionais</li>
                </ul>
            </section>
        </div>

        <div class="content">
            <div class="studentsPhoto">
                <div class="photoGrid">
                    <img src="../Image/stu1.jpg" alt="Matriculas" class="photoItem">
                    <img src="../Image/stu2.jpg" alt="Matriculas" class="photoItem">
                    <img src="../Image/stu3.jpg" alt="Matriculas" class="photoItem">
                </div>
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