class Project{
    #name
    #version
    #tags
    #date
    #gitURL
    constructor(_name,_version,_date = undefined,_optional = undefined,_gitURL = undefined){
        this.#name = _name;
        this.#version = _version;
        this.#gitURL = _gitURL;//new 
        this.#tags = [];
        this.#date = _date || getCurrentDate();
        this.optional =_optional;
    }
    //Setters
    setName(_name){
        this.#name = _name;
    }
    setTags(_tags){
        this.#tags = _tags;
    }
    setDate(_date){
        this.#date = _date;
    }
    setVersion(_version){
        this.#version = _version;
    }
    //Getters
    getName(){
        return this.#name;   
    } 
    getTags(){
        return this.#tags;   
    }
    getDate(){
        return this.#date;   
    }
    getVersion(){
        return this.#version;   
    }
    print(){
        console.log(`name : ${this.#name}`);
        console.log(`version : ${this.#version}`);
        console.log(`date : ${this.#date}`);
        console.log(`optional : ${this.optional}`);
    }
    JSONformat(){
        let obj = {};
        obj["name"] = this.#name;
        obj["version"] = this.#version;
        return checkValidFormat(JSON.stringify(obj));
    }
}
function getCurrentDate(){
    date = new Date();
    return `${date.getDate()}-${(date.getMonth()+1)%12}-${date.getFullYear()}`
}