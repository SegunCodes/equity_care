const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    secure: false, // Use TLS (not SMTPS), so secure should be false
    tls: {
      rejectUnauthorized: false, // Allows self-signed certificates (only for development)
    },
  });



exports.homepage = async(req, res) =>{
    try {
        res.render('index', {title: 'Equitycare Global | Home'});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.aboutpage = async(req, res) =>{
    try {
        res.render('about', {title: 'Equitycare Global | About'});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.servicespage = async(req, res) =>{
    try {
        res.render('services', {title: 'Equitycare Global | Services'});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.faqpage = async(req, res) =>{
    try {
        res.render('faq', {title: 'Equitycare Global | FAQ'});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.contactpage = async(req, res) =>{
    try {
        res.render('contact', {title: 'Equitycare Global | Contact'});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.ratepage = async(req, res) =>{
    try {
        res.render('our-rates', {title: 'Equitycare Global | Our Rates'});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.getstartedpage = async(req, res) =>{
    try {
        res.render('get-started', {title: 'Equitycare Global | Get Started', error: ''});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.clientLogin = async(req, res) =>{
    try {
        const message = req.query.message || '';
        res.render('client-login', {title: 'Equitycare Global | Login', message, error: ''});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.caregiverLogin = async(req, res) =>{
    try {
        const message = req.query.message || '';
        res.render('caregiver-login', {title: 'Equitycare Global | Login', message, error: ''});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.adminLogin = async(req, res) =>{
    try {
        res.render('admin-login', {title: 'Equitycare Global | Login', error: ''});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.clientOtp = async(req, res) =>{
    try {
        const email = req.query.email || '';
        res.render('client-otp', {title: 'Equitycare Global | Verify OTP', email:email, error:''});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.caregiverOtp = async(req, res) =>{
    try {
        const email = req.query.email || '';
        res.render('caregiver-otp', {title: 'Equitycare Global | Verify OTP', email:email, error:''});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.adminOtp = async(req, res) =>{
    try {
        const email = req.query.email || '';
        res.render('admin-otp', {title: 'Equitycare Global | Verify OTP', email:email, error:''});
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      res.redirect('/');
    });
};

exports.reContact = async(req, res) =>{
    try {
        return res.redirect('contact');
    } catch (error) {
        res.status(500).send({message: error.message || "Error occured"});
    }
}

exports.sendMessage = async (req, res) => {
    try {
      const { fname, lname, email, message } = req.body;
  
      const mailOptions = {
        from: process.env.MAIL_USER,
        to: 'efeeloobenedict@gmail.com',//'equitycaregloballtd@gmail.com',
        subject: 'New Contact Message',
        html: `
        <table id="bodyTable" style="table-layout: fixed; background-color: #f9f9f9;" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td id="bodyCell" style="padding-right: 10px; padding-left: 10px;" align="center" valign="top">
        <table class="wrapperBody" style="max-width: 600px;" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td align="center" valign="top">
        <table class="tableCard" style="background-color: rgb(255, 255, 255); border-color: rgb(229, 229, 229); border-style: solid; border-width: 0px 1px 1px; height: 286.461px;" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr style="height: 3px;">
        <td class="topBorder" style="background-color: #eb4966; font-size: 1px; line-height: 3px; height: 3px;" height="3">&nbsp;</td>
        </tr>
        <tr style="height: 4.46094px;"></tr>
        <tr style="height: 86px;">
        <td class="mainTitle" style="padding: 150px 20px 5px; height: 86px;" align="center" valign="top">
        <h2 class="text" style="color: #000; font-family: Poppins,Helvetica,Arial,sans-serif; font-size: 28px; font-weight: 500; font-style: normal; letter-spacing: normal; line-height: 36px; text-transform: none; text-align: center; padding: 0; margin: 0;"><em><strong><span style="font-family: georgia, palatino, serif;">New Contact Message</span></strong></em></h2>
        <p>&nbsp;</p>
        </td>
        </tr>
        <tr style="height: 24px;">
        <td class="subTitle" style="padding-bottom: 30px; padding-left: 20px; padding-right: 20px; height: 24px;" align="center" valign="top">
        <h4 class="text" style="color: #999; font-family: Poppins,Helvetica,Arial,sans-serif; font-size: 16px; font-weight: 500; font-style: normal; letter-spacing: normal; line-height: 24px; text-transform: none; text-align: center; padding: 0; margin: 0;"><strong>A new message from '${fname + ' ' + lname}':</strong></h4>
        </td>
        </tr>
        <tr style="height: 149px;">
        <td class="containtTable ui-sortable" style="padding-left: 20px; padding-right: 20px; height: 149px;" align="center" valign="top">
        <table class="tableDescription" style="height: 61px; width: 99.2793%;" border="0" width="551" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td class="description" style="padding-bottom: 20px; width: 100%;" align="center" valign="top">
        <p class="text" style="color: #666; font-family: 'Open Sans',Helvetica,Arial,sans-serif; font-size: 14px; font-weight: 400; font-style: normal; letter-spacing: normal; line-height: 22px; text-transform: none; text-align: center; padding: 0; margin: 0;"><strong>${ message }</strong></p>
        </td>
        </tr>
        </tbody>
        </table>
        <table class="tableButton" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td style="padding-top: 20px; padding-bottom: 20px;" align="center" valign="top">
        <table border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
        <tr>
        <td class="ctaButton" style="background-color: #EB4966; padding: 12px 35px; border-radius: 50px;" align="center"><a class="text" style="color: #fff; font-family: Poppins,Helvetica,Arial,sans-serif; font-size: 13px; font-weight: 600; font-style: normal; letter-spacing: 1px; line-height: 20px; text-transform: uppercase; text-decoration: none; display: block;" href="mailto:${email}" target="_blank" rel="noopener">Reply</a></td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        <tr style="height: 20px;">
        <td style="font-size: 1px; line-height: 1px; height: 20px;" height="20">&nbsp;</td>
        </tr>
        </tbody>
        </table>
        <table class="space" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td style="font-size: 1px; line-height: 1px;" height="30">&nbsp;</td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table class="wrapperFooter" style="max-width: 600px;" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td align="center" valign="top">
        <table class="footer" border="0" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
        <td class="brandInfo" style="padding: 10px 10px 5px;" align="center" valign="top">
        <p class="text" style="color: #bbb; font-family: 'Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; font-style: normal; letter-spacing: normal; line-height: 20px; text-transform: none; text-align: center; padding: 0; margin: 0;">&copy;&nbsp;EquityCare Global</p>
        </td>
        </tr>
        <tr>
        <td class="footerLinks" style="padding: 0px 10px 20px;" align="center" valign="top">
        <p class="text" style="color: #bbb; font-family: 'Open Sans',Helvetica,Arial,sans-serif; font-size: 12px; font-weight: 400; font-style: normal; letter-spacing: normal; line-height: 20px; text-transform: none; text-align: center; padding: 0; margin: 0;"><a style="color: #bbb; text-decoration: underline;" href="#" target="_blank" rel="noopener">View Web Version </a>&nbsp;|&nbsp; <a style="color: #bbb; text-decoration: underline;" href="#" target="_blank" rel="noopener">Email Preferences </a>&nbsp;|&nbsp; <a style="color: #bbb; text-decoration: underline;" href="#" target="_blank" rel="noopener">Privacy Policy</a></p>
        </td>
        </tr>
        <tr>
        <td style="font-size: 1px; line-height: 1px;" height="30">&nbsp;</td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        <tr>
        <td style="font-size: 1px; line-height: 1px;" height="30">&nbsp;</td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        `,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          console.log(process.env.MAIL_USER);
          return res.render('contact', {
            title: 'Equitycare Global | Error',
            error: 'Failed to send Message',
          });
        } else {
         return res.render('contact', {
            title: 'Equitycare Global | Contact',
            message: 'Message sent successfully',
          });
        }
      });
    } catch (error) {
      // Render the HTML form with an error message
      return res.render('contact', {
        title: 'Error',
        error: error.message || 'Error occurred',
      });
    }
  };
