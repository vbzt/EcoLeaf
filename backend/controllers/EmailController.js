const { sendMail } = require('../helpers/send-email')

class EmailController {
  static async sendEmail(req, res) {
    const { email } = req.body
    if (!email || email.trim() === "") {
      return res.status(422).json({ message: "O email é obrigatório!" })
    }

    const htmlMessage = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'DM Sans', sans-serif;
            color: #333333;
            background-color: #F0F8F5;
            padding: 0;
            margin: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #FFFFFF;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background-color: #1c995f;
            padding: 20px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            color: #FFFFFF;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
            line-height: 1.6;
            color: #333333;
          }
          .content h2 {
            color: #1c995f;
            font-size: 20px;
          }
          .content p {
            margin: 10px 0;
          }
          .button-container {
            text-align: center;
            margin: 20px 0;
          }
          .button {
            background-color: #1c995f;
            color: #FFFFFF;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
          }
          .footer {
            text-align: center;
            color: #666666;
            font-size: 12px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Obrigado por fazer parte da EcoLeaf!</h1>
          </div>
          <div class="content">
            <h2>Olá!</h2>
            <p>Em nome de toda a equipe da EcoLeaf, queremos expressar nossa profunda gratidão por seu interesse em nossa iniciativa. Estamos muito felizes por você ter decidido conhecer nosso projeto!</p>
            <p>Nossa missão é oferecer recomendações personalizadas de plantas que se adaptam às condições do seu ambiente, para que você possa cuidar delas da melhor maneira possível. Queremos que seu espaço verde prospere!</p>
            <div class="button-container">
              <a href="https://ecoleaf.com" class="button">Visite nosso site</a>
            </div>
            <p>Se você tiver qualquer dúvida ou precisar de ajuda, não hesite em entrar em contato conosco. Estamos aqui para ajudar você a construir e cuidar do seu próprio oásis verde!</p>
            <p>Mais uma vez, obrigado por fazer parte da nossa comunidade. Estamos ansiosos para ver como podemos crescer juntos!</p>
            <p>Com gratidão,<br>A equipe EcoLeaf</p>
          </div>
          <div class="footer">
            <p>© 2024 EcoLeaf - Todos os direitos reservados.</p>
            <p>Você está recebendo este e-mail porque se inscreveu no EcoLeaf. Se deseja parar de receber nossos e-mails, <a href="#">clique aqui para se descadastrar</a>.</p>
          </div>
        </div>
      </body>
      </html>
    `

    try {
      await sendMail(
        email,
        'Contato EcoLeaf',
        htmlMessage
      )
      res.status(200).json({ message: 'Email enviado com sucesso!', email })
    } catch (error) {
      res.status(500).json({ message: 'Falha ao enviar o email', error })
    }
  }
}

module.exports = EmailController
