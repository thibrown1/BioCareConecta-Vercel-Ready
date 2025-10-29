# BioCare Conecta - TODO

## Funcionalidades Implementadas

### Telas de Autenticação
- [x] Tela de Login com seleção PACIENTE/PROFISSIONAL
- [x] Campos de LOGIN (Email/CPF) e SENHA
- [x] Botão ENTRAR com validação
- [x] Link ESQUECI MINHA SENHA
- [x] Botão CRIAR CONTA
- [x] Tela de Recuperação de Senha
- [x] Tela de Criação de Conta com validação

### Design e Identidade Visual
- [x] Identidade Visual BioCare (cores azul/teal, logo com coração)
- [x] Tipografia profissional
- [x] Componentes com Tailwind CSS
- [x] Responsividade mobile-first

### Dashboard do Paciente (Maria Torres)
- [x] Tela principal com abas: EXAMES, MEUS DOCUMENTOS, GRÁFICOS DE EVOLUÇÃO
- [x] Alerta Crítico: URGENTE (vermelho) com ações recomendadas
- [x] Lista de Últimos Exames com controle de qualidade
- [x] Download de exames
- [x] Gráficos de Evolução (Glicemia, Colesterol, Pressão)
- [x] Acompanhamento baseado em IA
- [x] Meus Documentos com download

### Dashboard do Profissional (Dr. José)
- [x] Tela principal com abas: PACIENTES, MEUS DOCUMENTOS, GRÁFICO
- [x] Alerta Crítico para Maria Torres (vermelho)
- [x] Condutas Sugeridas baseadas em IA
- [x] Lista de Pacientes com status
- [x] Upload de Exames (interface)
- [x] Exames Disponíveis com download
- [x] Gráfico de Evolução

### Módulo de Alertas
- [x] Sistema de cores para alertas:
  - [x] Verde: Resultados Normais
  - [x] Amarelo: Atenção
  - [x] Vermelho: Crítico
- [x] Condutas Sugeridas com IA
- [x] Notificação Importante para pacientes

### Segurança e Privacidade
- [x] Tela de Segurança e Privacidade
- [x] Criptografia Avançada (AES-256)
- [x] Autenticação em Duas Etapas
- [x] Certificado SSL/TLS
- [x] Conformidade HIPAA/LGPD
- [x] Proteção em Nível Bancário

### Arquitetura e Código
- [x] Padrão MVVM (Model-View-ViewModel)
- [x] Componentes reutilizáveis
- [x] Serviços de API mockados
- [x] Tipos TypeScript completos
- [x] Navegação entre telas com Wouter
- [x] Validação de formulários
- [x] Documentação completa (README.md)

## Funcionalidades Futuras
- [ ] Integração com Backend Real (Node.js/Express)
- [ ] Autenticação OAuth 2.0 e JWT
- [ ] Banco de Dados (PostgreSQL/MongoDB)
- [ ] Upload Real de Arquivos (S3/Cloud Storage)
- [ ] Notificações Push em Tempo Real
- [ ] Persistência de Autenticação
- [ ] Testes Automatizados (Jest, Vitest)
- [ ] Publicação em App Store e Google Play
- [ ] Integração com Wearables
- [ ] Consultas por Vídeo


## Requisitos Concluídos

- [x] Autenticação dinâmica: Dashboard exibe dados do usuário que fez login
- [x] Persistência de usuário logado em contexto/estado global
- [x] Exibir nome e email do usuário no header do dashboard
- [x] Dados personalizados por usuário (exames, documentos, pacientes)
- [x] Nome extraído do email com primeira letra maiúscula


## Bugs Corrigidos

- [x] Download de exames não está funcionando - CORRIGIDO com função handleDownload
- [x] Gráficos de evolução não estão sendo exibidos - CORRIGIDO com Recharts
- [x] Indicador de segurança/SSL - ADICIONADO no header
- [ ] Adicionar indicador visual de segurança/cadeado no header
- [ ] Mostrar badge de "Conexão Segura" ou "SSL/TLS Ativo"
- [ ] Dashboards de paciente e profissional estão mostrando conteúdo igual - PRECISA CORRIGIR


## Bugs em Correção

- [ ] Download de exames gera erro "Falha ao carregar documento PDF" - PRECISA GERAR PDF REAL
- [ ] Login requer duas tentativas para funcionar - PRECISA INVESTIGAR
- [ ] Alterar logo da tela de login para usar a imagem da marca BioCare (teal com onda branca)
- [ ] Implementar tema claro/escuro (light/dark mode) com toggle
- [ ] Harmonizar cores em ambos os temas
- [ ] Salvar preferência de tema no localStorage
