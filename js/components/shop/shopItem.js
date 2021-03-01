const shopItem = (item, imgPath) => {
	const img = imgPath + item.photo;

	return `<div class="shopItem">
				<img src="${img}" alt="Shop image"/>
				<div class="layer">
					<i class="fa fa-camera"></i>
				</div>
				<div class="texts">
					<div class="title">${item.title}</div>
					<div class="price">${item.price / 100}${item.currency}</div>
				</div>
			</div>`;
};

export { shopItem };
