function generateJSON(){
    
}

function checkValidFormat(Obj){
    let requiredProperty = ["name","tag","version"];
    try {
        let obj = JSON.parse(Obj);
    }
    catch(err) {
        console.error("not valid json format");
        return false;
    }
    for(let i = 0;i < property.length;i++){
        if(!obj.hasOwnProperty(requiredProperty[i])){
            return false;
        }
    }
    return true;
}
 