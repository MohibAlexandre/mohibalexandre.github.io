document.addEventListener("DOMContentLoaded", function() {
    function getWeightedRandom(weights) {
        const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
        const random = Math.random() * totalWeight;
        
        let cumulativeWeight = 0;
        for (let i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            if (random < cumulativeWeight) {
                return i; // Renvoie l'index correspondant à la case  
            }
        }
    }

    document.getElementById('spin-button').addEventListener('click', function() {
        const wheel = document.getElementById('wheel');
        const randomDegree = Math.floor(Math.random() * 360) + 3600; // 3600 pour faire plusieurs tours  
        wheel.style.transform = `rotate(${randomDegree}deg)`;
        
        // Définir les poids pour chaque case (par exemple, "1" a le double de chance)
        const weights = [2, 0, 1, 0, 1, 0]; // Total = 7, ici "1" a 2/7 de chance  
        const resultIndex = getWeightedRandom(weights); // Obtenir un index basé sur les poids
        
        // Calculer le résultat après un délai  
        setTimeout(() => {
            const resultValue = wheel.children[resultIndex].getAttribute('data-value');
            document.getElementById('result').innerText = `Résultat: ${resultValue}`;
        }, 4000); // 4 secondes pour correspondre à la durée de l'animation  
    });
});