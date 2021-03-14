nav = `
	<button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
		<i class="fas fa-bars"> </i>
	</button>
	<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
		<li><a class="dropdown-item disabled" href="#">Profile</a></li>
		<li><a class="dropdown-item" href="/history">Log History</a></li>
		<li><a class="dropdown-item disabled" href="#">Settings</a></li>
		<li><a class="dropdown-item disabled" href="#">Help</a></li>
		<div class="dropdown-divider"></div>
		<li><a class="dropdown-item signOut">Sign Out</a></li>
	</ul>
`

// Insert the dropdown menu into "drop" class
$(".drop").append(nav);