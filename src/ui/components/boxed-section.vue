<template lang="pug">
	.boxed-section
		.section-title
			slot(name="title")
				| {{ title }}
		slot
</template>

<script>
	export default {
		props: ["title"]
	}
</script>

<style lang="stylus" scoped>
	.boxed-section
		background var(--main-background, inherit)
		border 1px solid
		margin-top:1em;
		position relative
		padding 1em
		padding-top 1.5em
	.section-title
		border 1px solid
		background inherit
		position absolute
		top -1.125em
		left 1em
		padding 0.25em 1em
	.section-title > *
		margin: 0;
		white-space nowrap
</style>
