function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const PerChairWood = 3 * chairQuantity;
    const PerTableWood = 10 * tableQuantity;
    const PerBedWood =50 * bedQuantity;
    // console.log(PerChairWood, PerTableWood, PerBedWood);

    const chairWood = chairQuantity * PerChairWood;
    const tableWood = tableQuantity * PerTableWood;
    const bedWood = bedQuantity * PerBedWood;
   
    const totalWoodSize = chairWood + tableWood + bedWood;
    // console.log('Wood element', chairWood , tableWood, bedWood  , 'totol wood', totalWoodSize)
    return totalWoodSize;

}
const totalWood = woodCalculator(1,1,1);
console.log(totalWood);