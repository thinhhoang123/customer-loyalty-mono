import { LoyaltyHeaderPage, LoyaltyTable } from '@customer-loyalty-nx/ui';
import { Button } from '@mantine/core';
import { IconFileImport, IconPlus } from '@tabler/icons-react';
import getListCustomer from 'apps/business/src/faker/customers/listCustomer';
import ICustomers from 'apps/business/src/models/ICustomers';
import { getTranslations } from 'next-intl/server';
import CustomerTable from './_components/CustomerTable';

export default async function CustomersPage() {
  const t = await getTranslations('CUSTOMERS');
  const customerList: ICustomers[] = await getListCustomer();

  return (
    <section>
      <LoyaltyHeaderPage
        title={t('TITLE')}
        actions={
          <>
            <Button
              variant="default"
              leftSection={<IconFileImport size={14} />}
            >
              {t('IMPORT')}
            </Button>
            <Button leftSection={<IconPlus size={14} />}>{t('ADD')}</Button>
          </>
        }
      />
      <CustomerTable customerList={customerList} />
    </section>
  );
}
