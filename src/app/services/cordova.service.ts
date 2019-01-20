import {Injectable} from '@angular/core';
import {Contact} from "../Models/Contact";
import {ContacthandlerService} from "./contacthandler.service";
import {BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class CordovaService {

  public searchString = new BehaviorSubject('');
  private DEViCE_READY_EVENT = 'deviceready';
  private _navigator = window.navigator;

  constructor(public contactHandler: ContacthandlerService) {
  }

  getContacts(onGetContacts: any) {
    if (environment.production) {
      console.log('contacts: ');
      console.log(this._navigator['contacts']);
      onGetContacts(this._navigator['contacts']);
      document.addEventListener(this.DEViCE_READY_EVENT, () => {
        console.log('device connect !! ');
        console.log(this._navigator['contacts']);
        onGetContacts(this._navigator['contacts']);
      }, false);
    } else {
      onGetContacts(this.mockContacts);
    }
  }

  private mockContacts: Array<Contact> = [
    {
      "_id": "5c3f8681833d8775b4a677f2",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Delia",
      "lastName": "Wright",
      "company": "BIOTICA",
      "email": "deliawright@biotica.com",
      "phone": "+6 (856) 509-2982"
    },
    {
      "_id": "5c3f86819927939034c4f959",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Sanders",
      "lastName": "Fletcher",
      "company": "REPETWIRE",
      "email": "sandersfletcher@repetwire.com",
      "phone": "+6 (983) 600-3399"
    },
    {
      "_id": "5c3f8681ff6b3e8041ec9e41",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Neal",
      "lastName": "Hall",
      "company": "LUXURIA",
      "email": "nealhall@luxuria.com",
      "phone": "+6 (907) 427-3473"
    },
    {
      "_id": "5c3f868193fada01e78a4636",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Nell",
      "lastName": "Jensen",
      "company": "PHEAST",
      "email": "nelljensen@pheast.com",
      "phone": "+6 (940) 472-2528"
    },
    {
      "_id": "5c3f868130585915968c86f2",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Tommie",
      "lastName": "Fuller",
      "company": "BIZMATIC",
      "email": "tommiefuller@bizmatic.com",
      "phone": "+6 (865) 523-3576"
    },
    {
      "_id": "5c3f8681796172588b4ed547",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Rosella",
      "lastName": "Lyons",
      "company": "GEEKNET",
      "email": "rosellalyons@geeknet.com",
      "phone": "+6 (836) 453-2687"
    },
    {
      "_id": "5c3f868150b86fb8d51ed2d9",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Spencer",
      "lastName": "Rowland",
      "company": "PYRAMAX",
      "email": "spencerrowland@pyramax.com",
      "phone": "+6 (943) 452-3015"
    },
    {
      "_id": "5c3f8681126a860a45067017",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Bertie",
      "lastName": "Mcdowell",
      "company": "GEEKWAGON",
      "email": "bertiemcdowell@geekwagon.com",
      "phone": "+6 (872) 476-2786"
    },
    {
      "_id": "5c3f8681c73397bf0211bb14",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Olsen",
      "lastName": "Mckinney",
      "company": "SENMAO",
      "email": "olsenmckinney@senmao.com",
      "phone": "+6 (827) 548-3682"
    },
    {
      "_id": "5c3f868101ba955ce525d807",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Buck",
      "lastName": "Hayden",
      "company": "ZOSIS",
      "email": "buckhayden@zosis.com",
      "phone": "+6 (985) 529-3780"
    },
    {
      "_id": "5c3f86817122fef64bb8f96a",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Moses",
      "lastName": "Hewitt",
      "company": "GEEKOLA",
      "email": "moseshewitt@geekola.com",
      "phone": "+6 (841) 508-2750"
    },
    {
      "_id": "5c3f86816f764403df7090ba",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Maryanne",
      "lastName": "Velasquez",
      "company": "GINK",
      "email": "maryannevelasquez@gink.com",
      "phone": "+6 (851) 516-3902"
    },
    {
      "_id": "5c3f86819e2e876c749251dc",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Koch",
      "lastName": "Gay",
      "company": "STEELFAB",
      "email": "kochgay@steelfab.com",
      "phone": "+6 (967) 495-3963"
    },
    {
      "_id": "5c3f86817f96245877b43b3e",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Lane",
      "lastName": "Glass",
      "company": "MEDIFAX",
      "email": "laneglass@medifax.com",
      "phone": "+6 (970) 403-3435"
    },
    {
      "_id": "5c3f8681d2009a109c3b7b8d",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Lillie",
      "lastName": "Barrera",
      "company": "DATAGENE",
      "email": "lilliebarrera@datagene.com",
      "phone": "+6 (960) 503-3387"
    },
    {
      "_id": "5c3f8681f24e4af83b4bd7bb",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Payne",
      "lastName": "Abbott",
      "company": "MAGNAFONE",
      "email": "payneabbott@magnafone.com",
      "phone": "+6 (824) 502-3264"
    },
    {
      "_id": "5c3f8681b81acbbf6ece2303",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Kristina",
      "lastName": "Shields",
      "company": "ESSENSIA",
      "email": "kristinashields@essensia.com",
      "phone": "+6 (848) 573-3863"
    },
    {
      "_id": "5c3f86810c825d5f0cee6d13",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Freeman",
      "lastName": "Justice",
      "company": "GINKLE",
      "email": "freemanjustice@ginkle.com",
      "phone": "+6 (934) 444-3994"
    },
    {
      "_id": "5c3f8681354e7c16e79dd660",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Santiago",
      "lastName": "Spence",
      "company": "XIIX",
      "email": "santiagospence@xiix.com",
      "phone": "+6 (957) 493-2300"
    },
    {
      "_id": "5c3f8681dca22d3730875f22",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Mclaughlin",
      "lastName": "Fuentes",
      "company": "INQUALA",
      "email": "mclaughlinfuentes@inquala.com",
      "phone": "+6 (989) 557-3252"
    },
    {
      "_id": "5c3f8681aa2782c7a86846ff",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Catherine",
      "lastName": "Beach",
      "company": "PORTICO",
      "email": "catherinebeach@portico.com",
      "phone": "+6 (827) 559-2911"
    },
    {
      "_id": "5c3f8681a4be03e09befdb0e",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Webb",
      "lastName": "Lott",
      "company": "GUSHKOOL",
      "email": "webblott@gushkool.com",
      "phone": "+6 (961) 449-2814"
    },
    {
      "_id": "5c3f86811847276336887c30",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Laurie",
      "lastName": "Gray",
      "company": "BRISTO",
      "email": "lauriegray@bristo.com",
      "phone": "+6 (862) 518-3290"
    },
    {
      "_id": "5c3f8681b8bec65a7a5505b5",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Brady",
      "lastName": "Guerrero",
      "company": "ULTRIMAX",
      "email": "bradyguerrero@ultrimax.com",
      "phone": "+6 (972) 520-3245"
    },
    {
      "_id": "5c3f86819c6c9c47e3eb24cd",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Avis",
      "lastName": "Sanders",
      "company": "DADABASE",
      "email": "avissanders@dadabase.com",
      "phone": "+6 (805) 534-3455"
    },
    {
      "_id": "5c3f8681efd05ea80b6f9740",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Winifred",
      "lastName": "Holloway",
      "company": "ZAPHIRE",
      "email": "winifredholloway@zaphire.com",
      "phone": "+6 (981) 573-2825"
    },
    {
      "_id": "5c3f8681052bde94b3dd9ab5",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Herrera",
      "lastName": "Sutton",
      "company": "PURIA",
      "email": "herrerasutton@puria.com",
      "phone": "+6 (975) 552-2410"
    },
    {
      "_id": "5c3f8681e360cbde326525c2",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Lidia",
      "lastName": "Stokes",
      "company": "ZILLACON",
      "email": "lidiastokes@zillacon.com",
      "phone": "+6 (856) 539-3092"
    },
    {
      "_id": "5c3f8681fe53e1ddac4294dd",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Brooks",
      "lastName": "Bryant",
      "company": "HOUSEDOWN",
      "email": "brooksbryant@housedown.com",
      "phone": "+6 (814) 407-2422"
    },
    {
      "_id": "5c3f8681617701d7fe76fccc",
      "avatar": "http://placehold.it/32x32",
      "firstName": "Carole",
      "lastName": "Bauer",
      "company": "INSURESYS",
      "email": "carolebauer@insuresys.com",
      "phone": "+6 (935) 566-3140"
    }
  ];
}
