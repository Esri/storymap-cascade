/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Aplicar",
      "close": "Fechar"
    },
    "header": {
      "sharingNotAvailable": "Isto não está disponível até você compartilhar a história",
      "edit": "Editar"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Marcadores",
        "logoSharing": "Logotipo & Compartilhamento",
        "theme": "Aparência"
      },
      "bookmarks": {
        "title": "Seção",
        "bookmark": "Marcador",
        "intro": "Os marcadores são links para seções de história que são mostradas no cabeçalho. A criação de marcadores concisos para as principais seções da sua história ajuda a orientar os leitores.",
        "sequentialDefault": "Seção de narrativa (nenhum texto encontrado)",
        "immersiveDefault": "Seção imersiva (nenhum texto encontrado)",
        "titleDefault": "Seção de título (nenhum texto encontrado)",
        "coverDefault": "Seção de capa (nenhum texto encontrado)",
        "coverAppendage": "(Capa)"
      },
      "logoSharing": {
        "logo": "Logotipo",
        "logoButton": "Utilizar Logotipo da ${ESRI}",
        "useOrgLogo": "Utilizar logotipo da minha organização",
        "useOrgLogoHelp": "Utilizar o logotipo fornecido pelo seu administrador",
        "logoLink": "Link do logotipo",
        "logoUploadProgress": "Transferência de logotipo em progresso",
        "logoUploadSuccess": "Logotipo transferido com suceso",
        "logoUploadError": "Falha ao transferir logotipo, trocando de volta para logotipo da ${ESRI}",
        "customHeaderText": "Linha da Tag",
        "taglineLinkDisabledTooltip": "Insira uma linha da tag para habilitar o link",
        "link": "Link de linha da tag",
        "enableSocialSharing": "Exibir botão de compartilhamneto"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Fontes",
        "previewLabel": "Visualizar",
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
      "builderNameSuffix": "Construtor",
      "buttonSaving": "Salvando",
      "buttonSaved": "Salvo",
      "buttonError": "Não foi possível salvar",
      "buttonShare": "Compartilhar",
      "buttonSettings": "Configurações",
      "settingsLogoError": "Seu logo tem um problema. Clique para saber mais.",
      "buttonHelp": "Obter Ajuda ou Enviar Comentários no GeoNet",
      "buttonPreview": "Visualizar História",
      "buttonHealth": "Relatório de Saúde",
      "manageStories": "Gerenciar Minhas Histórias",
      "closeWithPendingChange": "Você tem certeza que deseja confirmar esta ação? Suas alterações serão perdidas.",
      "coverLabel": "Capa",
      "creditsLabel": "Créditos",
      "betaFeedback": "Comentário",
      "betaNote": "Deixe-nos saber o que você pensa sobre ${APP_NAME} ou se algo não está funcionando como você esperava.",
      "notSharedNote": "Sua história não está compartilhada, somente você pode visualizá-la",
      "organizationWarning": "Para garantir que esta história possa ser visualizada por outros, você também deve compartilhar suas cenas, camadas de cena e aplicativos embutidos com sua organização. Mapas e camadas de mapa são compartilhados automaticamente.",
      "publicWarning": "Para garantir que esta história possa ser visualizada por outros, você também deve compartilhar suas cenas, camadas de cena e aplicativos embutidos com Todos. Mapas e camadas de mapa são compartilhados automaticamente.",
      "addTitleNote": "Adicionar um título na capa para salvar",
      "saveError": "Ocorreu um erro ao salvar sua história.",
      "duplicate": "Duplicar",
      "organize": "Organizar",
      "done": "Concluir",
      "invite": "Conforme você construir sua história, as seções aparecerão aqui ...",
      "mystoriestooltip": "O Construtor de Cascata alerta sobre problemas em sua história e ajuda a corrigi-los. Cenas e aplicativos embutidos não estão marcados, por isso, verifique estes manualmente."
    },
    "immersiveViewPanel": {
      "transition": "Transição",
      "chooseTransition": "Escolher Transição",
      "fade": "Desaparecer",
      "fadeSlow": "Desaparecer Devagar",
      "swipeVertical": "Oscilar Vertical",
      "swipeHorizontal": "Oscilar Horizontal",
      "none": "Nenhum",
      "disabledConsecutiveSameMedia": "Não disponível quando consecutivas visualizações utilizam a mesma mídia",
      "disabledTooltipMap": "Para utilizar esta transição, as camadas visíveis em ambas as visualizações devem ser diferentes e as outras propriedades do mapa devem ser as mesmas",
      "disabledConsecutiveSameMap": "Não disponível quando consecutivas visualizações utilizam o mesmo mapa",
      "disabledNotInBeta": "Não disponível quando consecutivas visualizações utilizam o mesmo mapa",
      "disabledNonConsecutive": "Não disponível, pois há outra ocorrência desta mídia que não é consecutiva",
      "addMedia": "Adicionar mídia",
      "invite": "Conforme você construir sua seção imersiva, as visualizações aparecerão aqui ..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Aparência",
        "manage": "Gerenciar",
        "size": "Tamanho",
        "background": "Plano de Fundo",
        "mobile": "Móvel",
        "issues": "Problemas",
        "fixIssues": "Corrigir Problemas"
      },
      "manage": {
        "changeMedia": "Alterar mídia",
        "edit": "Editar",
        "editAside": "Abre em uma nova guia do navegador. Após salvar suas edições, salve e recarregue esta história para visualizar suas alterações.",
        "remove": "Remover",
        "altTextPlaceholder": "Adicionar uma descrição desta mídia para leitores com deficiência visual ...",
        "altTextHelptip": "Texto alternativo é uma descrição da mídia visual utilizada pelas tecnologias assistidas, como o software leitor de tela. Isto é opcional, mas recomendado para atender às diretrizes de acessibilidade da web, como WCAG e Seção 508."
      },
      "appearance": {
        "homeView": "Visualização inicial",
        "audio": "Áudio",
        "on": "Ativar",
        "muted": "Sem Áudio",
        "volumeAside": "O vídeo será reproduzido automaticamente quando um leitor chegar a esta visualização. Se você silenciar o som, o leitor não conseguirá ativá-lo.",
        "view": "Visualizar",
        "resetLocation": "Redefinir Localização",
        "resetLayers": "Redefinir Camadas",
        "clearPopup": "Apagar Pop-Up",
        "interaction": "Interação",
        "interactionDisabled": "Interação Desativada",
        "buttonToEnable": "Botão para Ativar",
        "interactionEnabled": "Interação Ativada",
        "interactionAside": "* Os dispositivos de toque mostrarão um botão de interação.",
        "slide": "Slide",
        "noSlides": "Nenhum dos slides disponíveis.",
        "mapExtentPrompt": "Atualize o mapa para contar sua história, clique na marca de seleção para salvar as alterações"
      },
      "sectionAppearance": {
        "layout": "Layout",
        "theme": "Tema"
      },
      "size": {
        "small": "Pequeno",
        "medium": "Médio",
        "large": "Grande",
        "noCrop": "Não recortar imagens altas",
        "noCropTallTooltip": "Não cortar uma imagem alta produz um efeito dramático para os leitores que desejam rolagem para visualizar a imagem inteira."
      },
      "background": {
        "noCrop": "Não recortar",
        "mostImportantPart": "Escolha o ponto mais importante",
        "cropExplanationImmersive": "Selecione um ponto na imagem para escolher como a imagem será recortada em diferentes tamanhos de tela. O ponto selecionado sempre estará visível. Marque 'Não Recortar' se a sua imagem precisa ser completamente visível.",
        "cropExplanation": "Selecione um ponto na imagem para escolher como a imagem será recortada em diferentes tamanhos de tela. O ponto selecionado sempre estará visível.",
        "color": "Cor",
        "previews": "Visualizações"
      },
      "altMedia": {
        "alternativeMedia": "Imagem Alternativa para Dispositivo Móvel",
        "explanation": "Algumas mídias não são suportadas ou podem não funcionar bem em dispositivos móveis. Utilize este painel para especificar uma imagem que será mostrada no lugar desta mídia quando sua história for visualizada em um celular ou tablet.",
        "changeAltImage": "Alterar imagem",
        "uploadAltImage": "Adicionar imagem alternativa"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Vincular ao Conteúdo",
        "urls_short": "Link",
        "contentType": {
          "error": "Nenhuma mídia autorizada.",
          "imageOnly": "Nesta parte da história, você pode adicionar uma imagem.",
          "imageAndVideo": "Nesta parte da história, você pode adicionar uma imagem ou um vídeo.",
          "imageVideoWebpage": "Nesta parte da história, você pode adicionar áudio, uma imagem, um vídeo ou uma página da web."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Procurando por \"${searchterm}\"...",
          "searchedFor": "Resultados de pesquisa para \"${searchterm}\"",
          "albumsOf": "Álbuns do ${username}",
          "noPhotosFound": "Nenhum foto corresponteu a sua pesquisa. Tente novamente.",
          "noItemsFound": "Nenhum item correspondeu a sua pesquisa. Tente novamente.",
          "noItemsInThisStory": "Nenhum conteúdo do ArcGIS foi adicionado a esta história ainda.",
          "limitReached": "Mostrando 100 itens. Se você não localizou o que você precisa, tente uma pesquisa de palavra-chave.",
          "galleryItems": {
            "uploadError": "Desculpe, este item falhou ao transferir."
          },
          "agol": {
            "remove1": "Exclua esta imagem não utilizada da sua conta do ArcGIS.",
            "remove2": "(Você precisará carregá-la novamente se você decidir utilizá-la posteriormente.)",
            "removeFailed": "Remova esta imagem inacessível desta lista.",
            "modified": "Modificado ${date}",
            "uploaded": "Transferido ${date}",
            "contentByAuthor": "${contentType} por ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Procure fotos no ${Picasa} ou ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Pesquise e procure fotos no ${Flickr}",
            "captionStarter": "Foto por ${USERNAME} em ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Pesquisa de fotos em ${Unsplash}",
            "photoBy": "Fotos por ${username}",
            "userLink": "Vá até a página do ${username} ${Unsplash}",
            "captionStarter": "Foto por ${USERNAME} em ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Link para o conteúdo na web",
              "imageOnly": "Link para uma imagem na web",
              "imageAndVideo": "Link para uma imagem ou vídeo na web"
            },
            "linkText": {
              "imageOnly": "Na caixa acima, você pode gerar o link diretamente para uma foto.",
              "imageAndVideo1": "Na caixa acima, você pode colar um link ou código iframe para um vídeo do ${YouTube} ou ${Vimeo}.",
              "imageAndVideo2": "Você também pode gerar o link diretamente para uma foto.",
              "imageVideoWebpage1": "Na caixa acima, você pode colar um link ou código iframe para um conteúdo da web como um vídeo ou gráfico dinâmico do ${YouTube} ou ${Vimeo}.",
              "imageVideoWebpage2": "Você também pode gerar o link diretamente para uma foto, página da web, arquivo de áudio ou aplicativo da web.",
              "ender": "Utilize sempre links seguros (https). Se o seu conteúdo não suportar https, adicione um link para ele no texto da sua história para que os leitores possam visualizá-lo em uma nova guia do navegador.",
              "httpsError": "O link deve iniciar com HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Carregar página ao longo de uma conexão segura (https)",
              "embedProtocolWarning1": "Se esta página não for carregada na sua história, ela não poderá ser embutida por razões de segurança da web.",
              "embedProtocolWarning2": "Se esta página não for carregada na sua história, desmarque esta opção e tente novamente. Se a página ainda não estiver carregada, ela não poderá ser embutida por razões de segurança da web.",
              "embedProtocolWarning3": "Como alternativa, adicione um link na sua narrativa para abrir a página em uma nova guia do navegador. ${linkText}",
              "linkText": "Obtenha Mais Informações."
            },
            "placeholder": "${https://}... ou ${<iframe>}",
            "uploadErrors": {
              "generic": "Algo deu errado com o endereço inserido. Tente novamente.",
              "imageOnly1": "Você deve utilizar uma imagem nesta parte da história.",
              "imageOnly2": "Forneça um link para uma imagem (.jpg, .png, .gif) ou escolha uma imagem ${ArcGIS}, ${Flickr}, ${Google+} ou ${Unsplash}.",
              "imageAndVideo1": "Você deve utilizar uma imagem ou vídeo nesta parte da história.",
              "imageAndVideo2": "Forneça um link para uma imagem (.jpg, .png, .gif) ou um vídeo em ${YouTube} ou ${Vimeo}, ou escolha uma imagem ${ArcGIS}, ${Flickr}, ${Google+} ou ${Unsplash}.",
              "badFormat": "O link para o arquivo que você está tentando adicionar está formatado incorretamente.",
              "inaccessible": "O arquivo que você está tentando adicionar está faltando ou não está acessível.",
              "tryAgain": "Verifique o endereço e tente novamente.",
              "mediaTypes": {
                "VIDEO": "vídeo",
                "IMAGE": "imagem",
                "generic": "mÃ­dia"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Ao utilizar um serviço de terceiros, você concorda com seus termos de serviço: ",
          "googlePhotos": {
            "placeholder": "E-mail ou ${Picasa}/${Google+} ID",
            "helpText": "Você pode adicionar fotos transferidas para ${Picasa} ou ${Google+} para sua história. ${helpLinkText} sobre imagens armazenadas em sua conta do ${Google} em suas histórias.",
            "helpLinkText": "Mais informações",
            "cannotFindUser": "Não é possível localizar usuário ${username}. Tente novamente."
          },
          "unsplash": {
            "placeholder": "Procurar por fotos",
            "aboutText": "${Unsplash} é uma coleção curada de fotos grutuitas de alta qualidade.",
            "copyrightText": "Todas as fotos estão licenciadas sob a Licença ${Unsplash}. Localize mais informações ${moreInfoLink}.",
            "moreInfoLink": "aqui"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} Conta",
              "text": "Todos ${Flickr}"
            },
            "placeholders": {
              "user": "Procurar por conta",
              "userText": "Procure esta conta por fotos",
              "text": "Procurar por fotos"
            },
            "errors": {
              "cannotFindUser": "Não é possível localizar usuário ${username}.",
              "noUserPhotos": "${username} não tem quaisquer fotos públicas.",
              "didYouMean": "Você querer dizer ${username}?",
              "generalUserError": "Algo deu errado ao procurar por usuário ${username}."
            },
            "licenses": {
              "licenseLabel": "Licença: ",
              "public": "Domínio Público",
              "commercial": "OK para Uso Comercial",
              "nonCommercial": "OK para Uso Não-Comercial",
              "reserved": "Todos os Direitos Reservados",
              "any": "Qualquer Licença"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Esta História",
              "agol": "ArcGIS Online ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "${orgname} Organização",
              "myContent": "Meu Conteúdo"
            },
            "createContent": {
              "createNewMap": "Criar um Novo Mapa",
              "or": "OU",
              "dragAndDropImage": "Soltar imagens",
              "dragAndDropImageAudio": "Soltar imagens ou áudio",
              "uploadButton": "Procurar",
              "agolInfo": "As imagens e áudio transferidas estarão acessíveis somente dentro desta história.",
              "saveBeforeUpload": "Após você salvar esta história, você pode transferir as imagens e vídeos para o ArcGIS aqui.",
              "fileExtsImage": "Tipos suportados: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Tipos suportados: png, jpg, gif, bmp, mp3.",
              "maxSize": "Máx 10 MB por arquivo."
            },
            "filterAndSort": {
              "webmap": "Mapa da Web",
              "webscene": "Cena da Web",
              "image": "Imagem",
              "audio": "Áudio",
              "date": "Data",
              "sortByDate": "Classificar por data",
              "title": "Título",
              "sortByTitle": "Classificar por título",
              "views": "Visualizações",
              "search": "Procurar por palavra-chave ou ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Editar mapa",
      "unauthorizedDomain": "Você não está em um domínio autorizado para utilizar o editor de mapa",
      "loading": "Aguarde enquanto o editor de mapa estiver carregando",
      "saving": "Salvando o mapa",
      "success": "Mapa salvo",
      "cancelTitle": "Descartar quaisquer alterações não salvas?",
      "errorSave": "Não foi possível salvar o mapa. Tente novamente.",
      "loadFail": "Desculpe, o editor de mapa não pode ser carregado",
      "close": "Fechar",
      "save": "Salvar",
      "confirm": "Sim, fechar o mapa",
      "deny": "Não, continuar trabalhando"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Continue sua história aqui..."
      },
      "blockAdd": {
        "text": "Texto",
        "media": "Mídia",
        "title": "Título",
        "immersive": "Profundo"
      },
      "link": {
        "invite": "Cole ou digite um link..."
      },
      "color": {
        "choose": "escolha",
        "cancel": "cancelar",
        "clear": "Limpar cor"
      }
    },
    "imageGallery": {
      "addImage": "Adicionar outra imagem",
      "moveBackward": "Mover para trás",
      "moveForward": "Mover para frente"
    },
    "cover": {
      "titlePrompt": "Digite o título da sua história ...",
      "subtitlePrompt": "Role para baixo para começar ou insira um subtítulo opcional",
      "mediaPlaceholder": "Adicione sua imagem ou vídeo",
      "saveError": "Falha ao salvar, você já tem um item com este título"
    },
    "credits": {
      "sectionInvite": "Adicionar uma seção de créditos",
      "warning": "Ambos os campos devem ser preenchidos",
      "content": "Conteúdo...",
      "source": "Origem...",
      "linkPrompt": "Link opcional...",
      "introductionPlaceholder": "Insira uma introdução opcional na sua seção de créditos ..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posição",
        "theme": "Tema",
        "size": "Tamanho",
        "background": "Plano de Fundo",
        "layout": "Rolagem (para todos os painéis)"
      }
    },
    "title": {
      "placeholder": "Digite um título..."
    },
    "media": {
      "mediaUpload": "Transferência de mídia em progresso...",
      "mediaUploadSuccess": "Mídia transferida com sucesso",
      "mediaUploadFail": "Falha ao transferir mídia"
    },
    "controller": {
      "sectionOrganize": "Você organizou as seções",
      "immersiveOrganize": "Você organizou as visualizações",
      "sectionDelete": "Você excluiu uma seção",
      "viewDelete": "Você excluiu uma visualização"
    },
    "notification": {
      "cancel": "Cancelar",
      "close": "Fechar",
      "undo": "Desfazer"
    },
    "sections": {
      "sequence": "Narrativa",
      "immersive": "Imersivo",
      "title": "Título"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "imagem",
        "audio": "áudio",
        "webmap": "mapa",
        "webscene": "cena",
        "video": "vídeo",
        "content": "conteúdo",
        "webpage": "página da web"
      },
      "placeholders": {
        "generic": "Este conteúdo não está acessível.",
        "deleted": "Este item foi excluído.",
        "inaccessible": "Este conteúdo não está acessível.",
        "unauthorized": "Você não está autorizado a visualizar este conteúdo.",
        "unshared": "Este item não está compartilhado da mesma maneira que sua história.",
        "othersUnshared": "Este item não está compartilhado da mesma maneira que sua história.",
        "subscriptionContent": "Este mapa contém uma camada de assinante.",
        "premiumContent": "Este mapa contém uma camada premium.",
        "secureService": "Este mapa contém uma camada de segurança."
      },
      "contentIssues": {
        "noAltImage": "A Mídia Pode Não Funcionar em Dispositivo Móvel",
        "noAltImageUnsupported": "Mídia Não Suportada em Dispositivo Móvel",
        "noAltImageWarning": "A Mídia Pode Não Funcionar em Dispositivo Móvel",
        "altImageBroken": "A imagem alternativa definida para este item de mídia não está acessível",
        "httpMedia": "Mídia insegura",
        "httpContent": "Conteúdo inseguro"
      },
      "contentWarnings": {
        "noAltImage": "Certifique-se de testar sua história em dispositivos móveis antes de compartilhá-la. Se esta mídia não funcionar como esperado, utilize o botão abaixo para adicionar uma imagem alternativa que será exibida quando a história for visualizada em um celular ou tablet.",
        "noAltImageUnsupported": "A mídia não funcionará em dispositivos móveis. Utilize o botão abaixo para adicionar uma imagem alternativa que será exibida quando a história for visualizada em um celular ou tablet.",
        "noAltImageWarning": "Certifique-se de testar sua história em dispositivos móveis antes de compartilhá-la. Se esta mídia não funcionar como esperado, utilize o botão abaixo para adicionar uma imagem alternativa que será exibida quando a história for visualizada em um celular ou tablet.",
        "noAltImageAlt": "Este tipo de mídia não é suportado ou pode não funcionar bem em dispositivos móveis. Na guia do dispositivo móvel, forneça uma imagem alternativa que será mostrada quando a história for visualizada em um celular ou tablet."
      },
      "descriptions": {
        "httpAudioUnfixable": "Este áudio não suporta HTTPS. Remova-o de sua história ou substitua com um link.",
        "httpAudioUncheckable": "Este áudio tem uma URL (HTTP) insegura. Clique no botão abaixo para testar utilizando URL de HTTPS para este áudio. Se isto não funcionar, remova o áudio da sua história ou substitua-o por um hiperlink.",
        "httpAudioFixable": "Este áudio tem uma URL (HTTP) insegura. Clique no botão abaixo para utilizar uma URL de HTTPS segura para este áudio.",
        "httpWebpageUnfixable": "Esta página da web não suporta HTTPS. Remova-o de sua história ou substitua com uma captura de tela ou link.",
        "httpWebpageUncheckable": "Esta página da web tem uma URL (HTTP) insegura. Clique no botão abaixo para testar utilizando URL de HTTPS para esta página da web. Se isto não funcionar, remova a página da web da sua história ou substitua-a por um hiperlink ou captura de tela.",
        "httpWebpageFixable": "Esta página da web tem uma URL (HTTP) insegura. Clique no botão abaixo para utilizar uma URL de HTTPS segura para esta página da web.",
        "httpVideoUnfixable": "Este vídeo não suporta HTTPS. Remova-o de sua história ou substitua com uma captura de tela ou link.",
        "httpVideoUncheckable": "Este vídeo tem uma URL (HTTP) insegura. Clique no botão abaixo para testar utilizando URL de HTTPS para este vídeo. Se isto não funcionar, remova o vídeo da sua história ou substitua-o por um hiperlink ou captura de tela.",
        "httpVideoFixable": "Este vídeo tem uma URL (HTTP) insegura. Clique no botão abaixo para utilizar uma URL de HTTPS segura para este vídeo.",
        "httpImageUnfixable": "Esta imagem não suporta HTTPS. Remova-a de sua história ou substitua com um link.",
        "httpImageUncheckable": "Esta imagem tem uma URL (HTTP) insegura. Clique no botão abaixo para testar utilizando URL de HTTPS para esta imagem. Se isto não funcionar, remova a imagem da sua história ou substitua-a por um hiperlink.",
        "httpImageFixable": "Esta imagem tem uma URL (HTTP) insegura. Clique no botão abaixo para utilizar uma URL de HTTPS segura para esta imagem.",
        "httpLayer": "Esta camada tem uma URL (HTTP) insegura.",
        "inaccessibleLogo": "Este logo não está acessível. Substitua-o com outra imagem.",
        "httpLogoUnfixable": "Este logo não suporta HTTPS. Substitua-o com outra imagem.",
        "httpLogoFixable": "Este logo tem uma URL (HTTP) insegura. Utilize uma URL de HTTPS para o logo.",
        "httpLogoUncheckable": "Este logo tem uma URL (HTTP) insegura. Utilize uma URL de HTTPS para o logo ou substitua-o com outra imagem."
      },
      "tooltips": {
        "httpAudioFixable": "Clique no botão para utilizar uma URL de HTTPS segura para este áudio.",
        "httpAudioUncheckable": "Tente utilizar uma URL de HTTPS para este áudio. Se isto não funcionar, remova o áudio da sua história ou substitua-o por um link.",
        "httpWebpageFixable": "Clique no botão para utilizar uma URL HTTPS segura para esta página da web.",
        "httpWebpageUncheckable": "Tente utilizar uma URL de HTTPS para esta página da web. Se isto não funcionar, remova a página da web da sua história ou substitua-a por um link ou captura de tela.",
        "httpVideoFixable": "Clique no botão para utilizar uma URL de HTTPS segura para este vídeo.",
        "httpVideoUncheckable": "Tente utilizar uma URL de HTTPS para este vídeo. Se isto não funcionar, remova o vídeo da sua história ou substitua-o por um link ou captura de tela.",
        "httpImageFixable": "Clique no botão para utilizar uma URL de HTTPS segura para esta imagem.",
        "httpImageUncheckable": "Tente utilizar uma URL de HTTPS para esta imagem. Se isto não funcionar, remova a imagem da sua história ou substitua-a por um link.",
        "httpLayerMyMap": "Visite a página de item do mapa para atualizar esta camada para utilizar HTTPS. Se a camada não puder ser atualizada, remova-a do mapa.",
        "httpLayerNotMyMap": "Faça uma cópia do mapa e atualize esta camada para utilizar HTTPS. Se a camada não puder ser atualizada, remova-a do mapa.",
        "clickLearnMore": "Clique para mais informações."
      },
      "fixButtons": {
        "agolItemPage": "Página do Item",
        "openTheMap": "Abrir Mapa",
        "updateAudio": "Corrigir URL de Áudio",
        "updateWebpages": "Corrigir URL de Página da Web",
        "updateVideos": "Corrigir URL de Vídeo",
        "updateImages": "Corrigir URL de Imagem"
      },
      "mapIssues": {
        "fixButton": "Corrigir Problemas",
        "nofixButton": "Problemas",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Conteúdo Não Compartilhado",
          "othersUnshared": "Conteúdo Não Compartilhado de Outra Pessoa",
          "subscriptionContent": "Conteúdo do Assinante",
          "premiumContent": "Conteúdo Premium",
          "secureContent": "Conteúdo Seguro",
          "deleted": "Conteúdo Excluído",
          "inaccessible": "Conteúdo Inacessível",
          "unauthorized": "Conteúdo Não Autorizado"
        },
        "descriptions": {
          "unshared": "Este conteúdo não está compartilhado da mesma maneira que sua história.",
          "othersUnshared": "Este conteúdo pertence a outra pessoa e não está compartilhado da mesma maneira que sua história.",
          "othersUnsharedAuthorized": "Este conteúdo pertence a outra pessoa, mas você está autorizado a compartilhá-lo.",
          "inaccessible": "Este conteúdo não está acessível.",
          "deleted": "Este conteúdo foi excluído.",
          "unauthorized": "Você não está autorizado a visualizar este conteúdo.",
          "popupFeatureLayer": "Os pop-ups de uma camada de mosaico provêm de uma camada de feição que não está compartilhada da mesma maneira que a sua história.",
          "subscriptionContent": "Você deve autorizar o conteúdo de assinante para uso público.",
          "premiumContent": "Você deve autorizar o conteúdo premium para uso público.",
          "secureService": "O conteúdo seguro não está acessível aos leitores.",
          "missingItemWarning": "O item associado a esta camada foi excluído."
        },
        "tooltips": {
          "unshared": "Clique para mais informações sobre compartilhamento.",
          "othersUnshared": "Você não tem permissões para compartilhar conteúdo de propriedade de terceiros. Peça ao proprietário para compartilhá-lo, remover o mapa da sua história ou editar o mapa para remover as camadas que não são suas. Clique para mais informações sobre edição de mapas.",
          "inaccessible": "Remova este mapa da sua história ou edite-o para remover as camadas inacessíveis. Clique para mais informações sobre edição de mapas.",
          "deleted": "Remova este mapa da sua história ou edite-o para remover as camadas ausentes. Clique para mais informações sobre edição de mapas.",
          "unauthorized": "Remova este mapa da sua história ou edite-o para remover as camadas ausentes. Clique para mais informações sobre edição de mapas.",
          "popupFeatureLayer": "Os pop-ups de uma camada de mosaico provêm de uma camada de feição que não está compartilhada da mesma maneira que a sua história.",
          "subscriptionContent": "O conteúdo do assinante não consome créditos. Clique para mais informações.",
          "premiumContent": "Os créditos serão cobrados à sua organização sempre que alguém visualizar uma camada premium na sua história. Clique para mais informações.",
          "secureService": "Remova o conteúdo seguro da sua história ou clique para aprender como autorizar o conteúdo seguro para uso de outras pessoas.",
          "missingItemWarning": "Esta camada ainda funciona, mas seus símbolos, pop-ups ou nome podem ter mudado. Confirme que a camada aparece conforme esperado ou remova-a da sua história."
        },
        "fixButtons": {
          "share": "Compartilhar",
          "hide": "Ocultar",
          "authorize": "Autorizar",
          "remove": "Remover",
          "help": "Obter Ajuda",
          "ignore": "Ignorar",
          "confirm": "Confirmar",
          "edit": "Editar Mapa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Alguns mapas e camadas também foram compartilhados.",
          "alsoSharedMaps": "Alguns mapas também foram compartilhados.",
          "alsoSharedLayers": "Algumas camadas também foram compartilhadas.",
          "sharedOthersContent": "Você utilizou seus privilégios administrativos para compartilhar o conteúdo de outra pessoa."
        }
      },
      "storyHealth": {
        "healthy": "Sem problemas",
        "notHealthy": "Corrigir problemas",
        "warnings": "Visualizar avisos"
      }
    },
    "saveErrorSocial": {
      "title": "Compartilhamento de rede social",
      "panel1": "Sua história pode não aparecer corretamente na rede social já que o título de item do seu aplicativo da web do ArcGIS não é o mesmo que seu título da história.",
      "panel1tooltip": "Ao definir um título, resumo e imagem de miniatura, sua história parecerá com isto:",
      "panel2": "Qual título você gostaria de utilizar na mídia social:",
      "panel2q1": "Título da história (recomendado)",
      "panel2q1tooltip": "Ao escolher esta opção, o título do seu item será modificado para corresponder ao título da sua história e alterações adicionais no construtor serão sincronizadas.",
      "panel2q2": "Título do item",
      "panel3": "Para melhoria adicional sobre o visual da sua história na mídia social, utilize ${MYSTORIES} para adicionar um resumo e uma imagem de miniatura.",
      "panel4": "Não me avisar novamente desta história",
      "save": "Salvar",
      "mystories": "Minhas Histórias"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Mensagem Importante sobre Segurança da Web e Mapas Históricos",
      "s1h1": "A Esri está melhorando a segurança de Mapas Históricos",
      "s1p1": "Seus Mapas Históricos em tempo real na web e a comunidade da web estão sempre trabalhando para estabelecer e implementar melhor a segurança. O HTTPS, que fornece uma conexão segura para o conteúdo transmitido pela Internet, está emergindo como a maneira esperada de acessar o conteúdo da web. A maioria dos navegadores modernos agora mostra mensagens de aviso quando HTTP é utilizado, ao invés de HTTPS. Devido a este padrão emergente, recomendamos que você utilize links de HTTPS para criar e compartilhar os Mapas Históricos e utilizar somente URLs de HTTPS ao embutir o conteúdo da web ou vincular às imagens em um Mapa Histórico.",
      "s1p2": "Em termos práticos, isto significa que um Mapa Histórico e todo o seu conteúdo (incluindo imagens, camadas, aplicativos embutidos e sites) deve ser acessado utilizando links que iniciam com HTTPS, ao invés de HTTP. Isto garante a melhor experiência para seus leitores, pois a maioria dos navegadores da web indicará que suas histórias são seguras.",
      "s2h1": "O que preciso fazer?",
      "s2p1": "A Esri está trabalhando para tornar isto uma transição fácil para os autores e leitores do Mapa Histórico. As ferramentas estão disponíveis agora nos construtores do Mapa Histórico e em Minhas Histórias, que ajudam você a encontrar conteúdo não protegido (HTTP) em suas histórias e fornecem recomendações sobre como lidar com isto. Verifique suas histórias por conteúdo não protegido e atualize para HTTPS o mais rápido possível.",
      "action1": "Fechar",
      "action2": "Verificar minhas histórias agora",
      "action3": "Mais informações",
      "floatingNotification": "Esta história contém conteúdo inseguro (HTTP) . Revise e corrija estes problemas."
    }
  }
});