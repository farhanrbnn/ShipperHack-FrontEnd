import DataService from "../../boot/axios";

export function inboundApi (commit) {
	DataService.get('/inbound')
	.then((res) => {
		commit('inboundData', res.data.data)		
	})
	.catch((err) => {
		console.log(err)
	})
}
