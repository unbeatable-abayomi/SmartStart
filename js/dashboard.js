let signUpform = document.querySelector('#signup-data');
let projectName = document.querySelector('#p_name');
let companyName = document.querySelector('#c_name');
let phoneNumber = document.querySelector('#ph_name');
let email = document.querySelector('#email');
let projectType = document.querySelector('#inlineFormCustomSelect');
let projectBrief = document.querySelector('#exampleFormControlTextarea1');

const api_key = 'keyCG9udfoxuLbYEj';
axios.defaults.baseURL = 'https://api.airtable.com/v0/appdYYz9aES7tz5xp/';
axios.defaults.headers.common['Authorization'] = `Bearer ${api_key}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function getData() {
	axios
		.get('/smart_start')
		.then((response) => {
			console.log(response);
			const Project_name = response.data.records[0].fields.project_name;
			const Company_name = response.data.records[0].fields.company_name;
			const Phone_number = response.data.records[0].fields.phone_number;
			const Email = response.data.records[0].fields.email;
			const Project_type = response.data.records[0].fields.project_type;
			const Project_brief = response.data.records[0].fields.project_brief;

			console.log(Project_name);
			console.log(Company_name);
			console.log(Phone_number);
			console.log(Email);
			console.log(Project_type);
			console.log(Project_brief);
		})
		.catch((err) => {
			console.log(err);
		});
}

let clients_data = [];

signUpform.addEventListener('submit', (e) => {
	e.preventDefault();
	const new_clients = {
		project_name  : projectName.value,
		company_name  : companyName.value,
		phone_number  : phoneNumber.value,
		email         : email.value,
		project_type  : projectType.value,
		project_brief : projectBrief.value
	};

	axios
		.post('/smart_start', {
			fields   : new_clients,
			typecast : true
		})
		.then((res) => {
			console.log(res);
			clients_data.unshift(new_clients);
			console.log(clients_data);
			projectName.value = '';
			companyName.value = '';
			phoneNumber.value = '';
			email.value = '';
			projectType.value = '';
			projectBrief.value = '';
		})
		.catch((err) => {
			console.log(err);
		});

	axios.get('/smart_start').then((response) => {
		console.log(response.data);
		let clients_info = response.data.records;
		console.log(clients_info);
		console.log(clients_info[0].fields);
		let meals_outputted = '';
		various_meals.forEach((index) => {
			meals_outputted += `
            
     <div>
         <img src="${index.fields.image_link}" width="300px" height="250px" >
         <button class="btn-lunch">${index.fields.Category}</button>
         <div class="first-dish-lower-div">
             <h2>${index.fields.Name}</h2>
             <h4>view recipe</h4>
             <p>Monday-<time
                 datetime="2019-05-15T19:00">${index.fields.cook_date}</time>.</p>

        
      </div>
      </div>
         `;
		});

		dishes.innerHTML = meals_outputted;
	});
});
