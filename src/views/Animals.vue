<template>
    <section>
        <h2>Список животных</h2>

        <form @submit.prevent="editAnimal" v-for="(animal, i) in animals" :key="i">
            <p>{{animal.description}}</p>
            <div>
                <label>Имя:
                    <input type="text" name="animal_name" :value="animal.animal_name">
                </label>
            </div>

            <div>
                <label>Возраст:
                    <input type="text" name="age" :value="animal.age">
                </label>
            </div>

            <div>
                <!-- 0 / 1 "0" / "1"-->
                <label>Документы:
                    <input type="checkbox" name="passport" :value="!!animal.passport" :checked="+animal.passport">
                </label>
            </div>

            <input type="hidden" name="id_animal" :value="animal.id_animal">
            <input type="submit" value="Изменить">
        </form>
    </section>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Animals",
        data: function(){
            return {
                animals: []
            }
        },
        created() {
            // сработает при открытии странички
            //    http://shelter - адрес (ip) сервера
            //    /api/animals -  строка запроса
            axios
                .get('http://shelter/api/animals')
                .then(response => {
                    this.animals = response.data;
                    console.log(response.data);
                })
        },
        del(){
            axios
                .get('http://shelter/api/del_animal')
                .then(response=>{
                    console.log(response.data);
                })
        },
        methods: {
            editAnimal: function (event) {
                const formData = new FormData(event.target);
                axios
                    .post('http://shelter/api/edit/animal', formData)
                    .then(response => {
                        console.log(response.data);
                    })
            }
        }
    }
</script>

<style scoped>
</style>