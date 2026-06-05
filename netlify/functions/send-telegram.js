exports.handler = async (event) => {
  const { name, inn, phone, email, messenger, sum, term } = JSON.parse(event.body);

  const BOT_TOKEN = "8014133388:AAGYEJa9XWEEJtcZt62-bqufvye23Dx8KTI";
  const CHAT_ID = "8707679315";

  const message = 
    `🚀 *Новая заявка CRED BRO*\n\n` +
    `👤 ФИО: ${name}\n` +
    `📌 ИНН: ${inn}\n` +
    `📱 Телефон: ${phone}\n` +
    `✉️ Email: ${email}\n` +
    `💬 Мессенджер: ${messenger}\n` +
    `💰 Сумма: ${sum}\n` +
    `⏳ Срок: ${term}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: data.ok })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false })
    };
  }
};
