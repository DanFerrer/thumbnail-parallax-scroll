import axios from 'axios';

class ThumbnailService {
	constructor() {
		this.apiKey = process.ENV.API_KEY;
	}

	getThumbnails() {
		return axios.get(`https://api.zype.com/videos/?api_key=${this.apiKey}`);
	}
}

export default ThumbnailService;
