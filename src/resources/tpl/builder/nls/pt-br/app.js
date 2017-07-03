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
    "builderPanel": {
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
        "remove": "Remover"
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
        "alternativeMedia": "Alternar Mídia",
        "explanation": "Algumas mídias não são suportadas ou podem não funcionar bem em dispositivos móveis. Utilize este painel para escolher um item alternativo, mais amigável para dispositivos móveis, que será mostrado no lugar desta mídia quando sua história for visualizada em um celular ou tablet.",
        "changeAltImage": "Alterar imagem",
        "uploadAltImage": "Adicionar imagem"
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
      "imageUpload": "Transferência de imagem em progresso...",
      "imageUploadSuccess": "Imagem transferida com sucesso",
      "imageUploadFail": "Falha ao transferir imagem"
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
        "noAltImage": "Mídia Não Suportada em Dispositivos Móveis",
        "altImageBroken": "A imagem alternativa definida para este item de mídia não está acessível"
      },
      "contentWarnings": {
        "noAltImage": "Este tipo de mídia não é suportado em dispositivos móveis. Forneça uma imagem alternativa que será exibida quando a história for visualizada em dispositivos móveis.",
        "noAltImageAlt": "Este tipo de mídia não é suportado em dispositivos móveis. Na guia móvel, forneça uma imagem alternativa que será mostrada quando a história for visualizada em dispositivos móveis."
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
    }
  }
});