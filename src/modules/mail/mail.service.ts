import { Injectable } from '@nestjs/common';
import { Message } from './entities';
import { ConfigService } from '@nestjs/config';

//const sendGridClient = require('@sendgrid/mail');

@Injectable()
export class MailService {
  constructor(private configService: ConfigService) {
   // const SENDGRID_API_KEY = configService.get<string>('SENDGRID_API_KEY');
    //sendGridClient.setApiKey(SENDGRID_API_KEY);
  }

  public async sendMail(msg: Message) {
   // await sendGridClient.send(msg);
    //console.log(`Sent email to ${msg.to}`);
  }
}
