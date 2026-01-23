<!doctype html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Novo contato</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 24px 0;">
            <tr>
                <td align="center">
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; font-family: Arial, Helvetica, sans-serif;">
                        <tr>
                            <td style="padding: 24px 28px; background-color: #111111; color: #ffffff;">
                                <h1 style="margin: 0; font-size: 20px; font-weight: 600;">Novo contato recebido</h1>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 24px 28px; color: #222222;">
                                <p style="margin: 0 0 12px;">Você recebeu uma nova mensagem pelo formulário do site.</p>
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 6px 0; font-weight: 600; width: 140px;">Nome:</td>
                                        <td style="padding: 6px 0;">{{ $data['nome'] ?? '-' }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0; font-weight: 600;">Email:</td>
                                        <td style="padding: 6px 0;">{{ $data['email'] ?? '-' }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0; font-weight: 600;">Telefone:</td>
                                        <td style="padding: 6px 0;">{{ $data['telefone'] ?? '-' }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0; font-weight: 600;">Empresa:</td>
                                        <td style="padding: 6px 0;">{{ $data['empresa'] ?? '-' }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0; font-weight: 600;">Interesse:</td>
                                        <td style="padding: 6px 0;">{{ $data['tipo_projeto'] ?? '-' }}</td>
                                    </tr>
                                </table>
                                <div style="margin-top: 20px;">
                                    <p style="margin: 0 0 6px; font-weight: 600;">Mensagem:</p>
                                    <p style="margin: 0; white-space: pre-line;">{{ $data['mensagem'] ?? '-' }}</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 16px 28px; background-color: #f0f0f0; color: #666666; font-size: 12px;">
                                Enviado automaticamente pelo site da BIIG.
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>

