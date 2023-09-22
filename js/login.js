let EM=document.querySelector(".emailS");
        let PW=document.querySelector(".pwS");

        function login(){
            
                if(EM.value=="" || PW.value==""){
                    alert("please fill all required fields");
                
                }
                else{
                    let users=[];
                    if(JSON.parse(localStorage.getItem("users"))!=null){
                        users=JSON.parse(localStorage.getItem("users"));
                    }
                    
                    if(users != null){
                        let accfound=false;
                        users.forEach(element => {
                            if(element.email == EM.value && element.pw==PW.value)
                            {
                                accfound=true;
                                if(document.querySelector(".checkboxRM").checked)
                                {
                                    localStorage.setItem("acc",EM.value);
                                    sessionStorage.removeItem("acc");
                                }
                                else
                                {
                                    sessionStorage.setItem("acc",EM.value);
                                    localStorage.removeItem("acc");
                                }
                                window.location.href = "../index.html";
                            
                            }
                            
                            
                        });
                        if(accfound==false)
                        {
                            alert("email or password are incorrect");
                        }
                    }
                    
                }
        }
            
            
            
        