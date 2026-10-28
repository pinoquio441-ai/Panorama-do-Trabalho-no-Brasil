document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('trabalhoChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Ocupados Formais', 'Trabalhadores Informais', 'Desocupados (Desemprego)'],
            datasets: [{
                data: [52, 39, 9],
                backgroundColor: [
                    '#008037',
                    '#f39c12',
                    '#e74c3c'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Distribuição Simplificada da Força de Trabalho (%)'
                }
            }
        }
    });
});