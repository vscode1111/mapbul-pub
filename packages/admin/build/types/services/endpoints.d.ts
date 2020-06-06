import { TProcessType, IRequestFormData } from 'interfaces';
export declare const setApiUrlPrefix: (prefix: string) => void;
export declare const ENDPOINTS: {
    token: () => string;
    accounts: () => string;
    account: (id: string) => string;
    userInfo: () => string;
    logout: () => string;
    companies: () => string;
    registerCompany: () => string;
    registerCompanyIP: () => string;
    registerCompanySign: () => string;
    persons: (companyId: string) => string;
    person: (id: string) => string;
    businessRoles: () => string;
    companyTypes: () => string;
    requests: () => string;
    processes: () => string;
    processesDistinct: () => string;
    processesExport: () => string;
    proposals: () => string;
    dictRates: () => string;
    dictDelayReasons: () => string;
    discountRates: () => string;
    dictIssuers: () => string;
    call: (id: string) => string;
    rejectCall: (id: string) => string;
    acceptCall: (id: string) => string;
    acceptCallSign: (id: string) => string;
    rejectCallSign: (id: string) => string;
    calls: () => string;
    getFilesAsZip: (id: string, fileName: string) => string;
    getGuaranteeFilesAsZip: (id: string, fileName: string) => string;
    getGuaranteeFile: (id: string, fileName: string) => string;
    guarantee: (id: string) => string;
    claims: (id: string) => string;
    createAmountReduceCallSign: (id: string) => string;
    createAmountReduceCall: (id: string) => string;
    acceptAmountReduceCallSign: (guaranteeId: string, claimId: string) => string;
    approveAmountReduceCall: (guaranteeId: string, claimId: string) => string;
    rejectAmountReduceCallSign: (guaranteeId: string, claimId: string) => string;
    rejectAmountReduceCall: (guaranteeId: string, claimId: string) => string;
    paymentRequests: (id: string) => string;
    createPaymentRequestSign: (id: string) => string;
    createPaymentRequest: (id: string) => string;
    clarifyPaymentRequestFromPrincipal: (id: string, paymentRequestId: string) => string;
    acceptPaymentRequestSign: (id: string, paymentRequestId: string) => string;
    acceptPaymentRequest: (id: string, paymentRequestId: string) => string;
    rejectPaymentRequestSign: (id: string, paymentRequestId: string) => string;
    rejectPaymentRequest: (id: string, paymentRequestId: string) => string;
    acceptByPrincipalPaymentRequestSign: (id: string, paymentRequestId: string) => string;
    acceptByPrincipalPaymentRequest: (id: string, paymentRequestId: string) => string;
    rejectByPrincipalPaymentRequestSign: (id: string, paymentRequestId: string) => string;
    rejectByPrincipalPaymentRequest: (id: string, paymentRequestId: string) => string;
    requirementDoc: (guaranteeId: string, requirementId: string) => string;
    operationHistories: (id: string, processType: TProcessType) => string;
    aggregatedPayments: () => string;
    detailedPayments: () => string;
    transaction: (id: string) => string;
    transactions: (id: string) => string;
    offerTemplate: (id: string) => string;
    offerFile: (id: string) => string;
    offerZip: (id: string) => string;
    createCallSign: () => string;
    acceptGuaranteeByPrincipalSign: (id: string) => string;
    acceptGuaranteeByPrincipal: (id: string) => string;
    rejectGuaranteeByPrincipalSign: (id: string) => string;
    rejectGuaranteeByPrincipal: (id: string) => string;
    acceptGuaranteeByGuarantorSign: (id: string) => string;
    acceptGuaranteeByGuarantor: (id: string) => string;
    acceptProposalSign: (id: string) => string;
    rejectProposalSign: (id: string) => string;
    createClaimSign: (id: string) => string;
    startRequirementDelay: (guaranteeId: string, id: string) => string;
    startRequirementDelaySign: (guaranteeId: string, id: string) => string;
    endRequirementDelay: (guaranteeId: string, id: string) => string;
    request: (id: string, forBank?: boolean) => string;
    requestAction: (id: string, action: string) => string;
    companyByInnForBank: (inn: string) => string;
    hasActiveRequests: () => string;
    calculateLimit: ({ companyInn, personalCount, }: Pick<IRequestFormData, "companyInn" | "personalCount">) => string;
    statisticsGeneral: () => string;
    statisticsBank: () => string;
    processPendig: (id: string) => string;
    personalCountRisk: () => string;
};
