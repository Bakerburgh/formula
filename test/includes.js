import test from 'tape';
import includes from '../fn/includes';
import error from '../fn/error';

test('includes', function(t) {
  t.plan(6);
  t.equal( includes( 'aa', ['aa', 'bb', 'cc'] ), true );
  t.equal( includes( 'bb', ['aa', 'bb', 'cc'] ), true );
  t.equal( includes( 'cc', ['aa', 'bb', 'cc'] ), true );
  t.equal( includes( 'a', ['aa', 'bb', 'cc'] ), false );
  t.equal( includes( 'b', ['aa', 'bb', 'cc'] ), false );
  t.equal( includes( 'c', ['aa', 'bb', 'cc'] ), false );
});
