import $ from 'jquery';
import 'select2';

export default function init() {
  $(() => {
    $('input.ajaxselect2').each(function() {
      const self = $(this);
      self.select2({
        multiple: self.data('multiple'),
        placeholder: self.data('placeholder'),
        minimumInputLength: self.data('minimuminputlength'),
        page_limit: self.data('resultslimit'),
        quietMillis: 100,
        allowClear: true,
        ajax: {
          url: $(this).data('searchurl'),
          dataType: 'json',
          data: function (term, page) {
            return {
                term: term,
                page: page
            };
          },
          results: function (data, page) {
            const more = (page * self.data('resultslimit')) < data.total
              return {
                results: data.list,
                more: more
              };
          }
        },
      initSelection: function(element, callback) {
        callback($(element).data('selectioncontent'));
      },
      formatResult: function(item) {
          return item.resultsContent;
      },
      formatSelection: function(item) {
        if(item.selectionContent){
          return item.selectionContent;
        }else{
          return item;
        }
      },
      dropdownCssClass: "bigdrop",
      escapeMarkup: function (m) { return m; }
      })
    })
  })
};

init();
