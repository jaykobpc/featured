var app = new Vue({
    el: '#root',
    data: {
        'id': 1,
        'profile': 'Jacob watenga',
        'username': 'jacob',
        'subdata': 'the book master',
        'twitter': 'https://twitter.com/jaykob_w',
        'instagram': 'https://instagram.com/jaykob_w',
        'facebook': 'https://facebook.com/',
        'reddit': 'https://reddit.com/',
        'website': 'https://codist.000webhostapp.com/',
        user: 'jaykobpc',
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