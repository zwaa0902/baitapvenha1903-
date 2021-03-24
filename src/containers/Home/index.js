import Link from 'next/link';

import { Card, Title, GridCustom, Wrapper } from './styles';

const Home = () => {
    return (
        <Wrapper>
            <Title>HỆ THỐNG ĐĂNG KÝ XE Ô TÔ VÀ MÔ TÔ</Title>
            <GridCustom>
                <Card>
                    <Link href="/vehicle/transfering">Đăng ký di chuyển</Link>
                </Card>

                <Card>
                    <Link href="/user/login">Đăng nhập</Link>
                </Card>
            </GridCustom>
        </Wrapper>
    );
};

export default Home;
