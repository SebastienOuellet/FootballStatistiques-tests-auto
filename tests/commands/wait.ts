export async function wait (milisecondes: number) {
    await new Promise(resolve => setTimeout(resolve, milisecondes));
  }
  