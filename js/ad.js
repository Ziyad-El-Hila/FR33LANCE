let Jid=sessionStorage.getItem("jobid");
        let JBmail=document.querySelector(".JBmail");
        let JBbid=document.querySelector(".JBbid");
        let jobEmail;
        let jobs=[];
            if(JSON.parse(localStorage.getItem("AllJobs"))!=null){
                jobs=JSON.parse(localStorage.getItem("AllJobs"));
            }
            
            jobs.forEach(element => {
                
                if(element.id==Jid){


                                
                    jobEmail=element.emailOfPoster;

                    let idp=document.createElement("span");
                    idp.innerHTML=Jid;
                    let titlejb=document.createElement("span");
                    titlejb.innerHTML=element.title;
                    let descjp=document.createElement("span");
                    descjp.innerHTML=element.description;
                    let budjp=document.createElement("span");
                    budjp.innerHTML=element.budget;
                    document.querySelector(".idP").appendChild(idp);
                    document.querySelector(".FLtitle").appendChild(titlejb);
                    document.querySelector(".FLtxt").appendChild(descjp);
                    document.querySelector(".budget").appendChild(budjp);


                    for( var i = 0; i < element.skills.length; i++){
                        let anchSK=document.createElement("a");
                        anchSK.setAttribute("href","");
                        anchSK.innerHTML=element.skills[i]+" / " ;
                        document.querySelector(".skillList").appendChild(anchSK);
                    }
                }
                
                
            });

        let acc;
        if(localStorage.getItem("acc")!=null){
            acc=localStorage.getItem("acc");
            document.querySelector(".logsign").classList.add("hide");
            document.querySelector(".disconnect").classList.remove("hide");
            document.getElementById("connected-account").innerHTML="<span>"+acc+"</span>";

        }
        else if(sessionStorage.getItem("acc")!=null){
            acc=sessionStorage.getItem("acc");
            document.querySelector(".logsign").classList.add("hide");
            document.querySelector(".disconnect").classList.remove("hide");
            document.getElementById("connected-account").innerHTML="<span>"+acc+"</span>";
        }
        function disconnect(){
            localStorage.removeItem("acc");
            sessionStorage.removeItem("acc");
            window.location.href = '../index.html';
        }

        /* Test of email exemple:anystring@anystring.anystring => True
        any string different of anystring@anystring.anystring => False */
        function validateEmail() 
        {   
            var re = /\S+@\S+\.\S+/;
            if(re.test(JBmail.value)===false){
                alert( "You have entered an invalid email address!");
            }
            return re.test(JBmail.value);
        }
        
        function btnApply(){
            if(JBbid.value!="" || JBmail.value!=""){
                if(validateEmail()==true && jobEmail!=null){
                    Email.send({
                        SecureToken : "ca4b6382-3c0b-4106-aab2-4cf1f9d1a5d7",
                        To : jobEmail,
                        From : 'freelancer@freelancer.com',
                        Subject : " A new freelancer applied for your job",
                        Body : "Congratulation a new freelancer applied for your job <br/><br/><br/>The freelancer's Email: "+JBmail.value+"<br/><br/>He bids for : "+JBmail.value+" $"
                        
                    }).then( message => alert(message) );
                }
            }
            else{
                alert("please fill all required fields");
            }
        }