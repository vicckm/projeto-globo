const page = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Paredão BBB</title>
        </head>
        <body>
            <form action="/votacao" method="POST">
                <label for="participanteUm"><img src="../static/img/img1.jpg" alt="Foto do participante 1"></label>
                <input type="radio" id="participanteUm" name="participante" value="participanteUm">

                <label for="participanteDois"><img src="../static/img/img2.jpeg" alt="Foto do participante 2"></label>
                <input type="radio" id="participanteDois" name="participante"  value="participanteDois">

                <button type="submit">Votar</button>
            </form>
        </body>
        </html>
`

module.exports = page;