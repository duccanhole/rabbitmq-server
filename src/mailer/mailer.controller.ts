import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {
  @EventPattern('note_created')
  onNoteCreated(@Payload() data: string, @Ctx() ctx: RmqContext) {
    console.log('new note created at ' + new Date().toLocaleString())
    console.log(ctx.getMessage());
  };

  @EventPattern('note_updated')
  onNoteUpdated(data) {
    console.log('a note was updated at ' + new Date().toLocaleString())
    console.log(data)
  };

  @EventPattern('note_removed')
  onNoteRemoved(data) {
    console.log(`a note with id ${data._id} was removed ${new Date().toLocaleString()}`)
  }
}
