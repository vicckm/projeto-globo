const admin = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <link rel="stylesheet" href="../static/css/admin.css">
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
            <title> Porcentagem - Admin </title>
            <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript">
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                ['Participante', 'Número de votos'],
                ['Bob',     33],
                ['Capitão',      15],
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
        </head>
        <body>
            <h1 > Resultado Parcial </h1>
            <div class="participantes">
                <div class="participante1">
                    <img class="part" src="https://bit.ly/3jKVint">
                    <p>Bob Esponja</p>
                </div>
                <div id="donutchart" style="width: 500px; height: 400px;"></div>
                <div class="participante2">
                    <img class="part" src="https://bit.ly/30MHxxc">
                    <p>Popeye</p>
                </div>
            </div>
        </body>
    </html>
`

module.exports = admin;