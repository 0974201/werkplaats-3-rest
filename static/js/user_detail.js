//do we even need async here?

function toJson(){
    let userid = parseInt(document.querySelector('input[name=user_id').value);
    const admin = document.querySelector('input[name=is_admin]:checked') !== null;
    let adminInt;

    if(!admin){
        adminInt = 0;
    } else {
        adminInt = 1;
    }
    
    let json = JSON.stringify({
        user_id : userid,
        gebruikersnaam : document.querySelector('input[name=gebruikersnaam').value,
        wachtwoord : document.querySelector('input[name=wachtwoord').value,
        is_admin : adminInt
    });
    console.log(json);

    return json
}

async function update_user(id){
    try {
        fetch('/user/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: toJson()
        })

        console.log("I need scissors! 61!")

    } catch(error) {

        console.log(error);
    }
}

async function delete_user(id){
    try {
        fetch('/user/' + id, {
            method: 'DELETE'
        })

        console.log("delet")

    } catch(error) {

        console.log(error);
    }
}