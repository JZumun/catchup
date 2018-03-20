<template lang="pug">
	ul.portals(v-if="portals.length > 0")
			li(v-for="portal in portals", :class="{started: portal.started}").portal
				span.portal-id {{ portal.id }}
				span.portal-status {{ portal.started ? "Ongoing" : "Preparing" }}
				span.portal-players {{ portal.players }} / {{ portal.total || "?" }}
				a.button.portal-join(:href="`/game/${portal.id}`") {{ portal.started ? "Observe" : "Join" }}
	p.empty(v-else) No Open Expeditions
</template>

<script>
	export default {
		data() { return {} },
		props: {
			portals: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style scoped>
	.portals {
		display: grid;
		grid-gap: 1em 5em;
		grid-template-columns: repeat(auto-fill, 14em);
	}
	.portal {
		display:grid;
		grid-gap: 0.25em 1em;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		text-decoration: none;
		grid-auto-flow: dense;
	}
	.portal span {
		display: block;
		grid-column: 2;
	}
	.portal-join {
		display:block;
		grid-column: 1;
		white-space: nowrap;
	}
	.portal-id {
		font-weight: bold;
	}
	.portal-id:before {
		content: "Expedition ID: ";
	}
	.portal-status:before {
		content: "Status: ";
	}
	.portal-players:before {
		content: "Group: ";
	}

	.empty {
		color: #999
	}
</style>
