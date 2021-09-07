app.get("/sendmail", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "mitovCoding@outlook.com",
      pass: "Z4CWxajuW7V4wVG",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: "mitovCoding@outlook.com",
    to: "metodija_mitovski@hotmail.com",
    subject: "sending email with nodejs",
    text: "send new email from nodejs",
  };

  transporter.sendMail(options, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data.response);
  });
});
