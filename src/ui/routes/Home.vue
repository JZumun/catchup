<template lang="pug">
	.main
		h1.main-title
			ship-logo(width="0.5em")
			| Enter the Singularity
		boxed-section.hub-title
			h2(slot="title") The Docks
			p.
				This is the jumping point for extradimensional expeditions.
				#[br ]Join an expedition, observe one already underway, or start your own.
		boxed-section.your-ship-details
			h3(slot="title") Your Ship
			ship-details(:ship="playerShip")
			button.retire Retire
		boxed-section.expeditions
			h2.portals-title(slot="title") Expeditions
			expedition-list.expedition-list(:portals="portals")
			| Make Ur Own
</template>

<script>
	import ShipLogo from "components/logo.vue"
	import BoxedSection from "components/boxed-section.vue"
	import ShipDetails from "components/ship-details.vue"
	import ExpeditionList from "components/expedition-list.vue"
	export default {
		components: {ShipDetails, ExpeditionList, BoxedSection, ShipLogo},
		data() {
			return {
				playerShip: {
					id: "123456",
					name: "JZumun",
					color: "#a32d2d"
				},
				portals: [
					{id: "1234", started: false, players: 2, total: 4},
					{id: "4567", started: false, players: 4, total: 10},
					{id: "8910", started: true, players: 3, total: 3}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.main
		padding 1em
		display grid
		grid-gap 1em
		grid-template-columns minmax(10.5em, max-content) 5fr
	.main-title, .hub-title
		grid-column span 2
	.main-title
		display grid
		grid-gap 0.25em
		grid-template-columns: min-content 1fr
		align-items center
		margin 0
	.your-ship-details
		align-self start
		display: grid
		grid-gap: 0.5em;
	.retire
		justify-self: start
</style>
