class Gallery {
	constructor(params) {
		this.selector = params.selector;
		this.imgPath = params.imgPath;
		this.list = params.list;

		this.DOM = null;
		this.filterDOM = null;

		this.tags = null;
		this.item = null;
		this.uniqueTags = null;
		this.activeTag = 0;
	}
	init() {
		// selector validation, jei geras tai rasti DOM
		if (!this.isValidSelector()) {
			return 'nevalidus selectorius';
		}
		// imgPath validacija
		if (!this.isImgPathValid()) {
			return 'Nevalidus imgPath';
		}
		// list validacija
		if (!this.isListValid()) {
			return 'Nevalidus List';
		}
		// filter out invalid list objects
		this.filterOutInvalidListObject();

		// render content
		this.render();

		this.addEvents();

		return true;
	}

	isValidSelector() {
		const DOM = document.querySelector(this.selector);
		if (!DOM) {
			console.log(DOM);
			return false;
		}
		this.DOM = DOM;
		return true;
	}
	isImgPathValid() {
		if (typeof this.imgPath !== 'string' || this.imgPath === '') {
			return false;
		}
		return true;
	}
	isListValid() {
		if (!Array.isArray(this.list) || this.list.length === 0) {
			return false;
		}
		return true;
	}
	filterOutInvalidListObject() {
		const validData = [];
		for (const item of this.list) {
			if (
				typeof item === 'object' &&
				!Array.isArray(item) &&
				item.photo &&
				typeof item.photo === 'string' &&
				item.photo !== '' &&
				item.title &&
				typeof item.title === 'string' &&
				item.title !== '' &&
				item.tags &&
				Array.isArray(item.tags) &&
				item.tags.length > 0 &&
				this.isValidItemTagArray(item.tags)
			) {
				validData.push(item);
			}
		}
		this.list = validData;
	}

	isValidItemTagArray(tagList) {
		for (const tag of tagList) {
			if (typeof tag === 'string' && tag !== '') {
				return true;
			}
		}
		return false;
	}

	render() {
		this.DOM.classList.add('gallery');
		this.DOM.innerHTML = this.renderFilter() + this.renderGallery();

		this.filterDOM = this.DOM.querySelector('.filter');

		this.tags = this.filterDOM.querySelectorAll('.tag');
		this.items = this.DOM.querySelectorAll('.item');
	}

	renderFilter() {
		// gauti visus naudojamus tagus

		let allTags = [];
		for (const item of this.list) {
			allTags = [...allTags, ...item.tags];
		}
		//suvienodinamte visus zozius i maz raides

		for (let i = 0; i < allTags.length; i++) {
			allTags[i] = allTags[i].toLowerCase();
		}

		// issirinkti ir pasilikti tik unikalius

		const uniqueTags = [];
		for (const tag of allTags) {
			if (!uniqueTags.includes(tag)) {
				uniqueTags.push(tag);
			}
		}
		this.uniqueTags = ['All', ...uniqueTags];

		// sugeneruoti HTML

		let HTML = '';
		for (const tag of uniqueTags) {
			HTML += `<div class="tag">${tag}</div>`;
		}

		return `<div class="col-12 center filter">
		<div class="tag active">All</div>
		${HTML}
		</div>`;
	}
	renderGallery() {
		let HTML = '';

		for (const item of this.list) {
			const validTags = item.tags.filter((tag) => typeof tag === 'string' && tag !== '');

			const img = this.imgPath + item.photo;

			HTML += `<div class="col-12 col-sm-6 col-md-4 item">
				<img src="${img}" alt="Portfolio image"/>
				<div class="layer">
					<i class="fa fa-camera"></i>
				</div>
				<div class="texts">
					<div class="title">${item.title}</div>
					<div class="tags">${validTags.join(', ')}</div>
				</div>
			</div>`;
		}
		return HTML;
	}
	addEvents() {
		const count = this.tags.length;
		for (let i = 0; i < count; i++) {
			const tag = this.tags[i];

			tag.addEventListener('click', () => {
				this.tags[this.activeTag].classList.remove('active');
				tag.classList.add('active');
				this.activeTag = i;

				console.log(this.uniqueTags[i]);
				console.log(tag.innerText);
			});
		}
	}
}
export { Gallery };
