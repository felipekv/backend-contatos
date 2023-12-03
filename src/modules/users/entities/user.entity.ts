import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  readonly created_at: Date;
  name: string;
  email: string;

  @Exclude()
  password: string;

  phone: string;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
