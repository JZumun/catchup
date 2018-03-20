<template lang="pug">
	.game
		boxed-section.chat-area(title="Logs")
			event-logs.event-logs(:logs="eventLogs")
		form.chat-form
			textarea
			input(type="Submit" value="Send")
		boxed-section.game-board(title="Screen")
			.player-list
				.player(v-for="player, i in players", :key="player.id")
					.order(v-text="playerOrder(player.id)")
					ship-details(:ship="player", :simple="true")
		boxed-section.player-details(title="Controls")
		boxed-section.player-hand(title="Inventory")
			.elements
				game-fuel.element(v-for="element,i in hand", :key="i", :element="element")
</template>

<script>
	import GameFuel from "components/fuel.vue"
	import BoxedSection from "components/boxed-section.vue"
	import EventLogs from "components/game/logs.vue"
	import ShipDetails from "components/ship-details.vue"
	export default {
		components: {BoxedSection, EventLogs, ShipDetails, GameFuel},
		methods: {
			playerOrder(id) { return this.order.indexOf(id) + 1 }
		},
		data() {
			return {
				players: [
					{
						id: "123456",
						name: "JZumun",
						color: "#a32d2d"
					},
					{
						id: "78910",
						name: "Bernice",
						color: "#0000ff"
					},
					{
						id: "23419a",
						name: "Agatha",
						color: "#00ff00"
					},
				],
				order: ["78910", '123456', '23419a'],
				eventLogs: [
					{type: "message", player: {name: "Bernice"}, message: "lol hello guys!"},
					{type: "message", player: {name: "Agatha"}, message: "shut up bernice"},
					{type: "event", message: "Agatha kicked Bernice"},
					{type: "message", player: {name: "Bernice"}, message: "ouch :("}
				],
				hand: [
					{ name: "Argon", symbol: "Ar", effect: "fall", value:1 },
					{ name: "Jodium", symbol: "Jo", effect: "attract", value:2 },
					{ name: "Krypton", symbol: "Kr", effect: "repulse", value:2 }
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.game
		padding 1em
		display grid
		grid-gap 1em
		grid-template-columns 7.8em minmax(20em,1fr) 10em
		grid-template-rows: minmax(20em,1fr) 5em 5em
		height: 100vh
		grid-template-areas "board board chat" "details hand chat" "details hand form"
	.game > .boxed-section
		border 1px solid
	.chat-area
		grid-area chat
	.player-list
		grid-area list
	.game-board
		grid-area board
	.player-details
		grid-area details
	.player-hand
		grid-area hand
	.chat-form
		grid-area form

	.chat-area
		display flex
		flex-direction column
		justify-content flex-end
	.event-logs
		overflow-y auto
	.chat-form
		input
			text-align right
			margin-top -1px
			float right

	.player-list
		display flex
		position absolute
		top -1px
		right 1em
	.player
		font-size 0.5em
		border 1px solid
		padding 0.5em 1em
		position relative
	.player + .player
		margin-left 1.5em
	.order
		position absolute
		font-size 1.5em
		line-height 1.35
		width 1.5em
		text-align center
		height 1.5em
		background var(--main-background)
		border 1px solid
		left -0.75em
		bottom -0.75em
		border-radius 50%

	.elements
		display: grid;
		grid-template-columns repeat(auto-fill, 5em)
		grid-gap 1em
		align-items center
		justify-items center
		overflow-x auto
		height 100%
		padding 0 1em
	.elements > *
		grid-row 1
</style>
