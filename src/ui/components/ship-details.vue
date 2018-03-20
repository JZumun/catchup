<template lang="pug">
	.ship-details(:class="{simple}")
		ship-logo.ship-logo(:color="ship.color")
		.ship-detail.ship-name {{ ship.name }}
		.ship-detail.ship-id {{ ship.id }}
		.ship-detail.ship-color {{ this.model }}
</template>

<script>
	import ShipLogo from "components/logo.vue";
	export default {
		components: { ShipLogo },
		props: {
			ship: {
				type: Object,
				default() { return {
					name: "Unknown",
					id: "Unknown",
					color: "transparent"
				} }
			},
			simple: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			model() {
				return this.ship.color === "transparent" ? "Unknown" : this.ship.color;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.ship-details
		display:grid;
		grid-gap 0 1em
		grid-template-columns: 2em 1fr;

	.ship-logo
		grid-row: span 3;
		width: 1.75em
		align-self end

	.ship-logo svg
		height: 3em;

	.ship-detail
		display grid
		grid-gap 0.5em
		grid-template-columns 2em 1fr
		align-items center

	.ship-detail:before {
		font-size:0.5em;
		display:block;
		justify-self end
	}
	.ship-name {
		font-size: 2em;
		grid-gap: 0.25em;
		grid-template-columns 1em 1fr
	}
	.ship-id:before { content: "ID: " }
	.ship-name:before { content: "Call Sign: "; font-size:0.25em }
	.ship-color:before { content: "Model" }
	.ship-empty { opacity: 0.4; }

	.simple > * { grid-template-columns: 1fr; }
	.simple > *:before { content: none; }
	.simple .ship-color { display:none }
</style>
