export enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
    TooManyRequests = 429,
    InternalServerError = 500,
    BadGateway = 502,
    ServerUnavailable = 503,
}
export enum UserTypes {
    None = 'None',
    Employee = 'Employee',
    Student = 'K12Student',
    Parent = 'ParentGuardian',
}

export enum Gender {
    male = 1,
    female = 2,
}

export enum MaritalStatus {
    single = 1,
    married = 2,
}

export enum VerificationType {
    email = 1,
    mobile = 2,
}

export enum IdentityProvider {
    None = 0,
    Local = 1,
    IAM = 2,
}

export enum Roles {
    Anonymous = 0,
    User = 1,
    Admin = 2,
}

export enum SupportStatusProcess {
    New = 1,
    InProgress = 2,
    Closed = 3,
    Resolved = 6,
    Cancelled = 7,
    OnHold = 13,
}

export enum ArabicMonth {
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'اكتوبر',
    'نوفمبر',
    'ديسمبر',
}

export enum DateFormat {
    ArShort = 'DD MMMM YYYY',
    EnShort = 'MMM DD, YYYY',
}
