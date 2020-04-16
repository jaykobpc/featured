var app = new Vue({
    el: '#root',
    data: {
        'id': 1,
        'profile': 'alex mulei',
        'username': 'alex',
        'subdata': 'the book master',
        'twitter': 'https://twitter.com/',
        'instagram': 'https://instagram.com/',
        'facebook': 'https://facebook.com/',
        'reddit': 'https://reddit.com/',
        'website': 'https://codist.000webhostapp.com/',
        user: 'alexmulei',
    },
    mounted() {
        this.add_metrics()
    },
    methods: {
        add_metrics() {
            axios.post('https://notesfileserver.000webhostapp.com/trackerstats/App/mount', JSON.stringify({
                user: this.user,
            }))
                .then(function (response) {
                    console.log('@root/system file mounted');
                })
                .catch(function(error) {
                    console.log('@root/system file not mounted')
                })
        }
    }
});