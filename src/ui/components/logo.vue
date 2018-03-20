<template lang="pug">
	.logo(:style="`--color:${color};width:${normalizedWidth}`", v-html="logo")
</template>

<script>
	import logo from "assets/logo.svg"
	export default {
		props: {
			color: {
				type: String,
				default: "transparent"
			},
			width: {
				default: "2em"
			}
		},
		data: () => ({
			logo
		}),
		computed: {
			normalizedWidth() {
				if (typeof this.width === "number") return `${this.width}px`
				else return this.width;
			}
		}
	}
</script>
