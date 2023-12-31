import { SimplePool, Event } from "nostr-tools";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import "./App.css";
import CreateNote from "./components/CreateNote";
import HashtagsFilter from "./components/HashtagsFilter";
import NotesList from "./components/NotesList";
import { insertEventIntoDescendingList } from "./utils/helperFunctions";
import Basictest from "./components/Tester";

export const RELAYS = [
  "wss://nostr-pub.wellorder.net",
  "wss://nostr.drss.io",
  "wss://nostr.swiss-enigma.ch",
  "wss://relay.damus.io",
];

export interface Metadata {
  name?: string;
  about?: string;
  picture?: string;
  nip05?: string;
}

function App() {
  const [pool, setPool] = useState<SimplePool | null>(null);

  const [eventsImmediate, setEvents] = useState<Event[]>([]);

  const [events] = useDebounce(eventsImmediate, 1500);

  const [metadata, setMetadata] = useState<Record<string, Metadata>>({});

  const metadataFetched = useRef<Record<string, boolean>>({});

  const [hashtags, setHashtags] = useState<string[]>([]);

  // setup a relays pool

  useEffect(() => {
    const _pool = new SimplePool();
    setPool(_pool);

    return () => {
      _pool.close(RELAYS);
    };
  }, []);

  // subscribe to some events
  useEffect(() => {
    if (!pool) return;

    setEvents([]);
    const sub = pool.sub(RELAYS, [
      {
        kinds: [1],
        limit: 100,
        "#t": hashtags,
      },
    ]);

    sub.on("event", (event: Event) => {
      setEvents((events) => insertEventIntoDescendingList(events, event));
    });

    return () => {
      sub.unsub();
    };
  }, [hashtags, pool]);

  useEffect(() => {
    if (!pool) return;

    const pubkeysToFetch = events
      .filter((event) => metadataFetched.current[event.pubkey] !== true)
      .map((event) => event.pubkey);

    pubkeysToFetch.forEach(
      (pubkey) => (metadataFetched.current[pubkey] = true)
    );

    const sub = pool.sub(RELAYS, [
      {
        kinds: [0],
        authors: pubkeysToFetch,
      },
    ]);

    sub.on("event", (event: Event) => {
      const metadata = JSON.parse(event.content) as Metadata;

      setMetadata((cur) => ({
        ...cur,
        [event.pubkey]: metadata,
      }));
    });

    sub.on("eose", () => {
      sub.unsub();
    });

    return () => {};
  }, [events, pool]);

  if (!pool) return null;

  return (
    <div className="app">
      <div className="flex flex-col gap-16">
        <h1 className="text-h1">Nostr Feed</h1>
        <CreateNote pool={pool} hashtags={hashtags} />
        <HashtagsFilter hashtags={hashtags} onChange={setHashtags} />
        <NotesList metadata={metadata} notes={events} />
      </div>
    </div>
  );
}

export default App;
