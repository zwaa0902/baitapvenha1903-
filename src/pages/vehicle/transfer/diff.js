import Head from 'next/head';

import Layout from '@/components/Layout';

import TransferVehic from '@/containers/VehicleManagement/TransferingVehicle/OtherProvinces';

import { ContextProvider } from '@/contexts/Transfer';
const OtherProvinces = () => {
    return (
        <ContextProvider>
            <Head>
                <title>Transfer</title>
            </Head>
            <Layout>
                <TransferVehic />
            </Layout>
        </ContextProvider>
    );
};

export default OtherProvinces;
