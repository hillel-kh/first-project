<template>
	<div>
		<header>
			<h2>ConstructorPreview</h2>
			<nav>
				<form action="/constructor">
					<button type="submit">back to ConstructorExamples</button>
				</form>
				<button>Edit</button>
			</nav>
		</header>
		<main>
			<div class="constructor-view" ref="constructorView"></div>
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				test: {
					html :`<div style="
								width: 300px;
								height: 200px;
								background: #17a2b8;
							"></div>
							<div style="
								width: 250px;
								height: 200px;
								background: #dc3545;
								position: relative;
								top: -50px;
								left: 30px;
							"></div>`
				}
			}
		},
		mounted() {
			this.$refs.constructorView.innerHTML = this.test.html
		}
	}
</script>

<style scoped>
	.constructor-view {
		padding: 10px;
		border: 1px solid #000;
	}
</style>