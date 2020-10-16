export type User = {
  uuid: number;
  username: string;
  email: string;
};

export enum CurrentStep {
  BusinessPartner,
  ServiceDetail,
  SubmitDocuments,
  Verification,
}
