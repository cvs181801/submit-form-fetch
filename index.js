//grab the Form Element

//const userForm = document.getElementById('userForm');

//Make it so that when the user clicks the 'submit' button, the info they typed into the form will be sent to https://httpbin.org/post, and in the console, we'll see the response (in JSON form)
// userForm.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const formData = new FormData(this);
//     const options = {
//        method: 'POST',
//        body: formData
//     }
    
    
//      //Write the Fetch statement using https://httpbin.org/post along with the options. Then console log the JSON response. 
//     async function fetchAndLog() { 
//         try {

//       const postPromise = await fetch("https://httpbin.org/post", options);
//       const post = await postPromise.json();
//       console.log(post);
// } catch {
    
//     console.log("error");
// } fetchAndLog();
// } 
// })

userForm = document.getElementById('userForm').addEventListener('submit', submitPost); 

async function submitPost(e) {
    e.preventDefault();
    let firstName = document.getElementById('input_firstName').value; //why the .value? I don't understand that part
    let lastName = document.getElementById('input_lastName').value;
    let email = document.getElementById('input_email').value;

    const options = {
        method: 'POST',
        body: JSON.stringify({input_firstName: firstName, //I need to understand this JSON.stringify structure and when it's needed
                              input_lastName: lastName, 
                              input_email: email}),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    };
    const postPromise = await fetch('https://httpbin.org/post', options);
    if (postPromise.ok) {
        const post = await postPromise.json();
        console.log(post.data);
    }else{
        console.log(`Error: ${postPromise.status}`);
    }
}


