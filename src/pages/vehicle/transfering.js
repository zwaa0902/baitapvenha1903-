import Head from 'next/head';

import Layout from '@/components/Layout';

import Transfer from '@/containers/VehicleManagement/TransferingVehicle';

import { ContextProvider } from '@/contexts/Transfer/';

const MovingVehicle = () => {
    return (
        <ContextProvider>
            <Head>
                <title>Transfer</title>
            </Head>
            <Layout>
                <Transfer />
            </Layout>
        </ContextProvider>
    );
};

export default MovingVehicle;
