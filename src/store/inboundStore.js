import DataService from "../boot/axios";

const state = {
	inbound: null

}

const mutations = {
	setInboundData: (state, inbound) => {
		state.inbound = data
	}

}

const actions = {
	consumeApi: (state) => {
		DataService.get('/')
		.then((res) => {
			state.inbound = res.data.data
			// commit('setInboundData', res.data.data)
		})
		.catch((err) => {
			console.log(err)
		})
	}


}

const getters = {
	inboundData: (state) => state.inbound

}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
