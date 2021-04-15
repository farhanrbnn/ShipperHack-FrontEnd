import DataService from "../boot/axios";

const state = {
	inbound: []

}

const mutations = {
	setInboundData: (state, inbound) => {
		state.inbound = data
	}

}

const actions = {
	consumeApi: ({commit}) => {
		DataService.get('/')
		.then((res) => {
			commit('setInboundData', res.data.data)
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
