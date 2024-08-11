import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.services";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
);

const emailService = new EmailService();


export class Server {

    static start() {
        console.log('Server started...');

        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute(
        //     ['boguirre@gmail.com']
        // )

        // const emailService = new EmailService(
        //     fileSystemLogRepository
        // );

        // emailService.sendEmailWithFileSystemLogs(['boguirre@gmail.com']);

        // emailService.sendEmail({
        //     to: 'boguirre@gmail.com',
        //     subject: 'Logs del sistema',
        //     htmlBody: `
        //     <h3>Logs del sistema - NOC </h3>
        //     <p>Lorem ipsun</p>
        //     <p>ver logs adjunots</p>
        //     `
        // })

        

        // const url = 'https://google.com';

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${ url } is ok`),
        //             ( error ) => console.log( error )
        //         ).execute(url);
        //         //new CheckService().execute('http://localhost:3000');
        //     }
        // );
    }
}