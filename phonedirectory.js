window.onload = function(){
	// Buttons
	var quickAddBtn = document.getElementById('QuickAdd');
	var quickAddFormDiv = document.querySelector('.quickaddForm')
	var cancelBtn = document.getElementById('Cancel');
	var AddBtn = document.getElementById('Add');
	// Form Fields
	var fullname = document.getElementById('fullname');
	var phone = document.getElementById('phone');

	// Divs etc.
	var phndirectoryDiv = document.querySelector('.phndirectory');

	quickAddBtn.addEventListener("click", function(){
		// display the form div
		quickAddFormDiv.style.display = "block";
		showDataDiv.style.display = "none";
	});

	cancelBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "none";
	});
	
	
	

	AddBtn.addEventListener("click", addToBook);

	phndirectoryDiv.addEventListener("click", removeEntry);
	
	
	
	// Storage Array
	var phoneBook = [];

	//localStorage['phndirectory'] = '[{"fullname":"name here","phone":"phone number"}]';

	function jsonStructure(fullname,phone){
		this.fullname = fullname;
		this.phone = phone;
		
	}

	function addToBook(){
		var isNull = fullname.value!='' && phone.value!='';
		if(isNull){
			// format the input into a valid JSON structure
			var obj = new jsonStructure(fullname.value,phone.value);
			phoneBook.push(obj);
			localStorage['phndirectory'] = JSON.stringify(phoneBook);
			quickAddFormDiv.style.display = "none";
			clearForm();
			showphoneBook();
		
		} 
		else 
		{alert ("Please fill both the Values !");	}
	}

	function removeEntry(e){
		// Remove an entry from the phoneBook
		if(e.target.classList.contains('delbutton')){
			var remID = e.target.getAttribute('data-id');
			phoneBook.splice(remID,1);
			localStorage['phndirectory'] = JSON.stringify(phoneBook);
			showphoneBook();
		}
	}

	function clearForm(){
		var formFields = document.querySelectorAll('.formFields');
		for(var i in formFields){
			formFields[i].value = '';
		}
	}

	function showphoneBook(){
		if(localStorage['phndirectory'] === undefined){
			localStorage['phndirectory'] = '';
		} else {
			phoneBook = JSON.parse(localStorage['phndirectory']);
			// Loop over the array phoneBook and insert into the page
			phndirectoryDiv.innerHTML = '';
			for(var n in phoneBook){
				var str = '<div class="entry">';
					str += '<div class="name"><p>' + phoneBook[n].fullname + '</p></div>';
					str += '<div class="phone"><p>' + phoneBook[n].phone + '</p></div>';
					str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
					str += '</div>';
				phndirectoryDiv.innerHTML += str;
			}
		}
	}
	

	showphoneBook();
}

		function showData(){
			showDataDiv.style.display = "block";
		var name_s = document.getElementById("fullname").value;
		var phone_s = document.getElementById("phone").value;
		document.getElementById("displayName").innerHTML = "<strong>Name :</strong> " + name_s ;
		document.getElementById("displayPhone").innerHTML = "<strong>Phone :</strong> " + phone_s ;
		};
		