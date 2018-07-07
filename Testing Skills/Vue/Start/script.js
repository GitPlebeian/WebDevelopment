new Vue({
	el: '#vue-app',
	data: {
		name: 'Shaun',
		job: 'Idiot',
		website: 'http://www.google.com',
		anchor: '<a href="http://www.google.com">Bobby newport</a>'
	},
	methods: {
		greet: function(name) {
			return this.name
		}
	}
})