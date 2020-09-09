console.log('file Loaded')

new Vue ({
    el: '#panel',
    data: {
        name: '',
        psw: '',
        newUser:'',
        newEmail:'',
        newPswA:'',
        newPswB:'',
        newFullName:'',
        newBirthDay:'',
        loggedInStyle: '',
        dspLogInValue: '',
        dspSignUpValue: '',
        dspLoggedInValue: '',
    },

    methods: {
        signUp: function() {
            console.log('SignUp Clicked')
            this.dspLogInValue = 'none';
                this.dspSignUpValue = 'flex';
        },

        logIn: function() {
            console.log('logIn succesful')
            var vm = this;
            if ((vm.name === vm.newUser) && (vm.psw === vm.newPswA) 
            && (vm.name != '') && (vm.psw != '')) {
                this.dspLogInValue = 'none';
                this.dspSignUpValue = 'none';
                console.log('login clicked')
                alert('You have successfully logged in!')
                this.dspLoggedInValue = 'flex';
            } else {
                alert('wrong credentials')
            }
        },

        newAccount: function () {
            alert('Your account was created. You can log in now.');
            this.dspLogInValue = 'flex';
            this.dspSignUpValue = 'none';
        },

        logOut: function () {
            this.dspLogInValue = 'flex';
            this.dspLoggedInValue = 'none';
        }
    }
});