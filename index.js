const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//returns single aggregate of all items in the list
const initialValue = 0
const totalBatteries = batteryBatches.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
)
