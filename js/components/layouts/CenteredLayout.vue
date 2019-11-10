<template>
	<div class="layout">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
	@import "../../../scss/settings";

	.layout {
		@include size(100%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>