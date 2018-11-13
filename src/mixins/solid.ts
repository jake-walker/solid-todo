import * as rdf from 'rdflib';
import * as auth from 'solid-auth-client';

import { sfc } from '../external/solid-file-client';

var fileClient = sfc(rdf, auth);

export const solid = {
  methods: {
    test() {
      console.log(rdf);
      console.log(auth);
      console.log(fileClient.popupLogin());
    }
  }
}