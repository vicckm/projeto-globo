const admin = (part1, part2) => {
    return `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
            <title> Parcial de Votos </title>
            <style>
            body {
                background:#d2fafb;
            }
            
            .titulo {
                text-align:center; 
                font-family:'Bangers',cursive; 
                font-size:50px; 
                color:#6bc5d2;
            }
            
            .participantes {
                display:flex; 
                flex-wrap:wrap;
                justify-content:center
            }
            
            .personagem {
                width: 300px; 
                height: 300px; 
                object-fit:cover; 
                border-radius:50%;
            }
            
            p {
                text-align:center; 
                font-family:'Bangers',cursive; 
                font-size:20px;
            }
            
            </style>
        </head>
        <body>
            <h1 class="titulo"> Resultado Parcial </h1>
            <div class="participantes">
                <div class="participante1"> 
                    <img class="personagem" src="https://bit.ly/3jKVint">
                    <p>Bob Esponja</p>
                </div>
                <div id="donutchart" style="width: 500px; height: 400px;"></div>
                <div class="participante2">
                    <img class="personagem" src="https://bit.ly/30MHxxc">
                    <p>Popeye</p>
                </div>
                </div>
            </div>
            <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript">
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                ['Participante', 'Número de votos'],
                ['Bob',     ${part1}],
                ['Popeye',  ${part2}],
                ]);

                var options = {
                pieHole: 0.4,
                colors: ['#b5525c', '#105e62'],
                fontName: 'Bangers',
                backgroundColor: '#d2fafb',
                chartArea:{left:90, top:10, width:'100%',height:'100%'},
                legend:{alignment:'end'},
                pieSliceTextStyle: {fontSize: 20},
                tooltip: {text:'value', textStyle:{fontSize: 15}}
                };

                var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
                chart.draw(data, options);
            }
            </script>
        </body>
    </html>
`;
};

module.exports = admin;
