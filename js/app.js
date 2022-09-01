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

    // soluzione
    // mounted() {

    //     for (let i = 0; i < 10; i++) {
    //         axios
    //             .get('https://flynn.boolean.careers/exercises/api/random/mail')
    //             .then((res) => {
    //                 this.tenEmails.push(res.data.response)
    //             })
    //     }
    // }

    // soluzione alternativa
    methods: {
        getRandomEmail(arrayEmails) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    arrayEmails.push(res.data.response)
                })
        }
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            this.getRandomEmail(this.tenEmails);
        }
    }

})