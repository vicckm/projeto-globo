const admin = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <link rel="stylesheet" type='text/css' href="../public/css/admin.css">
            <title> Porcentagem - Admin </title>
            <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript">
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                ['Participante', 'Número de votos'],
                ['Participante 1',     33],
                ['Participante 2',      17],
                ]);

                var options = {
                pieHole: 0.4,
                colors: ['#b5525c', '#105e62'],
                fontName: 'Roboto'
                };

                var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
                chart.draw(data, options);
            }
            </script>
        </head>
        <body>
            <h1> Votação </h1>
            <div class="participantes">
                <div class="participante1">
                    <img src="https://bit.ly/3jKVint">
                </div>
                <div id="donutchart" style="width: 500px; height: 400px;"></div>
                <div class="participante2">
                    <img src="https://bit.ly/34Fa6xs">
                </div>
            </div>
        </body>
    </html>
`

module.exports = admin;