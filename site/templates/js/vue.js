Vue.use(VueMask.VueMaskPlugin);

const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        action:null,
        item:null,
        name: null,
        surname: null,
        phone:null,
        fullname:null,
        email: null,
        message: null,
        file:{
            name:null,
            size:0
        },
        file_url:null,
        fields:null,
        savingSuccessful: false,
        tokenTake:true,
        uploadPercentage: 0
    },

    methods:{

        handleFileUpload: function (e) {

            this.file = e.target.files[0];
            console.log(this.file);

            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('action','file_upload');
            let _this=this;
            grecaptcha.ready(function() {
                grecaptcha.execute('6LdJhvgfAAAAAJMwUVgEyMZ2RacUFOjx6nhNh8w1', {action: 'submit'}).then(function(token) {
                    formData.append('g-recaptcha',token);
                    axios.post( '',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            onUploadProgress: function( progressEvent ) {
                                _this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ) );
                            }.bind(_this)
                        }
                    ).then(function(response){
                        if(response.data.url){
                            _this.file_url=response.data.url;
                        }
                    })
                        .catch(function(){
                            console.log('FAILURE!!');
                        });
                });
            });

        },

        checkForm: function (e) {

            this.action=e.target.querySelector('input[name=action]').value;
            this.item=e.target.querySelector('input[name=item]').value;

            let data=new FormData();

            if(this.action=='contact') this.fields=['action','fullname','phone','email','message'];
            if(this.action=='career') this.fields=['action','item','name','phone','email','surname','file_url'];

            this.errors = [];

            this.fields.map(item=>{
                if (!this[item])  this.errors.push(item+' required!');
                data.append(item,this[item]);
            });
            let _this=this;

            console.log(_this);

            if(!this.errors.length && this.tokenTake){
                this.tokenTake=false;
                grecaptcha.ready(function() {
                    grecaptcha.execute('6LdJhvgfAAAAAJMwUVgEyMZ2RacUFOjx6nhNh8w1', {action: 'submit'}).then(function(token) {
                        data.append('g-recaptcha',token);
                        axios.post('',data)
                            .then(function (response) {
                                _this.tokenTake=true;
                                if(response.data.success){
                                    _this.savingSuccessful=true;
                                }

                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .then(function () {
                                // always executed
                            });
                    });
                });
            }
        }
    }
})