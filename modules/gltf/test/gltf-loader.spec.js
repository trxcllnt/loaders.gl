/* eslint-disable max-len */
import test from 'tape-promise/tape';

import {load, parseSync, fetchFile} from '@loaders.gl/core';
import {GLTFLoader} from '@loaders.gl/gltf';

const GLTF_BINARY_URL = '@loaders.gl/gltf/test/data/gltf-2.0/2CylinderEngine.glb';
const GLTF_JSON_URL = '@loaders.gl/gltf/test/data/gltf-2.0/2CylinderEngine.gltf';

test('GLTFLoader#imports', t => {
  t.ok(GLTFLoader, 'GLTFLoader was imported');
  t.end();
});

test('GLTFLoader#parseSync(text/JSON)', async t => {
  const response = await fetchFile(GLTF_JSON_URL);
  const data = await response.text();

  const gltf = parseSync(data, GLTFLoader);
  t.ok(gltf, 'GLTFLoader returned parsed data');

  t.end();
});

test('GLTFLoader#parseSync(binary)', async t => {
  const response = await fetchFile(GLTF_BINARY_URL);
  const data = await response.arrayBuffer();

  const gltf = parseSync(data, GLTFLoader);
  t.ok(gltf, 'GLTFLoader returned parsed data');

  t.end();
});

test('GLTFLoader#load(binary)', async t => {
  const data = await load(GLTF_BINARY_URL, GLTFLoader);
  t.ok(data.asset, 'GLTFLoader returned parsed data');
  t.end();
});

test('GLTFLoader#load(text)', async t => {
  const data = await load(GLTF_JSON_URL, GLTFLoader);
  t.ok(data.asset, 'GLTFLoader returned parsed data');
  t.end();
});
