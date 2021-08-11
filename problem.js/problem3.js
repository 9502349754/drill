export default function problem3(inventory){
    var model=[];
    for(let i=0;i<inventory.length;i++){
        let flag=0;
        for(let j=0;j<model.length;j++){
            if(inventory[i].car_model===model[j]){
                flag=1;
                break;
            }
        }
        if(flag==0){
            model.push(inventory[i].car_model);
        }
    }
    
    model.sort();
    return model;
}

//console.log(model);
