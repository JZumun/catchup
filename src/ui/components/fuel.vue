<template lang="pug">
	.element(:class="[element.effect]")
		.name
			.short-name(v-text="element.symbol")
			.long-name(v-text="element.name")
		.value(v-text="element.value")
		.effect(v-html="effectLogo")
</template>

<script>
	export default {
		props: ["element"],
		computed: {
			effectLogo() {
				switch (this.element.effect) {
					case "fall": return "⤓";
					case "attract": return "⤝";
					case "repulse": return "↥"
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.element
		--neon-width: 0.25em
		border 1px solid
		width 4em
		height 4em
		display flex
		align-items center
		justify-content center
		position relative
		border-radius 50%
		background var(--main-background)
		cursor pointer
		box-shadow inset 0 0  var(--neon-width) var(--effect-color), 0 0  var(--neon-width) var(--effect-color)
	.element.fall
		--effect-color lightblue
	.element.repulse
		--effect-color #5ecd3c
	.element.attract
		--effect-color #dd87db
	.element:hover
		--neon-width: 1em
	.value, .effect
		position absolute
		background inherit
		box-shadow inherit
		height 2em
		width 2em
		line-height 2em
		text-align center
		border inherit
		border-radius 50%
	.value
		top: -1em
		left: -1em
	.effect
		bottom -1em
		right -1em
	.name
		display flex
		flex-direction column
		text-align center
	.short-name
		font-size 2.5em
		line-height 0.5
	.long-name
		font-size 0.5em
</style>
