var navItems = document.querySelectorAll('.nav-item')
var socialItems = document.querySelectorAll('.social-item')
var resume = document.getElementById('resume')
var stackIcons = document.querySelectorAll('.icon-row-stack > i')
var form = document.getElementById('form')
var formURL = 'https://script.google.com/macros/library/d/19GkEdQnq9s_1XPkyVF8E2MQEUhJdI6QlGSM4gf69mMKXZAWPD4_fqx4b/1'
var formSubmit = document.getElementById('form-submit')
var formStatus = document.getElementById('form-status')

// Clears active tab when switching tabs, used by both below functions
function hideActive() {
	var active = document.querySelector('.active')
	var activeName = active.getAttribute('val')
	var activeSection = document.getElementById(activeName)
	activeSection.style.display = 'none'
	active.classList.remove('active')
}

// Hide active tab, activate a new one
navItems.forEach(item => {
	item.addEventListener('click', function() {
		hideActive()
		var clicked = this.getAttribute('val')
		var show = document.getElementById(clicked)
		this.classList.add('active')
		show.style.display = 'block'
	}
)})

// A slightly different version of the above for the hidden email tab
function showEmail() {
	hideActive()
	var email = document.getElementById('email')
	var emailIcon = document.getElementById('email-icon')
	email.style.display = 'block'
	emailIcon.classList.add('active')
	emailIcon.focus()
}

// Show social icon label tooltip text when hovering on them
socialItems.forEach(item => {
	var resume = document.getElementById('resume')
	item.addEventListener('mouseover', function() {
		var label = this.getAttribute('name')
		resume.innerText = label
	})
	item.addEventListener('mouseout', function() {
		resume.innerText = 'Rob\'s Résumé'
	})
})

// Show tooltip when hovering on icons in Dev tab
stackIcons.forEach(item => {
	item.addEventListener('mouseover', function() {
		item.classList.add('show-icon')
	})	
	item.addEventListener('mouseout', function() {
		item.classList.remove('show-icon')
	})	
})

window.addEventListener('DOMContentLoaded', function() {
	// Success and Error functions for after the form is submitted
	
	function success() {
		form.reset();
		formSubmit.style = 'display: none ';
		formStatus.innerHTML = 'Thanks! I\'ll be in touch soon!';
	}

	function error() {
		formStatus.innerHTML = 'Oops! There was a problem.';
	}

	// handle the form submission event

	form.addEventListener('submit', function(ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
	});
	
	// helper function for sending an AJAX request

	function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
		success(xhr.response, xhr.responseType);
		} else {
		error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
	}