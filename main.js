var password_agent = false;
let name_ag_inp = document.querySelector(".name_ag_inp")

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        
        let list_Name_Agent = document.querySelector(".name_Agent1")
        let list_Name_Agent2 = document.querySelector(".name_Agent2")
   

        data.forEach(agent => {
            list_Name_Agent.innerHTML += `

            <option value="${agent.name}">

            `


            list_Name_Agent2.innerHTML += `

            <option value="${agent.name}">

            `
        });


        // add phones to input by name 




        let list_Phones = document.querySelector(".phones_agent")

        name_ag_inp.addEventListener("input" , ()=>{

           
            data.forEach(agent => {

                
            let name_agent_for_phone = agent.name;

            let name_ag_inp_value = name_ag_inp.value


                


            if (name_agent_for_phone == name_ag_inp_value) {


                password_agent = agent.passowrd;

                console.log(password_agent);
                
                
                const phone1 = agent.phone1 ? ` <option value="${agent.phone1}"> ` : "";

                const phone2 = agent.phone2 ? ` <option value="${agent.phone2}"> ` : "";

                const phone3 = agent.phone3 ? ` <option value="${agent.phone3}"> ` : "";

                const phone4 = agent.phone4 ? ` <option value="${agent.phone4}"> ` : "";

                const phone5 = agent.phone5 ? ` <option value="${agent.phone5}"> ` : "";



                list_Phones.innerHTML = `
                    ${phone1}
                    ${phone2}
                    ${phone3}
                    ${phone4}
                    ${phone5}
                
                `
                
            }
               
            });

            
        })



        
    });




    let password_input = document.querySelector(".password_inp")

    const scriptURL = "http://script.google.com/macros/s/AKfycbzgdteEYdJzMQKPzaa28Jp9S5cgyXWeQNZBn1w5pWJUccQ7kJUA66AC7RaDF2CEDYVH/exec";
            let form = document.forms["contact-form"];

            let btn_subm = document.getElementById("submitBtn")

            form.addEventListener('submit', (e) => {
                e.preventDefault();
               
                if (password_agent && password_agent == password_input.value) {
               

                    console.log(password_agent);
                    

fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
})
.then((response) => {
    window.location.href = "thanks.html";
})
.catch((error) => console.error("Error!", error.message));

                }else{
                    let errorMessage = document.getElementById("eror");

                    errorMessage.innerHTML = "تأكد من الأسم الخاص بك او الرقم السري"
                }
            });

