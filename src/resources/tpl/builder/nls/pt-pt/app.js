/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Aplicar",
      "close": "Fechar"
    },
    "header": {
      "sharingNotAvailable": "Isto não se encontra disponível até partilhar a sua história.",
      "edit": "Editar"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Marcadores",
        "logoSharing": "Logo & Partilha",
        "theme": "Aspeto"
      },
      "bookmarks": {
        "title": "Secção",
        "bookmark": "Marcador",
        "intro": "Os marcadores são ligações a secções da história que são exibidos no cabeçalho. A criação de marcadores concisos para as principais secções da sua história ajuda os utilizadores se orientem na história.",
        "sequentialDefault": "Secção narrativa (não foi encontrado texto)",
        "immersiveDefault": "Secção Imersiva (não foi encontrado texto)",
        "titleDefault": "Secção de Título (não foi encontrado texto)",
        "coverDefault": "Secção de Capa (não foi encontrado texto)",
        "coverAppendage": "(Capa)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Utilizar o Logo da ${ESRI}",
        "useOrgLogo": "Utilizar o logótipo da minha organização",
        "useOrgLogoHelp": "Utilize o valor disponibilizado pelo administrador.",
        "logoLink": "Ligação ao logótipo",
        "logoUploadProgress": "Carregamento do logótipo em curso",
        "logoUploadSuccess": "Logótipo carregado com sucesso.",
        "logoUploadError": "O carregamento do logótipo falhou, revertendo para o logótipo da ${ESRI}",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Introduza um slogan para ativar a ligação",
        "link": "Ligação ao slogan",
        "enableSocialSharing": "Exibir botão de partilha"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Fontes",
        "previewLabel": "Pré-visualizar",
        "fontsTitleLabel": "Títulos",
        "fontsBodyLabel": "Corpo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privado",
      "btnOrg": "Organização",
      "btnPublic": "Público",
      "btnEveryone": "Todos"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "A Guardar",
      "buttonSaved": "Guardado",
      "buttonError": "Não foi possível guardar",
      "buttonShare": "Partilhar",
      "buttonSettings": "Configurações",
      "settingsLogoError": "O seu logo tem um problema. Clique para obter mais informações.",
      "buttonHelp": "Obter Ajuda ou Submeter Feedback em GeoNet",
      "buttonPreview": "Visualizar História",
      "buttonHealth": "Relatório de Saúde",
      "manageStories": "Gerir as Minhas Histórias",
      "closeWithPendingChange": "Tem a certeza que pretende confirmar esta ação? As suas alterações serão perdidas.",
      "coverLabel": "Capa",
      "creditsLabel": "Créditos",
      "betaFeedback": "Feedback",
      "betaNote": "Por favor, dê-nos a sua opinião acerca de ${APP_NAME} ou comunique no caso de algo não estar a funcionar como pretende.",
      "notSharedNote": "A sua história não é partilhada, pode apenas ser visualizada por si.",
      "organizationWarning": "Para garantir que esta história pode ser visualizada por outros utilizadores, também tem de partilhar as respetivas cenas, camadas de cenas e aplicações incorporadas com a sua organização. Os mapas e as camadas de mapa são partilhados automaticamente.",
      "publicWarning": "Para garantir que esta história pode ser visualizada por outros utilizadores, também tem de partilhar as respetivas cenas e aplicações incorporadas com Todos. Os mapas e as camadas de mapa são partilhados automaticamente.",
      "addTitleNote": "Adicionar um título à capa para guardar",
      "saveError": "Ocorreu um erro ao guardar a sua história.",
      "duplicate": "Duplicar",
      "organize": "Organizar",
      "done": "Terminado",
      "invite": "À medida que constrói a sua história, as secções aparecem aqui...",
      "mystoriestooltip": "O Cascade Builder alerta-o para problemas na sua história e ajuda-o a corrigi-los. As cenas e as aplicações incorporadas não se encontram selecionadas, portanto, por favor, selecione-as manualmente."
    },
    "immersiveViewPanel": {
      "transition": "Transição",
      "chooseTransition": "Selecionar Transição",
      "fade": "Desvanecer",
      "fadeSlow": "Desvanecer Lento",
      "swipeVertical": "Deslizar Vertical",
      "swipeHorizontal": "Deslizar Horizontal",
      "none": "Nenhum",
      "disabledConsecutiveSameMedia": "Indisponível quando vistas consecutivas utilizam o mesmo media.",
      "disabledTooltipMap": "Para utilizar esta transição, as camadas de ambas as vistas têm de ser diferentes e as outras propriedades do mapa têm de ser iguais.",
      "disabledConsecutiveSameMap": "Indisponível quando vistas consecutivas utilizam o mesmo mapa.",
      "disabledNotInBeta": "Indisponível quando vistas consecutivas utilizam o mesmo mapa.",
      "disabledNonConsecutive": "Indisponível quando existe outra ocorrência deste media que é não-consecutiva-",
      "addMedia": "Adicionar media",
      "invite": "À medida que constrói a sua secção imersiva, as vistas aparecem aqui..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Aspeto",
        "manage": "Gerir",
        "size": "Tamanho",
        "background": "Fundo",
        "mobile": "Mobile",
        "issues": "Problemas",
        "fixIssues": "Corrigir Problemas"
      },
      "manage": {
        "changeMedia": "Alterar imagem",
        "edit": "Editar",
        "editAside": "Abre num novo separador do navegador. Após guardar as suas edições, guarde e recarregue esta história para visualizar as alterações que efetuou.",
        "remove": "Remover",
        "altTextPlaceholder": "Introduza uma descrição deste suporte para leitores com deficiência visual...",
        "altTextHelptip": "O texto alternativo é uma descrição dos suportes visuais utilizados por tecnologias auxiliares, como software de leitura de ecrã. É opcional, mas recomendada para corresponder às linhas orientadoras de acessibilidade web, tais como WCAG e a Secção 508."
      },
      "appearance": {
        "homeView": "Vista inicial",
        "audio": "Áudio",
        "on": "Ligar",
        "muted": "Silenciado",
        "volumeAside": "O vídeo será reproduzido automaticamente quando um leitor chega a esta vista. Caso silencie o som, o leitor não poderá ativá-lo.",
        "view": "Ver",
        "resetLocation": "Redefinir Localiz",
        "resetLayers": "Redefinir Camadas",
        "clearPopup": "Limpar Janela Pop-up",
        "interaction": "Interação",
        "interactionDisabled": "Interação Desativada",
        "buttonToEnable": "Botão para Ativar",
        "interactionEnabled": "Interação Ativada",
        "interactionAside": "*Nos dispositivos touch surge um botão de interação.",
        "slide": "Slide",
        "noSlides": "Não existem slides disponíveis.",
        "mapExtentPrompt": "Atualize o mapa para contar a sua história, clique no sinal de confirmação para guardar as alterações"
      },
      "sectionAppearance": {
        "layout": "Layout",
        "theme": "Tema"
      },
      "size": {
        "small": "Pequeno",
        "medium": "Média",
        "large": "Grande",
        "noCrop": "Não recortar imagens com altura elevada",
        "noCropTallTooltip": "Não recortar uma imagem com altura elevada produz um efeito significativo para quem lê, que obriga a fazer scroll para percorrer a imagem na sua totalidade."
      },
      "background": {
        "noCrop": "Não recortar",
        "mostImportantPart": "Selecionar o ponto mais importante",
        "cropExplanationImmersive": "Selecione um ponto na imagem para escolher como a mesma será recortada em diferentes tamanhos de ecrã. O ponto selecionado estará sempre visível. Marque a caixa ‘Não Recortar’ caso seja necessário que a sua imagem fique totalmente visível.",
        "cropExplanation": "Selecione um ponto na imagem para escolher como a mesma será recortada em diferentes tamanhos de ecrã. O ponto selecionado estará sempre visível.",
        "color": "Cor",
        "previews": "Pré-visualizações"
      },
      "altMedia": {
        "alternativeMedia": "Alternar imagem para Dispositivo Móvel",
        "explanation": "Alguns media não são suportados ou poderão não funcionar corretamente em dispositivos móveis. Utilize este painel para especificar uma imagem que será exibida em substituição destes media quando a sua história é visualizada num telefone ou tablet.",
        "changeAltImage": "Alterar imagem",
        "uploadAltImage": "Adicionar imagem alternativa"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Ligação a Conteúdo",
        "urls_short": "Ligação",
        "contentType": {
          "error": "Não existem media autorizados.",
          "imageOnly": "Nesta parte da história pode adicionar uma imagem.",
          "imageAndVideo": "Nesta parte da história pode adicionar uma imagem ou um vídeo.",
          "imageVideoWebpage": "Nesta parte da história pode adicionar áudio, uma imagem, um vídeo ou uma página web."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "A pesquisar \"${searchterm}\"...",
          "searchedFor": "Resultados de pesquisa para \"${searchterm}\"",
          "albumsOf": "Álbuns de ${username}",
          "noPhotosFound": "Não existem fotografias que correspondam à sua pesquisa. Por favor, tente novamente.",
          "noItemsFound": "Não foram encontrados itens que correspondam à sua pesquisa. Por favor, tente novamente.",
          "noItemsInThisStory": "Ainda não foi adicionado qualquer conteúdo de ArcGIS a esta história.",
          "limitReached": "A exibir 100 Itens. Se não encontrou aquilo de que necessita, tente uma pesquisa por palavras-chave.",
          "galleryItems": {
            "uploadError": "Lamentamos, ocorreu uma falha ao carregar este item."
          },
          "agol": {
            "remove1": "Elimine esta imagem não-utilizada da sua conta ArcGIS.",
            "remove2": "(Terá de carregá-la novamente caso decida utilizá-la mais tarde.)",
            "removeFailed": "Remova esta imagem inacessível desta lista.",
            "modified": "Modificado em ${date}",
            "uploaded": "Atualizado em ${date}",
            "contentByAuthor": "${contentType} por ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Procure fotografias no ${Picasa} ou no ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Pesquise e procure fotos no ${Flickr}",
            "captionStarter": "Fotografia de ${USERNAME} em ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Pesquise fotos no ${Unsplash}",
            "photoBy": "Fotografia de ${username}",
            "userLink": "Dirija-se à página de ${username} do ${Unsplash}",
            "captionStarter": "Fotografia de ${USERNAME} em ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Ligar a conteúdo na web",
              "imageOnly": "Ligar a uma imagem na web",
              "imageAndVideo": "Ligar a uma imagem ou vídeo na web"
            },
            "linkText": {
              "imageOnly": "Na caixa acima, pode efetuar diretamente a ligação a uma fotografia.",
              "imageAndVideo1": "Na caixa acima, pode colar uma ligação ou código iframe de um vídeo do ${YouTube} ou ${Vimeo}.",
              "imageAndVideo2": "Pode ainda ligar diretamente a uma fotografia.",
              "imageVideoWebpage1": "Na caixa acima, pode colar uma ligação ou código iframe para conteúdo web como um gráfico dinâmico ou um vídeo do ${YouTube} ou ${Vimeo}.",
              "imageVideoWebpage2": "Pode ainda ligar diretamente a uma foto, vídeo, página web ou aplicação web.",
              "ender": "Utilize sempre ligações seguras (https). Caso o seu conteúdo não suporte https, adicione uma ligação ao mesmo no texto da sua história para que os leitores possam visualizá-lo num novo separador do navegador.",
              "httpsError": "A ligação tem de começar com HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Carregar página através de uma ligação segura (https)",
              "embedProtocolWarning1": "Caso a página não seja carregada na sua história, não poderá ser incorporada, por motivos de segurança web.",
              "embedProtocolWarning2": "Caso esta página não seja carregada na sua história, desmarque esta opção e tente novamente. Caso a página continue a não ser carregada, não poderá ser incorporada, por motivos de segurança web.",
              "embedProtocolWarning3": "Em alternativa, adicione uma ligação à sua narrativa para abrir a página num novo separador do navegador ${linkText}",
              "linkText": "Saber Mais."
            },
            "placeholder": "${https://}... ou ${<iframe>}",
            "uploadErrors": {
              "generic": "Algo correu mal com o endereço introduzido. Por favor, tente novamente.",
              "imageOnly1": "Tem de utilizar uma imagem nesta parte da história.",
              "imageOnly2": "Por favor, forneça uma ligação a uma imagem (.jpg, .png, .gif), ou selecione uma imagem de ${ArcGIS}, ${Flickr}, ${Google+}, ou ${Unsplash}.",
              "imageAndVideo1": "Tem de utilizar uma imagem ou um vídeo nesta parte da história.",
              "imageAndVideo2": "Por favor, forneça uma ligação a uma imagem (.jpg, .png, .gif) ou um vídeo no ${YouTube} ou ${Vimeo}, ou selecione uma imagem de ${ArcGIS}, ${Flickr}, ${Google+}, ou ${Unsplash}.",
              "badFormat": "A ligação ao ficheiro que está a tentar adicionar encontra-se incorretamente formatada.",
              "inaccessible": "O ficheiro que está a tentar adicionar encontra-se em falta ou inacessível.",
              "tryAgain": "Por favor, verifique o endereço e tente novamente.",
              "mediaTypes": {
                "VIDEO": "vídeo",
                "IMAGE": "Imagem",
                "generic": "media"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Ao utilizar um serviço de terceiros, concorda com os respetivos termos de serviço: ",
          "googlePhotos": {
            "placeholder": "Correio Eletrónico ou ID de ${Picasa}/${Google+}",
            "helpText": "Pode adicionar fotografias carregadas para ${Picasa} ou ${Google+} à sua história. ${helpLinkText} sobre a utilização de imagens armazenadas na sua conta ${Google} nas suas histórias.",
            "helpLinkText": "Obter mais informações",
            "cannotFindUser": "Não é possível encontrar o utilizador ${username}. Por favor, tente novamente."
          },
          "unsplash": {
            "placeholder": "Pesquisar fottografias",
            "aboutText": "${Unsplash} é uma coleção curada de fotografias gratuitas, de alta qualidade.",
            "copyrightText": "Todas as fotografias se encontram licenciadas ao abrigo da Licença ${Unsplash} . Obtenha mais informações ${moreInfoLink}.",
            "moreInfoLink": "aqui"
          },
          "flickr": {
            "searchType": {
              "account": "Conta ${Flickr}",
              "text": "Tudo no ${Flickr}"
            },
            "placeholders": {
              "user": "Pesquisar conta",
              "userText": "Pesquisar fotografias nesta conta",
              "text": "Pesquisar fottografias"
            },
            "errors": {
              "cannotFindUser": "Não é possível encontrar o utilizador ${username}.",
              "noUserPhotos": "${username} não possui quaisquer fotografias públicas.",
              "didYouMean": "Referia-se a ${username}?",
              "generalUserError": "Alco correu mal ao pesquisar o utilizador ${username}."
            },
            "licenses": {
              "licenseLabel": "Licença: ",
              "public": "Domínio Público",
              "commercial": "OK para Utilização Comercial",
              "nonCommercial": "OK para Utilização Não-Comercial",
              "reserved": "Todos os Direitos Reservados",
              "any": "Qualquer Licença"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Este História",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organização ${orgname}",
              "myContent": "O Meu Conteúdo"
            },
            "createContent": {
              "createNewMap": "Crie um novo mapa",
              "or": "OU",
              "dragAndDropImage": "Soltar imagens",
              "dragAndDropImageAudio": "Soltar imagens ou áudio",
              "uploadButton": "Procurar",
              "agolInfo": "As imagens e áudio transferidos ficarão acessíveis apenas no interior desta história.",
              "saveBeforeUpload": "Após guardar esta história, pode carregar imagens e áudio para ArcGIS aqui.",
              "fileExtsImage": "Tipos suportados: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Tipos suportados: png, jpg, gif, bmp, mp3.",
              "maxSize": "Máx 10 MB por ficheiro."
            },
            "filterAndSort": {
              "webmap": "Mapa Web",
              "webscene": "Web Scene",
              "image": "Imagem",
              "audio": "Áudio",
              "date": "Data",
              "sortByDate": "Ordenar por data",
              "title": "Título",
              "sortByTitle": "Ordenar por título",
              "views": "Visualizações",
              "search": "Pesquisar por palavra-chave ou ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Editar mapa",
      "unauthorizedDomain": "Não se encontra num domínio autorizado para utilizar o editor de mapas",
      "loading": "Por favor aguarde enquanto o editor de mapas está a carregar",
      "saving": "A guardar o mapa",
      "success": "Mapa guardado",
      "cancelTitle": "Rejeitar alterações não guardadas?",
      "errorSave": "Não é possível guardar mapa. Por favor, tente novamente.",
      "loadFail": "Lamentamos, não é possível carregar o editor de mapas",
      "close": "Fechar",
      "save": "Guardar",
      "confirm": "Sim, fechar mapa",
      "deny": "Não, continuar a trabalhar"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Continue a sua história aqui..."
      },
      "blockAdd": {
        "text": "Texto",
        "media": "Imagem",
        "title": "Título",
        "immersive": "Imersivo"
      },
      "link": {
        "invite": "Cole ou digite uma ligação..."
      },
      "color": {
        "choose": "selecionar",
        "cancel": "cancelar",
        "clear": "Limpar cor"
      }
    },
    "imageGallery": {
      "addImage": "Adicionar outra imagem",
      "moveBackward": "Mover para trás",
      "moveForward": "Mover para a frente"
    },
    "cover": {
      "titlePrompt": "Introduza o título da sua história...",
      "subtitlePrompt": "Faça scroll para baixo para começar, ou introduza um subtítulo opcional",
      "mediaPlaceholder": "Adicione a sua imagem ou vídeo",
      "saveError": "Guardar falhou, já possui um item com este título"
    },
    "credits": {
      "sectionInvite": "Adicionar um botão de créditos",
      "warning": "Ambos os campos têm de ser preenchidos",
      "content": "Conteúdo...",
      "source": "Origem...",
      "linkPrompt": "Ligação opcional...",
      "introductionPlaceholder": "Introduza uma introdução, opcional, à sua secção de créditos..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posição",
        "theme": "Tema",
        "size": "Tamanho",
        "background": "Fundo",
        "layout": "Scrolling (para ambos os painéis)"
      }
    },
    "title": {
      "placeholder": "Introduza um título..."
    },
    "media": {
      "mediaUpload": "Carregamento de media em curso...",
      "mediaUploadSuccess": "Media carregado com sucesso",
      "mediaUploadFail": "Falha ao carregar os media"
    },
    "controller": {
      "sectionOrganize": "Organizou as secções",
      "immersiveOrganize": "Organizou as vistas",
      "sectionDelete": "Eliminou uma secção",
      "viewDelete": "Eliminou uma vista"
    },
    "notification": {
      "cancel": "Cancelar",
      "close": "Fechar",
      "undo": "Anular"
    },
    "sections": {
      "sequence": "Narrativa",
      "immersive": "Imersivo",
      "title": "Título"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "Imagem",
        "audio": "áudio",
        "webmap": "mapa",
        "webscene": "cena 3D",
        "video": "vídeo",
        "content": "conteúdo",
        "webpage": "página web"
      },
      "placeholders": {
        "generic": "Não é possível aceder a este conteúdo.",
        "deleted": "Este item foi eliminado.",
        "inaccessible": "Não é possível aceder a este conteúdo.",
        "unauthorized": "Não tem autorização para visualizar este conteúdo.",
        "unshared": "Este item não é partilhado do mesmo modo que a sua história.",
        "othersUnshared": "Este item não é partilhado do mesmo modo que a sua história.",
        "subscriptionContent": "Este mapa contém uma camada de subscrição.",
        "premiumContent": "Este mapa contém uma camada premium.",
        "secureService": "Este mapa contém uma camada segura."
      },
      "contentIssues": {
        "noAltImage": "Media Poderá Não Funcionar em Dispositivo Móvel",
        "noAltImageUnsupported": "Media Não Suportado em Dispositivo Móvel",
        "noAltImageWarning": "Media Poderá Não Funcionar em Dispositivo Móvel",
        "altImageBroken": "A imagem alternativa definida para este item de media não se encontra acessível.",
        "httpMedia": "Media Inseguros",
        "httpContent": "Conteúdo Inseguro"
      },
      "contentWarnings": {
        "noAltImage": "Assegure-se de testar as sua história em dispositivos móveis antes de partilhá-la. Caso este media não funcione como seria de esperar, recorra ao botão abaixo para adicionar uma imagem alternativa que será exibida quando a sua história é visualizada num telefone ou num tablet.",
        "noAltImageUnsupported": "Este media não irá funcionar em dispositivos móveis. Recorra ao botão abaixo para adicionar uma imagem alternativa que será exibida quando a sua história é visualizada num telefone ou num tablet.",
        "noAltImageWarning": "Assegure-se de testar as sua história em dispositivos móveis antes de partilhá-la. Caso este media não funcione como seria de esperar, recorra ao botão abaixo para adicionar uma imagem alternativa que será exibida quando a sua história é visualizada num telefone ou num tablet.",
        "noAltImageAlt": "Este tipo de media não é suportado ou poderá não funcionar corretamente em dispositivos móveis. No separador móvel, adicione uma imagem alternativa que será exibida quando a sua história é visualizada num telefone ou num tablet."
      },
      "descriptions": {
        "httpAudioUnfixable": "Este áudio não suporta HTTPS. Remova-o da sua história ou substitua-o por uma ligação.",
        "httpAudioUncheckable": "Este áudio tem um URL inseguro (HTTP). Clique no botão abaixo para tentar utilizar um URL HTTPS para este áudio. Caso não funcione, remova o áudio da sua história ou substitua-o por uma hiperligação.",
        "httpAudioFixable": "Este áudio tem um URL inseguro (HTTP). Clique no botão abaixo para utilizar um URL HTTPS seguro para este áudio.",
        "httpWebpageUnfixable": "Esta página web não suporta HTTPS. Remova-a da sua história ou substitua-a por uma captura de ecrã ou ligação.",
        "httpWebpageUncheckable": "Esta página web tem um URL inseguro (HTTP). Clique no botão abaixo para tentar utilizar um URL HTTPS para esta página web. Caso não funcione, remova a página web da sua história ou substitua-a por uma captura de ecrã ou hiperligação.",
        "httpWebpageFixable": "Esta página web tem um URL inseguro (HTTP). Clique no botão abaixo para utilizar um URL HTTPS seguro para esta página web.",
        "httpVideoUnfixable": "Este vídeo não suporta HTTPS. Remova-o da sua história ou substitua-o por uma captura de ecrã ou ligação.",
        "httpVideoUncheckable": "Este vídeo tem um URL inseguro (HTTP). Clique no botão abaixo para tentar utilizar um URL HTTPS para este vídeo. Caso não funcione, remova o vídeo da sua história ou substitua-o por uma captura de ecrã ou hiperligação.",
        "httpVideoFixable": "Este vídeo tem um URL inseguro (HTTP). Clique no botão abaixo para utilizar um URL HTTPS seguro para este vídeo.",
        "httpImageUnfixable": "Esta imagem não suporta HTTPS. Remova-a da sua história ou substitua-a por uma ligação.",
        "httpImageUncheckable": "Esta imagem tem um URL inseguro (HTTP). Clique no botão abaixo para tentar utilizar um URL HTTPS para esta imagem. Caso não funcione, remova a imagem da sua história ou substitua-a por uma hiperligação.",
        "httpImageFixable": "Esta imagem tem um URL inseguro (HTTP). Clique no botão abaixo para utilizar um URL HTTPS seguro para esta imagem.",
        "httpLayer": "Esta camada tem um URL inseguro (HTTP).",
        "inaccessibleLogo": "Este logo não se encontra acessível. Substitua-o por outra imagem.",
        "httpLogoUnfixable": "Este logo suporta HTTPS. Substitua-o por outra imagem.",
        "httpLogoFixable": "Este logo tem um URL inseguro (HTTP). Utilize um URL HTTPS para o logo.",
        "httpLogoUncheckable": "Este logo tem um URL inseguro (HTTP). Utilize um URL HTTPS para o logo, ou substitua-o por outra imagem."
      },
      "tooltips": {
        "httpAudioFixable": "Clique no botão para utilizar um URL HTTPS seguro para este áudio.",
        "httpAudioUncheckable": "Tente utilizar um URL HTTPS para este áudio. Caso não funcione, remova o áudio da sua história ou substitua-o por uma ligação.",
        "httpWebpageFixable": "Clique no botão para utilizar um URL HTTPS seguro para esta página web.",
        "httpWebpageUncheckable": "Tente utilizar um URL HTTPS para esta página web. Caso não funcione, remova a página web da sua história ou substitua-a por uma captura de ecrã ou ligação.",
        "httpVideoFixable": "Clique no botão para utilizar um URL HTTPS seguro para este vídeo.",
        "httpVideoUncheckable": "Tente utilizar um URL HTTPS para este vídeo. Caso não funcione, remova o vídeo da sua história ou substitua-o por uma captura de ecrã ou ligação.",
        "httpImageFixable": "Clique no botão para utilizar um URL HTTPS seguro para esta imagem.",
        "httpImageUncheckable": "Tente utilizar um URL HTTPS para esta imagem. Caso não funcione, remova a imagem da sua história ou substitua-a por uma ligação.",
        "httpLayerMyMap": "Visite a página de item do mapa para atualizar esta camada para que utilize HTTPS. Caso não seja possível atualizar a camada, remova-a do mapa.",
        "httpLayerNotMyMap": "Faça uma cópia do mapa e atualize esta camada para que utilize HTTPS. Caso não seja possível atualizar a camada, remova-a do mapa.",
        "clickLearnMore": "Clique para saber mais."
      },
      "fixButtons": {
        "agolItemPage": "Página de item",
        "openTheMap": "Abrir Mapa",
        "updateAudio": "Corrigir URL de Áudio",
        "updateWebpages": "Corrigir URL de Página Web",
        "updateVideos": "Corrigir URL de Vídeo",
        "updateImages": "Corrigir URL de Imagem"
      },
      "mapIssues": {
        "fixButton": "Corrigir Problemas",
        "nofixButton": "Problemas",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Conteúdo Não-Partilhado",
          "othersUnshared": "Conteúdo Não-Partilhado de Outro Utilizador",
          "subscriptionContent": "Conteúdo de Subscritor",
          "premiumContent": "Conteúdo Premium",
          "secureContent": "Conteúdo Seguro",
          "deleted": "Conteúdo Eliminado",
          "inaccessible": "Conteúdo inacessível",
          "unauthorized": "Conteúdo Não-Autorizado"
        },
        "descriptions": {
          "unshared": "Este conteúdo não é partilhado do mesmo modo que a sua história.",
          "othersUnshared": "Este conteúdo é propriedade de outra pessoa e não é partilhado do mesmo modo que a sua história.",
          "othersUnsharedAuthorized": "Este conteúdo é propriedade de outra pessoam, mas é-lhe concedida autorização para o partilhar.",
          "inaccessible": "Não é possível aceder a este conteúdo.",
          "deleted": "Este conteúdo foi eliminado.",
          "unauthorized": "Não tem autorização para visualizar este conteúdo.",
          "popupFeatureLayer": "As janelas pop-up de uma camada de mosaicos provêm de uma camada de elementos que não é partilhada do mesmo modo que a sua história.",
          "subscriptionContent": "É necessário que autorize a utilização pública do conteúdo de subscritor.",
          "premiumContent": "É necessário que autorize a utilização pública do conteúdo premium.",
          "secureService": "Os seus leitores não têm acesso ao conteúdo seguro.",
          "missingItemWarning": "O item associado a esta camada foi eliminado."
        },
        "tooltips": {
          "unshared": "Clique para obter mais informações sobre partilha.",
          "othersUnshared": "Não possui permissões para partilhar conteúdo que pertença a outros. Peça ao proprietário que o partilhe, remova o mapa da sua história, ou edite o mapa para remover as camadas de que não é proprietário. Clique para obter mais informações sobre edição de mapas.",
          "inaccessible": "Remova este mapa da sua história ou edite-o para remover as camadas inacessíveis. Clique para obter mais informações sobre edição de mapas.",
          "deleted": "Remova este mapa da sua história ou edite-o para remover as camadas em falta. Clique para obter mais informações sobre edição de mapas.",
          "unauthorized": "Remova este mapa da sua história ou edite-o para remover as camadas em não-autorizadas. Clique para obter mais informações sobre edição de mapas.",
          "popupFeatureLayer": "As janelas pop-up de uma camada de mosaicos provêm de uma camada de elementos que não é partilhada do mesmo modo que a sua história.",
          "subscriptionContent": "O conteúdo de subscritor não consome quaisquer créditos. Clique para saber mais.",
          "premiumContent": "Serão cobrados créditos à sua organização de cada vez que alguém visualize uma camada premium na sua história. Clique para saber mais.",
          "secureService": "Remova o conteúdo seguro da sua história, ou clique para descobrir como autorizar a utilização de conteúdo seguro para outros utilizadores.",
          "missingItemWarning": "Esta camada continua funcional, mas os respetivos símbolos, janelas pop-up ou nome podem ter mudado. Confirme que a camada tem a aparência esperadam ou remova-a da sua história."
        },
        "fixButtons": {
          "share": "Partilhar",
          "hide": "Esconder",
          "authorize": "Autorizar",
          "remove": "Remover",
          "help": "Obter Ajuda",
          "ignore": "Ignorar",
          "confirm": "Confirmar",
          "edit": "Editar Mapa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Alguns mapas e camadas também foram partilhados.",
          "alsoSharedMaps": "Alguns mapas também foram partilhados.",
          "alsoSharedLayers": "Algumas camadas também foram partilhadas.",
          "sharedOthersContent": "Uilizou os seus privilégios aministrativos para partilhar conteúdo pertencente a outra pessoa."
        }
      },
      "storyHealth": {
        "healthy": "Sem assuntos",
        "notHealthy": "Corrigir problemas",
        "warnings": "Visualizar avisos"
      }
    },
    "saveErrorSocial": {
      "title": "Partilha nas Redes Sociais",
      "panel1": "A sua história pode não surgir de modo apropriado na rede social, já que o título da sua aplicação web ArcGIS não corresponde ao título da sua história.",
      "panel1tooltip": "Definindo um título, resumo e imagem miniatura, a sua história irá parecer assim:",
      "panel2": "Que título gostaria de usar nas redes sociais:",
      "panel2q1": "Título da história (recomendado)",
      "panel2q1tooltip": "Ao escolher esta opção, o título do seu item irá ser modificado para corresponder ao título da sua história e outras alterações que o edifício será sincronizado.",
      "panel2q2": "Título de item",
      "panel3": "Para melhorar a aparência da sua história nas redes sociais use ${MYSTORIES} para adicionar um resumo ou uma imagem miniatura.",
      "panel4": "Não me avise outra vez para esta história",
      "save": "Guardar",
      "mystories": "As Minhas Histórias"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Mensagem Importante acerca de Segurança na Web e Story Maps",
      "s1h1": "A Esri está a melhorar a segurança dos Story Maps",
      "s1p1": "Os seus Story Maps existem na web, e a comunidade da web está sempre a trabalhar para estabelecer e implementar melhor segurança. HTTPS, que fornece uma ligação segura para conteúdo transmitido através da Internet, está a emergir como modo habitual de aceder a conteúdo web. A maioria dos navegadores modernos exibe agora mensagens de aviso quando é utilizado HTTP ao invés de HTTPS. Devido a este padrão emergente, recomendamos vivamente que utilize ligações HTTPS para criar e partilhar Story Maps, e que apenas utilize URLs HTTPS ao incorporar conteúdo da web ou ao estabelecer ligações a imagens num Story Map.",
      "s1p2": "Em termos práticos, isto significa que um Story Map e todo o respetivo conteúdo (incluindo imagens, camadas, aplicações incorporadas e sites web) deve ser acedido através de ligações que começam com HTTPS ao invés de HTTP. Isto garante uma experiência de maior qualidade para os seus leitores, já que a maioria dos navegadores web indicarão que as suas histórias são seguras.",
      "s2h1": "O que tenho de fazer?",
      "s2p1": "A Esri está a trabalhar para que esta transição seja simples para autores e leitores de Story Maps. Encontram-se agora disponíveis ferramentas, nos builders de Story Maps e em As Minhas Histórias, que o ajudam a encontrar conteúdo inseguro (HTTP) nas suas histórias e oferecem recomendações sobre como lidar com isso. Por favor, verifique se as suas histórias têm conteúdo inseguro e atualize para HTTPS assim que possível.",
      "action1": "Fechar",
      "action2": "Verificar as minhas histórias agora",
      "action3": "Obter mais informações",
      "floatingNotification": "Esta história contém conteúdo inseguro (HTTP). Por favor, reveja e corrija estes problemas."
    }
  }
});