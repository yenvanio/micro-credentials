export interface Badge {
    date: any,
    file: string,
    instructor: string,
    platform: string,
    status: {
        verified: {
            code: number,
            endorsements: number,
            status: string
        }
    }
    title: string,
    url: string,
    uid: string,
}