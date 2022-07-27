<template>
    <div class="container">
        <div class="name-container">
            <h1>Mr./Mrs. {{ name }}'s BMI is </h1>
        </div>
        <h1 class="bmi-header">{{ bmi }}</h1>
        <div class="slider-container">
            <input class="slider" type="range" min='0.0' max='120.0' step='0.01' v-model="bmi" name="BMI_Slider" disabled>
            <div class="bars-container">
                <span class="underweight-bar" 
                    v-bind:style="[bmi <= 30 ? 
                        {'background-color': 'red'} 
                        : 
                        {'backgroud-color': 'rgb(186, 186, 186)'}]">
                </span>
                <span class="normal-bar"
                    v-bind:style="[bmi > 30 && bmi < 90 ? 
                        {'background-color': 'rgb(73, 193, 153)'} 
                        : 
                        {'backgroud-color': 'rgb(186, 186, 186)'}]">
                </span>
                <span class="overweight-bar"
                    v-bind:style="[bmi >= 90 ? 
                        {'background-color': 'red'} 
                        : 
                        {'backgroud-color': 'rgb(186, 186, 186)'}]">
                    </span>
            </div>
            <div class="description-container">
                <span class="underweightText"
                    v-bind:style="[bmi <= 30 ? 
                        {'font-weight': 'bolder'} 
                        : 
                        {'font-weight': 'normal'}]">
                Underweight
                </span>
                <span class="normalText"
                    v-bind:style="[bmi > 30 && bmi < 90 ? 
                        {'font-weight': 'bolder'} 
                        : 
                        {'font-weight': 'normal'}]">
                Normal
                </span>
                <span class="overweightText"
                    v-bind:style="[bmi >= 90 ? 
                        {'font-weight': 'bolder'} 
                        : 
                        {'font-weight': 'normal'}]">
                Overweight
                </span>
            </div>
        </div>
        <router-link to="/"><button>Back to Homepage</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'BmiView',
    data() {
        //get input data from user
        return {
            name: this.$route.params.inputName,
            bmi: this.$route.params.inputBMI,
        }
    },
}
</script>

<style scoped>

.container {
    width: 24%;
    height: 40%;
    margin-left: 35%;
    margin-top: 10%;
    font-family: 'Montserrat', sans-serif;
}

.name-container {
    text-align: center;
    margin-top: 15px;
}

.bmi-header {
    text-align: center;
    font-weight: bolder;
    font-size: 3.5em;
    color: rgb(45, 116, 239);
}

.slider-container {
    display: grid;
    justify-content: center;
    width: 100%;
    margin-top: 15%;
}


.bars-container {
    display: flex;
    padding: 0px 14px;
    justify-content: center;
}

.description-container {
    display: flex;
    justify-content: center;
    margin-top: 5%;
}

.underweight-bar {
    height: 35px;
    width: 30%;
    margin-right: 3px;
    border-radius: 20px 0 0 20px;
    background-color: rgb(186, 186, 186);
}

.underweightText {
    height: 35px;
    width: 148px;
    margin-right: 3px;
    text-align: center;
    color: rgb(45, 116, 239);
   
}

.normal-bar {
    height: 35px;
    width: 60%;
    background-color:rgb(186, 186, 186);
}

.normalText {
    height: 35px;
    width: 148px;
    text-align: center;
    color: rgb(45, 116, 239);
}

.overweight-bar {
    height: 35px;
    width: 30%;
    margin-left: 3px;
    border-radius: 0 20px 20px 0;
    background-color:rgb(186, 186, 186);
}

.overweightText {
    height: 35px;
    width: 148px;
    margin-left: 2px;
    text-align: center;
    color: rgb(45, 116, 239);
}

.slider {
    -webkit-appearance: none;
}


.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 0;
    width: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 25px solid rgb(45, 116, 239);
    margin-bottom: 0;
}

button {
    width: 70%;
    height: 40px;
    margin-top: 5%;
    margin-left: 15%;
    font-size: 1.0vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    background-color: rgb(45, 116, 239);
    color: white;
    cursor: pointer;
}

@media (max-width: 1000px) {
    button {
        width: 300px;
        font-size: 1.8vw;
        margin-left: -40px;
    }
}

@media (max-width: 700px) {
    button {
        width: 250px;
        font-size: 1.8vw;
        margin-left: -50px;
    }
}

@media (max-width: 470px) {
    button {
        width: 250px;
        font-size: 3.5vw;
        margin-left: -70px;
    }

    .bars-container {
        width: 350px;    
    }  

    .slider {
        width: 350px;
        margin-left: 4%;
    }

    .description-container {
        width: 350px;
        margin-left: 5%;
    }
}
</style>