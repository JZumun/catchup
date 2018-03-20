<template lang="pug">
	.screen
		.logo(v-html="logo")
		h1 Enter The Singularity
		p You are currently piloting an unregistered ship. Register now to take part in expeditions.
		form(method="post", action="/user/login")
			form-field(name="Ship Callsign")
				input(type="text", placeholder="Username", name="user")
			form-field(name="Model Number")
				input(type="color", name="color")
			input(type="Submit" value="Register")
</template>

<script>
	import FormField from "components/form/field";
	import logo from "assets/logo.svg";
	export default {
		components: {FormField},
		data() {
			return {
				logo
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.screen
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		height:100vh
	.screen > * + *
		margin-top: 1rem;
	h1
		margin: 0
	.logo
		width: 5em;
	form
		display:grid;
		grid-gap: 0.5em;
		margin-bottom: 7em;
</style>
