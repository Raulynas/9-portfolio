function hobbies(data) {
	//validation
	if (data === undefined) {
		return "Neduoti parametrai";
	}
	if (typeof data !== "object" || Array.isArray(data)) {
		return "Duotas netinkamo tipo parametras";
	}
	const allowedKeys = ["selector", "list"];
	const keys = Object.keys(data);
	if (keys.length !== allowedKeys.length) {
		return "Netinkamas raktazodziu kiekis";
	}
	for (const key of keys) {
		if (!allowedKeys.includes(key)) {
			return "Netinkama parametro struktura";
		}
	}
	if (typeof data.selector !== "string" || data.selector === "") {
		return "Selectorius netinkamo formato";
	}
	if (!Array.isArray(data.list) || data.list.length === 0) {
		return "List netinkamo formato";
	}

	//logic
	const { selector, list } = data;
	const DOM = document.querySelector(selector);
	let HTML = "";
	for (const item of list) {
		if (
			typeof item === "object" &&
			!Array.isArray(item) &&
			item.icon &&
			typeof item.icon === "string" &&
			item.icon !== "" &&
			item.text &&
			typeof item.text === "string" &&
			item.text !== ""
		) {
			HTML += `<div class="col-12 col-md-4 col-lg-3 hobbie">
            <div class="icon">${item.icon}</div>
            <p class="text">${item.text}
            </div>`;
		}
	}

	//post logic validation

	if (HTML === "") {
		return "Parametruose nebuvo naudingos informacijos";
	}

	//result return
	DOM.innerHTML = HTML;
}
export { hobbies };
