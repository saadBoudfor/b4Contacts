/**
 * Created by sboudfor on 16/01/2019.
 */
export interface Contact {
  id?: string;
  displayName?: string;
  name?: {
    familyName: string;
    formatted: string;
    givenName: string;
  }
  nickname?: string;
  phoneNumbers?: string[];
  emails?: string[];
  addresses?: string;
  ims?: string;
  organizations?: string;
  birthday?: string;
  note?: string;
  photos?: string;
  categories?: string;
  urls?: string;
}
