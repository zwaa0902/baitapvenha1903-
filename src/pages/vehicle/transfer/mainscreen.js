import Head from 'next/head';

import Layout from '@/components/Layout';

import Main from '@/containers/VehicleManagement/TransferingVehicle/OtherProvinces/MainScreen';

import { ContextProvider } from '@/contexts/Transfer';
const MainScrOtherProvinces = () => {
    return (
        <ContextProvider>
            <Head>
                <title>Main Screen Transfer To Other Province</title>
            </Head>
            <Layout>
                <Main />
            </Layout>
        </ContextProvider>
    );
};

export default MainScrOtherProvinces;
