var carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];

console.log(carreritas);

carreritas.splice(0, 2, "Lucia", "Roberto", "Andrea"); //Andrea adelanta a Maria

carreritas.splice(5, 1);

carreritas.pop(); // Jose es descalificado

carreritas.shift();

carreritas.unshift("Lucia", "Cristobal", "Fernanda", "Armando"); //Detras de Lucia y antes de Roberto se clasifican tres nuevos corredores

carreritas.unshift("Federico");

carreritas.forEach(function(element,index,array){
    console.log(index+1, element);
});