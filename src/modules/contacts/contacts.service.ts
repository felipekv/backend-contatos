import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto, user_id: string) {
    const contact = new Contact();
    Object.assign(contact, {
      ...createContactDto,
    });
    await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        created_at: contact.created_at,
        user_id: user_id,
      },
    });
    return contact;
  }

  async findAll() {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }

  async findOne(id: string) {
    const contact = this.prisma.contact.findFirst({ where: { id } });
    if (!contact) {
      throw new NotFoundException('Contact not found.');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!findContact) {
      throw new NotFoundException('Contact not found.');
    }
    const updateContact = await this.prisma.contact.update({
      where: { id },
      data: { ...updateContactDto },
    });
    return updateContact;
  }

  async remove(id: string) {
    const findContact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!findContact) {
      throw new NotFoundException('Contact not found.');
    }
    await this.prisma.contact.delete({ where: { id } });
  }
}
