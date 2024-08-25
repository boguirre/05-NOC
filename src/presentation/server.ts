import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service multiple";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.services";

const FsLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
);

const MongoLogRepository = new LogRepositoryImpl(
    new MongoLogDataSource(),
);

const PostgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
);


const emailService = new EmailService();


export class Server {

    public static async start() {
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

        // const logs = await LogRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);
        

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         new CheckServiceMultiple(
        //             [FsLogRepository, MongoLogRepository, PostgresLogRepository],
        //             () => console.log(`${ url } is ok`),
        //             ( error ) => console.log( error )
        //         ).execute(url);
        //         //new CheckService().execute('http://localhost:3000');
        //     }
        // );
    }
}