'use strict';

define('ipi-mdd-050-web/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/commercials/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/commercials/detail.js should pass ESLint\n\n21:17 - \'reason\' is defined but never used. (no-unused-vars)\n22:12 - \'error\' is not defined. (no-undef)\n23:11 - \'error\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/employes/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/employes/detail.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/employes/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/employes/edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/employes/liste.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/employes/liste.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/managers/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/managers/detail.js should pass ESLint\n\n4:9 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/techniciens/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/techniciens/detail.js should pass ESLint\n\n4:9 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/commercial.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/commercial.js should pass ESLint\n\n4:14 - \'DS\' is not defined. (no-undef)\n5:17 - \'DS\' is not defined. (no-undef)');
  });

  QUnit.test('models/employe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/employe.js should pass ESLint\n\n');
  });

  QUnit.test('models/manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/manager.js should pass ESLint\n\n');
  });

  QUnit.test('models/technicien.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/technicien.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n5:12 - \'Ember\' is not defined. (no-undef)\n8:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/commercials/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/commercials/detail.js should pass ESLint\n\n');
  });

  QUnit.test('routes/employes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/employes.js should pass ESLint\n\n');
  });

  QUnit.test('routes/employes/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/employes/detail.js should pass ESLint\n\n31:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/employes/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/employes/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/employes/liste.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/employes/liste.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/managers/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/managers/detail.js should pass ESLint\n\n');
  });

  QUnit.test('routes/techniciens/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/techniciens/detail.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n61:31 - \'options\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/commercial.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/commercial.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/manager.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/technicien.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/technicien.js should pass ESLint\n\n');
  });
});
define('ipi-mdd-050-web/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ipi-mdd-050-web/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ipi-mdd-050-web/tests/helpers/start-app', 'ipi-mdd-050-web/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ipi-mdd-050-web/tests/helpers/resolver', ['exports', 'ipi-mdd-050-web/resolver', 'ipi-mdd-050-web/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ipi-mdd-050-web/tests/helpers/start-app', ['exports', 'ipi-mdd-050-web/app', 'ipi-mdd-050-web/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ipi-mdd-050-web/tests/test-helper', ['ipi-mdd-050-web/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('ipi-mdd-050-web/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/employes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/employes-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/employes/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/employes/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/employes/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/employes/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/commercial-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/commercial-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/employe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/employe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/manager-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/technicien-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/technicien-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/employes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/employes-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/employes/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/employes/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/employes/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/employes/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/commercial-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/commercial-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/ajax-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/ajax-test.js should pass ESLint\n\n');
  });
});
define('ipi-mdd-050-web/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ipi-mdd-050-web/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ipi-mdd-050-web/tests/unit/controllers/employes-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:employes', 'Unit | Controller | employes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ipi-mdd-050-web/tests/unit/controllers/employes/detail-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:employes/detail', 'Unit | Controller | employes/detail', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ipi-mdd-050-web/tests/unit/controllers/employes/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:employes/edit', 'Unit | Controller | employes/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ipi-mdd-050-web/tests/unit/models/commercial-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('commercial', 'Unit | Model | commercial', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ipi-mdd-050-web/tests/unit/models/employe-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('employe', 'Unit | Model | employe', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ipi-mdd-050-web/tests/unit/models/manager-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('manager', 'Unit | Model | manager', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ipi-mdd-050-web/tests/unit/models/technicien-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('technicien', 'Unit | Model | technicien', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ipi-mdd-050-web/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ipi-mdd-050-web/tests/unit/routes/employes-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:employes', 'Unit | Route | employes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ipi-mdd-050-web/tests/unit/routes/employes/detail-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:employes/detail', 'Unit | Route | employes/detail', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ipi-mdd-050-web/tests/unit/routes/employes/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:employes/edit', 'Unit | Route | employes/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ipi-mdd-050-web/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ipi-mdd-050-web/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ipi-mdd-050-web/tests/unit/serializers/commercial-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('commercial', 'Unit | Serializer | commercial', {
    // Specify the other units that are required for this test.
    needs: ['serializer:commercial']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ipi-mdd-050-web/tests/unit/services/ajax-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:ajax', 'Unit | Service | ajax', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('ipi-mdd-050-web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
