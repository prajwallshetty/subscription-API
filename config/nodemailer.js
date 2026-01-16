import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env';
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'prajwal@ajiet.edu.in',
        pass: EMAIL_PASSWORD,
    },
});