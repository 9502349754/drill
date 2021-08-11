export default function problem5(modelName,inventory){
    let dumpCar=[];
    let k=0;
    for(let i=0;i<modelName.length;i++){
        if(modelName[i]<2000){
            dumpCar.push(inventory[i].car_model);
            k++;
        }
    }
    return {dumpCar,k};
}
