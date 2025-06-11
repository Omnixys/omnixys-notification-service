/**
 * Seed-Daten für Nachrichtenvorlagen (Templates).
 */
export const templates = [
  // {
  //     type: 'USER_REGISTERED',
  //     name: ' Willkommen',
  //     subject: 'Willkommen bei GentleCorp, {{name}}!',
  //     body: 'Hallo {{name}},\n\nvielen Dank für deine Registrierung!',
  // },
  {
    type: 'PASSWORD_RESET',
    name: 'pass',
    subject: 'Setze dein Passwort zurück',
    body: 'Hallo {{name}},\n\nklicke hier, um dein Passwort zurückzusetzen: {{resetLink}}',
    isHtml: false,
  },
  {
    type: 'ORDER_CONFIRMATION',
    name: 'pass2',
    subject: 'Bestellbestätigung für {{orderNumber}}',
    body: 'Hallo {{name}},\n\ndeine Bestellung {{orderNumber}} wurde erfolgreich aufgenommen.',
    isHtml: false,
  },
  {
    type: 'INVOICE_READY',
    name: 'pass3',
    subject: 'Rechnung {{invoiceNumber}} ist verfügbar',
    body: 'Hallo {{name}},\n\ndu kannst deine Rechnung {{invoiceNumber}} jetzt herunterladen.',
    isHtml: false,
  },
  {
    type: 'USER_REGISTERED',
    name: 'welcome',
    subject: 'Willkommen bei GentleCorp, {{name}}!',
    body: `
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Hallo {{name}},</h2>
                <p>vielen Dank für deine Registrierung bei <strong>GentleCorp</strong>. Wir freuen uns, dich an Bord zu haben!</p>
                <p>Bei Fragen kannst du uns jederzeit kontaktieren.</p>
                <p>Mit besten Grüßen,<br>Dein GentleCorp-Team</p>
            </body>
        </html>
    `,
    placeholders: ['name'],
    isHtml: true,
  },
  {
    type: 'USER_CREATED_WITH_CART_AND_ACCOUNT',
    name: 'Benutzerregistrierung & Kontoerstellung',
    subject:
      'Willkommen bei GentleCorp, {{role}} {{firstName}} – Dein Konto ist bereit!',
    body: `
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Hallo {{lastName}} {{firstName}},</h2>
            <p>herzlich willkommen bei <strong>GentleCorp</strong>! Dein Benutzerkonto wurde erfolgreich erstellt.</p>

            <p>Folgende Informationen wurden für dich eingerichtet:</p>
            <ul>
                <li><strong>Benutzerkonto:</strong> {{customerId}}</li>
                <li><strong>Warenkorb:</strong> {{cartItemCount}} Artikel vorgemerkt</li>
                <li><strong>Bankkonto-ID:</strong> {{accountId}}</li>
            </ul>

            <p>Du kannst dich ab sofort anmelden, Produkte entdecken und deine Bestellungen bequem verwalten.</p>

            <p>Bei Fragen steht dir unser Support jederzeit gerne zur Verfügung.</p>

            <p>Mit besten Grüßen,<br>Dein GentleCorp-Team</p>
        </body>
    </html>
    `,
    placeholders: [
      'firstName',
      'lastName',
      'accountId',
      'cartItemCount',
      'role',
    ],
    isHtml: true,
  },
  {
    type: 'USER_DELETED_FULLY',
    name: 'Benutzer gelöscht',
    subject: 'Dein GentleCorp-Konto wurde gelöscht – Wir verabschieden uns',
    body: `
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Hallo {{lastName}} {{firstName}},</h2>
            <p>wir bestätigen hiermit, dass dein Konto bei <strong>GentleCorp</strong> am {{deletionDate}} vollständig gelöscht wurde.</p>

            <p>Folgende Informationen wurden entfernt:</p>
            <ul>
                <li>Dein Benutzerkonto</li>
                <li>Dein Warenkorb ({{cartItemCount}} Artikel)</li>
                <li>Dein verknüpftes Bankkonto</li>
            </ul>

            <p>Es tut uns leid, dich zu verlieren. Wenn du es dir anders überlegst, bist du jederzeit herzlich willkommen zurückzukehren.</p>

            <p>Mit freundlichen Grüßen,<br>Dein GentleCorp-Team</p>
        </body>
    </html>
    `,
    placeholders: ['firstName', 'lastName', 'deletionDate', 'cartItemCount'],
    isHtml: true,
  },
];
