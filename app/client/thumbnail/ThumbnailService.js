import axios from 'axios';
import defaultImage from 'default.png';

const docWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

const defaultThumbnail = {
	title: 'Watch this video!',
	url: defaultImage
};

const thumbnailIndex = (() => {
	let index = 0;

	if (docWidth >= 320 && docWidth < 480) {
		index = 1;
	} else if (docWidth >= 480 && docWidth < 640) {
		index = 2;
	} else if (docWidth >= 640 && docWidth < 1280) {
		index = 3;
	} else if (docWidth >= 1280) {
		index = 4;
	}

	return index ? index : false;
})();

function formatObj(obj) {
	return obj.map((ele) => {
		if (ele.thumbnails != undefined && ele.thumbnails.length && ele.thumbnails[thumbnailIndex]) {
			return {
				title: ele.title,
				url: ele.thumbnails[thumbnailIndex].url
			};
		} else {
			return defaultThumbnail;
		}
	});
}

class ThumbnailService {
	constructor() {
		this.apiKey = process.ENV.API_KEY;
	}

	getThumbnails() {
		return axios.get(`https://api.zype.com/videos/?api_key=${this.apiKey}`);
	}

	setThumbnails() {
		return this.getThumbnails().then((resp) => {
			let obj = resp.data.response;
			formatObj(obj);
		});
	}
}

export default ThumbnailService;
