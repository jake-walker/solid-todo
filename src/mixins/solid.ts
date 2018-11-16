import * as rdf from 'rdflib';
import * as auth from 'solid-auth-client';

import { sfc } from '../external/solid-file-client';

var fileClient = sfc(rdf, auth);

export const solid = {
  data: () => ({
    session: null,
  }),
  methods: {
    test() {
      console.log(rdf);
      console.log(auth);
      console.log(fileClient);
    },
    login() {
      fileClient.popupLogin().then(webId => {
        if (!webId) {
          console.error("ERROR!");
          return;
        }

        console.log("Logged in!");
      });
    }
  }
}

auth.trackSession(async function(session) {
  console.log("Session", session);
  /*log("info", "solid>auth>trackSession", "Session updated", (session));

  if (session) {
    let store = $rdf.graph();
    let fetcher = new $rdf.Fetcher(store);

    await fetcher.load(session.webId);

    app.store = store;
    app.fetcher = fetcher;
  }

  app.session = session;

  app.load();*/
});
