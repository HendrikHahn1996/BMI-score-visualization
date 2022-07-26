<template>
    <div class="container">
        <div class="name-container">
            <label for="name">Please enter you name</label>
            <input type="text" v-model="name" name="name" placeholder="Name..." id="nameInput" required>
        </div>
        <div class="bmi-container">
            <label for="bmi">Please enter your BMI</label>
            <input type="text" v-model="bmi" name="bmi" placeholder="BMI..." id="bmiInput" required>
        </div>
        <router-link to="/BmiView"><input type="submit" value="Show BMI" id="submitButton" @click="getData()"></router-link>
    </div>
</template>

<script>
export default {
    name: 'WelcomeView',

    data() {
        return {
            name: null,
            bmi: null
        }
    },
    methods: {
        getData() {
            //pass data (name, bmi) to BMIView Page
            this.$router.push({
                name: 'BMIView',
                params:{
                    inputName: this.name,
                    inputBMI: parseFloat(this.bmi)
                }
            })
        }
    },
}
</script>

<style scoped>

.container {
    height: 80%;
    width: 25%;
    margin-left: 35%;
    margin-top: 15%;
    display: grid;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    background-color: lightblue;
    border: 2px solid #007fc8;
    border-radius: 10px;
}

.name-container {
    display: grid;
    justify-content: space-between;
    margin-bottom: 5%;
    color: black;
    font-weight: bold;
}

.bmi-container {
    display: grid;
    justify-content: space-between;
    margin-bottom: 5%;
    color: black;
    font-weight: bold;
}

#submitButton {
    cursor: pointer;
    margin-bottom: 20%;
    height: 35%;
    width: 45%;
    margin-top: 10%;
    margin-left: 25%;
    border: 2px solid #007fc8;
    border-radius: 15px;
    color: black;
    font-size: 1.0vw;
    font-weight: bold;
    background-color: #E1E1E1;
    font-family: 'Montserrat', sans-serif;
}

#nameInput {
    height: 30px;
    border-radius: 5px;
    padding-left: 5px;
    border: none;
    margin-top: 3%;
}

#bmiInput {
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    border: none;
    padding-left: 5px;
    margin-top: 3%
}

label {
    font-size: 1.3vw;
    margin-top: 30px;
}

@media (max-width: 1300px) {
    .container {
        width: 40%;
        margin-left: 30%;
    }

    label {
        font-size: 2.2vw;
    }

    #submitButton {
        font-size: 1.8vw;
    }
}

@media (max-width: 850px) {
    .container {
        width: 60%;
        margin-left: 20%;
    }

    label {
        font-size: 3.3vw;
    }

    #submitButton {
        font-size: 2.2vw;
    }
}

@media (max-width: 500px) {
    .container {
        width: 100%;
        margin-left: 0;
        height: 70%;
    }

    label {
        font-size: 4.8vw;
    }

    #submitButton {
        font-size: 3.2vw;
    }
}

</style>