
        //variables declartion
        let title=document.querySelector("#PRtitle");
        let desc=document.querySelector("#PRdesc");
        let files=document.querySelector("#PRfille");
        let skills=document.querySelector("#PRskills");
        let bud=document.querySelector("#PRbud");
        let Sks=document.querySelector(".selectedVal");
        let skillsChecked=[];
        let skillsBTN=document.querySelectorAll(".skclick");
        let jobs=[];
        //This is a random list of skills created by me instead of data base of skills
        const sk=["Blockchain and Cryptocurrency Programming","Amazon Web Service (AWS) Development", "Mobile App Development","Artificial Intelligence (AI) Development","Website Design"," Website Development","Data Analysis"," Online Security and Ethical Hacking", "Accounting and Bookkeeping","Writing" ,"Editing" , "Illustration","Virtual Assistance" ,"Video Editing" ,"Graphic Design" ,"Copywriting" ,"Excel Management" ,"Translation"].sort();
        
        //fold the combobox of skills
        sk.forEach(valx =>{
            let SkOPT= document.createElement("option");
            SkOPT.innerHTML=valx;
            skills.appendChild(SkOPT);
        });

        //check connection
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
        if(acc==null){
            alert("please Sign Up or Log In to continue");
            window.location.href = 'sign up.html';
        }


        //functions
        function firstNext(){
            if(title.value.length<=10 || desc.value.length<=30){
                alert("Please write the title and a description of what you need done !!  \nthe title's characters should be over 10 characters \nthe description's characters should be over 30 characters")
            }
            else{
                title.disabled = true;
                desc.disabled = true;
                //files.disabled = true;
                document.querySelector(".skills").classList.remove("hide");
                window.location.href="#skills";
            }
            
        }

        function selectSK(){
            if(skillsChecked.length>=5){
                alert("you can not select more the five(5) skills");
            }
            else if(skills.value=="Open this select menu"){
                return;
            }
            else{
                if(skillsChecked.includes(skills.value)==false){
                    skillsChecked.push(skills.value);
                    let anchSK=document.createElement("a");
                    anchSK.setAttribute("class","skclick");
                    anchSK.setAttribute("onclick","remove(this)");
                    anchSK.innerHTML=skills.value;
                    Sks.appendChild(anchSK);
                }
                else{
                    alert("this skill is already chosen");
                }
            }
        }


        function remove(a){
            var element = a;
                for( var i = 0; i < skillsChecked.length; i++){ 
                    
                    if ( skillsChecked[i] == a.text) { 
                        skillsChecked.splice(i,1);
                    }
                }
            element.remove();

        }

        function secondNext(){
            if(skillsChecked.length==0){
                alert("chose the skills required for the job !")
            }
            else{
                skills.disabled=true;
                document.querySelector(".skclick").removeAttribute("onclick");
                document.querySelector("#budget").classList.remove("hide");
                window.location.href="#budget";
            }
            
        }


        var uploadFiles = document.getElementById("PRfilles");
        uploadFiles.onchange = function() {
            let total=0;
            
            for( var i = 0; i < this.files.length; i++){
                total=total+this.files[i].size;
            }
            if(total > 26214400){
                alert("your files size are bigger then 25MB !!");
                this.value = "";
            };
            
        };

        function postForm(){
            let jobs=[];
            if(JSON.parse(localStorage.getItem("AllJobs"))!=null){
                jobs=JSON.parse(localStorage.getItem("AllJobs"));
            }
            let jobID= Math.floor(Math.random() * 1000) + 1;
            if(jobs != null){
                if(jobs.find(ads => ads.id == jobID)){
                    while(ads.id == jobID){
                        jobID= Math.floor(Math.random() * 1000) + 1;
                    }
                }
            }
            
            let ad={ 
                "id":jobID,
                "title":title.value,
                "emailOfPoster":acc,
                "description":desc.value,
                "skills":skillsChecked,//this is an array
                "budget":bud.value
            }
            jobs.unshift(ad);
            localStorage.setItem("AllJobs",JSON.stringify(jobs));
            alert("the job has been posted perfectly");
            window.location.href = "../index.html";

        }

        
        function disconnect(){
            localStorage.removeItem("acc");
            sessionStorage.removeItem("acc");
            window.location.href = '../index.html';
        }
        
        

        






