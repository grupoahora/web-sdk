export interface ProjectFlow {
    _id: string;
    client: any;
    project: any;
    userFeatures: Array < any > ;
    type: string;
    status: string;
    version: string;
    redirectUrl ? : string;
    webhookUrl ? : string;
    identityUrl ? : string;
    allowedCountries: Array < any > ;
    email: boolean;
    emailAuthy: boolean;
    phone: boolean;
    phoneAuthy: boolean;
    phoneGateway ? : string;
    faceLiveness: boolean;
    faceLivenessAuthy: boolean;
    webAuthN: boolean;
    documentValidation: boolean;
    appQRCode: boolean;
    usesWhiteList: boolean;
    loginSettings ? : {
        steps ? : any;
    };
    onboardingSettings ? : {
        countriesAllowed ? : Array < any > ;
        basicInformation ? : {
            fullName ? : boolean;
            age ? : boolean;
            gender ? : boolean;
            address ? : boolean;
            postalCode ? : boolean;
            dateOfBirth ?: boolean;
            legalDocument ?: boolean;
        },
        documentValidation: {
            includeOCR ? : boolean;
            useBasicLiveness ? : boolean;
            useProLiveness ? : boolean;
            includeGovernmentVerification ? : boolean;
            useGovermentID ? : boolean;
            usePassport ? : boolean;
            useLicense ? : boolean;
            verifyNames ? : boolean;
            verifyCriminalHistory ? : boolean;
        },
        form ? : any;
        requiresSignature ? : boolean;
    };
}

export interface Project {
    _id: string;
    client: any;
    type: string;
    name: string;
    identifier ? : string;
    contactEmail ? : string;
    privacyUrl ? : string;
    termsAndConditionsUrl ? : string;
    status: string;
    dataProtection ? : {
        name ? : string;
        email ? : string;
        address ? : string;
        address2 ? : string;
        city ? : string;
        province ? : string;
        postalCode ? : string;
        country ? : string;
    };
    branding ? : {
        bgColor ? : string;
        borderColor ? : string;
        txtColor ? : string;
        titleColor ? : string;
        logo ? : string;
    };

    allowedCountries ? : Array < string > ;
    emailEnabled ? : boolean;
    phoneEnabled ? : boolean;
    emailAuthyEnabled ? : boolean;
    phoneAuthyEnabled ? : boolean;
    faceLivenessEnabled: boolean;
    faceLivenessAuthyEnabled: boolean;
    currentProjectFlow ? : any;
    usesWhiteList: boolean;
    whiteListLength: number;
    currentStep: number;
    lastStep: number;
}
export interface Whitelist {
    name: string;
    email ? : string;
    phone ? : number;
    countryCode ? : number;
}

export interface AppLogin {
    _id: string;
    data: string;
    status: any;
    type: any;
    date: any;
}

export interface ProjectFlowForm {
    _id: string;
    project: string;
    projectFlow: string;
    client: string;
    title: string;
    formFields ? : ProjectFlowFormField[];
    version: string;
}

export interface ProjectFlowFormField {
    _id: string;
    client: string;
    staff: string;
    form: string;
    container: string;
    label: string;
    type: string;
    charactersLimit: number;
    placeHolder: string;
}

export class AppLoginModel implements AppLogin {
    _id: string;
    data: string;
    status: any;
    type: any;
    date: any;
    constructor(data: any = {}) {
        this._id = data._id;
        this.data = data.phoneValidation ? data.phoneValidation.phone : data.emailValidation ? data.emailValidation.email : data.biometricValidation;
        this.status = data.phoneValidation ? data.phoneValidation.status : data.emailValidation ? data.emailValidation.status : data.biometricValidation.status;
        this.type = data.type;
        this.date = data.updatedAt;
    }
}
export class WhitelistModel implements Whitelist {
    name: string;
    email ? : string;
    phone ? : number;
    countryCode ? : number;

