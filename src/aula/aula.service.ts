/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AulaService {
 
    getStart(): string {
        return "Inicio da aula"
  }
}
