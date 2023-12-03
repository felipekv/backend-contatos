import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  readonly created_at: Date;
  name: string;
  email: string;
  phone: string;
  user_id: string;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
