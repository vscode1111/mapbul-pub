import { IProcess } from 'interfaces';
export declare class Process implements IProcess {
    static New(init: IProcess): Promise<Process>;
    id: IProcess['id'];
    type: IProcess['type'];
    typeName: IProcess['typeName'];
    status: IProcess['status'];
    created: IProcess['created'];
    daysLeft: IProcess['daysLeft'];
    modified: IProcess['modified'];
    issuerName: IProcess['issuerName'];
    partnerName: IProcess['partnerName'];
    processId: IProcess['processId'];
    claimId: IProcess['claimId'];
    loanNumber: IProcess['loanNumber'];
    oldCommitmentNumb: IProcess['oldCommitmentNumb'];
    amount: IProcess['amount'];
    acceptedAmount: IProcess['acceptedAmount'];
    fee: IProcess['fee'];
    effectiveAmount: IProcess['effectiveAmount'];
    rate: IProcess['rate'];
    discountValue: IProcess['discountValue'];
    specialDiscount: IProcess['specialDiscount'];
    term: IProcess['term'];
    maturityDate: IProcess['maturityDate'];
    relevanceDate: IProcess['relevanceDate'];
    lastUnsuccessfulTxStatus?: IProcess['lastUnsuccessfulTxStatus'];
    lastUnsuccessfulTxId?: IProcess['lastUnsuccessfulTxId'];
    bankId: IProcess['bankId'];
    number: IProcess['number'];
    companyName: IProcess['companyName'];
    companyInn: IProcess['companyInn'];
    bankInnSearch: IProcess['bankInnSearch'];
    fnsStatus: IProcess['fnsStatus'];
    regulatorStatus: IProcess['regulatorStatus'];
    pending: IProcess['pending'];
    source: IProcess['source'];
    operatorCompanyName: IProcess['operatorCompanyName'];
    limitPayout: IProcess['limitPayout'];
    multyPayout: IProcess['multyPayout'];
    okato: IProcess['okato'];
    riskPersonal: IProcess['riskPersonal'];
    riskBankruptcy: IProcess['riskBankruptcy'];
    riskFinishWork: IProcess['riskFinishWork'];
    riskPayoutMoney: IProcess['riskPayoutMoney'];
    constructor(init: IProcess);
}
