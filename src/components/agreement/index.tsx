import { FC } from 'react';
import Agreement, { agreementProps } from './Agreement';
import AgreementItem, { baseProps as itemProps } from './AgreementItem';

export type IMenuComponent = FC<agreementProps> & {
    Item: FC<itemProps>;
};

const TransAgreement = Agreement as IMenuComponent;

TransAgreement.Item = AgreementItem;

export default TransAgreement;
