<template>
    <div class="container" id="logreg-forms">
        <form class="form-signin" @submit.prevent="SingIn">
            <h1 class="h3 mb-3 font-weight-normal" style="text-align: center">
                Inscription
            </h1>
            <input
                type="text"
                id="inputName"
                class="form-control mb-2"
                placeholder="Nom"
                required
                autofocus
                v-model="name"
            />
            <input
                type="email"
                id="inputEmail"
                class="form-control mb-2"
                placeholder="Adresse mail "
                required
                v-model="email"
            />
            <input
                type="password"
                id="inputPassword"
                class="form-control mb-2"
                placeholder="Mot de passe"
                required
                v-model="password"
            />
            <input
                type="password"
                id="inputConfirmPassword"
                class="form-control mb-2"
                placeholder="Confirmer mot de passe"
                v-model="confirmPassword"
            />

            <button class="btn btn-success btn-block" type="submit">
                <i class="fas fa-sign-in-alt"></i> S'inscrire
            </button>
            <hr />
            <!-- <p>Don't have an account!</p>  -->
            <p class="text-center">Déjà un coompte?</p>
            <router-link to="/register">
                <button
                    type="button"
                    id="btn-signup"
                    class="btn btn-primary btn-block"
                >
                    Se connecter
                </button>
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: "SignIn",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        SingIn() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .catch((error) => {
                    console.log(error);
                });
            this.name = "";
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
        },
    },
};
</script>

<style scoped>
/* sign in FORM */
#logreg-forms {
    width: 412px;
    margin: 10vh auto;
    background-color: #f3f3f3;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
#logreg-forms form {
    width: 100%;
    max-width: 410px;
    padding: 15px;
    margin: auto;
}
#logreg-forms .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}
#logreg-forms .form-control:focus {
    z-index: 2;
}
#logreg-forms .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
#logreg-forms .form-signin input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

/* Mobile */

@media screen and (max-width: 500px) {
    #logreg-forms {
        width: 300px;
    }
}
</style>
