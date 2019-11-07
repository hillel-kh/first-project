<template>
	<div class="layout">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
	.layout {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>