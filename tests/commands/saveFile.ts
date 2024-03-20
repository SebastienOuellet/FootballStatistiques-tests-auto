import {writeFile} from 'fs';

export async function saveFile(filename: string, content: string): Promise<any> {
  return new Promise(resolve => {
    writeFile(filename, content, err => {
      if (err) {
        console.error(err);
        throw new Error('Impossible de créer le fichier');
      }

      // fichier écrit avec succès
      resolve({success: true});
    });
  });
}
