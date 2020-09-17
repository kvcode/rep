console.log('file Loaded')
// console.log(document.event.target)

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
        navBackground: 'prpl',
        isActive: false,
        indexZ: 1,
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
                // console.log('login clicked')
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
        },

        toggleNav: function () {
            console.log('navclicked');
            // this.isActive = !this.isActive;
            // console.log(this.indexZ);
           
            if (this.isActive === false) {
                this.isActive = true;
                this.indexZ = -1;
            } else if (this.isActive === true) {
                const vt = this;
                setTimeout(function () {
                    vt.indexZ = 1;
                    console.log(this.indexZ);
                    }, 400);
                this.isActive = false;
            } else {
                alert('error Z index')
            }
            // console.log(this.isActive);
        }
    }
});