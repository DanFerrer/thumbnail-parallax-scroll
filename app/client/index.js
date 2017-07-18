import './normalize.css';
import './main.css';
import Thumbnail from 'thumbnail/Thumbnail';

function init(id) {
	let thumbnail = new Thumbnail();

	document.getElementById(id).innerHTML = thumbnail.renderThumbnails();
}

window.onload = init();
