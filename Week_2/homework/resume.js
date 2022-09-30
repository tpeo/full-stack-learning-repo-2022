function toggleXP() {
	let info = [document.getElementById("xp1"), 
		document.getElementById("xp2"), 
		document.getElementById("xp3")];
	let button = document.getElementById("xpButton");
	if(button.value === "expand") {
		button.value = "collapse";
		info.forEach((x) => x.style.display = "block");
	}
	else {
		button.value = "expand";
		info.forEach((x) => x.style.display = "none");
	}

}
function toggleP() {
	let info = [document.getElementById("p1")]
	let button = document.getElementById("pButton");
	if(button.value === "expand") {
		button.value = "collapse";
		info.forEach((x) => x.style.display = "block");
	}
	else {
		button.value = "expand";
		info.forEach((x) => x.style.display = "none");
	}

}
function toggleAct() {
	let info = [document.getElementById("act1"), 
	document.getElementById("act2"), 
	document.getElementById("act3"), 
	document.getElementById("act4"), 
	document.getElementById("act5")]
	let button = document.getElementById("actButton");
	if(button.value === "expand") {
		button.value = "collapse";
		info.forEach((x) => x.style.display = "block");
	}
	else {
		button.value = "expand";
		info.forEach((x) => x.style.display = "none");
	}

}
