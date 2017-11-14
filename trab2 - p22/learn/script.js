
function add(nome,id){
    let divv = document.getElementById("oi");
    let li = document.createElement("li");
    let txt = document.createTextNode(nome);
    li.id = id;
    li.appendChild(txt);
    divv.appendChild(li);
    console.log(divv);

}



    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4){
            var obj = JSON.parse(ajax.responseText);
            console.log(obj);
            for(let i = 0; i<obj.length; i++){
                console.log("entrei");
                console.log(obj[i].grupo_nome);
                add(obj[i].grupo_nome, obj[i].grupo_id);
            } 
        }
            
            
    


    ajax.open("GET",'http://rest.learncode.academy/api/brenno3/groups',true);
    ajax.send();

}