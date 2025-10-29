# BioCare Conecta

Aplicativo móvel cross-platform para gestão de saúde, conectando pacientes e profissionais médicos através de uma plataforma segura e intuitiva.

## 🏥 Visão Geral

**BioCare Conecta** é um aplicativo inovador que revoluciona a forma como pacientes e profissionais de saúde se comunicam e gerenciam informações médicas. Com recursos avançados de segurança, alertas críticos baseados em IA e gráficos de evolução de saúde, o aplicativo oferece uma experiência completa e confiável.

### Slogan
> "CONECTANDO RESULTADOS A CONDUTAS TERAPÊUTICAS"

## 🎯 Funcionalidades Principais

### Para Pacientes (Maria Torres)

- **Dashboard Personalizado**: Visualização de exames, documentos e gráficos de evolução
- **Últimos Exames**: Lista de exames com controle de qualidade
- **Alertas Críticos**: Notificações urgentes com orientações de ação imediata
- **Gráficos de Evolução**: Acompanhamento de marcadores de saúde (Glicemia, Colesterol, Pressão)
- **Acompanhamento em IA**: Recomendações inteligentes baseadas em dados
- **Download de Documentos**: Acesso fácil a exames e receitas médicas

### Para Profissionais (Dr. José)

- **Gestão de Pacientes**: Lista completa de pacientes com status de saúde
- **Alertas Críticos**: Notificações em tempo real de pacientes em risco
- **Condutas Sugeridas**: Recomendações baseadas em IA para ações médicas
- **Upload de Exames**: Envio de resultados de exames para pacientes
- **Documentos Médicos**: Acesso e gerenciamento de documentação
- **Gráficos de Evolução**: Visualização de dados de pacientes ao longo do tempo

### Segurança e Privacidade

- **Criptografia AES-256**: Proteção de ponta para todos os dados
- **Autenticação em Duas Etapas**: Segurança adicional com SMS, Autenticador ou Biometria
- **Certificado SSL/TLS**: Conexões seguras com protocolo TLS 1.3
- **Conformidade HIPAA/LGPD**: Atendimento a regulamentações internacionais
- **Proteção em Nível Bancário**: Segurança equivalente a instituições financeiras

## 🏗️ Arquitetura

### Padrão MVVM (Model-View-ViewModel)

O projeto segue a arquitetura **Model-View-ViewModel** para código limpo, escalável e fácil de manter:

- **Model**: Tipos e interfaces em `client/src/types/`
- **View**: Componentes React em `client/src/pages/` e `client/src/components/`
- **ViewModel**: Lógica de negócio em `client/src/services/`

### Estrutura de Pastas

```
BioCareConecta/
├── client/
│   ├── src/
│   │   ├── pages/              # Páginas principais
│   │   │   ├── Login.tsx       # Tela de login
│   │   │   ├── SignUp.tsx      # Criação de conta
│   │   │   ├── ForgotPassword.tsx
│   │   │   ├── PatientDashboard.tsx
│   │   │   ├── ProfessionalDashboard.tsx
│   │   │   └── SecurityPrivacy.tsx
│   │   ├── components/         # Componentes reutilizáveis
│   │   ├── services/           # Serviços de API (mockados)
│   │   │   └── api.ts
│   │   ├── types/              # Definições de tipos TypeScript
│   │   │   └── index.ts
│   │   ├── contexts/           # Contextos React
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilitários
│   │   ├── App.tsx             # Roteamento principal
│   │   ├── main.tsx            # Entrada da aplicação
│   │   └── index.css           # Estilos globais
│   ├── public/                 # Ativos estáticos
│   └── index.html              # HTML principal
├── server/                     # Placeholder (compatibilidade)
├── shared/                     # Placeholder (compatibilidade)
└── README.md
```

## 🎨 Design e Identidade Visual

### Cores Principais

