// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Gulp

// Config
angular.module('embedCodepen.config', [])
    .value('embedCodepen.config', {
        debug: true
    });

// Modules
angular.module('embedCodepen.directives', []);
angular.module('embedCodepen',
    [
        'embedCodepen.config',
        'embedCodepen.directives'
    ]);

(function(){

  /**
   * Directive to render codepen embeds.
   *
   * It is written in such a way that the original codepen
   * embed code can be used and state changes are supported.
   *
   * See: http://blog.codepen.io/documentation/features/embedded-pens/
   *
   * @constructor
   */
  function EmbedCodepenDirective(){
    return {
      restrict: 'A',
      scope: {
        themeId: '@',
        slugHash: '@',
        user: '@',
        defaultTab: '@',
        height: '@',
        showTabBar: '@',
        animations: '@',
        border: '@',
        borderColor: '@',
        tabBarColor: '@',
        tabLinkColor: '@',
        activeTabColor: '@',
        activeLinkColor: '@',
        linkLogoColor: '@',
        class: '@',
        customCssUrl: '@'
      },
      template: [
        '<iframe ',
          'scrolling="no" ',
          'frameborder="0" ',
          'class="cp_embed_iframe" ',
          'allowtransparency="true" ',
          'allowfullscreen="true" ',
          'style="width: 100%; overflow: hidden;"',
        '>',
        '</iframe>'
      ].join(''),
      link: function(scope, iElem, iAttrs){

        // Skip elements we can't process
        if(!(scope.slugHash && scope.user)){
          return;
        }

        // Build URL
        var url = document.location.protocol +
          '//codepen.io/' + scope.user +
          '/embed/' + scope.slugHash +
          '?user=' + scope.user;

        var optionalProperties = [
          'themeId',
          'defaultTab',
          'height',
          'showTabBar',
          'animations',
          'border',
          'borderColor',
          'tabBarColor',
          'tabLinkColor',
          'activeTabColor',
          'activeLinkColor',
          'linkLogoColor',
          'class',
          'customCssUrl'
        ];

        angular.forEach(optionalProperties, function(property){
          if(scope[property]){
            url += '&' + property + '=' + scope[property];
          }
        });

        // Set iframe properties
        iElem.find('iframe')
          .attr('src', url)
          .attr('height', scope.height)
          .attr('id', 'cp_embed_' + scope.slugHash);
      }
    };
  }

  // Inject dependencies
  EmbedCodepenDirective.$inject = [];

  // Export
  angular
    .module('embedCodepen.directives')
    .directive('slugHash', EmbedCodepenDirective);

})();
