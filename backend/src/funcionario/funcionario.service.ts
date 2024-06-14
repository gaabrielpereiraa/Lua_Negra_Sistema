import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFuncionarioDto) {
    const funcionarioCriado = await this.prisma.funcionario.create( { data } );
    return funcionarioCriado;
  }

  async findAll() {
    const funcionarios = await this.prisma.funcionario.findMany();
    return funcionarios;
  }

  async findOne(id: number) {
    const funcionario = await this.prisma.funcionario.findUnique({ where: { id } });
    return funcionario;
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    const funcionarioAtualizado = await this.prisma.funcionario.update({
      where: {id}, 
      data: updateFuncionarioDto
    });
    return funcionarioAtualizado;
  }

  async remove(id: number) {
    await this.prisma.funcionario.delete({ where:{ id } });  
    return 'Funcionário removido com sucesso!';
  }
}
