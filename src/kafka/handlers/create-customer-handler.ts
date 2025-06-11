import { Injectable } from '@nestjs/common';
import { KafkaEventHandler } from '../interface/kafka-event.interface.js';
import { KafkaEvent } from '../decorators/kafka-event.decorator.js';
import { getLogger } from '../../logger/logger.js';
import { KafkaTopics } from '../kafka-topic.properties.js';
import { MailerService } from '../../notification/services/mailer.service.js';
import { SendMailDTO } from '../../template/models/events/send.event.js';

@KafkaEvent(KafkaTopics.customer.customerCreated)
@Injectable()
export class CreateCustomerHandler implements KafkaEventHandler {
  readonly #notificationWriteService: MailerService;
  readonly #logger = getLogger(CreateCustomerHandler.name);

  constructor(mailerService: MailerService) {
    this.#notificationWriteService = mailerService;
  }

  async handle(data: SendMailDTO): Promise<void> {
    this.#logger.debug('CreateShoppingCartHandler: data=%o', data);

    await this.#notificationWriteService.sendMailUsingTemplate(
      'USER_CREATED_WITH_CART_AND_ACCOUNT',
      data.email,
      data.placeholders,
    );
  }
}
