# Contacts API
## **Softwares necessários para rodar a API**
- npm versão 10.2.4 ou superior
- node versão v20.5.0 ou superior
- postgresql versão 15.3 ou superior

### **Tecnologias utilizadas**
- Node.js
- Typescript
- Nest.js
- PrismaORM
- PostgreSQL
  
### **Instruções de uso:**
- Clone/baixe o repositório no seu dispositivo.
- Execute o comando "npm install" no seu terminal bash a partir do repositório.
- Crie uma database no postgre
- Copie o arquivo .env.example e cole na raiz do repositório apenas editando o nome para .env
- Altere os campos do .env com os respectivos dados de conexão da sua database criada no postgre
- Rode as migrações na database com o comando "npx prisma migrate dev"
- Após todas configurações, já é possível rodar a API, usando o comando "npm run start:dev" no terminal

### **Link da documentação das rotas da API (Só funcionará caso a API esteja rodando no dispositivo)**
[localhost:3000/api]
