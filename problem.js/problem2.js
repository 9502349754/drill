export default function problem2(inventory){
    const lastCar=inventory.pop();
    const carDetail=`Last car is a ${lastCar.car_make} ${lastCar.car_model}`
    return carDetail;
}






//"Last car is a *car make goes here* *car model goes here*"
