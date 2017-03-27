(function(module) {
try {
  module = angular.module('mainPartials');
} catch (e) {
  module = angular.module('mainPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/index.html',
    '<div>\n' +
    '    <section id="todoapp">\n' +
    '        dasfs.f,ms,\n' +
    '        <div>测试{{aaa}}</div>\n' +
    '    </section>\n' +
    '        \n' +
    '</div>\n' +
    '');
}]);
})();
