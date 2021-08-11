export default function problem1(inventory){
    let carID=33;
    const car=inventory[carID-1];
    const carDetails=`Car 33 is ${car.car_year} ${car.car_make} ${car.car_model}`;
    return carDetails;
}


// export default { problem1 };

//console.log(carDetails);