function generateJSON(){
    
}

function checkValidFormat(Obj){
    let requiredProperty = ["name","version"];
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
 