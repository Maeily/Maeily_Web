<template>
    <div id="app">
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from "./components/Login/LoginForm";
import SignUp from "./components/Login/SignUp";
export default {
    components: {
        LoginForm: LoginForm,
        SignUp: SignUp,
    },
};
</script>

<style>
#app {
    display: flex;
}
</style>
