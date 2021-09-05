export class PhotoDefinition {
  public url: string;
  public id: string;

  constructor(url: string, id: string) {
    this.url = url;
    this.id = id;
  }
}

export class Owner {
  public username: string;
  public realname: string;
  public location: string;

  constructor(username: string, realname: string, location: string) {
    this.username = username;
    this.realname = realname;
    this.location = location;
  }
}

export class PhotoInformation {
  public title: string;
  public description: string;
  public url: string;
  public owner: Owner;

  constructor(title: string, description: string, url: string, owner: Owner) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.owner = owner;
  }
}