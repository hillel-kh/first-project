<template>
	<CenteredLayout>
		<div class="container">
			<p v-if="!members">loading members</p>
			<p v-else-if="!members.length">no members</p>
			<div v-else
			     class="teams">
				<div v-for="team, teamName in teams"
				     class="team">
					<h2>{{ teamName }}</h2>
					<img v-for="usr in team"
					     :src="usr.pic"
					     :title="usr.name"/>
				</div>
			</div>
		</div>
	</CenteredLayout>
</template>

<script>
	import CenteredLayout from './CenteredLayout.vue';
	import members from '../modules/members';

	export default {
		data: () => ({
			members: null
		}),

		computed: {
			teams() {
				if (!this.members) return null;
				return this.members.reduce((teams, m) => {
					teams[m.team] = teams[m.team] || [];
					teams[m.team].push(m);
					return teams;
				}, {});
			}
		},

		mounted() {
			members.loadAll(all => {
				this.members = all;
			});
		},

		components: {CenteredLayout}
	}
</script>

<style lang="scss" scoped>
	.container {
		overflow: auto;
		width: 100%;
	}

	.teams {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.team {
		text-align: center;
		margin: 40px;
	}

	img {
		width: 70px;
		margin: .5em;
		line-height: 1;
		border-radius: 50%;
		vertical-align: middle;
		transition: all .5s ease;
		box-shadow: 0 0 0 0 rgb(173, 216, 230, .2), 0 0 0 0 pink;
		&:hover {
			transform: scale(1.4);
			box-shadow: 0 0 0 10px rgb(173, 216, 230, .5), 0 0 0 3px orange;
		}

	}
</style>