    constructor(data: any = {}) {
        this.name = data.name || null;
        this.email = data.email || null;
        this.phone = data.phone || null;
        this.countryCode = data.countryCode || null;
    }
}
export class ProjectModel implements Project {
    _id: string;
    client: any;
    type: string;
    name: string;
    identifier ? : string;
    contactEmail ? : string;
    privacyUrl ? : string;
    termsAndConditionsUrl ? : string;
    status: string;
    dataProtection ? : {
        name ? : string;
        email ? : string;
        address ? : string;
        address2 ? : string;
        city ? : string;
        province ? : string;
        postalCode ? : string;
        country ? : string;
    };
    branding ? : {
        bgColor ? : string;borderColor ? : string;txtColor ? : string;titleColor ? : string;logo ? : string;
    };
    projectFlows ? : ProjectFlowModel[];
    allowedCountries ? : Array < string > ;
    emailEnabled ? : boolean;
    phoneEnabled ? : boolean;
    emailAuthyEnabled ? : boolean;
    phoneAuthyEnabled ? : boolean;
    currentProjectFlow ? : ProjectFlowModel;
    whiteList ? : any;
    faceLivenessEnabled: boolean;
    faceLivenessAuthyEnabled: boolean;
    usesWhiteList: boolean;
    whiteListLength: number;
    currentStep: number;
    lastStep: number;

    constructor(data: any = {}) {
        this._id = data._id || 'new';
        this.client = data.client;
        this.type = data.type;
        this.name = data.name;
        this.identifier = data.identifier;
        this.contactEmail = data.contactEmail;
        this.privacyUrl = data.privacyUrl;
        this.termsAndConditionsUrl = data.termsAndConditionsUrl;
        this.status = data.status;
        this.dataProtection = data.dataProtection || {
            name: '',
        };
        this.branding = data.branding || {
            bgColor: '#01236D',
            borderColor: '#B2BDD3',
            txtColor: '#8091B6',
            titleColor: '#FFFFFF',
            logo: '',
        }; // add default branding stuff
        this.projectFlows = data.projectFlows;
        this.allowedCountries = data.allowedCountries || [];
        this.emailEnabled = false;
        this.phoneEnabled = false;
        this.emailAuthyEnabled = false;
        this.phoneAuthyEnabled = false;
        this.faceLivenessEnabled = false;
        this.faceLivenessAuthyEnabled = false;
        this.usesWhiteList = false;
        // this.whiteList = {docs: [], total: 0 , limit:20 , page:1, pages: 0}
        this.whiteListLength = 0;
        this.currentStep = data.currentStep;
        this.lastStep = data.lastStep;

        if (Array.isArray(data.projectFlows) && data.projectFlows.length) {
            for (let index = 0; index < this.projectFlows.length; index++) {
                const projectFlow = this.projectFlows[index];

                if (projectFlow.status === 'active' && projectFlow.type === this.type) {
                    this.currentProjectFlow = new ProjectFlowModel(projectFlow);

                    break;
                }

                if (projectFlow.type === this.type) {
                    this.currentProjectFlow = new ProjectFlowModel(projectFlow);
                }
            }
        }

        if (!this.currentProjectFlow) {
            this.currentProjectFlow = new ProjectFlowModel({
                type: this.type,
            });
        }

        if (this.currentProjectFlow.email) this.emailEnabled = true;

        if (this.currentProjectFlow.phone) this.phoneEnabled = true;

        if (this.currentProjectFlow.faceLiveness) this.faceLivenessEnabled = true;

        if (this.currentProjectFlow.phoneAuthy) this.phoneAuthyEnabled = true;

        if (this.currentProjectFlow.emailAuthy) this.emailAuthyEnabled = true;

        if (this.currentProjectFlow.faceLivenessAuthy) this.faceLivenessAuthyEnabled = true;

        if (this.currentProjectFlow.usesWhiteList) this.usesWhiteList = true;

        if (this.currentProjectFlow['whiteList']) this.whiteListLength = this.currentProjectFlow['whiteList'].total;
    }
}

