   /***********************
  / TODO: Theme switcher *
 /***********************
*/

let theme_name: boolean = false
let theme_text: any = document.getElementById("theme");
let root: any = document.querySelector(":root");

window.addEventListener('load', () => {
	theme_text.innerText = "dark mode";
})

function theme() {
	if (theme_name == false) {
		theme_text.innerText = "light mode"
		root.style.setProperty('--background', '#505050')
		root.style.setProperty('--textcol', '#ffffff')

		theme_name = true;
	} else {
		theme_text.innerHTML = 'dark mode <span class="material-symbols-outlined">dark_mode</span>'
		root.style.setProperty('--background', '#f0f0f0')
		root.style.setProperty('--textcol', '#1A1110')
		theme_name = false;
	}
}