export class Artist {
    constructor(data) {
      this.key = data["@key"]; 
      this.name = data.name;
      // Inclua outros campos conforme o schema do artista,
      // substituindo '@campo' por campo normal
    }
  }
  