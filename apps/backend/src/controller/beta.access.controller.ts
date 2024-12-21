import { Request, Response } from 'express';
import User from '../models/beta.user.model';
import emailService from '../service/mailer';

class BetaAccessController {
  async createBetaAccess(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        if (user.betaAccess) {
          return res
            .status(400)
            .json({ message: 'Email already granted beta access.' });
        } else {
          await user.save();
          return res
            .status(200)
            .json({ message: 'Beta access granted to existing user.' });
        }
      }

      user = new User({ email, betaAccess: false });
      await user.save();

      const subject = 'Beta Access Request Under Review';
      const html = `
       <p>Thank you for requesting beta access. Your request is under review.</p>
       <p>We will notify you once your access has been approved.</p>
     `;
      await emailService.sendEmail({
        to: email,
        subject,
        html,
      });

      return res.status(201).json({
        message: 'Beta access granted. A confirmation email has been sent.',
      });
    } catch (err) {
      console.error('Error in creating beta access:', err);
      return res
        .status(500)
        .json({ message: 'Server error. Please try again later.' });
    }
  }

  async getBetaAccessStatus(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found.' });

      return res
        .status(200)
        .json({ email: user.email, betaAccess: user.betaAccess });
    } catch (err) {
      console.error('Error fetching user beta access status:', err);
      return res
        .status(500)
        .json({ message: 'Server error. Please try again later.' });
    }
  }

  async updateBetaAccess(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;
    const { betaAccess } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found.' });

      user.betaAccess = betaAccess;
      await user.save();

      return res
        .status(200)
        .json({ message: 'Beta access updated successfully.' });
    } catch (err) {
      console.error('Error updating beta access:', err);
      return res
        .status(500)
        .json({ message: 'Server error. Please try again later.' });
    }
  }

  async deleteBetaAccess(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found.' });

      user.betaAccess = false;
      await user.save();

      return res
        .status(200)
        .json({ message: 'Beta access revoked successfully.' });
    } catch (err) {
      console.error('Error deleting beta access:', err);
      return res
        .status(500)
        .json({ message: 'Server error. Please try again later.' });
    }
  }
}

export default new BetaAccessController();
