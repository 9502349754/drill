export default function problem4(inventory){
    var model=[];
    for(let i=0;i<inventory.length;i++){
        model.push(inventory[i].car_year);
    }
    return model;
}



