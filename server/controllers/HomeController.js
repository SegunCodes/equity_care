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
        to: 'equitycaregloballtd@gmail.com',
        subject: 'New Details',
        html: `
            <p>First Name: ${fname}</p>
            <p>Last Name: ${lname}</p>
            <p>EMail: ${email}</p>
            <p>Message: ${message}</p>
        `,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.render('contact', {
            title: 'Error',
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
