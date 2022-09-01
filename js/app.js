const app = new Vue({
    el: '#app',
    data: {
        tenEmails: new Array()
    },
    // methods: {
    //     getRandomEmail() {
    //         let email;
    //         axios
    //             .get('https://flynn.boolean.careers/exercises/api/random/mail')
    //             .then((res) => {
    //                 email = res.data.response;
    //                 console.log(email);
    //                 return email;
    //             })
    //         // console.log(email);
    //     }
    // },
    // mounted() {

    //     for (let i = 0; i < 10; i++) {
    //         this.tenEmails.push(this.getRandomEmail())
    //     }
    //     console.log(this.tenEmails);

    // }
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    this.tenEmails.push(res.data.response)
                })
        }
    }

})