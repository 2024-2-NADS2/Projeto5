# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Projeto: Pegada Hídrica
## Grupo:💧 HYDRA 💧
## Integrantes: <a href="https://www.linkedin.com/in/nathan-lucena-0a271a26a">Nathan Silva de Lucena</a>, <a href="https://www.linkedin.com/in/raissa-elias-873178232/">Raissa Elias Silva</a>, <a href="https://www.linkedin.com/in/lucca-brand%C3%A3o-821044243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Lucca Brandão</a>, <a href="https://www.linkedin.com/in/murilo-de-alencar-lopes-55532524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Murilo Lopes<a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/victorbarq/">Victor Bruno Alexander Rosetti de Quiroz</a>, <a href="https://www.linkedin.com/in/aimarlopes/">Aimar Martins Lopes</a>, <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>, <a href="https://www.linkedin.com/in/jbuesso/">José Carlos Buesso</a>, <a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/">Eduardo Savino Gomes</a>

## Descrição:

<p align="center">


![Captura de Tela (4)](https://github.com/user-attachments/assets/f514f586-b82a-468c-9110-25a7394ac3b1)

  <p align="center">
  Projeto por Lucca Brandão, Murilo Lopes, Nathan Lucena e Raissa Elias.



<br><br>
Um site que calcula a pegada hídrica de um estabelecimento, e permite aos usuários estimarem o volume total de água consumida direta e indiretamente. Ele geralmente solicita informações sobre atividades diárias, como consumo de água para higiene pessoal, limpeza, preparo de alimentos e uso de eletrônicos. Além disso, pode incluir dados sobre o uso de produtos e serviços que demandam água em sua produção. Com esses dados, o site calcula a pegada hídrica total, ajudando a conscientizar sobre o impacto do uso de água e formas de reduzi-lo.
<br><br>

## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->documentos<br>
  &emsp;|-->antigos<br>
  &emsp;|Documentação.docx<br>
|-->imagens<br>
|-->src<br>
  &emsp;|-->Backend<br>
  &emsp;|-->Frontend<br>
|readme.md<br>


<b>README.MD</b>: Arquivo que serve como guia e explicação geral sobre seu projeto. O mesmo que você está lendo agora.

Há também 4 pastas que seguem da seguinte forma:

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.

## 🖱️ FIGMA 
Aperte para visualizar
[Link para o figma Protótipo](https://www.figma.com/design/AyKUvC9zQ9TW6k8Y5N9R4a/Untitled-(Copy)?node-id=0-1&t=OTifBsQ7tEEK0h7A-1)<br>
Aperte para visualizar
[Link para o figma Desing System](https://www.figma.com/design/sWZ5CfRR8Eo5BJHJUUWpnG/Design-System-Helping-Out-(Copy)?node-id=0-1&node-type=canvas&t=tuZ2qgM96jj9XgYe-0)

## 🛠 Instalação
 Certifique-se de ter os seguintes softwares instalados no seu computador:

- [Node.js](https://nodejs.org/en/)
- [GitHub Desktop](https://desktop.github.com/download/)
- [Mysql](https://www.mysql.com/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [.NET SDK](https://dotnet.microsoft.com/pt-br/)

## 💻 Configuração do projeto
##  Clone o Repositório  
Abra o GitHub Desktop, clique em File > clone repository. Na aba URL, insira o seguinte link: https://github.com/2024-2-NADS2/Projeto5.git. Escolha uma pasta no seu computador para salvar o projeto e clique em clone. Depois de clonar, abra a pasta do projeto no seu editor de código.

## Instalar Dependências
- Frontend (React.js)
No terminal acesse a pasta do frontend: cd frontend. Instale as dependências do projeto: npm install.

- Backend (.NET)
No terminal, acesse a pasta do backend: cd backend. Restaure as dependências: dotnet restore.

## Configure o Banco de Dados (MySQL)
Abra o MySQL Workbench ou terminal MySQL, crie um banco de dados chamado pegada_hydrica: CREATE DATABASE pegada_hydrica;

No backend, configure o arquivo appsettings.json com as credenciais do banco: "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=pegada_hydrica;User Id=seu_usuario;Password=sua_senha;"
}

## Rodar o Projeto
- Backend
Navegue para a pasta do backend no terminal: cd backend. Inicie o servidor: dotnet run. O backend estará disponível em http://localhost:5000.
- Frontend
Abra outro terminal e vá para a pasta do frontend: cd frontend. Inicie o servidor: npm start. O frontend estará disponível em http://localhost:3000.

## Rodar Testes Automatizados
- Testes no Backend (.NET)
Navegue até a pasta do backend no terminal: cd backend. Execute os testes com o seguinte comando: dotnet test. O resultado dos testes será exibido no terminal, incluindo detalhes sobre falhas e sucesso.
- Testes no Frontend (React.js)
Navegue até a pasta do frontend no terminal: cd frontend. Execute os testes com o seguinte comando: npm test. O terminal exibirá o resultado dos testes unitários e, caso necessário, solicitará interações para depuração.

## Múltiplas Plataformas
- Windows
Siga as etapas acima normalmente. Certifique-se de rodar os terminais como administrador ao configurar o banco de dados.

- Linux/MacOS
Instale o Node.js e o .NET SDK usando gerenciadores de pacotes (exemplo: apt, brew).
Certifique-se de que o MySQL esteja configurado corretamente, ajustando permissões para usuários locais.
No terminal, siga as mesmas etapas para rodar o frontend, backend e os testes.


## 📱 Técnicas e Tecnologias utilizadas.

As seguintes ferramentas que foram utilizadas na construção do projeto:

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [JS](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [REACT](https://pt-br.reactjs.org/)
- [Mysql](https://www.mysql.com/)
- [Node.js](https://nodejs.org/en/)
- [CRUD](https://coodesh.com/blog/dicionario/o-que-e-crud/#:~:text=Primeiramente%2C%20CRUD%20%C3%A9%20o%20acr%C3%B4nimo,sua%20m%C3%A1quina%20ou%20na%20nuvem.)
  


## 🗃 Histórico de lançamentos

A cada atualização os detalhes devem ser lançados aqui.

* 0.22.22 - 18/11/2024
    * Projeto concluído para entrega. (todos)
* 0.21.21 - 10/11/2024
    * Projeto de arquitetura da implementação do sistema. (Nathan)
* 0.20.20 - 05/11/2024
    * Backend em .NET, orientado a objetos com banco de dados. (Lucca)
* 0.19.19 - 03/11/2024
    * Entrega do Protótipo finalizado e do guia de estilo. (Raissa)
* 0.18.18 - 01/11/2024
    * Banco de dados online conectado na Azure e colocou o frontend no netlify. (Murilo)
* 0.17.17 - 30/10/2024
    * Projeto concluído para terceira entrega. (todos)
* 0.16.16 - 29/10/2024
    * Implementação de um algoritmo de busca de dados com propriedade. (Raissa)
* 0.15.15 - 28/10/2024
    * Criação do backend. (Nathan e Lucca)
* 0.14.14 - 24/10/2024
    * Criação da calculadora de pegada hídrica do site. (Murilo)
* 0.13.13 - 23/10/2024
    * Criação de mais duas páginas. (Lucca)
* 0.12.12 - 22/10/2024
    * Diagrama de Classe. (Raissa)
* 0.11.11 - 20/10/2024 
    * Criar o Banco de Dados e subir para azure. (Nathan, Raissa)
* 0.10.10 - 15/10/2024 
    * Documento de Requisitos Funcionais, Não Funcionais e 3 Casos de Uso. (Raissa)
* 0.9.9 - 02/10/2024 
    * Desenvolvimento do Site em React. (Lucca e Nathan)
* 0.8.8 - 01/10/2024
    * Projeto concluído para primeira e segunda entrega. (todos)
* 0.7.7 - 22/09/2024
    * Criação do Layout e prototipação no FIGMA. (Murilo)
* 0.6.6 - 20/09/2024
    * Entrega de classes. (Nathan)
* 0.5.5 - 20/09/2024
    *  Criação do guia de estilo e prototipação (FIGMA). (Murilo e Raissa)  
* 0.4.4 - 12/09/2024 
    * O código das 3 telas foi feito. (Todos)
* 0.3.3 - 01/09/2024 
    * Criação da home Page utilizando as tecnologias desejadas (HTML, CSS e JS). (Lucca)
* 0.2.2 - 31/08/2024 
    * Criação da página de login e cadastro. (Raissa)
* 0.1.1 - 30/08/2024 
    * Iniciamos o projeto criando o rascunho do modelo de login, definimos a estrutura de dados utilizada, e logo começamos a colocar em prática. (Todos)

## 📋 Licença/License
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2024-2-NADS2/Projeto5">Pegada Hídrica</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2024-2-NADS2/Projeto5">FECAP, Nathan Lucena, Raissa Elias, Murilo Lopes, Lucca Brandão</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. <https://www.w3schools.com/howto/howto_css_login_form.asp>
2. <https://www.w3schools.com/react/default.asp>
3. <https://youtu.be/DL6oOdm9308?si=X_QlVQzut-FfFleF>
4. <https://www.youtube.com/@ProfessorChicoEscobar>
5. <https://youtu.be/Z-LwNMHiJDw?si=R_nfm5spck-RuFlj>

