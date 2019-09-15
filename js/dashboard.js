
const board = document.querySelector('#board-items');
const form = document.querySelector('#signup-data');

// create element & render project
function renderProject(doc){
    let h1 = document.createElement("h1");
    let name = document.createElement("h1");
    let cpanel = document.createElement("p");
    let category = document.createElement("center");
    let cross = document.createElement("div");

    h1.setAttribute("data-id", doc.id);
    name.textContent = doc.data().name;
    cpanel.textContent = doc.data().cpanel;
    category.textContent = doc.data().category;
    cross.textContent = "x";

    h1.appendChild(name);
    h1.appendChild(cpanel);
    h1.appendChild(category);
    h1.appendChild(cross);

    board.appendChild(h1);
     // deleting data
     cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('project').doc(id).delete();
    });

    
}
// getting data
// db.collection('project').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderProject(doc);
//     })
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('project').add({
        name: form.name.value,
        cpanel: form.cpanel.value,
        category: form.category.value
    });
    form.name.value = '';
    form.cpanel.value = '';
    form.category.value = '';
});

// real-time listener
db.collection('project').orderBy('name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderProject(change.doc);
        } else if (change.type == 'removed'){
            let h1 = board.querySelector('[data-id=' + change.doc.id + ']');
            board.removeChild(h1);
        }
    });
});

