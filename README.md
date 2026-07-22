# 🐾 AppVet

Sistema SaaS para gestão de clínicas veterinárias.

O AppVet foi desenvolvido para centralizar toda a operação da clínica veterinária em uma única plataforma, desde o cadastro do tutor até o histórico clínico completo do paciente, passando por agenda, estoque, financeiro, vacinas, internações, cirurgias, documentos e relatórios.

---

# Objetivos do Projeto

O objetivo principal é fornecer uma plataforma simples de utilizar, extremamente rápida e totalmente responsiva, permitindo que o médico veterinário consiga trabalhar tanto no computador quanto no celular durante um atendimento.

O sistema deve ser pensado como uma ferramenta de trabalho e não apenas como um cadastro de informações.

Toda decisão de desenvolvimento deverá priorizar:

- Rapidez
- Simplicidade
- Organização
- Experiência do usuário
- Baixo número de cliques
- Facilidade para uso em dispositivos móveis

---

# Fluxo Principal do Sistema

Todo o AppVet gira em torno do seguinte fluxo:

```

Cliente (Tutor)
↓
Paciente (Animal)
↓
Atendimento
↓
Prontuário
↓
Receitas
↓
Vacinas
↓
Cirurgias
↓
Internações
↓
Exames
↓
Financeiro

```

Todo registro clínico deverá estar vinculado ao paciente.

---

# Estrutura do Projeto

```

appvet/

│

├── index.html

├── login.html

│

├── app/

│ ├── clientes.html

│ ├── cliente.html

│ ├── animais.html

│ ├── animal.html

│ ├── atendimentos.html

│ ├── atendimento.html

│ ├── agenda.html

│ ├── vacinas.html

│ ├── estoque.html

│ ├── fornecedores.html

│ ├── financeiro.html

│ ├── internacoes.html

│ ├── cirurgias.html

│ ├── documentos.html

│ ├── relatorios.html

│ ├── configuracoes.html

│

├── menu/

│ ├── menu.html

│

├── components/

│ ├── footer.html

│

├── css/

├── js/

├── assets/

├── firebase/

└── docs/

```

---

# Funcionalidade de cada página

## Dashboard (index.html)

Página inicial do sistema.

Responsável por apresentar:

- Resumo geral
- Agenda do dia
- Agenda dos próximos sete dias
- Próximos retornos
- Próximas vacinas
- Produtos próximos da validade
- Internações ativas
- Últimos atendimentos
- Indicadores financeiros

Também será o principal ponto de entrada para:

- Novo Atendimento
- Novo Cliente
- Novo Paciente

---

## Clientes

Lista completa dos tutores cadastrados.

Funções:

- Buscar
- Filtrar
- Paginar
- Editar
- Excluir
- Novo Cliente

Cada cliente abre:

cliente.html

---

## Cliente

Cadastro completo do tutor.

Informações:

- Nome
- CPF
- RG
- Data nascimento
- Sexo
- Telefones
- WhatsApp
- Email
- Endereço
- Cidade
- Estado
- CEP
- Dados bancários
- Observações

Também exibe:

- Animais vinculados
- Histórico financeiro
- Últimos atendimentos

---

## Pacientes (animais.html)

Lista de todos os animais cadastrados.

Funcionalidades:

- Busca
- Paginação (10 registros)
- Ordenação alfabética
- Cadastro rápido
- Cadastro completo

Filtros:

- Espécie
- Raça
- Cidade
- Tutor
- Sexo
- Castrado
- Status

---

## Animal (animal.html)

Esta é a página mais importante do sistema.

Ela funciona como a Central do Paciente.

Exibe:

- Foto
- Nome
- Tutor
- Espécie
- Raça
- Peso
- Idade
- Sexo
- Castrado
- Pelagem
- Microchip
- Alergias
- Doenças

Também apresenta acesso para:

- Novo Atendimento
- Prontuário
- Vacinas
- Medicações
- Cirurgias
- Internações
- Exames
- Documentos
- Histórico completo

Toda a vida do paciente deverá estar disponível nesta tela.

---

## Atendimentos

