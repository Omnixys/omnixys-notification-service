import { Injectable, OnModuleInit } from '@nestjs/common';
import { templates } from './templates.js';
import { TemplateWriteService } from '../../template/services/template-write.service.js';
import { TemplateReadService } from '../../template/services/template-read.service.js';

/**
 * Initialisiert Standard-Templates für Benachrichtigungen, wenn sie noch nicht vorhanden sind.
 * Wird automatisch beim Modulstart ausgeführt.
 */
@Injectable()
export class TemplateSeederService implements OnModuleInit {
  readonly #templateReadService: TemplateReadService;
  readonly #templateWriteService: TemplateWriteService;

  constructor(
    templateReadService: TemplateReadService,
    templateWriteService: TemplateWriteService,
  ) {
    this.#templateReadService = templateReadService;
    this.#templateWriteService = templateWriteService;
  }

  async onModuleInit(): Promise<void> {
    console.log('🚀 TemplateSeederService gestartet');
    await this.#seedTemplates();
  }

  /**
   * Legt Demo-Templates an, falls noch nicht vorhanden.
   */
  async #seedTemplates(): Promise<void> {
    for (const template of templates) {
      const exists = await this.#templateReadService.findByType(template.type);
      if (!exists) {
        await this.#templateWriteService.createTemplate(template);
      }
    }
  }
}
