let requiredProperty;

function generateJSON(){
    
}

function setRequiredProperty(property){
    requiredProperty = property;
}

function addRequiredProperty(propertys){
    if( !property instanceof Array)
    {
        requiredProperty.push(propertys);
    }else{
        for(let property of propertys)
        {
            requiredProperty.push(property);
        }
    }
    
}


function checkValidFormat(Obj){
    requiredProperty = ["name","version"];
    let obj;
    try {
        obj = JSON.parse(Obj);
        
    }
    catch(err) {
        console.error("not valid json format");
        return false;
    }
    for(let i = 0;i < requiredProperty.length;i++){
        if(!obj.hasOwnProperty(requiredProperty[i])){
            return false;
        }
    }
    return true;
}
 