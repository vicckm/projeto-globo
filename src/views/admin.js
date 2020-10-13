const admin = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <link type='text/css' href="">
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
        <body style="background:#d2fafb">
            <h1 style="text-align:center; font-family:'Bangers',cursive; font-size:50px; color:#6bc5d2;"> Resultado Parcial </h1>
            <div class="participantes" style="display:flex; justify-content:center">
                <div class="participante1">
                    <img class="part" style="width: 300px; height: 300px; object-fit:cover; border-radius:50%;" src="https://bit.ly/3jKVint">
                    <p style="text-align:center; font-family:'Bangers',cursive; font-size:20px">Bob Esponja</p>
                    </div>
                <div id="donutchart" style="width: 500px; height: 400px;"></div>
                <div class="participante2">
                    <img class="part" style="width: 300px; height: 300px; object-fit:cover; border-radius:50%;" src="https://bit.ly/34Fa6xs">
                    <p style="text-align:center; font-family:'Bangers',cursive; font-size:20px">Capitão Gancho</p>
                    </div>
            </div>
        </body>
    </html>
`

module.exports = admin;