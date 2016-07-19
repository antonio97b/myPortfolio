import { test } from 'qunit';
import moduleForAcceptance from 'ember-portfolio/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ember portfolio');

test('visiting /ember-portfolio', function(assert) {
  visit('/ember-portfolio');

  andThen(function() {
    assert.equal(currentURL(), '/ember-portfolio');
  });
});
