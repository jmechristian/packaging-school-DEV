import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
const REGION = 'us-east-1';
const creds = {
  accessKeyId: process.env.AWSACCESSKEYID,
  secretAccessKey: process.env.AWSSECRETACCESSKEY,
};
// Create SES service object.
const sesClient = new SESClient({ region: REGION, credentials: creds });
export { sesClient };

export default async function handler(req, res) {
  const body = req.body;

  var myVar =
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '<title></title>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
    '<style type="text/css">' +
    '    /* FONTS */' +
    '    @media screen {' +
    '        @font-face {' +
    "          font-family: 'Lato';" +
    '          font-style: normal;' +
    '          font-weight: 400;' +
    "          src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');" +
    '        }' +
    '        ' +
    '        @font-face {' +
    "          font-family: 'Lato';" +
    '          font-style: normal;' +
    '          font-weight: 700;' +
    "          src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');" +
    '        }' +
    '        ' +
    '        @font-face {' +
    "          font-family: 'Lato';" +
    '          font-style: italic;' +
    '          font-weight: 400;' +
    "          src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');" +
    '        }' +
    '        ' +
    '        @font-face {' +
    "          font-family: 'Lato';" +
    '          font-style: italic;' +
    '          font-weight: 700;' +
    "          src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');" +
    '        }' +
    '    }' +
    '    ' +
    '    /* CLIENT-SPECIFIC STYLES */' +
    '    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }' +
    '    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }' +
    '    img { -ms-interpolation-mode: bicubic; }' +
    '' +
    '    /* RESET STYLES */' +
    '    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }' +
    '    table { border-collapse: collapse !important; }' +
    '    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }' +
    '' +
    '    /* iOS BLUE LINKS */' +
    '    a[x-apple-data-detectors] {' +
    '        color: inherit !important;' +
    '        text-decoration: none !important;' +
    '        font-size: inherit !important;' +
    '        font-family: inherit !important;' +
    '        font-weight: inherit !important;' +
    '        line-height: inherit !important;' +
    '    }' +
    '    ' +
    '    /* MOBILE STYLES */' +
    '    @media screen and (max-width:600px){' +
    '        h1 {' +
    '            font-size: 32px !important;' +
    '            line-height: 32px !important;' +
    '        }' +
    '    }' +
    '' +
    '    /* ANDROID CENTER FIX */' +
    '    div[style*="margin: 16px 0;"] { margin: 0 !important; }' +
    '</style>' +
    '</head>' +
    '<body style="background-color: #111; margin: 0 !important; padding: 0 !important;">' +
    '' +
    '<!-- HIDDEN PREHEADER TEXT -->' +
    '<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Lato\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">' +
    '    Certificate Application Start' +
    '</div>' +
    '' +
    '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
    '    <!-- LOGO -->' +
    '    <tr>' +
    '        <td bgcolor="#111" align="center">' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '            <tr>' +
    '            <td align="center" valign="top" width="600">' +
    '            <![endif]-->' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >' +
    '                <tr>' +
    '                    <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">' +
    '                        <a href="http://litmus.com" target="_blank">' +
    '                            <img alt="Logo" src="https://packschool.s3.amazonaws.com/PS_com+LOGO+1.png" width="150" height="auto" style="display: block; width: 150px; max-width: 150px; min-width: 40px; font-family: \'Lato\', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">' +
    '                        </a>' +
    '                    </td>' +
    '                </tr>' +
    '            </table>' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            </td>' +
    '            </tr>' +
    '            </table>' +
    '            <![endif]-->' +
    '        </td>' +
    '    </tr>' +
    '    <!-- HERO -->' +
    '    <tr>' +
    '        <td bgcolor="#111" align="center" style="padding: 0px 10px 0px 10px;">' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '            <tr>' +
    '            <td align="center" valign="top" width="600">' +
    '            <![endif]-->' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >' +
    '                <tr>' +
    '                    <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 32px; font-weight: 700; line-height: 44px;">' +
    `                      <h1 style="font-size: 40px; font-weight: 700; margin: 0;">${body.form} Application Start</h1>` +
    '                    </td>' +
    '                </tr>' +
    '            </table>' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            </td>' +
    '            </tr>' +
    '            </table>' +
    '            <![endif]-->' +
    '        </td>' +
    '    </tr>' +
    '    <!-- COPY BLOCK -->' +
    '    <tr>' +
    '        <td bgcolor="#111" align="center" style="padding: 0px 10px 0px 10px;">' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '            <tr>' +
    '            <td align="center" valign="top" width="600">' +
    '            <![endif]-->' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >' +
    '              <!-- COPY -->' +
    '              <tr>' +
    '                <td bgcolor="#ffffff" style="padding: 20px 30px 40px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >' +
    `                  <p style="margin: 0;">First Name: ${body.firstName} </p>` +
    `                    <p style="margin: 0;">last Name: ${body.lastName}</p>` +
    `                     <p style="margin: 0;">Email: ${body.email}</p>` +
    `                    <p style="margin: 0;">Phone: ${body.phone}</p>` +
    '                    <div style="height:40px;"></div>' +
    '                </td>' +
    '              </tr>' +
    '              <!-- BULLETPROOF BUTTON -->' +
    '' +
    '              </tr>' +
    '            </table>' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            </td>' +
    '            </tr>' +
    '            </table>' +
    '            <![endif]-->' +
    '        </td>' +
    '    </tr>' +
    '    <!-- COPY CALLOUT -->' +
    '    <tr>' +
    '        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '            <tr>' +
    '            <td align="center" valign="top" width="600">' +
    '            <![endif]-->' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >' +
    '                <!-- HEADLINE -->' +
    '                <tr>' +
    '                  ' +
    '                </tr>' +
    '                <!-- COPY -->' +
    '                <tr>' +
    '                  ' +
    '                </tr>' +
    '                <!-- COPY -->' +
    '                <tr>' +
    '                  ' +
    '                </tr>' +
    '            </table>' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            </td>' +
    '            </tr>' +
    '            </table>' +
    '            <![endif]-->' +
    '        </td>' +
    '    </tr>' +
    '    <!-- SUPPORT CALLOUT -->' +
    '    <tr>' +
    '        <td bgcolor="#111" align="center" style="padding: 30px 10px 0px 10px;">' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">' +
    '            <tr>' +
    '            <td align="center" valign="top" width="600">' +
    '            <![endif]-->' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" >' +
    '                <!-- HEADLINE -->' +
    '                <tr>' +
    '                  ' +
    '                </tr>' +
    '            </table>' +
    '            <!--[if (gte mso 9)|(IE)]>' +
    '            </td>' +
    '            </tr>' +
    '            </table>' +
    '            <![endif]-->' +
    '        </td>' +
    '    </tr>' +
    '    <!-- FOOTER -->' +
    '' +
    '</table>' +
    '' +
    '</body>' +
    '</html>';

  const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [toAddress, 'info@packagingschool.com'],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Data: myVar,
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'TEXT_FORMAT_BODY',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `${body.form} Application Start`,
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };

  try {
    await sesClient.send(
      createSendEmailCommand(
        'jamie@packagingschool.com',
        'jamie@packagingschool.com'
      )
    );

    return res.status(200).json({ message: 'Success' + res });
  } catch (error) {
    console.log(error);
    return res.status(410).json({ message: error + 'error' });
  }
}
