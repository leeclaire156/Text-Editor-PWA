import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Accepts content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log('PUT to the database');

    // Create a connection to the jate database and version we want to use.
    const jateDb = await openDB('jate', 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction('jate', 'readwrite');

    // Open up the desired object store
    const store = tx.objectStore('jate');

    // Use the .put() method to put data in
    const request = store.put({ todo: content });

    // Get confirmation of the request.
    const result = await request;
    console.log('Data saved to the database', result);
  } catch {
    console.error('putDb not implemented');
  }
}

// Gets all the content from the database
export const getDb = async () => {
  try {
    console.log('GET all from the database');

    // Create a connection to the jate database and version we want to use.
    const jateDb = await openDB('jate', 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction('jate', 'readonly');

    // Open up the desired object store.
    const store = tx.objectStore('jate');

    // Use the .getAll() method to get ALL data in the database.
    const request = store.getAll();

    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result;
  } catch {
    console.error('getDb not implemented');
  }
}

initdb();