Lista de todos os atendimentos.

Filtros:

- Hoje
- Semana
- Período
- Veterinário
- Cliente
- Animal

---

## Atendimento

Página responsável pelo atendimento clínico.

Campos:

- Queixa principal
- Anamnese
- Exame físico
- Exames complementares
- Diagnóstico
- Tratamento
- Evolução
- Prescrição

Permite:

- Gerar Receita
- Gerar PDF
- Enviar WhatsApp
- Agendar retorno

---

## Agenda

Agenda diária.

Visualizações:

- Hoje
- Semana
- Mês

Status:

- Agendado
- Confirmado
- Em Atendimento
- Finalizado
- Cancelado
- Falta

---

## Vacinas

Controle completo das vacinas.

Permite:

- Aplicação
- Reforço
- Alertas
- Histórico

---

## Estoque

Cadastro de medicamentos.

Campos:

- Nome
- Categoria
- Fabricante
- Lote
- Validade
- Quantidade
- Valor compra
- Valor venda
- Localização

---

## Fornecedores

Cadastro completo.

Histórico de compras.

---

## Financeiro

Entradas

Saídas

Fluxo de Caixa

Contas

Comissões

Relatórios

---

## Internações

Controle completo.

Permite registrar:

- Evolução diária
- Alimentação
- Medicação
- Alta

---

## Cirurgias

Controle cirúrgico.

Inclui:

- Pré-operatório
- Procedimento
- Pós-operatório

---

## Documentos

Upload de:

- PDF
- Imagens
- Raio X
- Ultrassom
- Exames laboratoriais

---

## Relatórios

Relatórios do sistema.

Incluindo:

- Financeiro
- Clientes
- Pacientes
- Vacinas
- Estoque
- Agenda
- Atendimentos

---

## Configurações

Dados da clínica

Usuários

Permissões

Assinaturas

Modelos de Receitas

Protocolos

Espécies

Raças

Vacinas

---

# Padrão Visual

Todo o sistema deverá seguir rigorosamente:

- Fonte Inter
- Ícones Lucide
- Sem emojis
- Layout Mobile First
- Responsivo
- Rodapé padronizado
- Menu lateral responsivo
- Cards padronizados
- Botões padronizados
- Cores padronizadas

Paleta:

Verde Principal

```
#2D6A4F
```

Verde Secundário

```
#40916C
```

Fundo

```
#F1F5F9
```

Cards

```
#FFFFFF
```

---

# Regras Gerais

Todos os registros deverão possuir:

- Data criação
- Data alteração
- Usuário responsável

Nenhum atendimento poderá existir sem paciente.

Todo paciente deverá possuir histórico completo.

Todo documento deverá estar vinculado ao paciente.

---

# Checklist Geral

## Base

- [ ] Login
- [ ] Firebase
- [ ] Proteção de páginas
- [ ] Menu
- [ ] Footer
- [ ] Componentes

## Dashboard

- [ ] Estatísticas
- [ ] Agenda
- [ ] Alertas

## Clientes

- [ ] Cadastro
- [ ] Busca
- [ ] Paginação
- [ ] Filtros

## Pacientes

- [ ] Cadastro
- [ ] Central do Paciente

## Atendimento

- [ ] Prontuário
- [ ] Receita
- [ ] Evolução

## Agenda

- [ ] Agenda diária
- [ ] Agenda semanal
- [ ] Agenda mensal

## Vacinas

- [ ] Cadastro
- [ ] Aplicação
- [ ] Alertas

## Estoque

- [ ] Produtos
- [ ] Movimentações

## Financeiro

- [ ] Caixa
- [ ] Contas
- [ ] Relatórios

---

# Roadmap

## MVP

- Login
- Dashboard
- Clientes
- Pacientes
- Atendimento
- Agenda

## Versão 1.1

- Vacinas
- Estoque
- Financeiro

## Versão 1.2

- Internações
- Cirurgias
- Documentos
- Relatórios

---

# Desenvolvedor

**PRT Soluções**

Sistema desenvolvido para gestão profissional de clínicas veterinárias.
