function checkBoxLimit() {
	var checkBoxGroup = document.forms['form_name']['check[]'];			
	var limit = 3;
	for (var i = 0; i < checkBoxGroup.length; i++) 
    {
		checkBoxGroup[i].onclick = function() {
			var checkedcount = 0;
			for (var i = 0; i < checkBoxGroup.length; i++) {
				checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
                               
                const parentDiv = document.getElementById("form_name").parentNode
                const form = document.getElementById("form_name")
                const text = document.createElement("p")
                text.className="aviso"
                text.textContent="Você atingiu o maximo de escolhas"
                parentDiv.insertBefore(text, form);
				this.checked = false;
			}


		}
	}
}