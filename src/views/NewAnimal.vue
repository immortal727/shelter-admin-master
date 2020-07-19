<template>
    <section>
        <h2>Добавление нового животного</h2>
        <p>{{insert_status}}</p>
        <!-- Отправляем обратку в метод addAnimal -->
        <form @submit.prevent="addAnimal">
            <div>
                <label>
                    Категория:
                    <select v-model="id_category">
                        <option value="2">Собаки</option>
                        <option value="1">Кошки</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Имя животного:
                    <input type="text" v-model.trim="animal_name">
                    <!-- <input type="text" v-model.trim="animal.animal_name">-->
                </label>
            </div>
            <div>
                <label>Описание животного:
                    <textarea v-model.trim="description"></textarea>
                </label>
            </div>
            <div>
                <label>Возраст животного:
                    <input type="number" v-model.trim="age">
                </label>
            </div>
            <div>
                <label>Документы:
                    <input type="checkbox" :value="1" v-model="passport">
                </label>
            </div>
            <div>
                <label>Прививки:
                    <input type="checkbox" :value="1" v-model="vaccination">
                </label>
            </div>
            <input type="submit" value="Добавить">
        </form>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "NewAnimal",
        data: function() {
            return {
                // animal:{animal.id_category, animal.animal_name},
                id_category: null,
                animal_name: '',
                description: '',
                age: 0,
                passport: 0,
                vaccination: 0,
                insert_status:''
            }
        },
        methods:{
            addAnimal:function () {
                // обработчик события submit формы
                const formData=new FormData();
                // по ключу animal_name на сервере можно будет получить
                // данные из массива $_POST
                formData.append('animal_name', this.animal_name);
                formData.append('description', this.description);
                formData.append('age', this.age);
                formData.append('passport', +this.passport);
                formData.append('vaccination', +this.vaccination);
                formData.append('id_category', this.id_category);

                axios
                    .post('http://shelter/api/add/animal', formData)
                    .then(response=>{
                        this.insert_status=response.data;
                    });
            }
        }
    }
</script>

<style scoped>
</style>