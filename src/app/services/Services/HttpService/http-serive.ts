import { environment } from 'src/environments/environment'

export class HttpService {

  public linkServer : string = environment.linkServer;

  constructor() { }
  
}