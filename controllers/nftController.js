import fs from 'fs';

export class nftController {
  async getData() {
    const data = await fs.readFileSync("./models/nfts.json");
    return this.validadeData(data) ? await JSON.parse(data) : [];
  }

  async editNft(object) {
    const data = this.getData("./models/nfts.json");
    if (this.validadeData(data)) {
      let result = data.filter((n) => n.id == object.id);
      let index = data.indexOf(result);
      this.delete(result);
      this.registerNft(object);
    }
  }

  async registerNft(object) {
    if (object) {
      const data = await this.getData();
      object.id = await this.createId()
      data.push(object);
      return fs.writeFileSync("./models/nfts.json", JSON.stringify(data));
    }
  }

  async delete(object) {
    let result = data.filter((n) => n.name != object.name);
    if (result) {
      return fs.writeFileSync("./models/nfts.json", JSON.stringify(data));
    }
  }

  async validadeData(data) {
    return data.lenght > 0 ? true : false;
  }

  async createId(){
    let data = await this.getData()
    if(data.length > 0){
      return data.length+=1
    }
    return 1
  }

  async findNft(id){
    let data = await this.getData()
    let result = data.filter((n) => n.id == id)
    return result
  }
}
