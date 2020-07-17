<template>
    <div class="container">
        <h1>Login</h1>
        <SignIn></SignIn>
    </div>
</template>

<script>
import SignIn from "../components/SignIn";
export default {
    name: "Login",
    components: {
        SignIn,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
