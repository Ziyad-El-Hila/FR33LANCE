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
            window.location.href = 'index.html';
        }
        
        