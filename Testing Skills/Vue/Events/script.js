new Vue({
	el: '#vue-app',
	data: {
		age: 17,
		x: 0,
		y: 0
	},
	methods: {
		add: function() {
			this.age++
		},
		subtract: function() {
			this.age--
		},
		update: function(event) {
			this.x = event.offsetX
			this.y = event.offsetY
		}
	}
})