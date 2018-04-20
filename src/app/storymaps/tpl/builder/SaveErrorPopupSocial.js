define([
  'lib-build/hbars!./SaveErrorPopupSocial',
  'lib-build/css!./SaveErrorPopupSocial',
  'storymaps/tpl/utils/CommonHelper',
  'dojo/Deferred',
  'dojo/i18n!resources/tpl/builder/nls/app.js?v=' + app.version
],
function(
  viewTpl,
  viewCss,
  CommonHelper,
  Deferred,
  i18n
) {
  return function SaveErrorPopupSocial(container) {
    var _resultDeferred = null;

    container.append(viewTpl({
      title: i18n.builder.saveErrorSocial.title,
      panel1: i18n.builder.saveErrorSocial.panel1,
      panel2: i18n.builder.saveErrorSocial.panel2,
      panel2q1: i18n.builder.saveErrorSocial.panel2q1,
      panel2q1tooltip: i18n.builder.saveErrorSocial.panel2q1tooltip,
      panel2q2: i18n.builder.saveErrorSocial.panel2q2,
      panel3: i18n.builder.saveErrorSocial.panel3
        .replace('${MYSTORIES}', '<a href="' + CommonHelper.getMyStoriesURL() + '" target="_blank">' + i18n.builder.saveErrorSocial.mystories + '</a>'),
      panel4: i18n.builder.saveErrorSocial.panel4,
      btnSave: i18n.builder.saveErrorSocial.save
    }));

    initEvents();

    this.present = function() {
      _resultDeferred = new Deferred();

      container.find('.panel1 .help').tooltip({
        title: i18n.builder.saveErrorSocial.panel1tooltip + '<img src="resources/tpl/builder/icons/share/builder-help-social.png"/>',
        html: true,
        placement: 'right'
      });

      container.find('.panel2 .help').tooltip();

      container.modal({
        keyboard: false
      });

      return _resultDeferred;
    };

    function initEvents() {
      container.find('input[name="optErrorSocial"]').change(function() {
        var value = container.find('input[name="optErrorSocial"]:checked').val();
        if (value == 'story') {
          container.find('.stop-asking input')
            .attr('disabled', 'disabled')
            .prop('checked', false);

          container.find('.stop-asking label').addClass('disabled');
        }
        else {
          container.find('.stop-asking input').removeAttr('disabled');
          container.find('.stop-asking label').removeClass('disabled');
        }
      });

      container.find('.btn-primary').click(function() {
        if (container.find('.stop-asking input').is(':checked')) {
          app.data.appItem.data.values.config.doNotWarnTitle = true;
        }

        _resultDeferred.resolve({
          choice: container.find('input[name="optErrorSocial"]:checked').val()
        });
        container.modal('hide');
      });
    }
  };
});
