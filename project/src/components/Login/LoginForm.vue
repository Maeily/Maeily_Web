<template>
    <div class="login_wrap">
        <form action="" v-on:submit.prevent>
            <div class="login_title">매일리</div>
            <!--로그인 폼-->
            <input type="id" v-model="id" placeholder="아이디를 입력해주세요" />
            <input
                type="password"
                v-model="password"
                placeholder="비밀번호를 입력해주세요"
            />
            <input
                type="submit"
                class="submit_login"
                v-on:click="onClick"
                value="로그인"
            />
            <div>회원이 아니신가요?<a href="SignUp.vue">회원가입</a></div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: "",
            password: "",
        };
    },
    methods: {
        onClick() {
            console.log(
                "ID : " +
                    this.id +
                    " PW : " +
                    this.password +
                    " 로그인 정보가 확인되었습니다."
            );
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
html {
    font-family: "Noto Sans KR", sans-serif;
}
.login_title {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 60px;
    color: #b7ed4b;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    width: 50rem;
    height: 50rem;
}
input {
    width: 30rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid dimgray;
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
}
.submit_login {
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    background-color: #b7ed4b;
}
</style>
