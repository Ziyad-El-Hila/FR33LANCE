let table=document.querySelector("table");
        let btnApp= document.getElementsByClassName("btnApp");
        let jobid=document.getElementsByClassName("jobid");
        
        function Apply(a){
            element=a;

            for( var i = -1; i < btnApp.length; i++){
                if(btnApp[i]===element){

                sessionStorage.setItem("jobid",jobs[i].id)
                window.location.href = "ad.html";
            }
                
            }
            
            
        }
        
        let jobs=[];
        if(JSON.parse(localStorage.getItem("AllJobs"))!=null){
            jobs=JSON.parse(localStorage.getItem("AllJobs"));
        }
        jobs.forEach(element => {
            let line=document.createElement("tr");
            
            line.innerHTML='<hr><a href="" class="FLtitle text-dark fw-bold fs-5">'+element.title+'</a><div class="priceSec"><h6 class="fw-bold">'+element.budget+' $</h6><button class="btn btn-success btnApp" onclick="Apply(this)">Apply</button></div><p class="FLtxt" >'+element.description+'</p><span class="skills">Skills: </span> ';
            table.appendChild(line);
            for( var i = 0; i < element.skills.length; i++){
                let anchSK=document.createElement("a");
                anchSK.setAttribute("href","");
                anchSK.innerHTML=element.skills[i]+" / " ;
                let nb = document.getElementsByClassName("skills").length;
                document.getElementsByClassName("skills")[nb-1].appendChild(anchSK);
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