export class ProjectFlowModel implements ProjectFlow {
    _id: string;
    client: any;
    project: any;
    userFeatures: any[];
    type: string;
    status: string;
    version: string;
    redirectUrl ? : string;
    webhookUrl ? : string;
    identityUrl ? : string;
    allowedCountries: any[];
    email: boolean;
    emailAuthy: boolean;
    phone: boolean;
    phoneAuthy: boolean;
    phoneGateway ? : string;
    faceLiveness: boolean;
    faceLivenessAuthy: boolean;
    webAuthN: boolean;
    documentValidation: boolean;
    appQRCode: boolean;
    whiteList: any;
    usesWhiteList: boolean;
    loginSettings ? : {
        steps ? : any;
    };
    onboardingSettings ? : {
        countriesAllowed ? : any[];
        basicInformation ? : {
            fullName ? : boolean;
            age ? : boolean;
            gender ? : boolean;
            address ? : boolean;
            postalCode ? : boolean;
            dateOfBirth ?: boolean;
            legalDocument ?: boolean;
        };
        documentValidation: {
            includeOCR ? : boolean;
            useBasicLiveness ? : boolean;
            useProLiveness ? : boolean;
            includeGovernmentVerification ? : boolean;
            useGovermentID ? : boolean;
            usePassport ? : boolean;
            useLicense ? : boolean;
            verifyNames ? : boolean;
            verifyCriminalHistory ? : boolean;

        },
        form ? : any;
        requiresSignature ? : boolean;
    };

    constructor(data: any = {}) {
        this._id = data._id;
        this.client = data.client;
        this.project = data.project;
        this.userFeatures = data.userFeatures;
        this.type = data.type;
        this.status = data.status;
        this.version = data.version;
        this.redirectUrl = data.redirectUrl;
        this.webhookUrl = data.webhookUrl;
        this.identityUrl = data.identityUrl;
        this.allowedCountries = data.allowedCountries || [];
        this.email = data.email;
        this.emailAuthy = data.emailAuthy;
        this.phone = data.phone;
        this.phoneAuthy = data.phoneAuthy;
        this.phoneGateway = data.phoneGateway;
        this.faceLiveness = data.faceLiveness;
        this.faceLivenessAuthy = data.faceLivenessAuthy;
        this.webAuthN = data.webAuthN;
        this.documentValidation = data.documentValidation;
        this.appQRCode = data.appQRCode;
        this.loginSettings = data.loginSettings;
        this.onboardingSettings = data.onboardingSettings || {
            basicInformation: {
                fullName: false,
                age: false,
                gender: false,
                address: false,
                postalCode: false,
            },
        };

        if (this.onboardingSettings && !this.onboardingSettings.basicInformation) {
            this.onboardingSettings.basicInformation = {
                fullName: false,
                age: false,
                gender: false,
                address: false,
                postalCode: false,
            };
        }

        this.usesWhiteList = Boolean(data.usesWhiteList);
        this.whiteList = data.whiteList || {}

    }
}

export class ProjectFlowFormFieldModel implements ProjectFlowFormField {
    _id: string;
    client: string;
    staff: string;
    form: string;
    label: string;
    container: string;
    type: string;
    charactersLimit: number;
    placeHolder: string;

    constructor(data: any = {}) {
        this._id = data._id || (Math.random() + 1).toString(36).substring(5);
        this.client = data.client;
        this.staff = data.staff;
        this.form = data.form;
        this.label = data.label;
        this.container = data.container;
        this.type = data.type;
        this.charactersLimit = data.charactersLimit;
        this.placeHolder = data.placeHolder;
    }
}

export class ProjectFlowFormModel implements ProjectFlowForm {
    _id: string;
    project: string;
    projectFlow: string;
    client: string;
    title: string;
    formFields ? : ProjectFlowFormField[];
    version: string;

