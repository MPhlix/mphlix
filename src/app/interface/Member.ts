export interface Member {
    name: string,
    position: string
    socialMediaProfiles: SocialMediaProfile[],
    cssClass: {
        mahashwetaMohapatra: boolean
    }
}

export interface SocialMediaProfile {
    name: string,
    profileId: string,
    cssClass: string
}