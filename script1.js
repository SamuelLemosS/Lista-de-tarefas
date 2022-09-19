
    var input=document.getElementById("input");
    var inserir=document.getElementById("inserir");
    var h3=document.getElementById("h3");
    var ul=document.getElementById("ul");
    var item = document.getElementsByTagName("li");
    var tarefas=[];
    var nremove=[];

    function inputLength(){
        return input.value.length;
    }

    const adicionar = () => {
        const tarefa=input.value;
        tarefas.push({descricao:tarefa,feita:false});
        console.log(tarefas);

        var check= document.createElement("input");
        check.setAttribute("type","checkbox");
        check.setAttribute("value","false");
        check.addEventListener("click",feito);

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(tarefa));
        console.log(li);
        ul.appendChild(li);
        input.value=""; 
        li.addEventListener("click",remove);

        var dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("Remover"));
        li.appendChild(dBtn);
        dBtn.addEventListener("click",remove);
    };

    const remove = () =>{
        li.removeChild(items[0]);
    };

    const feito = () =>{
        
    };

    inserir.addEventListener("click",addListAfterClick);

    function addListAfterClick(){
        if (inputLength() > 0){
            adicionar();
        }
    }
