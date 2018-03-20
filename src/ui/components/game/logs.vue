<template lang="pug">
	ul.logs
		li(v-for="log in logs")
			.message(v-if="log.type === 'message'")
				.player(slot="title" v-text="log.player.name")
				.contents(v-text="log.message")
			.event(v-if="log.type === 'event'")
				.contents(v-text="log.message")
</template>

<script>
	import BoxedSection from "components/boxed-section.vue"
	export default {
		components: {BoxedSection},
		props: ["logs"]
	}
</script>

<style lang="stylus" scoped>
	.logs li
		text-align right
	.logs li+li
		margin-top: 1.5em
	.player
		font-size: 0.75em
		opacity 0.75
	.event
		opacity 0.5

</style>
