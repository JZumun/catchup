<template lang="pug">
	label.form-field
		span.form-label
			slot(name="label")
				| {{name}}
		slot.form-input
</template>

<script>
	export default {
		props: {
			name: String
		}
	}
</script>

<style scoped lang="stylus">
	.form-field
		display:grid
		grid-gap:1em
		grid-template-columns: 1fr 2fr;
		align-items: center;
</style>
