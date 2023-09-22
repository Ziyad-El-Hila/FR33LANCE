let EM=document.querySelector(".emailS");
        let PW=document.querySelector(".pwS");

        function signup(){
            if(document.querySelector(".checkboxAG").checked){
                if(EM.value=="" || PW.value==""){
                    alert("please fill all required fields");
                
                }
                else if(validateEmail()==true )
                {
                    let users=[];
                    let exists=false;
                    if(JSON.parse(localStorage.getItem("users"))!=null){
                        users=JSON.parse(localStorage.getItem("users"));
                    }
                    
                    if(users != null){
                        if(users.find(ads => ads.email == EM.value)){
                            alert("this email is already existing");
                            exists=true;
                        }
                        
                    }

                    if(exists==false){
                        let ad={ 
                        
                            "email":EM.value,
                            "pw":PW.value,
                            
                        }
                        users.unshift(ad);
                        localStorage.setItem("users",JSON.stringify(users));
                        alert("account created perfectly");
                        window.location.href = "log in.html";
                    }
                }
                
            }
            else{
                alert("please agree to User Agreement and Privacy Policy");
            }
            
            
        }

        /* Test of email exemple:anystring@anystring.anystring => True
        any string different of anystring@anystring.anystring => False */
        function validateEmail() 
        {   
            var re = /\S+@\S+\.\S+/;
            if(re.test(EM.value)===false){
                alert( "You have entered an invalid email address!");
            }
            return re.test(EM.value);
        }