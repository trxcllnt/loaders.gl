# GLTF Category Features (Deprecated)

## GLTFBuilder API

A glTF file can be built programmatically using the GLTFBuilder's "fluent API":

```js
const builder = new GLTFBuilder(...)
  .addApplicationData(...);
  .addExtras(...);
  .addExtension(...);
  .addRequiredExtension(...)
  .encodeAsGLB(...);
```

## Adding Custom Payloads to glTF files

glTF provides multiple mechanisms for adding custom data to a glTF conformant file. The application just needs to decide where to store it. Normally it should be added using one of the `addApplicationData`, `addExtras`, `addExtension` or `addRequiredExtension` methods.

### Binary Packing of Typed Arrays in JSON Data

The `GLTFLoader` and `GLTFBuilder` classes include support for moving (packing) typed arrays in the application JSON into the binary GLB chunk.

The packing process extracts binary (typed) arrays from the supplied `json` data structure, placing these in compact binary chunks (by calling the appropriate `add...` methods on the builder). The "stripped" JSON chunk will contain "JSON pointers" that the `GLTFParser` can later use to restore the JSON structure on load.

### Flattening Nested Numeric Arrays

As an option, standard JavaScript arrays can also be stored in the binary chunk under certain conditions. This feature supports arrays that contain only numbers. It also supports arrays that also contain nested arrays that only contain numbers.

The major complication when packing nested arrays is that the internal structure is lost. For instance, a coordinate array `[[1, 2, 0], [2, 1, 0]]` will be packed and unpacked as `[1, 2, 0, 2, 1, 0]`. To assist with recovering this information, the flattening process estimates the `size` of top-level elements and stored as a named field on the typed array.
