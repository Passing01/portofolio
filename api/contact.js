export default async function handler(req, res) {
  // Gérer la requête preflight (CORS) si l'API est appelée depuis un autre domaine
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Accepter uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  try {
    const { user_name, user_email, message } = req.body;

    if (!user_name || !user_email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'ouerahim456@gmail.com'; 

    if (!apiKey) {
      console.error("Erreur: Clé API Brevo manquante dans les variables d'environnement.");
      return res.status(500).json({ error: "Configuration serveur incomplète." });
    }

    // Préparation du payload pour Brevo
    // Documentation: https://developers.brevo.com/reference/sendtransacemail
    const payload = {
      sender: {
        name: user_name,
        email: user_email
      },
      to: [
        {
          email: recipientEmail,
          name: "Passing Abdoul Rahim OUEDRAOGO"
        }
      ],
      subject: `Nouveau message depuis le portfolio de ${user_name}`,
      htmlContent: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            
            <!-- Header -->
            <div style="background-color: #0ea5e9; padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Nouveau Message 🎉</h1>
              <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 14px;">Depuis le formulaire de votre Portfolio</p>
            </div>
            
            <!-- Body -->
            <div style="padding: 30px;">
              <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 15px; border-radius: 4px; margin-bottom: 25px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 60px;"><strong>Nom :</strong></td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${user_name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Email :</strong></td>
                    <td style="padding: 8px 0; color: #0ea5e9; font-size: 15px; font-weight: 600;">
                      <a href="mailto:${user_email}" style="color: #0ea5e9; text-decoration: none;">${user_email}</a>
                    </td>
                  </tr>
                </table>
              </div>
              
              <h3 style="color: #334155; font-size: 16px; margin-bottom: 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Contenu du message</h3>
              <div style="background-color: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; color: #475569; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">Ce message a été généré automatiquement par l'API Vercel de votre portfolio.</p>
            </div>
          </div>
        </div>
      `
    };

    // Appel à l'API de Brevo
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur Brevo:", errorData);
      return res.status(response.status).json({ error: "Erreur lors de l'envoi de l'email via Brevo.", details: errorData });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, message: 'Email envoyé avec succès', messageId: data.messageId });

  } catch (error) {
    console.error("Erreur inattendue API contact:", error);
    return res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
}
