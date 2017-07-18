import ThumbnailService from 'ThumbnailService.js';
import 'thumbnail.css';

class Thumbnail {
	renderThumbnails() {
		let thumbnailService = new ThumbnailService();
		let thumbnails = thumbnailService.setThumbnails();

		thumbnails = thumbnails.map((thumbnail) => {
			return `
				<div class="thumbnail">
          			<img src="${thumbnail.url}" />
          			<span class="title">${thumbnail.title}</span>
       			 </div>
			`;
		});

		return thumbnails.join('');
	}
}


export default Thumbnail;
