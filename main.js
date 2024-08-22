var password_agent = false;
let name_ag_inp = document.querySelector(".name_ag_inp")

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        
        let list_Name_Agent = document.querySelectorAll(".name_Agent1")

   
        list_Name_Agent.forEach(slct =>{
            data.forEach(agent => {
                slct.innerHTML += `
                <option value="${agent.name}">${agent.name}</option>
                `
            });
        })




        // add phones to input by name 




        let list_Phones = document.querySelector(".phones_agent")

        name_ag_inp.addEventListener("input" , ()=>{

           
            data.forEach(agent => {

                
            let name_agent_for_phone = agent.name;

            let name_ag_inp_value = name_ag_inp.value


                


            if (name_agent_for_phone == name_ag_inp_value) {


                password_agent = agent.passowrd;

                
                
                const phone1 = agent.phone1 ? `<option value="${agent.phone1}">${agent.phone1}</option> ` : "";

                const phone2 = agent.phone2 ? `<option value="${agent.phone2}">${agent.phone2}</option> ` : "";

                const phone3 = agent.phone3 ? `<option value="${agent.phone3}">${agent.phone3}</option> ` : "";

                const phone4 = agent.phone4 ? `<option value="${agent.phone4}">${agent.phone4}</option> ` : "";

                const phone5 = agent.phone5 ? `<option value="${agent.phone5}">${agent.phone5}</option> ` : "";



                list_Phones.innerHTML = `

                                <option value="" disabled selected>  Number Wallet  </option>
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

    const scriptURL = "https://script.google.com/macros/s/AKfycbzeUt4evsgLprjFmoUUBmOmn00YYxT7PWSqlcmac_xsPRuQ4G1GNWh7EhUkLFBRa40ZJg/exec";
            let form = document.forms["contact-form"];

            let btn_subm = document.getElementById("submitBtn")

            form.addEventListener('submit', (e) => {
                e.preventDefault();
               
                if (password_agent && password_agent == password_input.value) {
               
                    btn_subm.classList.add("disable")
                    btn_subm.innerHTML = `
                    <div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>
                    `
                    

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