    constructor(data: any = {}) {
        this._id = data._id;
        this.client = data.client;
        this.project = data.project;
        this.projectFlow = data.projectFlow;
        this.title = data.title;
        this.version = data.version;
        this.formFields = [];

        if (data.formFields) {
            for (let index = 0; index < data.formFields.length; index++) {
                const formField = data.formFields[index];

                if (!formField._id) {
                    continue;
                }

                this.formFields.push(new ProjectFlowFormFieldModel(formField));
            }
        }
    }
}
export interface AppRegistration {
    _id: string;
    client: string;
    project: any;
    projectFlow: any;
    status: string;
    email: string;
    phone: string;
    countryCode: string;
    currentStep: string;
    MATiD: any;
    informationValidation: any;
    emailValidation: any;
    phoneValidation: any;
    biometricValidation: any;
    documentValidation: any;
    cryptoValidation: any;
    formSubmittion: any;
    signature: any;
}

export interface InformationValidation {
    _id: string;
    age: string;
    appRegistration: string;
    client: string;
    city: string;
    dateOfBirth: string;
    documentType: string;
    documentNumber: string;
    firstName: string;
    name ?: string;
    project: string;
    projectFlow: string;
    status: string;
    validationMethod: string;
    lastName: string;
    gender: string;
    country: string;
    address: string;
    postalCode: string;
    type: string;
    extraParams: any;
    notes: string;
}

export class InformationValidationModel implements InformationValidation {
    _id: string;
    client: string;
    project: string;
    projectFlow: string;
    appRegistration: string;
    status: string;
    validationMethod: string;
    name ?: string;
    firstName: string;
    lastName: string;
    age: string;
    dateOfBirth: string;
    gender: string;
    country: string;
    city: string;
    address: string;
    postalCode: string;
    type: string;
    extraParams: any;
    notes: string;
    documentType: string;
    documentNumber: string;

    constructor(data: any = {}) {
        this._id = data._id;
        this.client = data.client;
        this.project = data.project;
        this.projectFlow = data.projectFlow;
        this.appRegistration = data.appRegistration;
        this.status = data.status;
        this.validationMethod = data.validationMethod;
        this.name = data.name;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.age = data.age;
        this.dateOfBirth = data.dateOfBirth;
        this.gender = data.gender;
        this.country = data.country;
        this.city = data.city;
        this.address = data.address;
        this.postalCode = data.postalCode;
        this.type = data.type;
        this.extraParams = data.extraParams;
        this.notes = data.notes;
        this.documentType = data.documentType;
        this.documentNumber = data.documentNumber;
    }
    
}


export class AppRegistrationModel implements AppRegistration {
    _id: string;
    client: string;
    project: any;
    projectFlow: any;
    status: string;
    email: string;
    phone: string;
    countryCode: string;
    currentStep: string;
    MATiD: any;
    informationValidation: InformationValidation|null;
    InformationValidation: InformationValidation;
    emailValidation: any;
    phoneValidation: any;
    biometricValidation: any;
    documentValidation: any;
    cryptoValidation: any;
    formSubmittion: any;
    signature: any;

    constructor(data: any) {
        this._id = data._id;
        this.client = data.client;
        this.project = data.project;
        this.projectFlow = data.projectFlow;
        this.status = data.status;
        this.email = data.email;
        this.phone = data.phone;
        this.countryCode = data.countryCode;
        this.currentStep = data.currentStep;
        this.MATiD = data.MATiD;
        this.informationValidation = data.informationValidation;
        this.InformationValidation = data.informationValidation && data.informationValidation._id ? new InformationValidationModel(data.informationValidation) : null;
        this.emailValidation = data.emailValidation;
        this.phoneValidation = data.phoneValidation;
        this.documentValidation = data.documentValidation;
        this.biometricValidation = data.biometricValidation;
        this.cryptoValidation = data.cryptoValidation;
        this.formSubmittion = data.formSubmittion;
        this.signature = data.signature;


    }
}