import { SocialMediaType } from './SocialMediaType';

export interface SocialMediaWebsite {
    Id: number,
    Name: string
    Url: string,
    EmbeddingUrl: string,
    VideoIdPlaceholder: string,
    SocialMediaTypeIds: number[],
    CountryCodePlaceholder: string,
    PhoneNumberPlaceholder: string,
    IconClass: string,
    SvgIconId: string,
    IconImageName: string,
    SocialMediaTypes: SocialMediaType[]
}