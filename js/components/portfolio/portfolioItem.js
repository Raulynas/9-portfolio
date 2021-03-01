const portfolioItem = (item, imgPath) => {
	const validTags = item.tags.filter((tag) => typeof tag === 'string' && tag !== '');

	const img = imgPath + item.photo;

	return `<div class="portfolioItem">
				<img src="${img}" alt="Portfolio image"/>
				<div class="layer">
					<i class="fa fa-camera"></i>
				</div>
				<div class="texts">
					<div class="title">${item.title}</div>
					<div class="tags">${validTags.join(', ')}</div>
				</div>
			</div>`;
};

export { portfolioItem };
