<template>
    <div class="container">
        <form @submit.prevent="SingUp">
            <label>
                <p class="label-txt">VOTRE EMAIL</p>
                <input type="email" class="input" required v-model="email" />
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>

            <label>
                <p class="label-txt">VOTRE MOT DE PASSE</p>
                <input
                    type="password"
                    class="input"
                    required
                    v-model="passWord"
                />
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>

            <button type="submit">SE CONNECTER</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    data() {
        return {
            email: "",
            passWord: "",
        };
    },
};
</script>

<style scoped>
body {
    background: #c5e1a5;
}
form {
    width: 60%;
    margin: 50px auto;
    background: #efefef;
    padding: 10px 120px 10px 120px;
    text-align: center;
    -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
}
label {
    display: block;
    position: relative;
    margin: 40px 0px;
}
.label-txt {
    position: absolute;
    top: -1.6em;
    padding: 10px;
    font-family: sans-serif;
    font-size: 0.8em;
    letter-spacing: 1px;
    color: rgb(120, 120, 120);
    transition: ease 0.3s;
}
.input {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    outline: none;
}

.line-box {
    position: relative;
    width: 100%;
    height: 2px;
    background: #bcbcbc;
}

.line {
    position: absolute;
    width: 0%;
    height: 2px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #8bc34a;
    transition: ease 0.6s;
}

.input:focus + .line-box .line {
    width: 100%;
}

.label-active {
    top: -3em;
}

button {
    display: inline-block;
    padding: 12px 24px;
    background: rgb(220, 220, 220);
    font-weight: bold;
    color: rgb(120, 120, 120);
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    transition: ease 0.3s;
}

button:hover {
    background: #8bc34a;
    color: #ffffff;
}
</style>