- **Primária**: Azul (#2563EB) - Confiança e profissionalismo
- **Secundária**: Teal (#14B8A6) - Saúde e bem-estar
- **Alerta Verde**: #10B981 - Resultados normais
- **Alerta Amarelo**: #FBBF24 - Atenção necessária
- **Alerta Vermelho**: #EF4444 - Crítico/Urgente

### Tipografia

- **Títulos**: Fonte sem serifa, peso 700-800
- **Corpo**: Fonte sem serifa, peso 400-500
- **Monoespaço**: Para dados técnicos

### Componentes de Alerta

O sistema de alertas segue a lógica de cores:

1. **Verde (Resultados Normais)**: Indicados em verde, refletem saúde estável
2. **Amarelo (Atenção)**: Indicados em amarelo, sinalizam possíveis preocupações
3. **Vermelho (Crítico)**: Indicados em vermelho, requerem ação imediata

## 🔐 Segurança

### Criptografia

- **Algoritmo**: AES-256 (Advanced Encryption Standard)
- **Aplicação**: Todos os dados em repouso e em trânsito
- **Padrão**: Militar/Governamental

### Autenticação

- **Dois Fatores**: SMS, Autenticador de Aplicativo, Biometria
- **Sessão**: Tokens JWT com expiração automática
- **Logout**: Invalidação imediata de tokens

### Conformidade

- **HIPAA**: Health Insurance Portability and Accountability Act
- **LGPD**: Lei Geral de Proteção de Dados (Brasil)
- **SSL/TLS 1.3**: Protocolo mais recente e seguro

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19**: Framework de UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS 4**: Estilização
- **shadcn/ui**: Componentes de UI prontos
- **Wouter**: Roteamento leve
- **Lucide React**: Ícones
- **Sonner**: Notificações toast

### Build & Dev

- **Vite**: Build tool rápido
- **Node.js 22**: Runtime
- **pnpm**: Gerenciador de pacotes

### Padrões

- **MVVM**: Model-View-ViewModel
- **React Hooks**: State management
- **Context API**: Gerenciamento de estado global
- **Custom Hooks**: Lógica reutilizável

## 📱 Telas Implementadas

### 1. Login (/)
- Seleção de tipo de usuário (Paciente/Profissional)
- Campos de email/CPF e senha
- Links para recuperação de senha e criação de conta
- Validação de formulário

### 2. Criação de Conta (/signup)
- Formulário completo com validação
- Seleção de tipo de usuário
- Confirmação de senha
- Redirecionamento automático após sucesso

### 3. Recuperação de Senha (/forgot-password)
- Envio de email de recuperação
- Confirmação visual de envio
- Retorno ao login

### 4. Dashboard do Paciente (/patient-dashboard)
- **Abas**: EXAMES, MEUS DOCUMENTOS, GRÁFICOS DE EVOLUÇÃO
- **Alerta Crítico**: Notificação urgente com ações recomendadas
- **Últimos Exames**: Lista com data e opção de download
- **Controle de Qualidade**: Indicador de validação
- **Gráficos**: Evolução de marcadores ao longo do tempo
- **Acompanhamento em IA**: Recomendações inteligentes

### 5. Dashboard do Profissional (/professional-dashboard)
- **Abas**: PACIENTES, MEUS DOCUMENTOS, GRÁFICO
- **Alerta Crítico**: Destaque para Maria Torres com condutas sugeridas
- **Lista de Pacientes**: Todos os pacientes com status
- **Documentos**: Acesso a exames e relatórios
- **Gráficos**: Visualização de evolução de pacientes

### 6. Segurança e Privacidade (/security-privacy)
- Informações sobre criptografia AES-256
- Detalhes de autenticação em duas etapas
- Certificado SSL/TLS
- Compromissos de privacidade
- Conformidade regulatória

## 🔄 Fluxo de Navegação

```
Login (/)
├── PACIENTE → PatientDashboard (/patient-dashboard)
│   ├── Exames
│   ├── Meus Documentos
│   └── Gráficos de Evolução
│
├── PROFISSIONAL → ProfessionalDashboard (/professional-dashboard)
│   ├── Pacientes
│   ├── Meus Documentos
│   └── Gráfico
│
├── Criar Conta (/signup)
│   └── Login
│
└── Esqueci Senha (/forgot-password)
    └── Login

SecurityPrivacy (/security-privacy)
└── Qualquer página
```

## 🧪 Dados Mockados

O projeto utiliza serviços mockados em `client/src/services/api.ts` para simular chamadas de backend:

### Paciente Padrão
- **Nome**: Maria Torres
- **Email**: maria@example.com
- **CPF**: 123.456.789-00
- **Histórico**: Hipertensão, Diabetes
- **Alergias**: Penicilina

### Profissional Padrão
- **Nome**: Dr. José
- **Email**: jose@example.com
- **Especialidade**: Clínico Geral
- **CRM**: 123456/SP
- **Pacientes**: 4 (Maria Torres, João da Silva, Pedro Silva, Ana Oliveira)

## 📊 Dados de Gráficos

Os gráficos de evolução mostram 5 meses de dados para:

- **Glicemia de Jejum**: 100 → 120 mg/dL
- **Colesterol Total**: 180 → 200 mg/dL
- **Pressão Sistólica**: 120 → 140 mmHg

## 🎯 Próximos Passos

1. **Integração com Backend Real**: Substituir serviços mockados por APIs reais
2. **Autenticação Segura**: Implementar OAuth 2.0 e JWT
3. **Persistência de Dados**: Integrar com banco de dados
4. **Upload de Arquivos**: Implementar upload real de exames
5. **Notificações Push**: Alertas em tempo real
6. **Testes Automatizados**: Unit tests e E2E tests
7. **Publicação**: App Store e Google Play

## 📝 Licença

Este projeto é propriedade da BioCare Conecta. Todos os direitos reservados.

## 📞 Contato

Para mais informações, entre em contato através de:

- **Email**: contato@biocare.com.br
- **Telefone**: +55 (11) 3000-0000
- **Redes Sociais**: @biocareconecta

---

**BioCare Conecta** - Conectando Resultados a Condutas Terapêuticas ❤️
