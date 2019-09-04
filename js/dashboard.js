let signUpform = document.querySelector('#signup-data');
let projectName = document.querySelector('#p_name');
let companyName = document.querySelector('#c_name');
let phoneNumber = document.querySelector('#ph_name');
let email = document.querySelector('#email');
// let customerSelect = document.querySelector("#inlineFormCustomSelect")
let textAera = document.querySelector('#exampleFormControlTextarea1');

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
			let company_name = response.data.records[0].fields.company_name;
			let phone_number = response.data.records[0].fields.phone_number;
			let email = response.data.records[0].fields.email;
			let project_type = response.data.records[0].fields.project_type;
			let project_brief = response.data.records[0].fields.project_brief;

			console.log(Project_name);
			console.log(company_name);
			console.log(phone_number);
			console.log(email);
			console.log(project_type);
			console.log(project_brief);
		})
		.catch((err) => {
			console.log(err);
		});
}
