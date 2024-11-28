import nodemailer from 'nodemailer';

export class EmailService {
	transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	async sendRecoveryMail(recipient: string): Promise<void> {
		await this.transport.sendMail({
			from: `Support <${process.env.EMAIL}>`,
			to: recipient,
			subject: 'Link for password recovery',
			html: this.generateRecoveryEmail(
				`${process.env.MAIL_LINK}/recover-password`,
			),
		});
	}

	async sendVerificationMail(email: string, token: string): Promise<void> {
		this.transport.sendMail({
			from: `Support <${process.env.EMAIL}>`,
			to: email,
			subject: 'Link for verification',
			html: this.generateVerificationEmail(
				`${process.env.MAIL_LINK}/verification?verificationToken=${token}`,
			),
		});
	}

	generateVerificationEmail(link: string): string {
		return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Email Verification</h2>
      <p>Thank you for registering. To verify your email address, please click the link below:</p>
      <a href="${link}"
        style="display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;">
        Verify Email
      </a>
      <p>If you did not register on our site, please ignore this email.</p>
      <br>
      <p>Best regards,<br>Support Team</p>
    </div>
    `;
	}

	generateRecoveryEmail(link: string): string {
		return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Password Recovery</h2>
      <p>To recover your password, please click the link below:</p>
      <a href="${link}"
        style="display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;">
        Recover Password
      </a>
      <p>If you did not request a password reset, please ignore this email.</p>
      <br>
      <p>Best regards,<br>Support Team</p>
    </div>
    `;
	}
}
