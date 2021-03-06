/* eslint-disable max-len */
import test from 'tape-promise/tape';
import {TextEncoder, TextDecoder} from '@loaders.gl/core';

test('TextEncoder', t => {
  t.ok(new TextEncoder(), 'TextEncoder successfully instantiated (available or polyfilled)');
  t.end();
});

test('TextDecoder', t => {
  t.ok(new TextDecoder(), 'TextDecoder successfully instantiated (available or polyfilled)');
  t.end();
});
