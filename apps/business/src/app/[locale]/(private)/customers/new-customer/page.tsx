import { LoyaltyCard, LoyaltyHeaderPage } from '@customer-loyalty-nx/ui';
import { Text } from '@mantine/core';
import CustomerForm from '../_components/CustomerForm';
export default function NewCustomerPage() {
  return (
    <div>
      <LoyaltyHeaderPage title="New Customer" returnPage />
      <LoyaltyCard className="flex flex-row">
        <Text size="md" fw={900} className="basis-1/2">
          Customer Information
        </Text>

        <CustomerForm />
      </LoyaltyCard>
    </div>
  );
}
